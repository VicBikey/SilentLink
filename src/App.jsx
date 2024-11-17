// import './App.css'
// import Accordian from './components/accordian'


// function App() {

//   return (
//     <>
//       <div className='App'>
//         <Accordian/>
        
//       </div>
//     </>
//   )
// }

// export default App


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // Ensure this is imported if styles are in index.css

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-gray-600 text-gray-900 min-h-screen">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-gray-600 bg-sky-900 text-white relative">
        <div className="flex items-center overflow-hidden">
          <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fd1muf25xaso8hp.cloudfront.net%2Fhttps%3A%2F%2F2dcff78b1b9ac528c1c5078b1f0a3aaa.cdn.bubble.io%2Ff1729680365077x174620920987068830%2FAI-Generated-Image.png?w=1024&h=1024&auto=compress&dpr=1&=&fit=crop&crop=entropy" alt="Logo" className="h-10 w-10 rounded-full object-cover" />
          <span className="ml-3 text-2xl font-bold text-yellow-200/50 text-white">SilentLink</span>
        </div>
        <div className="hidden md:flex space-x-6 items-center font-bold">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/features" className="hover:text-blue-400">Features</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
          <Link to="/anonyLink" className="hover:text-blue-400">AnonyLink</Link>
          <button className="bg-sky-800 text-sky-300 py-3 px-5 rounded-lg text-white font-medium hover:bg-sky-700/50 hover:text-sky-400 transition duration-300">
            Sign up
          </button>
        </div>
        <button
          className="block md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-3/4 h-full bg-black text-white transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-50 flex flex-col items-center justify-center`}
        >
          <div className="flex flex-col space-y-14 py-16 font-bold">
            <Link to="/" className="text-lg text-white hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/features" className="text-lg text-white hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Features</Link>
            <Link to="/contact" className="text-lg text-white hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link to="/anonyLink" className="text-lg text-white hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>AnonyLink</Link>
            <button
              className="bg-sky-800/50 text-sky-300 py-3 px-6 rounded-lg text-lg font-medium hover:bg-sky-800/60 hover:text-sky-200 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative sm:flex lg:flex-row md:flex-col sm:flex-col md:gap-10 lg:items-center md:items-start sm:items-start justify-center md:justify-between bg-sky-900 text-white pt-10 pb-20 lg:px-32 md:px-10 sm:px-32">
        <div className="md:w-3/4 mb-10 md:mb-0 ml-2 mx-auto">
          <h2 className="text-md font-bold text-sky-300 mb-2">#1 on Privacy Apps</h2>
          <h1 className="text-6xl md:text-6xl sm:text-5xl font-bold mb-4 md:leading-[1.2] sm:leading-[1.2] text-yellow-200/50">Send Anonymous Messages Securely</h1>
          <p className="text-lg mb-6">With SilentLink, ensure your messages remain confidential across platforms, empowering you to connect safely and securely.</p>
          <button className="bg-sky-800 text-sky-300 py-3 px-8 rounded-lg text-md font-medium shadow-md hover:bg-sky-700/50 hover:text-sky-400 transition duration-300">
            Sign up today
          </button>
        </div>
        <div className="md:w-3/4 justify-center">
          <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fd1muf25xaso8hp.cloudfront.net%2Fhttps%3A%2F%2F2dcff78b1b9ac528c1c5078b1f0a3aaa.cdn.bubble.io%2Ff1729680389724x368345657020112000%2FAI-Generated-Image.png?w=1024&h=1024&auto=compress&dpr=1&=&fit=crop&crop=entropy" alt="Hero Illustration" className="w-full h-auto max-w-lg mx-auto" />
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-12 bg-gray-700 text-white px-6 md:px-20 bg-black bg-yellow-200/10 text-yellow-200/50">
        <h2 className="text-4xl font-bold mb-4 text-center">The #1 Anonymous Messaging Tool</h2>
        <p className="text-lg mb-8 text-center">As recognized by leading IT security experts worldwide</p>
        <div className="flex justify-center items-center gap-4">
          {/* Replace these URLs with your actual image URLs */}
          <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fd1muf25xaso8hp.cloudfront.net%2Fhttps%3A%2F%2F2dcff78b1b9ac528c1c5078b1f0a3aaa.cdn.bubble.io%2Ff1729680383775x922672579545488400%2FAI-Generated-Image.png?w=1187.2&h=896&auto=compress&dpr=1&=&fit=crop&crop=entropy" alt="Expert 1" className="h-20 object-contain" />
          <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fd1muf25xaso8hp.cloudfront.net%2Fhttps%3A%2F%2F2dcff78b1b9ac528c1c5078b1f0a3aaa.cdn.bubble.io%2Ff1729680378029x496023106558927360%2FAI-Generated-Image.png?w=1187.2&h=896&auto=compress&dpr=1&=&fit=crop&crop=entropy" alt="Expert 2" className="h-20 object-contain" />
          <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fd1muf25xaso8hp.cloudfront.net%2Fhttps%3A%2F%2F2dcff78b1b9ac528c1c5078b1f0a3aaa.cdn.bubble.io%2Ff1729680407225x505699231607210200%2FAI-Generated-Image.png?w=1187.2&h=896&auto=compress&dpr=1&=&fit=crop&crop=entropy" alt="Expert 3" className="h-20 object-contain" />
          <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fd1muf25xaso8hp.cloudfront.net%2Fhttps%3A%2F%2F2dcff78b1b9ac528c1c5078b1f0a3aaa.cdn.bubble.io%2Ff1729680401140x430637088078786600%2FAI-Generated-Image.png?w=1187.2&h=896&auto=compress&dpr=1&=&fit=crop&crop=entropy" alt="Expert 4" className="h-20 object-contain" />
          <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fd1muf25xaso8hp.cloudfront.net%2Fhttps%3A%2F%2F2dcff78b1b9ac528c1c5078b1f0a3aaa.cdn.bubble.io%2Ff1729680395626x535997879937775800%2FAI-Generated-Image.png?w=1187.2&h=896&auto=compress&dpr=1&=&fit=crop&crop=entropy" alt="Expert 5" className="h-20 object-contain" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-700 text-white px-6 md:px-20 bg-black bg-yellow-200/10">
        <h2 className="text-4xl font-bold mb-8 text-center text-yellow-200/70">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-yellow-200/100 bg-sky-800/50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2 ">Anonymous Messaging</h3>
            <p>Send messages securely without revealing your identity, perfect for feedback or sensitive communication.</p>
          </div>
          <div className="bg-sky-800/50 text-yellow-200/100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Cross-Platform Support</h3>
            <p>Works seamlessly on multiple platforms, ensuring your communication remains uninterrupted.</p>
          </div>
          <div className="bg-sky-800/50 text-yellow-200/100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Encryption & Security</h3>
            <p>All messages are encrypted, ensuring that your data stays safe and private.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 text-white px-6 md:px-20 text-white-900 bg-yellow-400/50 ">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-400/100 ">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        

          <div className="p-6 bg-sky-800/50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Step 1: Create an Account</h3>
            <p className='text-blue-300 font-bold'>Sign up with your email and start sending messages immediately.</p>
          </div>
          <div className="p-6 bg-sky-800/50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Step 2: Send a Message</h3>
            <p className='text-blue-300 font-bold'>Compose your message and send it to your intended recipient securely.</p>
          </div>
          <div className="p-6 bg-sky-800/50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Step 3: Stay Anonymous</h3>
            <p className='text-blue-300 font-bold'>Your identity is hidden, so you can communicate freely without fear.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-700 text-white px-6 md:px-20 bg-yellow-400/50">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-400/100">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-sky-800/50 rounded-lg shadow-lg">
            <p className='text-blue-300 font-bold'>"SilentLink changed the way I communicate sensitive information. It's secure and easy to use!"</p>
            <span className="block mt-4 font-bold">- User A</span>
          </div>
          <div className="p-6 bg-sky-800/50 rounded-lg shadow-lg">
            <p className='text-blue-300 font-bold'>"I feel confident knowing my identity is protected when providing feedback."</p>
            <span className="block mt-4 font-bold">- User B</span>
          </div>
          <div className="p-6 bg-sky-800/50 rounded-lg shadow-lg">
            <p className='text-blue-300 font-bold'>"The cross-platform capability is a game-changer for my team."</p>
            <span className="block mt-4 font-bold">- User C</span>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20 bg-sky-900 text-white px-6 md:px-20">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
        <form className="max-w-2xl mx-auto">
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input type="text" id="name" className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white" />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea id="message" className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-sky-800/50 text-sky-300 py-3 px-8 rounded-lg text-md font-medium shadow-md hover:bg-blue-700 transition duration-300">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default App;