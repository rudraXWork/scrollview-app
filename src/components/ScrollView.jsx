import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Section = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true , margin: "-100px" }); // false can be used to get the effect multiple time .

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-zinc-900 shadow-lg p-10 rounded-2xl max-w-2xl mx-auto my-20"
    >
      {children}
    </motion.div>
  );
};

const ScrollView = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="h-screen flex items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-gray-800">
          Scroll Down to See Magic ✨
        </h1>
      </header>

      <Section>
        <h2 className="text-3xl font-semibold mb-4">Section One</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          accumsan arcu. Quisque vel purus nec nulla facilisis viverra. Integer
          at urna lorem. Aenean porta metus et sapien volutpat fermentum.
        </p>
      </Section>

      <Section>
        <h2 className="text-3xl font-semibold mb-4">Section Two</h2>
        <p>
          Vivamus aliquet, enim sit amet laoreet blandit, mauris nulla tempor
          libero, sed ullamcorper ex elit sed ligula. Suspendisse vel libero
          finibus, eleifend velit non, fringilla nisl.
        </p>
      </Section>

      <Section>
        <h2 className="text-3xl font-semibold mb-4">Section Three</h2>
        <p>
          Proin condimentum, dolor nec facilisis fermentum, turpis ex viverra
          purus, nec commodo mauris leo ac risus. Phasellus vel nunc mi. Sed at
          diam sed libero faucibus tristique non ut elit.
        </p>
      </Section>

      <Section>
        <h2 className="text-3xl font-semibold mb-4">Section Four</h2>
        <p>
          Ut fringilla suscipit nunc non ultrices. Cras id tincidunt dui. Etiam
          lacinia sem ut tortor malesuada, et tristique ex dapibus. Curabitur
          congue, orci non lacinia dictum, ipsum turpis consequat lacus, ac
          pulvinar ex nunc non est.
        </p>
      </Section>

      <footer className="h-screen flex items-center justify-center">
        <h2 className="text-2xl text-gray-600">
          🎉 You reached the end. Smooth, right?
        </h2>
      </footer>
    </div>
  );
};

export default ScrollView;
