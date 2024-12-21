import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminNewsForm from "./AdminNewsForm";
import AdminHeadlinesForm from "./AdminHeadlinesForm";

const AdminDashboard = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex">
      <AdminSidebar theme={theme} toggleTheme={toggleTheme} />
      <div className="flex-1 p-8 bg-gray-100 dark:bg-gray-900">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
          Admin Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AdminNewsForm />
          <AdminHeadlinesForm />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
