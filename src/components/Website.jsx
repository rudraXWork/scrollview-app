import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Footer from "./Footer";


const AnimatedContent = ({ children, delay = 0 }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false , margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="mb-6"
    >
      {children}
    </motion.div>
  );
};



const ProductModal = ({ product, onClose }) => {
    return (
      <AnimatePresence>
        {/* Only render if product is selected */}
        {product && (
          // Backdrop
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose} // Close when clicking the backdrop
          >
            {/* Modal Content */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-2xl max-w-lg w-full text-center relative"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-3 right-4 text-gray-500 hover:text-black text-3xl font-light transition-colors"
              >
                &times;
              </button>
              <img
                src={`https://placehold.co/400x250/3b82f6/ffffff?text=${encodeURIComponent(product.name)}`}
                alt={product.name}
                className="rounded-xl mb-6 mx-auto w-full max-w-xs sm:max-w-md shadow-lg"
              />
              <h2 className="text-3xl font-extrabold text-gray-900 mb-3">{product.name}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description || "This is a sample product description that you can customize."}
              </p>
              <div className="flex justify-center space-x-4">
                <button 
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition transform hover:scale-105 shadow-md"
                >
                  Buy Now (${(Math.random() * 100 + 10).toFixed(2)})
                </button>
                <button 
                  onClick={onClose}
                  className="bg-gray-200 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition"
                >
                  Go Back
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };


const Website = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
      { id: 1, name: "AquaSynth Pro", description: "A cutting-edge device for synthesized water purification, featuring AI monitoring." },
      { id: 2, name: "TerraPad 7X", description: "The sleekest tablet experience with a titanium chassis and quantum dot display." },
      { id: 3, name: "AeroGlide Drone", description: "Built for speed and high-resolution aerial photography, ideal for professionals." },
      { id: 4, name: "ChronoWatch Elite", description: "A minimalist smartwatch with comprehensive health tracking and a 30-day battery life." },
      { id: 5, name: "NovaLink Router", description: "Reliable and ready for any challenge, providing ultra-fast, mesh-enabled Wi-Fi 7." },
      { id: 6, name: "Spectra Keyboard", description: "A smart mechanical keyboard with adaptive RGB lighting and customizable macros." },
    ];

  return (
    <div className="bg-gray-50 min-h-screen font-inter">
      <style>{`
        .font-inter { font-family: 'Inter', sans-serif; }
        html { scroll-behavior: smooth; }
      `}</style>
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />

      {/* Navbar */}
      <motion.nav 
        className="bg-blue-600 flex py-4 px-8 sm:px-16 items-center justify-between font-bold fixed w-full top-0 z-20 shadow-xl"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wider">MOTION.APP</h1>
        <div className="flex gap-4 sm:gap-8 items-center text-white">
          <a href="#home" className="text-base sm:text-lg font-semibold hover:text-yellow-300 transition-colors hidden sm:block">Home</a>
          <a href="#about" className="text-base sm:text-lg font-semibold hover:text-yellow-300 transition-colors hidden sm:block">About</a>
          <a href="#products" className="text-base sm:text-lg font-semibold hover:text-yellow-300 transition-colors">Products</a>
          <a href="#contact" className="text-base sm:text-lg font-semibold hover:text-yellow-300 transition-colors hidden sm:block">Contact</a>
        </div>
      </motion.nav>

      {/* SECTION 1 - HOME */}
      <section
        id="home"
        className="bg-gray-900 text-white w-full min-h-screen flex flex-col justify-center items-start pt-24 pb-16 px-8 sm:px-16 lg:px-40"
      >
        <div className="max-w-3xl">
          <AnimatedContent>
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight">
              Seamless Animations, Powerful Experiences
            </h1>
          </AnimatedContent>
          <AnimatedContent delay={0.2}>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
              This demo showcases scroll-linked animations and smooth modal transitions, all crafted with React and Framer Motion.
            </p>
          </AnimatedContent>
          <AnimatedContent delay={0.4}>
            <a href="#products" className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition transform hover:scale-105 shadow-lg">
              Explore Now &darr;
            </a>
          </AnimatedContent>
          <AnimatedContent delay={0.6}>
            <img
              src="https://placehold.co/800x450/1f2937/d1d5db?text=Interactive+Dashboard+Mockup"
              alt="Sample Dashboard"
              className="rounded-xl shadow-2xl mt-12 w-full"
            />
          </AnimatedContent>
        </div>
      </section>

      {/* SECTION 2 - ABOUT */}
      <section
        id="about"
        className="bg-white w-full min-h-screen flex flex-col justify-center items-start pt-24 pb-16 px-8 sm:px-16 lg:px-40 border-b border-gray-200"
      >
        <AnimatedContent>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">About Our Technology</h1>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <p className="text-lg text-gray-600 max-w-4xl mb-12">
            We are a creative studio focused on bringing digital products to life. Our foundation lies in accessible, high-performance web development, leveraging modern tools like React and Framer Motion for superior interactivity.
          </p>
        </AnimatedContent>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {[
            { title: "Performance", icon: "🚀", description: "Optimized for speed and minimal load times across all devices." },
            { title: "User Experience", icon: "✨", description: "Intuitive interfaces with delightful micro-interactions." },
            { title: "Responsive Design", icon: "📱", description: "Flawless rendering and usability, from mobile to desktop." }
          ].map((item, index) => (
            <AnimatedContent key={index} delay={0.3 + index * 0.1}>
              <div className="bg-gray-100 rounded-2xl shadow-lg p-8 h-full transition hover:shadow-xl hover:bg-gray-200">
                <span className="text-5xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </section>

     {/* SECTION 3 - PRODUCTS */}
     <section 
        id="products" 
        className="bg-blue-50 w-full min-h-screen flex flex-col justify-center items-start pt-24 pb-16 px-8 sm:px-16 lg:px-40"
    >
        <AnimatedContent>
          <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-gray-900">Featured Products</h1>
        </AnimatedContent>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {products.map((product, index) => (
            <AnimatedContent key={product.id} delay={index * 0.1}>
              <div
                onClick={() => setSelectedProduct(product)} // Open modal on click
                className="bg-white rounded-2xl shadow-xl p-6 text-black text-center font-medium cursor-pointer transition transform duration-300 hover:scale-[1.03] hover:shadow-2xl border border-gray-100"
              >
                <img
                  src={`https://placehold.co/400x300/e0f2fe/1e3a8a?text=${encodeURIComponent(product.name)}`}
                  alt={product.name}
                  className="rounded-xl mb-4 w-full h-36 object-cover"
                />
                <h3 className="text-xl font-bold text-blue-600 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                <button 
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition"
                >
                    View Details
                </button>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </section>

      {/* SECTION 4 - CONTACT */}
      <section
        id="contact"
        className="bg-gray-900 text-white w-full min-h-screen flex flex-col justify-center items-start pt-24 pb-16 px-8 sm:px-16 lg:px-40"
      >
        <AnimatedContent>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h1>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <p className="text-lg text-gray-400 max-w-xl mb-8">
            Ready to start a project? Send us a message and let's create something animated and amazing together.
          </p>
        </AnimatedContent>
        <AnimatedContent delay={0.4}>
          <form className="mt-6 flex flex-col gap-5 bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-xl">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg border-2 border-gray-700 bg-gray-900 text-white focus:ring-blue-500 focus:border-blue-500 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg border-2 border-gray-700 bg-gray-900 text-white focus:ring-blue-500 focus:border-blue-500 transition"
            />
            <textarea
              placeholder="Your Message"
              className="p-3 rounded-lg border-2 border-gray-700 bg-gray-900 text-white focus:ring-blue-500 focus:border-blue-500 transition"
              rows="4"
            ></textarea>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition transform hover:scale-[1.02] shadow-md">
              Send Message
            </button>
          </form>
        </AnimatedContent>
      </section>

      {/* Modal is rendered here */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      
      <Footer/>
    </div>
    
  );
};


export default Website;
