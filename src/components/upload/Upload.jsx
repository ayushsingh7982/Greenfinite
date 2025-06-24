// components/upload/Upload.jsx
import React, { useState, useRef } from 'react';
import Dropdown from './Dropdown';
import UploadButton from './UploadButton';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedType, setSelectedType] = useState(''); // File type selection
  const fileInputRef = useRef(null);

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }
  
    // Simulate uploading...
    alert("Uploading file...");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate 1s delay
  
      alert("File uploaded successfully!");
      setSelectedFile(null); // Clear after "upload"
    } catch (error) {
      console.error("Simulated upload error:", error);
      alert("Something went wrong during fake upload.");
    }
  };
  

  const handleDragOver = (e) => {
    e.preventDefault();
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
      const file = files[0];
      setSelectedFile(file);
      alert(`File selected: ${file.name}`);
    }
  };

  const handleFileChange = (file) => {
    setSelectedFile(file);
    if (file) {
      alert(`File selected: ${file.name}`);
    }
  };

  // 📜 Custom placeholder text based on selected file type
  const getPlaceholderText = () => {
    switch (selectedType) {
      case 'pdf':
        return "PDF files are ideal for sharing professional-looking documents across platforms.";
      case 'docx':
        return "Upload DOCX files for editable documents with rich formatting.";
      case 'txt':
        return "TXT files are great for plain text content with no formatting.";
      default:
        return "Choose a file type above to see relevant instructions or placeholder.";
    }
  };

  return (
    <div
      className={`w-[35em] h-[35em] flex flex-col justify-between items-center p-10 bg-white bg-opacity-80 rounded-xl shadow-2xl space-y-8
                  border-4 transition-all duration-300 ease-in-out
                  ${isDragOver ? 'border-blue-500 border-dashed' : 'border-transparent'}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Top section: Dropdown */}
      <div className="space-y-6 w-full max-w-lg">
        <Dropdown selectedType={selectedType} setSelectedType={setSelectedType} />
      </div>

      {/* Dynamic description text */}
      <p className="text-base text-gray-700 text-center leading-relaxed max-w-lg">
        {getPlaceholderText()}
      </p>

      {/* Drag and drop area */}
      <div
        className="flex-1 flex flex-col justify-center items-center w-full max-w-lg p-8 text-center
                   border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 bg-opacity-70 text-gray-600
                   hover:border-blue-400 hover:text-blue-500 transition-colors cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        {selectedFile ? (
          <p className="text-xl font-semibold text-green-700">File Ready: {selectedFile.name}</p>
        ) : (
          <>
            <svg className="w-14 h-14 mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 0115.9 6L16 6a3 3 0 013 3v10a2 2 0 01-2 2H7a2 2 0 01-2-2v-5a2 2 0 012-2zM12 8v8m-4-4h8"></path>
            </svg>
            <p className="text-xl font-semibold mb-2">Drag & Drop Your File Here</p>
            <p className="text-sm">or click to browse</p>
          </>
        )}
      </div>

      {/* Upload Button */}
      <div className="w-full max-w-xs">
        <UploadButton onFileSelect={handleFileChange} onUpload={handleUpload} fileInputRef={fileInputRef} />
      </div>
    </div>
  );
};

export default Upload;
