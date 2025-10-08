import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import ProductModal from "./ProductModal";

// Animated content component for scroll animations
const AnimatedContent = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="mb-6"
    >
      {children}
    </motion.div>
  );
};

const ScrollView_ex2 = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: "Product One", description: "A great product that does amazing things." },
    { id: 2, name: "Product Two", description: "This one is sleek, smooth, and powerful." },
    { id: 3, name: "Product Three", description: "Built for speed, efficiency, and style." },
    { id: 4, name: "Product Four", description: "Compact design, massive potential." },
    { id: 5, name: "Product Five", description: "Reliable and ready for any challenge." },
    { id: 6, name: "Product Six", description: "A smart companion for your creative projects." },
  ];

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <motion.nav className="bg-blue-500 flex py-5 px-10 items-center justify-between font-bold fixed w-full top-0 z-20 shadow-lg">
        <h1 className="text-4xl font-bold text-white">Project</h1>
        <div className="flex gap-8 items-center text-white">
          <a href="#home" className="text-xl font-semibold hover:text-yellow-200">Home</a>
          <a href="#about" className="text-xl font-semibold hover:text-yellow-200">About</a>
          <a href="#products" className="text-xl font-semibold hover:text-yellow-200">Product</a>
          <a href="#contact" className="text-xl font-semibold hover:text-yellow-200">Contact</a>
        </div>
      </motion.nav>

      {/* SECTION 1 */}
      <section
        id="home"
        className="bg-black text-white w-full min-h-screen flex flex-col justify-center items-start p-40"
      >
        <AnimatedContent>
          <h1 className="text-5xl font-bold mb-4">Welcome to Section One</h1>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <p className="text-lg leading-relaxed max-w-xl">
            This is the hero section. It introduces the page with a bold statement and subtle animation. Scroll down to see each part of this site reveal gracefully as you explore.
          </p>
        </AnimatedContent>
        <AnimatedContent delay={0.4}>
          <img
            src="https://picsum.photos/600/300"
            alt="Sample"
            className="rounded-xl shadow-lg mt-6"
          />
        </AnimatedContent>
      </section>

      {/* SECTION 2 */}
      <section
        id="about"
        className="bg-blue-200 w-full min-h-screen flex flex-col justify-center items-start p-40"
      >
        <AnimatedContent>
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <p className="text-lg max-w-2xl">
            We are a creative tech studio passionate about interactive design and user experience. Every animation you see here is powered by Framer Motion — one of the smoothest libraries for React animations.
          </p>
        </AnimatedContent>
        <AnimatedContent delay={0.4}>
          <div className="grid grid-cols-3 gap-6 mt-8">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="bg-white rounded-xl shadow-md p-6 text-black font-semibold text-center"
              >
                <p>Feature {num}</p>
              </div>
            ))}
          </div>
        </AnimatedContent>
      </section>

      {/* SECTION 3 - Products */}
      <section
        id="products"
        className="bg-green-200 w-full min-h-screen flex flex-col justify-center items-start p-40"
      >
        <AnimatedContent>
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
        </AnimatedContent>
        <div className="grid grid-cols-3 gap-8 mt-8">
          {products.map((product, index) => (
            <AnimatedContent key={product.id} delay={index * 0.1}>
              <div
                onClick={() => setSelectedProduct(product)}
                className="bg-white rounded-xl shadow-lg p-6 text-black text-center font-medium cursor-pointer hover:scale-105 transition-transform"
              >
                <img
                  src={`https://picsum.photos/200/150?random=${product.id}`}
                  alt={product.name}
                  className="rounded-lg mb-4"
                />
                {product.name}
              </div>
            </AnimatedContent>
          ))}
        </div>
      </section>

      {/* SECTION 4 */}
      <section
        id="contact"
        className="bg-amber-100 w-full min-h-screen flex flex-col justify-center items-start p-40"
      >
        <AnimatedContent>
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <p className="text-lg max-w-xl">
            Let’s get in touch! Scroll animations make even simple pages feel alive.
          </p>
        </AnimatedContent>
        <AnimatedContent delay={0.4}>
          <form className="mt-6 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg border border-gray-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg border border-gray-400"
            />
            <textarea
              placeholder="Your Message"
              className="p-3 rounded-lg border border-gray-400"
              rows="4"
            ></textarea>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </AnimatedContent>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default ScrollView_ex2;
