import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AdminNewsForm = () => {
  const [news, setNews] = useState({
    title: "",
    description: "",
    date: "",
    category: "",
    image: null,
    pdf: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNews({ ...news, [name]: value });
  };

  const handleDescriptionChange = (value) => {
    setNews({ ...news, description: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    if (name === "image") {
      const validTypes = ["image/jpeg", "image/png"];
      if (!validTypes.includes(file.type) || file.size > 1048576) {
        alert("Image must be a JPG/PNG file and less than 1 MB");
        return;
      }
    }

    if (name === "pdf") {
      if (file.type !== "application/pdf") {
        alert("Only PDF files are allowed");
        return;
      }
    }

    setNews({ ...news, [name]: file });
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
        <label className="block text-gray-700 dark:text-gray-300">Description</label>
        <ReactQuill
          value={news.description}
          onChange={handleDescriptionChange}
          className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-md focus:outline-none"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-gray-700 dark:text-gray-300">Date</label>
        <input
          type="date"
          name="date"
          value={news.date}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-md focus:outline-none"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-gray-700 dark:text-gray-300">Category</label>
        <select
          name="category"
          value={news.category}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-md focus:outline-none"
          required
        >
          <option value="">Select Category</option>
          <option value="Sports">Sports</option>
          <option value="Announcements">Announcements</option>
          <option value="Events">Events</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="block text-gray-700 dark:text-gray-300">Image Upload</label>
        <input
          type="file"
          name="image"
          accept="image/jpeg, image/png"
          onChange={handleFileChange}
          className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-md focus:outline-none"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-gray-700 dark:text-gray-300">PDF Upload</label>
        <input
          type="file"
          name="pdf"
          accept="application/pdf"
          onChange={handleFileChange}
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
