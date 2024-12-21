import React, { useState } from "react";

const AdminHeadlinesForm = () => {
  const [headline, setHeadline] = useState({
    headlineText: "",
    priority: "low",
    link: "",
  });

  const handleChange = (e) => {
    setHeadline({ ...headline, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(headline); // Replace with API integration
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Add Headline</h2>
      <div className="space-y-2">
        <label className="block text-gray-700 dark:text-gray-300">Headline Text</label>
        <input
          type="text"
          name="headlineText"
          value={headline.headlineText}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-md focus:outline-none"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-gray-700 dark:text-gray-300">Priority</label>
        <select
          name="priority"
          value={headline.priority}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-md"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="block text-gray-700 dark:text-gray-300">Link</label>
        <input
          type="text"
          name="link"
          value={headline.link}
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

export default AdminHeadlinesForm;
