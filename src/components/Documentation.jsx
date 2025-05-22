//import React from "react";
import { useNavigate } from "react-router-dom";

const Documentation = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto pt-20 px-6 text-white">
      <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
        Documentation
      </h1>
      <p className="mt-6 text-lg text-gray-300 text-center">
        Welcome to the official documentation of our platform. This page provides an overview of our website features
        and functionalities.
      </p>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Overview Section */}
        <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-orange-500">Overview</h2>
          <p className="mt-4 text-gray-300">
            Our platform is designed to help businesses streamline operations, improve workflow, and maximize efficiency
            through our intuitive tools and services.
          </p>
        </div>
        
        {/* Features Section */}
        <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-orange-500">Key Features</h2>
          <ul className="mt-4 list-disc list-inside text-gray-300">
            <li>🚀 Sleek and modern UI</li>
            <li>📊 Business growth tools</li>
            <li>🔒 Secure authentication</li>
            <li>🎥 Interactive media integration</li>
            <li>💡 Workflow management</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-16">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-800 text-white font-semibold rounded-lg shadow-md hover:from-orange-600 hover:to-orange-900 transition-all duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Documentation;
