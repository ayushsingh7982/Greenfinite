// components/upload/UploadButton.jsx
import React from 'react';

const UploadButton = ({ onFileSelect, onUpload, fileInputRef }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileSelect(file);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/*
        THIS IS THE CRUCIAL PART:
        The hidden file input element.
        It has the 'ref' prop set to fileInputRef, allowing the
        drag-and-drop area in Upload.jsx to programmatically click it.
      */}
      <input
        type="file"
        ref={fileInputRef} // <-- This connects the ref
        onChange={handleFileChange}
        className="hidden" // Keep it hidden so only the drag-drop area or the button is visible
      />

      <button
        onClick={onUpload}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg
                   transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Upload File
      </button>
    </div>
  );
};

export default UploadButton;