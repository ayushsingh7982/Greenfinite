// src/pages/Analyze.jsx

import React from 'react';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import ChatBot from '../components/analyze/ChatBot';
import DocPreview from '../components/analyze/DocPreview';

export default function Analyze() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundImage: "url('bg.jpg')", backgroundSize: "cover" }}
    >
      <div className="w-screen">
        <div className="min-h-[30vh] flex flex-col">
          <Navbar />
          <main className="flex-1 flex flex-col md:flex-row justify-center items-center min-h-[84.2vh] p-4 space-y-4 md:space-y-0 md:space-x-4 max-w-6xl mx-auto">
            <ChatBot />
            <DocPreview />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
