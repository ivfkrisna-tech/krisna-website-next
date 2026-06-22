// src/app/admin/layout.js

// 1. Sidebar ko import karein (Path check kar lein ki kahan hai)

import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="admin-wrapper">
      <AdminSidebar /> {/* Ab ye define ho gaya */}
      <div className="admin-content">
        {children}
      </div>
    </div>
  );
}