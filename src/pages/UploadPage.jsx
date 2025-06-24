import React from 'react';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import Upload from '../components/upload/Upload';

export default function UploadPage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundImage: "url('bg.jpg')", backgroundSize: "cover" }}
    >
      <div className="w-screen">
      <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex justify-center items-center min-h-[82.2vh]">
        <Upload />
      </main>
      <Footer />
    </div>
      </div>

    </div>
  );
}

