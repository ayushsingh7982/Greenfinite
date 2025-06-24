import React, { useState, useRef } from 'react';
import Dropdown from './Dropdown';
import UploadButton from './UploadButton';
// import MessageBox from '../ui/MessageBox'; // Removed MessageBox import

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  // Removed message and messageType states
  const fileInputRef = useRef(null); // Ref for triggering file input click

  // Removed showMessage and closeMessage functions

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file to upload."); // Reverted to alert
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      // Placeholder for your actual API endpoint
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Unknown upload error' }));
        throw new Error(errorData.message || 'Upload failed');
      }

      alert('File uploaded successfully!'); // Reverted to alert
      setSelectedFile(null); // Clear selected file after successful upload
    } catch (error) {
      console.error('Error uploading file:', error);
      alert(`Something went wrong: ${error.message || 'Please try again.'}`); // Reverted to alert
    }
  };

  // Drag and Drop Handlers
  const handleDragOver = (e) => {
    e.preventDefault(); // Prevent default to allow drop
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0]; // Assuming only one file is dropped
      setSelectedFile(file);
      alert(`File selected: ${file.name}`); // Reverted to alert
    }
  };

  // Handler for when a file is selected via the traditional input (UploadButton)
  const handleFileChange = (file) => {
    setSelectedFile(file);
    if (file) {
      alert(`File selected: ${file.name}`); // Reverted to alert
    }
  };

  return (
    <div
      className={`w-80% h-80% flex flex-col justify-between items-center p-10 bg-white bg-opacity-80 rounded-xl shadow-2xl space-y-8
                  border-4 transition-all duration-300 ease-in-out
                  ${isDragOver ? 'border-blue-500 border-dashed' : 'border-transparent'}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Top section: Dropdown */}
      <div className="space-y-6 w-full max-w-lg">
        <Dropdown />
      </div>

      {/* Description text */}
      <p className="text-base text-gray-700 text-center leading-relaxed max-w-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
        Nulla facilisi. Integer eu nisl nec est ultrices bibendum.
      </p>

      {/* Main content area for drag and drop - this replaces the traditional file input */}
      <div
        className="flex-1 flex flex-col justify-center items-center w-full max-w-lg p-8 text-center
                   border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 bg-opacity-70 text-gray-600
                   hover:border-blue-400 hover:text-blue-500 transition-colors cursor-pointer"
        onClick={() => fileInputRef.current?.click()} // Trigger file input click when this area is clicked
      >
        {selectedFile ? (
          <p className="text-xl font-semibold text-green-700">File Ready: {selectedFile.name}</p>
        ) : (
          <>
            <svg className="w-14 h-14 mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 0115.9 6L16 6a3 3 0 013 3v10a2 2 0 01-2 2H7a2 2 0 01-2-2v-5a2 2 0 012-2zM12 8v8m-4-4h8"></path>
            </svg>
            <p className="text-xl font-semibold mb-2">Drag & Drop Your File Here</p>
            <p className="text-sm">or click to browse</p>
          </>
        )}
      </div>

      {/* Upload Button - this component should contain the hidden file input */}
      <div className="w-full max-w-xs">
        <UploadButton onFileSelect={handleFileChange} onUpload={handleUpload} fileInputRef={fileInputRef} />
      </div>

      {/* Removed MessageBox component rendering */}
    </div>
  );
};

export default Upload;
