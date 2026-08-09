import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const NavbarPublic: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#050816]/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Centa */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/logo-centa.jpeg" 
            alt="Centa Limited" 
            className="h-10 w-auto hover:scale-105 transition-transform rounded" 
            onError={(e) => {
              n
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <span className="text-xl font-bold tracking-tight text-white">
            Centa<span className="text-[#00BFFF] font-medium ml-1">Limited</span>
          </span>
        </Link>

        
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
          <Link to="/" className="hover:text-[#00BFFF] transition-colors">01 Home</Link>
          <Link to="/services" className="hover:text-[#00BFFF] transition-colors">02 Services</Link>
          <Link to="/articles" className="hover:text-[#00BFFF] transition-colors">03 Articles</Link>
          <a href="#about" className="hover:text-[#00BFFF] transition-colors">04 About</a>
          <a href="#contact" className="hover:text-[#00BFFF] transition-colors">05 Contact</a>
        </div>

        {/* Tombol Hamburger (Mobile) */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 hover:text-white p-2"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

     
      {isOpen && (
        <div className="md:hidden bg-[#050816] border-b border-white/10 px-6 py-4 space-y-3 text-sm text-slate-300">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-[#00BFFF]">01 Home</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block hover:text-[#00BFFF]">02 Services</Link>
          <Link to="/articles" onClick={() => setIsOpen(false)} className="block hover:text-[#00BFFF]">03 Articles</Link>
          <a href="#about" onClick={() => setIsOpen(false)} className="block hover:text-[#00BFFF]">04 About</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-[#00BFFF]">05 Contact</a>
        </div>
      )}
    </nav>
  );
};

export default NavbarPublic;