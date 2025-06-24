import React from 'react';
import Upload from '../components/upload/Upload';

export default function UploadPage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundImage: "url('bg.jpg')", backgroundSize: "cover" }}
    >
      <div className="w-screen">
      <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex justify-center items-center min-h-[50vh]">
        <Upload />
      </main>
    </div>
      </div>

    </div>
  );
}

