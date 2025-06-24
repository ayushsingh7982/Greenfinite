// components/upload/Dropdown.jsx
import React from 'react';

const Dropdown = ({ selectedType, setSelectedType }) => {
  return (
    <select
      value={selectedType}
      onChange={(e) => setSelectedType(e.target.value)}
      className="w-full px-4 py-2 border rounded"
    >
      <option value="">Select File Type</option>
      <option value="pdf">PDF</option>
      <option value="docx">DOCX</option>
      <option value="txt">TXT</option>
    </select>
  );
};

export default Dropdown;
