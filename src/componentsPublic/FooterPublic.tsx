import React from 'react';
import { Link } from 'react-router-dom';

export const FooterPublic: React.FC = () => {
  return (
    <footer className="bg-[#050816] border-t border-white/10 text-slate-400 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Kolom 1: Logo & Deskripsi */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img 
              src="/logo-centa.jpeg" 
              alt="Centa Limited" 
              className="h-8 w-auto rounded"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }} 
            />
            <span className="text-lg font-bold text-white">Centa<span className="text-[#00BFFF]">Limited</span></span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Penyedia layanan Cyber Security dan IT Solution terpercaya untuk mengamankan aset digital bisnis Anda.
          </p>
        </div>

        {/* Kolom 2: Quick Links */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-xs">
            <li><Link to="/" className="hover:text-[#00BFFF]">Home</Link></li>
            <li><Link to="/services" className="hover:text-[#00BFFF]">Services</Link></li>
            <li><Link to="/articles" className="hover:text-[#00BFFF]">Articles & News</Link></li>
          </ul>
        </div>

        {/* Kolom 3: Services */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-xs">
            <li>Penetration Testing</li>
            <li>Network Security</li>
            <li>Cyber Incident Response</li>
            <li>Security Audit</li>
          </ul>
        </div>

        {/* Kolom 4: Contact */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-4">Contact Us</h4>
          <p className="text-xs text-slate-400">Email: info@centalimited.com</p>
          <p className="text-xs text-slate-400 mt-1">Cyber Security & IT Advisory</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Centa Limited. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterPublic;