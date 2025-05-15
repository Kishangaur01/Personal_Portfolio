

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-10 mt-20">
  <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
    <div className="text-center md:text-left">
      <h1 className="text-2xl font-semibold">Kishan Kumar Gaur</h1>
    </div>

    <div className="flex items-center space-x-4">
      <span className="text-gray-300 text-sm mr-2">Connect with me:</span>
      <a href="https://github.com/Kishangaur01" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400">
        <FaGithub size={22} />
      </a>
      <a href="https://www.linkedin.com/in/kishan-kumar-gaur-22a806288/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400">
        <FaLinkedin size={22} />
      </a>
      <a href="mailto:kishan@example.com" className="hover:text-violet-400">
        <FaEnvelope size={22} />
      </a>
    </div>
  </div>

  <div className="border-t border-white/20 mt-8 pt-6 text-center text-gray-400 text-sm">
    &copy; {new Date().getFullYear()} Kishan Kumar Gaur. All rights reserved.
  </div>
</footer>

  );
};

export default Footer;
