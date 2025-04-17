import React from "react";
import svg from "../assets/Images/404.svg";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-12  px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <img src={svg} alt="404 Not Found" className="w-full h-auto pb-8" />
        <Link to="/">
          <button className="w-full border border-blue-200 rounded-lg p-3 bg-slate-100 font-semibold hover:bg-slate-300 text-black">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;