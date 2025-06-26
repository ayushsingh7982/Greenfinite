import React from 'react';

const Dropdown = ({ selectedType, setSelectedType }) => {
  return (
    <select
      value={selectedType}
      onChange={(e) => setSelectedType(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      <option value="">Select file type</option>
      <option value="pdf">PDF</option>
      <option value="docx">DOCX</option>
      <option value="txt">TXT</option>
    </select>
  );
};

export default Dropdown;
