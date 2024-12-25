import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#121212] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p className="text-gray-400">
            We provide the best smart benches that blend technology and design to enhance your comfort and experience.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-purple-500">Home</a></li>
            <li><a href="Features" className="hover:text-purple-500">Features</a></li>
            <li><a href="Pricing" className="hover:text-purple-500">Pricing</a></li>
            <li><a href="Footer" className="hover:text-purple-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#1E1E1E] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition duration-300 shadow-md hover:shadow-purple-500/50"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 mt-12">
        <p>&copy; {new Date().getFullYear()} Smart Benches. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
