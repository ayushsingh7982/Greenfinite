import React from 'react';

const UploadButton = ({ onFileSelect, onUpload, fileInputRef }) => {
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) onFileSelect(file);
  };

  return (
    <>
      <input
        type="file"
        accept=".pdf,.docx,.txt"
        onChange={handleChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      <button
        onClick={onUpload}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-200 shadow-md"
      >
        Upload & Analyze
      </button>
    </>
  );
};

export default UploadButton;
