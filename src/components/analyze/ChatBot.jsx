// src/components/analyze/ChatBot.jsx

import React from 'react';

const ChatBot = () => {
    return (
        <div className="flex-1 h-full bg-white bg-opacity-90 rounded-xl shadow-2xl p-6 flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-[1.005]">
            <h2 className="text-3xl font-extrabold mb-5 text-gray-800 text-center">Chat Bot</h2>
            <div className="flex-1 border border-gray-300 bg-gray-50 rounded-lg p-4 mb-4 overflow-y-auto custom-scrollbar">
                <p className="text-gray-700 leading-relaxed mb-2">
                    <span className="font-semibold text-blue-600">You:</span> Hello, I need help analyzing a document.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                    <span className="font-semibold text-green-600">AI:</span> Absolutely! Please upload your PDF in the adjacent panel.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                    <span className="font-semibold text-blue-600">You:</span> I'm particularly interested in extracting key financial figures.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                    <span className="font-semibold text-green-600">AI:</span> Understood. Would you like a summary, or specific tables and figures?
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                    <span className="font-semibold text-blue-600">You:</span> Just the key financial figures for now, please.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-green-600">AI:</span> Processing... Please check the PDF Analyzer panel.
                </p>
            </div>
            <div className="flex items-center">
                <input
                    type="text"
                    placeholder="Type your message here..."
                    className="flex-1 border border-gray-300 rounded-l-lg p-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatBot;
