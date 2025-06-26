// src/components/analyze/ChatBot.jsx

import React from 'react';

/**
 * ChatMessage Component
 * Renders a single chat message, aligning it left or right based on the sender.
 *
 * @param {object} props - The component props.
 * @param {string} props.sender - The sender of the message ('user' or 'ai').
 * @param {string} props.message - The content of the message.
 */
const ChatMessage = ({ sender, message }) => {
    // Determine if the sender is the user
    const isUser = sender === 'user';

    // Tailwind CSS classes for alignment based on sender
    const messageAlignment = isUser ? 'justify-end' : 'justify-start';

    // Tailwind CSS classes for background color and text color based on sender
    const messageBg = isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800';

    // Return the JSX for a single chat message
    return (
        // Flex container to control the alignment of the message bubble
        <div className={`flex ${messageAlignment} mb-3`}>
            {/* Message bubble styling */}
            <div className={`max-w-[70%] p-3 rounded-xl ${messageBg} shadow-md`}>
                <p className="leading-relaxed">
                    {/* Display sender name with bold styling */}
                    <span className="font-bold">
                        {isUser ? 'You:' : 'AI:'}
                    </span>{' '}
                    {/* Display the message content */}
                    {message}
                </p>
            </div>
        </div>
    );
};

/**
 * ChatBot Component
 * Renders the main chat interface with an input field and send button.
 * Displays a simulated chat history using the ChatMessage component.
 */
const ChatBot = () => {
    // Simulated chat history. In a real application, this would come from component state (e.g., useState).
    const chatHistory = [
        { id: 1, sender: 'user', message: 'Hello, I need help analyzing a document.' },
        { id: 2, sender: 'ai', message: 'Absolutely! Please upload your PDF in the adjacent panel.' },
        { id: 3, sender: 'user', message: "I'm particularly interested in extracting key financial figures." },
        { id: 4, sender: 'ai', message: 'Understood. Would you like a summary, or specific tables and figures?' },
        { id: 5, sender: 'user', message: 'Just the key financial figures for now, please.' },
        { id: 6, sender: 'ai', message: 'Processing... Please check the PDF Analyzer panel.' },
    ];

    return (
        // Changed width to w-[45%] to cover 45% of the screen.
        <div className="w-full md:w-[48%] h-[33em] bg-white bg-opacity-90 rounded-xl shadow-2xl p-6 flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-[1.005] font-sans">
            {/* Chat Bot Title */}
            <h2 className="text-3xl font-extrabold mb-5 text-gray-800 text-center">Chat Bot</h2>

            {/* Chat Messages Display Area */}
            {/* flex-col ensures messages stack vertically */}
            {/* overflow-y-auto enables scrolling for long chat histories */}
            <div className="flex-1 border border-gray-300 bg-gray-50 rounded-lg p-4 mb-4 overflow-y-auto custom-scrollbar flex flex-col">
                {/* Map through chatHistory array to render each message */}
                {chatHistory.map((msg) => (
                    <ChatMessage key={msg.id} sender={msg.sender} message={msg.message} />
                ))}
            </div>

            {/* Message Input Area */}
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
