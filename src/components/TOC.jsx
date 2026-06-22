"use client";
import { useState } from 'react';

export default function TOC({ headings }) { // Prop ka naam 'headings' rakha hai
  const [isOpen, setIsOpen] = useState(true);

  if (!headings || headings.length === 0) return null;

  return (
    <div className="toc-card" style={{ border: '1px solid #eee', borderRadius: '10px', padding: '15px' }}>
      <div className="toc-header" onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong>Table of Contents</strong>
        
        <i className={`fa-solid fa-chevron-up ${isOpen ? '' : 'fa-rotate-180'}`}></i>
      </div>
      
      {isOpen && (
        <ul className="toc-list" style={{ listStyle: 'none', padding: '10px 0 0 0' }}>
          {headings.map((item, idx) => (
            <li key={idx} style={{ marginBottom: '8px', paddingLeft: item.level === 'H3' ? '15px' : '0' }}>
              <a href={`#${item.id}`} style={{ textDecoration: 'none', color: '#555', fontSize: '0.95rem' }}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}