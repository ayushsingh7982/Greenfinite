import React, { useState, useEffect, useRef } from 'react';

const App = () => {
    // Navbar states
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuButtonRef = useRef(null);
    const mobileMenuRef = useRef(null);

    // Navbar functions
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Global click listener for closing mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target) &&
                menuButtonRef.current &&
                !menuButtonRef.current.contains(event.target) &&
                window.innerWidth < 768 &&
                isMenuOpen
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMenuOpen]);

    // Handle window resize to close mobile menu on desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="font-['Inter'] text-gray-900 relative overflow-x-hidden"
             style={{
                 // Minimal styling for the background to showcase the navbar
                 backgroundImage: `url('https://images.unsplash.com/photo-1603575997232-a72e12e3e5c9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 minHeight: '100vh', // Ensure background covers the viewport
             }}>
            {/* Main Navbar */}
            <nav className="fixed top-[2em] left-[5em] right-[5em] w-auto py-3 px-7 md:px-12
                            bg-transparent backdrop-blur-lg border border-gray-400 border-opacity-50 shadow-sm
                            flex items-center justify-between z-40
                            transition-all duration-300 ease-in-out
                            hover:border-opacity-100 hover:shadow-xl
                            rounded-2xl"> {/* Added rounded-2xl here */}
                {/* Logo */}
                <div className="text-xl md:text-3xl font-semibold text-white transition-colors duration-300 hover:text-gray-300">Greenfinite</div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex md:flex-row md:items-center md:space-x-4 text-base"> {/* Adjusted space-x */}
                    {/* Applied holographic-link class and adjusted padding */}
                    <a href="#" className="holographic-link flex items-center justify-center px-4 py-2 text-base font-medium">Home</a>
                    <a href="#" className="holographic-link flex items-center justify-center px-4 py-2 text-base font-medium">About</a>
                    <a href="#" className="holographic-link flex items-center justify-center px-4 py-2 text-base font-medium">Contact Us</a>
                    <a href="#" className="holographic-link flex items-center justify-center px-4 py-2 text-base font-medium">FAQs</a>
                </div>

                {/* Mobile Menu Button (Hamburger) */}
                <button
                    ref={menuButtonRef}
                    onClick={toggleMenu}
                    className="md:hidden focus:outline-none text-white"
                    aria-label="Open navigation menu"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu Overlay (Slides from right, Apple style) */}
            <div
                ref={mobileMenuRef}
                className={`
                    fixed top-0 right-0 h-screen w-3/4 max-w-xs
                    bg-gray-900 bg-opacity-70 backdrop-blur-lg border-l border-gray-400 border-opacity-50 /* Changed to match desktop navbar theme */
                    p-6 flex flex-col space-y-6
                    transform transition-transform duration-300 ease-in-out z-50
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'}
                    md:hidden overflow-y-auto
                `}
            >
                {/* Close Button */}
                <button
                    onClick={toggleMenu}
                    className="text-white self-end focus:outline-none mb-4" /* Changed text color to white */
                    aria-label="Close navigation menu"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                {/* Logo in Overlay - Hidden from sidebar */}
                {/* <div className="text-xl md:text-2xl font-semibold text-white mb-6">greenfinite</div> */} {/* This line is commented out */}

                {/* Navigation Links for Mobile */}
                <a href="#" className="block px-3 py-2 text-xl text-white hover:bg-white hover:bg-opacity-20 rounded transition duration-300">Home</a>
                <a href="#" className="block px-3 py-2 text-xl text-white hover:bg-white hover:bg-opacity-20 rounded transition duration-300">About</a>
                <a href="#" className="block px-3 py-2 text-xl text-white hover:bg-white hover:bg-opacity-20 rounded transition duration-300">Contact</a>
            </div>

            {/* Custom CSS for holographic effect */}
            <style>{`
                .holographic-link {
                    position: relative;
                    overflow: hidden;
                    border-radius: 0.75rem; /* rounded-lg */
                    background-color: transparent; /* Initially transparent background */
                    border: 1px solid transparent; /* Initially transparent border */
                    box-shadow: 0 0 0px rgba(0,0,0,0); /* Initial shadow */
                    color: #fff; /* Default text color */
                    transition: all 0.5s ease; /* Smooth transition for all properties */
                    text-decoration: none; /* Remove underline */
                }

                .holographic-link::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: linear-gradient(
                        0deg,
                        transparent,
                        transparent 30%,
                        rgba(0, 255, 255, 0.3) /* Cyan glow */
                    );
                    transform: rotate(-45deg) translateY(0%);
                    transition: transform 0.5s ease, opacity 0.5s ease;
                    opacity: 0;
                    z-index: 1; /* Below the text */
                }

                .holographic-link:hover {
                    transform: scale(1.05);
                    box-shadow: 0 0 20px rgba(0, 255, 255, 0.5); /* Cyan glow shadow */
                    border-color: rgba(0, 255, 255, 0.7); /* Border color change on hover */
                    background-color: rgba(17, 17, 17, 0.8); /* Dark background appears on hover */
                    color: #4dd0e1; /* Text color change to complement cyan glow */
                }

                .holographic-link:hover::before {
                    opacity: 1;
                    transform: rotate(-45deg) translateY(100%); /* Slides up */
                }
            `}</style>
        </div>
    );
};

export default App;
