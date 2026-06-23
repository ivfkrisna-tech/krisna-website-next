"use client";
import { useState } from 'react';

export default function AddBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select an image!");
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('image', file);

      // 1. Upload Image
      const uploadRes = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const uploadData = await uploadRes.json();
      const imageUrl = uploadData.filename;

      // 2. Save Blog
      await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content, fileUrl: imageUrl }),
      });

      alert("Blog Published!");
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Content" onChange={(e) => setContent(e.target.value)} required />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit" disabled={loading}>Publish</button>
    </form>
  );
}