import React, { useState } from "react";
import { FaSearch, FaFilter, FaCheckCircle, FaTimesCircle, FaChartPie } from "react-icons/fa";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [newsSearch, setNewsSearch] = useState("");
  const [newsDateFilter, setNewsDateFilter] = useState("");
  const [headlinesSearch, setHeadlinesSearch] = useState("");
  const [headlinesDateFilter, setHeadlinesDateFilter] = useState("");

  const [newsData, setNewsData] = useState([
    { id: 1, title: "College Sports Event", date: "2023-12-20", category: "Sports", status: true },
    { id: 2, title: "New Admission Policy", date: "2023-12-18", category: "Announcements", status: false },
  ]);

  const [headlinesData, setHeadlinesData] = useState([
    { id: 1, title: "Exam Schedules Released", date: "2023-12-15", status: true },
    { id: 2, title: "Holiday Notice", date: "2023-12-12", status: false },
  ]);

  const toggleNewsStatus = (id) => {
    setNewsData(newsData.map((news) => (news.id === id ? { ...news, status: !news.status } : news)));
  };

  const toggleHeadlineStatus = (id) => {
    setHeadlinesData(headlinesData.map((headline) => (headline.id === id ? { ...headline, status: !headline.status } : headline)));
  };

  const filteredNews = newsData.filter(
    (item) =>
      item.title.toLowerCase().includes(newsSearch.toLowerCase()) &&
      (newsDateFilter === "" || item.date === newsDateFilter)
  );

  const filteredHeadlines = headlinesData.filter(
    (item) =>
      item.title.toLowerCase().includes(headlinesSearch.toLowerCase()) &&
      (headlinesDateFilter === "" || item.date === headlinesDateFilter)
  );

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-300 dark:from-gray-800 dark:via-gray-900 dark:to-black min-h-screen">
      <motion.h1
        className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Dashboard
      </motion.h1>

      {/* News Table */}
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 flex items-center">
          News <FaSearch className="ml-2 text-gray-500" />
        </h2>
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="Search News"
            value={newsSearch}
            onChange={(e) => setNewsSearch(e.target.value)}
            className="p-3 border rounded-lg w-full focus:ring focus:ring-blue-500"
          />
          <input
            type="date"
            value={newsDateFilter}
            onChange={(e) => setNewsDateFilter(e.target.value)}
            className="p-3 border rounded-lg focus:ring focus:ring-blue-500"
          />
        </div>
        <table className="w-full border-collapse shadow-lg">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200">
              <th className="border p-3">ID</th>
              <th className="border p-3">Title</th>
              <th className="border p-3">Date</th>
              <th className="border p-3">Category</th>
              <th className="border p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredNews.map((news) => (
              <tr key={news.id} className="hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-100">
                <td className="border p-3">{news.id}</td>
                <td className="border p-3">{news.title}</td>
                <td className="border p-3">{news.date}</td>
                <td className="border p-3">{news.category}</td>
                <td className="border p-3">
                  <button onClick={() => toggleNewsStatus(news.id)}>
                    {news.status ? (
                      <FaCheckCircle className="text-green-500" />
                    ) : (
                      <FaTimesCircle className="text-red-500" />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Headlines Table */}
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 flex items-center">
          Headlines <FaFilter className="ml-2 text-gray-500" />
        </h2>
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="Search Headlines"
            value={headlinesSearch}
            onChange={(e) => setHeadlinesSearch(e.target.value)}
            className="p-3 border rounded-lg w-full focus:ring focus:ring-blue-500"
          />
          <input
            type="date"
            value={headlinesDateFilter}
            onChange={(e) => setHeadlinesDateFilter(e.target.value)}
            className="p-3 border rounded-lg focus:ring focus:ring-blue-500"
          />
        </div>
        <table className="w-full border-collapse shadow-lg">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200">
              <th className="border p-3">ID</th>
              <th className="border p-3">Title</th>
              <th className="border p-3">Date</th>
              <th className="border p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredHeadlines.map((headline) => (
              <tr key={headline.id} className="hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-100">
                <td className="border p-3">{headline.id}</td>
                <td className="border p-3">{headline.title}</td>
                <td className="border p-3">{headline.date}</td>
                <td className="border p-3">
                  <button onClick={() => toggleHeadlineStatus(headline.id)}>
                    {headline.status ? (
                      <FaCheckCircle className="text-green-500" />
                    ) : (
                      <FaTimesCircle className="text-red-500" />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
