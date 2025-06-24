import React, { useState } from 'react';
import { Rocket, Check } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleButtonClick = (e) => {
    e.preventDefault();
    setEmailError('');
    setPhoneError('');

    let valid = true;
    if (!email) {
      setEmailError('Email is required');
      valid = false;
    }
    if (!phone) {
      setPhoneError('Phone number is required');
      valid = false;
    }

    if (!valid) return;

    setIsSubmitted(true);
    setTimeout(() => {
      console.log('Form submission simulated. Values:', { email, phone });
      setEmail('');
      setPhone('');
      setIsSubmitted(false);
    }, 1500);
  };

  const isFormValid = email && phone;

  return (
    <footer className="font-inter bg-black text-gray-400 py-1 px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[1px]">
      <div className="max-w-7xl mx-auto w-full overflow-hidden">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3 pb-4 border-b border-t border-gray-700">
          {/* Logo Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex flex-col items-center md:items-start mb-2">
              <div className="aspect-[16/9]">
                <img
                  src="logo.png"
                  alt="greenfinite Logo"
                  className="w-24 h-24 md:w-48 md:h-48 lg:w-80 lg:h-45 rounded-md hidden md:block mt-14"
                />
              </div>
            </div>
          </div>

          {/* Connect Form */}
          <div className="flex flex-col md:items-end pt-8">
            <div className="w-full max-w-sm mx-auto md:ml-auto md:mr-0 pl-0">
              <h3 className="text-white text-lg font-semibold mb-4 text-left">Connect with Us</h3>
              <form className="flex flex-col space-y-3 w-full p-5 rounded-lg shadow-lg items-start bg-gradient-to-br from-gray-950 to-black border border-gray-700">
                <input
                  type="email"
                  placeholder="Enter your email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`p-2 rounded-md bg-purple-950 text-white text-sm border ${emailError ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 w-full`}
                />
                {emailError && <p className="text-red-400 text-xs -mt-2">{emailError}</p>}

                <input
                  type="tel"
                  placeholder="Enter your phone number *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`p-2 rounded-md bg-purple-950 text-white text-sm border ${phoneError ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 w-full`}
                />
                {phoneError && <p className="text-red-400 text-xs -mt-2">{phoneError}</p>}

                <button
                  type="button"
                  onClick={handleButtonClick}
                  disabled={!isFormValid || isSubmitted}
                  className={`
                    relative inline-flex h-12 w-full items-center justify-start border-2 border-blue-600 px-4 transition-all duration-500 rounded-md overflow-hidden
                    ${isSubmitted ? 'bg-blue-600' : 'bg-gray-900'}
                    ${!isFormValid || isSubmitted ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'}
                  `}
                >
                  <span
                    className={`absolute top-1/2 -translate-y-1/2 p-2 transition-all duration-500 rounded-md ${isSubmitted ? 'left-[calc(100%-2.5rem)] bg-white text-blue-600' : 'left-2 bg-white text-blue-600'}`}
                  >
                    {isSubmitted ? <Check size={20} /> : <Rocket size={20} />}
                  </span>

                  <span
                    className={`absolute left-1/2 -translate-x-1/2 font-semibold transition-all duration-500 ease-in-out text-white ${isSubmitted ? 'opacity-0 translate-x-12' : 'opacity-100'}`}
                  >
                    Submit
                  </span>

                  <span
                    className={`absolute left-1/2 -translate-x-1/2 font-semibold transition-all duration-500 ease-in-out text-white ${isSubmitted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
                  >
                    Done!
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm mt-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 mb-2 md:mb-0 font-serif">
            <a href="/legal/privacy.html" className="transform scale-100 hover:scale-90 transition duration-300">Privacy Policy</a>
            <a href="/legal/terms.html" className="transform scale-100 hover:scale-90 transition duration-300">Terms & Conditions</a>
            <a href="/legal/refund.html" className="transform scale-100 hover:scale-90 transition duration-300">Refund Policy</a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm text-center mt-6">
          &copy; 2025 Greenfinite. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
