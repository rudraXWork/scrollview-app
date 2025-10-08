import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProductModal = ({ product, onClose }) => {
    return (

        // (AnimatePresence)It’s a wrapper component that helps animate elements when they appear or disappear in the React component tree.
       // Normally, React just adds/removes elements instantly. With AnimatePresence, you can have smooth enter and exit animations
      <AnimatePresence>    
        {product && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full text-center relative"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <button
                onClick={onClose}
                className="absolute top-3 right-4 text-gray-600 hover:text-black text-2xl"
              >
                ×
              </button>
              <img
                src={`https://picsum.photos/400/250?random=${product.id}`}
                alt={product.name}
                className="rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-4">
                {product.description || "This is a sample product description that you can customize."}
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Buy Now
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  export default ProductModal ;