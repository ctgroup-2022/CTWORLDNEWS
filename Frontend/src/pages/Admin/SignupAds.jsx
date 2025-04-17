import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { FaPlus, FaEdit, FaTrash, FaEye, FaSpinner, FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

// Configure axios - compatible with both Vite and CRA
const apiUrl = import.meta.env?.VITE_API_URL || 'http://localhost:5000'; 
axios.defaults.baseURL = apiUrl;

const SignupAds = () => {
  // States
  const [ads, setAds] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingAd, setEditingAd] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [lastFetched, setLastFetched] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  
  // Check system preference on initial load
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  // Fetch ads function with progress tracking
  const fetchAds = useCallback(async () => {
    setIsLoading(true);
    setProgress(10);
    
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);
      
      const response = await axios.get("/api/signup-ads", {
        signal: controller.signal,
        onDownloadProgress: (progressEvent) => {
          if (!progressEvent.total) return;
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(percentCompleted);
        }
      });
      
      clearTimeout(timeoutId);
      setProgress(100);
      setAds(response.data.data);
      setLastFetched(new Date());
      
      setTimeout(() => setProgress(0), 1000);
    } catch (error) {
      console.error("Error fetching ads:", error);
      toast.error("Failed to load signup ads");
      setProgress(0);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Initial data load
  useEffect(() => {
    fetchAds();
    
    // Set up polling for real-time updates every 30 seconds
    const intervalId = setInterval(fetchAds, 30000);
    
    return () => clearInterval(intervalId);
  }, [fetchAds]);

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // Validate file type
    if (!file.type.includes('image/')) {
      toast.error("Please select an image file");
      return;
    }
    
    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB");
      return;
    }
    
    setSelectedFile(file);
    
    // Create preview URL
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  // Reset form
  const resetForm = () => {
    setSelectedFile(null);
    setPreviewUrl("");
    setEditingAd(null);
    
    // Reset file input
    const fileInput = document.getElementById('adImage');
    if (fileInput) fileInput.value = '';
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedFile && !editingAd) {
      toast.error("Please select an image");
      return;
    }
    
    setIsSubmitting(true);
    setProgress(0);
    
    const formData = new FormData();
    if (selectedFile) {
      // Use 'adsImage' to match backend middleware field name
      formData.append('adsImage', selectedFile);
    }
    
    try {
      let response;
      
      if (editingAd) {
        // Update existing ad
        response = await axios.put(`/api/signup-ads/${editingAd._id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
          onUploadProgress: (progressEvent) => {
            if (!progressEvent.total) return;
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setProgress(percentCompleted);
          }
        });
        toast.success("Ad updated successfully");
      } else {
        // Create new ad
        response = await axios.post("/api/signup-ads", formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
          onUploadProgress: (progressEvent) => {
            if (!progressEvent.total) return;
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setProgress(percentCompleted);
          }
        });
        toast.success("Ad created successfully");
      }
      
      // Update ads list and refresh data
      fetchAds();
      
      // Reset form
      resetForm();
    } catch (error) {
      console.error("Error submitting ad:", error);
      console.error("Response:", error.response?.data);
      toast.error(error.response?.data?.message || "Failed to save ad");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setProgress(0), 1000);
    }
  };

  // Delete handler
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this ad?")) return;
    
    setProgress(10);
    
    try {
      await axios.delete(`/api/signup-ads/${id}`, {
        onDownloadProgress: (progressEvent) => {
          if (!progressEvent.total) return;
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(percentCompleted);
        }
      });
      
      setAds(prev => prev.filter(ad => ad._id !== id));
      toast.success("Ad deleted successfully");
      setProgress(100);
      
      setTimeout(() => setProgress(0), 1000);
    } catch (error) {
      console.error("Error deleting ad:", error);
      toast.error("Failed to delete ad");
      setProgress(0);
    }
  };

  // Edit handler
  const handleEdit = (ad) => {
    setEditingAd(ad);
    // Use the full URL to image
    setPreviewUrl(`${apiUrl}/${ad.adsImagePath}`);
  };

  // Progress bar component
  const ProgressBar = ({ progress }) => (
    <div className={`w-full h-1 ${progress > 0 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 fixed top-0 left-0 z-50`}>
      <div 
        className="h-full bg-blue-500"
        style={{ width: `${progress}%`, transition: 'width 0.3s ease-in-out' }}
      />
    </div>
  );

  return (
    <div className={`min-h-screen p-4 md:p-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <ProgressBar progress={progress} />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">Signup Ads Manager</h1>
          
          {/* Theme toggle button */}
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        
        {/* Last fetched indicator */}
        <div className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          {lastFetched && (
            <>Last updated: {lastFetched.toLocaleTimeString()}</>
          )}
          {isLoading && <span className="ml-2 inline-flex items-center"><FaSpinner className="animate-spin mr-1" /> Refreshing...</span>}
          <button 
            onClick={fetchAds} 
            className="ml-3 text-blue-500 hover:text-blue-600 text-xs"
            disabled={isLoading}
          >
            Refresh
          </button>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className={`mb-8 p-4 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className="text-xl font-semibold mb-4">{editingAd ? 'Edit Ad' : 'Add New Ad'}</h2>
          
          <div className="mb-4">
            <label htmlFor="adImage" className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Ad Image <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              id="adImage"
              accept="image/*"
              onChange={handleFileChange}
              className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
            />
            <p className="mt-1 text-sm text-gray-500">Max size: 5MB. Supported formats: JPG, PNG, GIF</p>
          </div>
          
          {previewUrl && (
            <div className="mb-4">
              <p className={`mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Preview:</p>
              <img 
                src={previewUrl} 
                alt="Preview" 
                className="max-h-48 rounded border object-contain"
              />
            </div>
          )}
          
          <div className="flex items-center justify-between mt-4">
            <button
              type="button"
              onClick={resetForm}
              className={`px-4 py-2 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center"
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  {editingAd ? 'Updating...' : 'Saving...'}
                </>
              ) : (
                <>
                  {editingAd ? <FaEdit className="mr-2" /> : <FaPlus className="mr-2" />}
                  {editingAd ? 'Update Ad' : 'Add Ad'}
                </>
              )}
            </button>
          </div>
        </form>
        
        {/* Ads grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {ads.map(ad => (
            <motion.div
              key={ad._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`relative rounded-lg shadow-md overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="relative pt-[66.66%]"> {/* 3:2 aspect ratio */}
                <img 
                  src={`${apiUrl}/${ad.adsImagePath}`} 
                  alt={`Ad ${ad.sequence}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
                  }}
                />
              </div>
              
              <div className="p-3">
                <div className="flex items-center justify-between">
                  <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    #{ad.sequence}
                  </span>
                  <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {new Date(ad.createdAt).toLocaleDateString()}
                  </span>
                </div>
                
                <div className="mt-3 flex items-center justify-between">
                  <button
                    onClick={() => handleEdit(ad)}
                    className="text-blue-500 hover:text-blue-600"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>
                  
                  <a
                    href={`${apiUrl}/${ad.adsImagePath}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-600"
                    title="View"
                  >
                    <FaEye />
                  </a>
                  
                  <button
                    onClick={() => handleDelete(ad._id)}
                    className="text-red-500 hover:text-red-600"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
          
          {ads.length === 0 && !isLoading && (
            <div className={`col-span-full text-center py-8 rounded-lg ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-50 text-gray-500'}`}>
              No ads found. Add your first ad using the form above.
            </div>
          )}
          
          {isLoading && ads.length === 0 && (
            <div className="col-span-full text-center py-8">
              <FaSpinner className="animate-spin text-2xl mx-auto mb-2" />
              <p>Loading ads...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupAds;