import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminNewsForm from "./AdminNewsForm";
import AdminHeadlinesForm from "./AdminHeadlinesForm";
import Dashboard from "./Dashboard";

const AdminDashboard = () => {
  const [theme, setTheme] = useState("light");
  const [activeTab, setActiveTab] = useState("dashboard");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "news":
        return <AdminNewsForm />;
      case "headlines":
        return <AdminHeadlinesForm />;
      default:
        return <Dashboard/>;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <AdminSidebar
        theme={theme}
        toggleTheme={toggleTheme}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="flex-1 overflow-auto p-8 bg-gray-100 dark:bg-gray-900">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
