import React, { useState } from "react";

const AdminNewsForm = () => {
  const [news, setNews] = useState({
    title: "",
    content: "",
    author: "",
    category: "",
  });

  const handleChange = (e) => {
    setNews({ ...news, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(news); // Replace with API integration
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Add News</h2>
      <div className="space-y-2">
        <label className="block text-gray-700 dark:text-gray-300">Title</label>
        <input
          type="text"
          name="title"
          value={news.title}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-md focus:outline-none"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-gray-700 dark:text-gray-300">Content</label>
        <textarea
          name="content"
          value={news.content}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-md focus:outline-none"
          rows="4"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-gray-700 dark:text-gray-300">Author</label>
        <input
          type="text"
          name="author"
          value={news.author}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-md focus:outline-none"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-gray-700 dark:text-gray-300">Category</label>
        <input
          type="text"
          name="category"
          value={news.category}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-md focus:outline-none"
          required
        />
      </div>
      <button
        type="submit"
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
      >
        Submit
      </button>
    </form>
  );
};

export default AdminNewsForm;
