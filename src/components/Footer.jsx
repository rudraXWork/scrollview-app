import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300  realtive bottom-0 right-0 left-0 ">
      <div className="max-w-7xl mx-auto max-h-40 py-5 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-2">MOTION.APP ⚙️</h3>
          <p className="text-sm">Innovating the future of engineering with cutting-edge solutions.</p>
        </div>

      
        <div>
          <h3 className="text-md font-semibold text-sky-400 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
            {/* <li><Link to="/products" className='text-xl font-semibold  '>Product</Link></li> */}
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold text-sky-400 mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-white transition-colors">🔗 LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">🐦 Twitter</a>
            <a href="https://github.com/rudraXWork/" target="_blank" className="hover:text-white transition-colors">📁 GitHub</a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700 py-4 text-center">
        <p className="text-sm text-gray-400">&copy; {currentYear} Engineek Inc. | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;