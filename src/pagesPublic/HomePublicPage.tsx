import React from 'react';
import ArticleSection from '../componentsPublic/ArticleSection';

export const HomePublicPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <span className="bg-[#00BFFF]/10 text-[#00BFFF] border border-[#00BFFF]/20 text-xs px-3 py-1.5 rounded-full font-medium tracking-wide uppercase">
          Cyber Security & IT Advisory
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mt-6 mb-6">
          Securing Digital Assets with <span className="text-[#00BFFF]">Centa Limited</span>
        </h1>
        <p className="text-slate-400 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Mengamankan infrastruktur bisnis Anda dari potensi serangan cyber dengan metodologi penetration testing dan audit keamanan mutakhir.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/services" className="bg-[#00BFFF] text-[#050816] font-semibold px-6 py-3 rounded-lg hover:bg-[#00BFFF]/80 transition-colors">
            Our Services
          </a>
          <a href="#contact" className="border border-white/20 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/5 transition-colors">
            Contact Us
          </a>
        </div>
      </section>

      {/* Services Preview */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Layanan Keamanan Kami</h2>
          <p className="text-slate-400 text-sm mt-2">Solusi cyber security komprehensif untuk skala bisnis</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/[0.02] border border-white/10 p-6 rounded-xl hover:border-[#00BFFF]/40 transition-colors">
            <h3 className="text-lg font-bold text-[#00BFFF] mb-2">Penetration Testing</h3>
            <p className="text-slate-400 text-sm">Menguji ketahanan aplikasi dan jaringan web terhadap celah keamanan eksploitasi.</p>
          </div>
          <div className="bg-white/[0.02] border border-white/10 p-6 rounded-xl hover:border-[#00BFFF]/40 transition-colors">
            <h3 className="text-lg font-bold text-[#00BFFF] mb-2">Security Audit</h3>
            <p className="text-slate-400 text-sm">Evaluasi kepatuhan infrastruktur IT sesuai standar regulasi industri cyber.</p>
          </div>
          <div className="bg-white/[0.02] border border-white/10 p-6 rounded-xl hover:border-[#00BFFF]/40 transition-colors">
            <h3 className="text-lg font-bold text-[#00BFFF] mb-2">Incident Response</h3>
            <p className="text-slate-400 text-sm">Penanganan cepat dan mitigasi ancaman saat terjadi insiden atau kebocoran data.</p>
          </div>
        </div>
      </section>

      {/* Section Ringkasan Artikel */}
      <ArticleSection />
    </div>
  );
};

export default HomePublicPage;