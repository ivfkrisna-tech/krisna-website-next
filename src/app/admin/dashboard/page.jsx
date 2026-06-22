"use client"; 

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import './dashboard.css';

// Editor component ko safely load karein
const Editor = dynamic(() => import('@/components/Editor'), { ssr: false });

// 1. MAIN DASHBOARD COMPONENT (Yahi default export hai)
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState({ blogs: [], faqs: [], stories: [] });
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  const fetchStats = async () => {
    try {
      const res = await fetch('http://127.0.0.1:5000/api/all-data');
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      }
    } catch (err) { console.error("Stats Error:", err); }
  };

  useEffect(() => { if (isAuthorized) fetchStats(); }, [isAuthorized]);

  if (!isAuthorized) return <div className="loading">Authenticating...</div>;

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Krishna IVF</h2>
        <nav>
          <p onClick={() => setActiveTab('dashboard')} className={activeTab === 'dashboard' ? 'active' : ''}>📊 Dashboard</p>
          <p onClick={() => setActiveTab('blogs')} className={activeTab === 'blogs' ? 'active' : ''}>📝 Manage Blogs</p>
          <p onClick={() => setActiveTab('faqs')} className={activeTab === 'faqs' ? 'active' : ''}>❓ Manage FAQs</p>
          <p onClick={() => setActiveTab('stories')} className={activeTab === 'stories' ? 'active' : ''}>❤️ Success Stories</p>
          <button onClick={() => { localStorage.removeItem('adminToken'); router.push('/admin/login'); }} className="logout-btn">Logout</button>
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

// 2. CONTENT MANAGER COMPONENT (Dashboard file ke andar hi hai)
function ContentManager({ type, refreshStats }) {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState(''); 
  const [file, setFile] = useState(null);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:5000/api/${type}`);
      if (res.ok) {
        const data = await res.json();
        setItems(Array.isArray(data) ? data : []);
      }
    } catch (err) { console.error("Load Data Error:", err); }
  };

  useEffect(() => { loadData(); }, [type]);

 const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let fileUrl = '';
      if (file) {
        const fd = new FormData();
        fd.append('image', file);
        const res = await fetch('http://127.0.0.1:5000/api/upload', { method: 'POST', body: fd });
        const data = await res.json();
        fileUrl = data.filename;
      }

      const payload = { 
        title, 
        content, 
        fileUrl, 
        ...(type === 'success_stories' && { author }) 
      };

      const url = editId ? `http://127.0.0.1:5000/api/${type}/${editId}` : `http://127.0.0.1:5000/api/${type}`;
      const method = editId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });


      if (res.ok) {
        alert("Operation Successful!");
        setEditId(null); setTitle(''); setContent(''); setAuthor(''); setFile(null);
        loadData();
        if (refreshStats) refreshStats();
      }
    } catch (err) { alert("Failed to save data"); }
    finally { setLoading(false); }
  };


const handleDelete = async (id) => {
  if (!window.confirm("DO YOU WANT TO DELETE ")) return;

  try {
    const res = await fetch(`http://127.0.0.1:5000/api/${type}/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      alert("Item deleted successfully!");
      loadData(); // List refresh 
      if (refreshStats) refreshStats(); // Stats update
    } else {
      alert("Delete failed!");
    }
  } catch (err) {
    console.error("Delete Error:", err);
  }
};
  return (
    <div className="data-section">
      <h3>Manage {type.replace('_', ' ').toUpperCase()}</h3>
      <form onSubmit={handleSubmit} className="admin-form">
        
        {/* Title / Question Field */}
        <input 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder={type === 'faqs' ? "Enter Question" : "Enter Title"} 
          required 
        />

        {/* Author Field (Sirf Stories ke liye dikhega) */}
        {type === 'success_stories' && (
          <input 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
            placeholder="Name (e.g. Anjali & Rajesh Verma)" 
          />
        )}

        {/* Editor for Answer/Story Content */}
        <Editor value={content} onChange={setContent} />
        
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit" disabled={loading}>{loading ? 'Processing...' : (editId ? 'Update' : 'Publish')}</button>
      </form>

      <div className="items-list">
  {items.map((item) => (
    <div key={item._id} className="card" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', borderBottom: '1px solid #ddd' }}>
      {/* IMAGE PREVIEW */}
      {item.fileUrl && (
        <img 
          src={`http://127.0.0.1:5000/uploads/${item.fileUrl}`} 
          alt="preview" 
          style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '5px' }} 
        />
      )}
      
      <span style={{ flexGrow: 1 }}>{item.title}</span>
      
      <div className="admin-actions">
  <button 
    className="btn-edit"
    onClick={() => { 
      setEditId(item._id); 
      setTitle(item.title); 
      setContent(item.content); 
      window.scrollTo(0, 0); 
    }}
  >
    Edit
  </button>
  
  <button 
    className="btn-delete"
    onClick={() => handleDelete(item._id)} 
  >
    Delete
  </button>
</div>
    </div>
    
        ))}
      </div>
    </div>
  );
}