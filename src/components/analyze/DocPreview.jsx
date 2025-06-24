// src/components/analyze/DocPreview.jsx

import React, { useState } from 'react';

const DocPreview = () => {
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      const blobUrl = URL.createObjectURL(file);
      setPdfUrl(blobUrl);
    }
  };

  return (
    <div className="flex-1 w-full md:w-1/2 h-auto bg-white bg-opacity-90 rounded-xl shadow-2xl p-6 flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-[1.005]">
      <h2 className="text-3xl font-extrabold mb-5 text-gray-800 text-center">Doc Preview</h2>

      <div className="mb-4">
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-700
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
      </div>

      <div className="flex-1 border-2 border-dashed border-gray-300 rounded-lg p-2 flex flex-col items-center justify-center text-gray-700 text-center bg-gray-50 mb-4 h-full overflow-hidden">
        {pdfUrl ? (
          <iframe
            src={pdfUrl}
            width="100%"
            height="100%"
            title="PDF Preview"
            className="border-none rounded-lg"
            allow="fullscreen"
          />
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-red-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p className="text-xl font-medium mb-2">PDF Preview Area</p>
            <p className="text-md text-gray-600">Your uploaded PDF will appear here for viewing.</p>
          </>
        )}
      </div>

      <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-xl font-semibold hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full">
        Analyze PDF
      </button>

      <div className="mt-4 text-gray-600 text-center text-sm">
        <p>Analysis results will appear here after processing.</p>
      </div>
    </div>
  );
};

export default DocPreview;
