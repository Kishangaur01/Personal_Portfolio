

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<header className="fixed w-full bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-md text-white shadow-md z-50">
  <nav className="container mx-auto flex justify-between items-center p-4">
    {/* Logo */}
    <div className="flex items-center gap-2">
      <img src="images/k_logo.png" alt="Kishan Logo" className="h-8 w-8" />
      <span className="text-2xl font-extrabold text-white">Kishan.Dev</span>
    </div>

    {/* Desktop Menu */}
    <div className="hidden md:flex gap-6 text-lg font-medium">
      <a href="#about" className="hover:text-violet-400 transition">About</a>
      <a href="#projects" className="hover:text-violet-400 transition">Projects</a>
      <a href="#contact" className="hover:text-violet-400 transition">Contact</a>
    </div>

    {/* Hamburger Icon */}
    <div className="md:hidden text-2xl cursor-pointer text-white" onClick={() => setMenuOpen(!menuOpen)}>
      {menuOpen ? <FaTimes /> : <FaBars />}
    </div>
  </nav>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="md:hidden bg-black/80 text-white w-full text-center py-4 space-y-4 text-lg font-medium">
      <a href="#about" onClick={() => setMenuOpen(false)} className="block hover:text-violet-400">About</a>
      <a href="#projects" onClick={() => setMenuOpen(false)} className="block hover:text-violet-400">Projects</a>
      <a href="#contact" onClick={() => setMenuOpen(false)} className="block hover:text-violet-400">Contact</a>
    </div>
  )}
</header>
);
}