import React from 'react'; 

const Footer = () => { 
  const currentYear = new Date().getFullYear(); 

  return ( 
    <footer className="bg-slate-900 text-gray-300 relative bottom-0 right-0 left-0 border-t border-slate-800"> 
   
      <div className="max-w-7xl mx-auto py-6 sm:py-8 px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"> 
        
 
        <div className="flex flex-col items-center md:items-start text-center md:text-left"> 
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">MOTION.APP ⚙️</h3> 
          <p className="text-sm sm:text-base max-w-xs">Innovating the future of engineering with cutting-edge solutions.</p> 
        </div> 

    
        <div className="text-center md:text-left"> 
          <h3 className="text-lg font-semibold text-sky-400 mb-3 border-b border-sky-600/50 inline-block pb-1">Quick Links</h3> 
          <ul className="space-y-2"> 
            <li><a href="#" className="hover:text-white transition-colors block py-0.5">Services</a></li> 
     
            <li><a href="#" className="hover:text-white transition-colors block py-0.5">Careers</a></li> 
          </ul> 
        </div> 

  
        <div className="text-center md:text-left"> 
          <h3 className="text-lg font-semibold text-sky-400 mb-4 border-b border-sky-600/50 inline-block pb-1">Follow Us</h3> 
          {/* Flex container alignment is centered by default, and changed to start at md: */}
          <div className="flex justify-center md:justify-start space-x-4"> 
            <a href="#" className="hover:text-white transition-colors flex items-center space-x-1">
              <span>🔗</span> <span>LinkedIn</span>
            </a> 
            <a href="#" className="hover:text-white transition-colors flex items-center space-x-1">
              <span>🐦</span> <span>Twitter</span>
            </a> 
            <a href="https://github.com/rudraXWork/" target="_blank" className="hover:text-white transition-colors flex items-center space-x-1">
              <span>📁</span> <span>GitHub</span>
            </a> 
          </div> 
        </div> 
      </div> 

      {/* Copyright Bar */}
      <div className="border-t border-slate-700 py-4 text-center"> 
        <p className="text-sm text-gray-400">&copy; {currentYear} Engineek Inc. | All Rights Reserved</p> 
      </div> 
    </footer> 
  ); 
}; 

export default Footer;
