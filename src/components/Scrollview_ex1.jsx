import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Section = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 200 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: .8, ease: "easeOut" }}
      className="w-full min-h-screen "
    >
      {children}
    </motion.div>
  );
};

const ScrollView_ex1 = () => {
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <motion.nav className="bg-blue-500 flex py-5 px-10 items-center justify-between font-bold fixed w-full top-0 z-20">
        <h1 className="text-4xl font-bold text-white">Project</h1>
        <div className="flex gap-8 items-center text-white">
          <a href="#home" className="text-xl font-semibold">Home</a>
          <a href="#about" className="text-xl font-semibold">About</a>
          <a href="#products" className="text-xl font-semibold">Product</a>
          <a href="#contact" className="text-xl font-semibold">Contact</a>
        </div>
      </motion.nav>

      {/* Sections */}
      <Section>
        <div
      
        id="home" className="bg-black text-white rounded-xl w-full h-screen p-40 ">
          <h1 className="text-4xl font-bold mb-4">Section One</h1>
          <p>Hey! I am the first section with scroll animation ✨</p>
        </div>
      </Section>

      <Section>
        <div id="about" className="bg-blue-200 rounded-xl w-full h-screen  p-40 ">
          <h1 className="text-4xl font-bold mb-4">Section Two</h1>
          <p>Hey! I am the second section with scroll animation ✨</p>
        </div>
      </Section>

      <Section>
        <div id="products" className="bg-green-200 rounded-xl w-full h-screen  p-40 ">
          <h1 className="text-4xl font-bold mb-4">Section Three</h1>
          <p>Hey! I am the third section with scroll animation ✨</p>
        </div>
      </Section>

      <Section>
        <div id="contact" className="bg-yellow-200 rounded-xlw-full h-screen  p-40  ">
          <h1 className="text-4xl font-bold mb-4">Section Four</h1>
          <p>Hey! I am the fourth section with scroll animation ✨</p>
        </div>
      </Section>
    </div>
  );
};

export default ScrollView_ex1;
