"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import './dashboard.css';

const Editor = dynamic(() => import('@/components/Editor'), { ssr: false });

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState({ blogs: [], faqs: [], stories: [] });
  const router = useRouter();

  // 1. Ab direct stats fetch karenge, kyunki authentication Middleware handle kar raha hai
  const fetchStats = async () => {
    try {
      const res = await fetch('/api/all-data');
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      }
    } catch (err) { console.error("Stats Error:", err); }
  };

  useEffect(() => { 
    fetchStats(); 
  }, []);

  // 2. Cookie ko clear karne ke liye Logout handler
  const handleLogout = async () => {
    try {
      const res = await fetch('/api/admin/logout', { method: 'POST' });
      if (res.ok) {
        router.push('/admin/login');
      }
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Krishna IVF</h2>
        <nav>
          <p onClick={() => setActiveTab('dashboard')} className={activeTab === 'dashboard' ? 'active' : ''}>📊 Dashboard</p>
          <p onClick={() => setActiveTab('blogs')} className={activeTab === 'blogs' ? 'active' : ''}>📝 Manage Blogs</p>
          <p onClick={() => setActiveTab('faqs')} className={activeTab === 'faqs' ? 'active' : ''}>❓ Manage FAQs</p>
          <p onClick={() => setActiveTab('stories')} className={activeTab === 'stories' ? 'active' : ''}>❤️ Success Stories</p>
          {/* Logout Button updated */}
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </nav>
      </aside>
      <main className="main-content">
        {activeTab === 'dashboard' ? (
          <div className="stats-grid">
            <div className="card"><h3>Blogs</h3><p>{stats.blogs?.length || 0}</p></div>
            <div className="card"><h3>FAQs</h3><p>{stats.faqs?.length || 0}</p></div>
            <div className="card"><h3>Stories</h3><p>{stats.stories?.length || 0}</p></div>
          </div>
        ) : (
          <ContentManager type={activeTab === 'stories' ? 'success_stories' : activeTab} refreshStats={fetchStats} />
        )}
      </main>
    </div>
  );
}

function ContentManager({ type, refreshStats }) {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [file, setFile] = useState(null);
  const [editSlug, setEditSlug] = useState(null);
  const [loading, setLoading] = useState(false);

  // States for SEO, AEO, and GEO
  const [targetKeyword, setTargetKeyword] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [directAnswer, setDirectAnswer] = useState('');
  const [targetQuestion, setTargetQuestion] = useState('');
  const [coreEntities, setCoreEntities] = useState('');
  const [citations, setCitations] = useState('');

  const loadData = async () => {
    try {
      const res = await fetch(`/api/${type}`);
      if (res.ok) {
        const data = await res.json();
        console.log(`Fetched Data for ${type}:`, data);
        setItems(Array.isArray(data) ? data : []);
      }
    } catch (err) { 
      console.error("Load Data Error:", err); 
    }
  };

  useEffect(() => { 
    loadData(); 
  }, [type]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    loading.true;
    setLoading(true);
    try {
      let finalFileUrl = "";
      if (file) {
        const fd = new FormData();
        fd.append('image', file);
        const res = await fetch('/api/upload', { method: 'POST', body: fd });
        const data = await res.json();
        finalFileUrl = data.filename;
      }

      const payload = {
        title,
        slug: editSlug || title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
        content,
        targetKeyword,
        metaDescription,
        directAnswer,
        targetQuestion,
        coreEntities,
        citations,
        ...(type === 'success_stories' && { author })
      };

      if (finalFileUrl) payload.fileUrl = finalFileUrl;

      const res = await fetch(editSlug ? `/api/${type}/${editSlug}` : `/api/${type}`, {
        method: editSlug ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        alert("Operation Successful!");
        setEditSlug(null); setTitle(''); setContent(''); setAuthor(''); setFile(null);
        setTargetKeyword(''); setMetaDescription(''); setDirectAnswer(''); 
        setTargetQuestion(''); setCoreEntities(''); setCitations('');
        loadData();
        if (refreshStats) refreshStats();
      }
    } catch (err) { 
      alert("Failed to save data"); 
    } finally { 
      setLoading(false); 
    }
  };

  const handleDelete = async (slugOrId) => {
    if (!window.confirm("DO YOU WANT TO DELETE THIS ITEM?")) return;
    try {
      const res = await fetch(`/api/${type}/${slugOrId}`, { method: 'DELETE' });
      if (res.ok) {
        alert("Item deleted successfully!");
        loadData();
        if (refreshStats) refreshStats();
      }
    } catch (err) { 
      console.error("Delete Error:", err); 
    }
  };

  return (
    <div className="data-section">
      <h3 style={{ marginBottom: '20px' }}>Manage {type.replace('_', ' ').toUpperCase()}</h3>
      
      <form onSubmit={handleSubmit} className="form-grid">
        <div className="admin-form">
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title" required />
          {type === 'success_stories' && <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author Name" />}
          <Editor value={content} onChange={setContent} />
          <input type="file" onChange={(e) => setFile(e.target.files[0])} style={{ marginTop: '10px' }} />
          <button type="submit" disabled={loading} style={{ marginTop: '20px', width: '100%', padding: '12px', background: '#3b82f6', color: 'white', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Processing...' : (editSlug ? 'Update Post' : 'Publish Post')}
          </button>
        </div>

        <div className="seo-sidebar">
          <div className="card">
            <h4>SEO Settings</h4>
            <input value={targetKeyword} onChange={(e) => setTargetKeyword(e.target.value)} placeholder="Target Keyword" />
            <textarea value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} placeholder="Meta Description" />
          </div>
          <div className="card">
            <h4>Answer Engine (AEO)</h4>
            <textarea value={directAnswer} onChange={(e) => setDirectAnswer(e.target.value)} placeholder="Concise snippet (40-50 words)..." />
            <input value={targetQuestion} onChange={(e) => setTargetQuestion(e.target.value)} placeholder="Target Question" />
          </div>
          <div className="card">
            <h4>Generative Engine (GEO)</h4>
            <input value={coreEntities} onChange={(e) => setCoreEntities(e.target.value)} placeholder="Entities (Comma separated)" />
            <textarea value={citations} onChange={(e) => setCitations(e.target.value)} placeholder="Sources / Citations" />
          </div>
        </div>
      </form>

      <div className="items-list">
        {items && items.length > 0 ? (
          items.map((item) => (
            <div key={item._id || item.slug} className="card" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', marginBottom: '10px' }}>
              {item.fileUrl && (
                <img 
                  src={item.fileUrl.startsWith('http') ? item.fileUrl : `/uploads/${item.fileUrl}`} 
                  alt={item.title} 
                  style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }} 
                />
              )}
              
              <span style={{ flexGrow: 1, fontWeight: '600' }}>{item.title}</span>
              
              <div className="admin-actions" style={{ display: 'flex', gap: '10px' }}>
                <button 
                  className="btn-edit" 
                  style={{ padding: '8px 16px', background: '#20b2aa', color: 'white', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
                  onClick={() => {
                    setEditSlug(item.slug || item._id);
                    setTitle(item.title || '');
                    setContent(item.content || '');
                    setAuthor(item.author || '');
                    setTargetKeyword(item.targetKeyword || '');
                    setMetaDescription(item.metaDescription || '');
                    setDirectAnswer(item.directAnswer || '');
                    setTargetQuestion(item.targetQuestion || '');
                    setCoreEntities(item.coreEntities || '');
                    setCitations(item.citations || '');
                    window.scrollTo(0, 0);
                  }}
                >
                  Edit
                </button>
                
                <button 
                  className="btn-delete" 
                  style={{ padding: '8px 16px', background: '#ff4d4d', color: 'white', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
                  onClick={() => handleDelete(item.slug || item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '20px', color: '#64748b' }}>
            <p>No items found.</p>
          </div>
        )}
      </div>
    </div>
  );
}