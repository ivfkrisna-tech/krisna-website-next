"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push('/admin/login');
      } else {
        setError(data.message || 'Signup failed!');
      }
    } catch (err) {
      setError('Server connection failed!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f9fafb' }}>
      <div style={{ backgroundColor: '#ffffff', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '400px' }}>
        <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '10px' }}>Admin Signup</h2>
          
          {error && <div style={{ backgroundColor: '#fee2e2', color: '#dc2626', padding: '10px', borderRadius: '5px', fontSize: '14px', textAlign: 'center' }}>{error}</div>}
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontSize: '14px', color: '#4b5563', fontWeight: '500' }}>Email Address</label>
            <input 
              type="email" 
              placeholder="admin@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required 
              style={{ padding: '12px', border: '1px solid #d1d5db', borderRadius: '5px', outline: 'none', transition: 'border-color 0.2s' }} 
              onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontSize: '14px', color: '#4b5563', fontWeight: '500' }}>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required 
              minLength={6}
              style={{ padding: '12px', border: '1px solid #d1d5db', borderRadius: '5px', outline: 'none', transition: 'border-color 0.2s' }} 
              onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            style={{ 
              padding: '12px', 
              cursor: loading ? 'not-allowed' : 'pointer', 
              backgroundColor: loading ? '#93c5fd' : '#2563eb', 
              color: 'white', 
              border: 'none', 
              borderRadius: '5px',
              fontSize: '16px',
              fontWeight: '500',
              marginTop: '10px',
              transition: 'background-color 0.2s'
            }}
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>

          <p style={{ textAlign: 'center', fontSize: '14px', color: '#6b7280', marginTop: '10px' }}>
            Already have an account? <Link href="/admin/login" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '500' }}>Log In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
