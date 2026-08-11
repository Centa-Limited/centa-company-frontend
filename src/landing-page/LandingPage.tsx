import React, { useState, useEffect } from 'react';
import { 
  Moon, 
  Sun, 
  Menu, 
  X, 
  ShieldCheck, 
  ShieldAlert, 
  Cpu, 
  Lock, 
  Mail, 
  Phone,
  ChevronDown,
  User,
  Send,
  AppWindow,
  Terminal,
  Server,
  FileText,
  HelpCircle,
  Code
} from 'lucide-react';

export default function LandingPage() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState<boolean>(false);

  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Data Anggota Tim dari Dashboard
  const teamMembers = [
    { name: "Yudi Ardata", role: "Founder" },
    { name: "Ach. Nur Wahyudi", role: "App Development" },
    { name: "Goestaf Nurhidayat", role: "Web Development" },
    { name: "Muh. Rifqi", role: "Marketing" },
    { name: "Desvita Putri Varizka", role: "UI/UX" },
  ];

  // Tech Stack / Tools Logo Items
  const techStack = [
    "Software Engineering", "Cyber Security", "Pentesting", "Web & App Dev", "Cloud Security", "AI Security"
  ];

  // Data FAQ
  const faqs = [
    {
      q: "Berapa lama proses Penetration Testing dilakukan?",
      a: "Durasi pengerjaan bergantung pada cakupan (scope) sistem, rata-rata memakan waktu 3 hingga 14 hari kerja termasuk penyusunan laporan audit."
    },
    {
      q: "Apakah data perusahaan kami dijamin kerahasiaannya?",
      a: "Tentu. Kami menandatangani Non-Disclosure Agreement (NDA) legal sebelum analisis dan pentest sistem dimulai."
    },
    {
      q: "Format laporan apa yang akan kami terima?",
      a: "Anda akan mendapatkan executive summary untuk manajemen dan technical report komprehensif berisi daftar celah keamanan beserta panduan remedi (penambalannya)."
    }
  ];

  // Form State
  const [contactForm, setContactForm] = useState({
    nama: '',
    telepon: '',
    layanan: 'Penetration Testing',
    deskripsi: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    setIsAboutDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Terima kasih ${contactForm.nama}, pesan kamu telah terkirim!`);
    setContactForm({ nama: '', telepon: '', layanan: 'Penetration Testing', deskripsi: '' });
  };

  return (
    <div className={`font-sans transition-colors duration-300 min-h-screen relative overflow-x-hidden ${
      isDarkMode ? 'bg-gray-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      
      {/* Background Cyber Grid Pattern */}
      <div className={`fixed inset-0 pointer-events-none -z-10 ${
        isDarkMode 
          ? 'bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)]' 
          : 'bg-[linear-gradient(to_right,#cbd5e130_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e130_1px,transparent_1px)]'
      } bg-[size:32px_32px]`} />

      {/* Background Glow Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed top-[40%] right-[-10%] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 ${
          isScrolled 
            ? isDarkMode 
              ? 'bg-gray-950/80 backdrop-blur-md border-b border-slate-800/80' 
              : 'bg-white/80 backdrop-blur-md border-b border-slate-200'
            : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-xl font-bold tracking-widest flex items-center gap-2">
            CENTA <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">LIMITED</span>
          </a>
          
          <ul className="hidden md:flex space-x-8 text-sm font-medium opacity-80 items-center">
            <li>
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-cyan-400 transition-colors">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('services')} className="hover:text-cyan-400 transition-colors">
                Service
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('aplikasi')} className="hover:text-cyan-400 transition-colors">
                Aplikasi
              </button>
            </li>

            {/* Dropdown Tentang */}
            <li className="relative">
              <button 
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-colors py-2 focus:outline-none"
              >
                <span>Tentang</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isAboutDropdownOpen && (
                <div className={`absolute top-full left-0 w-40 py-2 rounded-xl shadow-xl border backdrop-blur-md z-50 ${
                  isDarkMode ? 'bg-slate-900/90 border-slate-800 text-slate-200' : 'bg-white/95 border-slate-200 text-slate-800'
                }`}>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
                  >
                    About Us
                  </button>
                  <button 
                    onClick={() => scrollToSection('team')}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
                  >
                    Team
                  </button>
                </div>
              )}
            </li>

            <li>
              <button onClick={() => scrollToSection('faq')} className="hover:text-cyan-400 transition-colors">
                FAQ
              </button>
            </li>

            <li>
              <button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition-colors">
                Contact
              </button>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className={`flex items-center space-x-2 text-xs font-medium px-3 py-2 rounded-lg border transition-all ${
                isDarkMode 
                  ? 'border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-300' 
                  : 'border-slate-300 bg-white hover:bg-slate-100 text-slate-700'
              }`}
            >
              {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
            </button>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`fixed inset-0 z-40 flex flex-col items-center justify-center space-y-6 text-lg font-medium backdrop-blur-xl ${
          isDarkMode ? 'bg-gray-950/95 text-slate-200' : 'bg-white/95 text-slate-800'
        }`}>
          <button onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</button>
          <button onClick={() => scrollToSection('services')}>Service</button>
          <button onClick={() => scrollToSection('aplikasi')}>Aplikasi</button>
          <button onClick={() => scrollToSection('about')}>About Us</button>
          <button onClick={() => scrollToSection('team')}>Team Internal</button>
          <button onClick={() => scrollToSection('faq')}>FAQ</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20 space-y-32">
        
        {/* Hero Section (Home) */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            
            {/* Live SOC Status Pill Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>SOC Monitoring Active 24/7</span>
            </div>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
  Next-Gen <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Cyber Security</span> Solutions
</h1>
            
            <p className="text-slate-400 text-lg leading-relaxed">
              Protecting your enterprise infrastructure, cloud networks, and digital assets with enterprise-grade proactive defense mechanisms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button onClick={() => scrollToSection('contact')} className="px-6 py-3.5 rounded-xl font-semibold text-center text-gray-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-500/25">
                Hubungi Kami
              </button>
              <button onClick={() => scrollToSection('services')} className={`px-6 py-3.5 rounded-xl font-semibold border transition-all ${
                isDarkMode ? 'border-slate-700 hover:border-slate-500 bg-slate-900/40 text-slate-200' : 'border-slate-300 hover:border-slate-400 bg-white text-slate-800'
              }`}>
                Lihat Layanan
              </button>
            </div>
            
            <div className={`grid grid-cols-3 gap-6 pt-8 border-t ${isDarkMode ? 'border-slate-800/80' : 'border-slate-200'}`}>
              <div>
                <h3 className="text-2xl font-bold">99.9%</h3>
                <p className="text-xs text-slate-400 mt-1">Threat Mitigation</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">24/7</h3>
                <p className="text-xs text-slate-400 mt-1">SOC Monitoring</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">500+</h3>
                <p className="text-xs text-slate-400 mt-1">Global Clients</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className={`p-4 rounded-2xl border backdrop-blur-md shadow-2xl relative ${
              isDarkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white/80 border-slate-200'
            }`}>
              <span className="absolute top-7 left-7 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 backdrop-blur-md">
                Live Threat Monitoring
              </span>
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80" 
                alt="Cyber Security" 
                className="rounded-xl w-full object-cover h-[350px]"
              />
              <div className="mt-4 flex justify-between items-center px-2">
                <span className="text-sm font-medium opacity-80">System Status: Secured</span>
                <ShieldCheck className="text-cyan-400 w-5 h-5" />
              </div>
            </div>
          </div>
        </section>

        {/* Running Tech Stack Bar */}
        <section className={`py-6 rounded-2xl border backdrop-blur-md ${
          isDarkMode ? 'bg-slate-900/30 border-slate-800/80' : 'bg-white/50 border-slate-200'
        }`}>
          <p className="text-center text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">Secured & Powered By Industry Standards</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 px-4">
            {techStack.map((tech, idx) => (
              <span key={idx} className="text-sm font-mono font-semibold opacity-60 hover:opacity-100 hover:text-cyan-400 transition-all cursor-default flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" /> {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Service / Layanan Section */}
        <section id="services" className="space-y-12 scroll-mt-28">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold">Layanan <span className="text-cyan-400">Senta</span></h2>
            <p className="text-slate-400">Layanan keamanan cyber profesional yang dirancang untuk melindungi sistem digital Anda.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-8 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] group relative overflow-hidden ${
              isDarkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <span className={`text-4xl font-extrabold transition-colors absolute top-4 right-6 ${
                isDarkMode ? 'text-slate-800 group-hover:text-cyan-500/20' : 'text-slate-200 group-hover:text-cyan-500/20'
              }`}>01</span>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                <ShieldAlert className="text-cyan-400 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Penetration Testing</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Simulasi serangan siber untuk menemukan dan memperbaiki celah keamanan sebelum dimanfaatkan oleh peretas.</p>
            </div>

            <div className={`p-8 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] group relative overflow-hidden ${
              isDarkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <span className={`text-4xl font-extrabold transition-colors absolute top-4 right-6 ${
                isDarkMode ? 'text-slate-800 group-hover:text-cyan-500/20' : 'text-slate-200 group-hover:text-cyan-500/20'
              }`}>02</span>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                <Cpu className="text-cyan-400 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cloud Security</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Pemantauan dan pengerasan infrastruktur cloud (AWS, Azure, GCP) secara menyeluruh dan berkelanjutan.</p>
            </div>

            <div className={`p-8 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] group relative overflow-hidden ${
              isDarkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <span className={`text-4xl font-extrabold transition-colors absolute top-4 right-6 ${
                isDarkMode ? 'text-slate-800 group-hover:text-cyan-500/20' : 'text-slate-200 group-hover:text-cyan-500/20'
              }`}>03</span>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                <Lock className="text-cyan-400 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Incident Response</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Penanganan cepat, isolasi ancaman, dan pemulihan data saat terjadi insiden kebocoran keamanan.</p>
            </div>
          </div>
        </section>

        {/* Aplikasi Centa Section */}
        <section id="aplikasi" className="space-y-12 scroll-mt-28">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold">Aplikasi <span className="text-cyan-400">Senta</span></h2>
            <p className="text-slate-400">Ekosistem aplikasi dan tools keamanan buatan internal Centa.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] ${
              isDarkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <AppWindow className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Grabber</h3>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-semibold">Security Tool</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">Aplikasi otomatisasi pengumpul data ancaman siber dan identifikasi vulnerabilitas server secara mendalam.</p>
            </div>

            <div className={`p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] ${
              isDarkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Sentinel Engine</h3>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-semibold">AI Security</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">Engine berbasis AI untuk mendeteksi anomali lalu lintas jaringan dan percobaan peretasan waktu nyata.</p>
            </div>

            <div className={`p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] ${
              isDarkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">NetTrace Pro</h3>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-semibold">Network Audit</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">Visualisator traffic jaringan terperinci untuk pelacakan jejak malware dan paket data mencurigakan.</p>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="space-y-6 scroll-mt-28">
          <div className={`p-8 md:p-12 rounded-3xl border backdrop-blur-md space-y-6 ${
            isDarkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6 border-slate-800/60">
              <div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase tracking-wider">
                  Software Engineering & Cyber Security
                </span>
                <h2 className="text-3xl font-bold mt-2">Tentang <span className="text-cyan-400">Centa Limited</span></h2>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Code className="w-5 h-5 text-cyan-400" />
                <span>Modern Engineering</span>
                <span className="text-slate-600">•</span>
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <span>Advanced Security</span>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-base md:text-lg">
              <strong className="text-white">Centa Limited</strong> adalah perusahaan teknologi yang bergerak di bidang <strong className="text-cyan-400">Software Engineering</strong> dan <strong className="text-cyan-400">Cyber Security</strong>. Kami berfokus pada perancangan, pengembangan, dan pengamanan sistem informasi modern berskala enterprise.
            </p>

            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              Dengan memadukan standar pengodean tingkat tinggi, arsitektur perangkat lunak yang andal, serta pengujian penetrasi (penetration testing) yang mendalam, kami memastikan bahwa setiap produk digital—mulai dari aplikasi web, mobile, hingga infrastruktur cloud—dapat beroperasi secara optimal dan kebal terhadap berbagai ancaman peretasan siber.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10">
                <h4 className="font-bold text-cyan-400 text-sm mb-1">Secure Software Dev</h4>
                <p className="text-xs text-slate-400">Pengembangan aplikasi mengutamakan arsitektur keamanan tingkat tinggi (DevSecOps).</p>
              </div>
              <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10">
                <h4 className="font-bold text-cyan-400 text-sm mb-1">Cyber Threat Defense</h4>
                <p className="text-xs text-slate-400">Audit penetrasi, deteksi kerentanan, dan mitigasi risiko siber secara real-time.</p>
              </div>
              <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10">
                <h4 className="font-bold text-cyan-400 text-sm mb-1">Custom Digital Tools</h4>
                <p className="text-xs text-slate-400">Pengembangan aplikasi khusus untuk otomatisasi dan pemantauan keamanan.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Internal Section */}
        <section id="team" className="space-y-12 scroll-mt-28">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold">
              Tim <span className="text-cyan-400">Internal Kita</span>
            </h2>
            <p className="text-slate-400 uppercase tracking-widest text-sm font-semibold">
              TIM INTERNAL
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl border text-center backdrop-blur-md cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] ${
                  isDarkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="mb-3">
                  <span className="inline-block px-3 py-0.5 text-[11px] font-semibold rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {member.role}
                  </span>
                </div>

                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-cyan-500/10 border-2 border-cyan-400/50 flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-110">
                  <User className="w-10 h-10 text-cyan-400" />
                </div>

                <h3 className="text-xl font-bold text-white transition-colors duration-300 hover:text-cyan-300">
                  {member.name}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="max-w-3xl mx-auto space-y-8 scroll-mt-28">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
              <HelpCircle className="w-7 h-7 text-cyan-400" /> FAQ
            </h2>
            <p className="text-slate-400">Pertanyaan yang sering diajukan mengenai layanan keamanan siber kami.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden backdrop-blur-md ${
                  isDarkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200'
                }`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-medium flex justify-between items-center gap-4 focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className={`p-5 pt-0 text-sm leading-relaxed border-t ${
                    isDarkMode ? 'border-slate-800/60 text-slate-400' : 'border-slate-100 text-slate-600'
                  }`}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="max-w-3xl mx-auto space-y-8 scroll-mt-28">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold">Hubungi <span className="text-cyan-400">Kami</span></h2>
            <p className="text-slate-400">Isi formulir di bawah untuk konsultasi atau menggunakan layanan keamanan kami.</p>
          </div>

          <form onSubmit={handleFormSubmit} className={`p-8 rounded-3xl border space-y-6 backdrop-blur-md ${
            isDarkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-lg'
          }`}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-medium mb-2 opacity-80">Nama Lengkap</label>
                <input 
                  type="text" 
                  required
                  placeholder="Masukkan nama kamu"
                  value={contactForm.nama}
                  onChange={(e) => setContactForm({ ...contactForm, nama: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-cyan-400 ${
                    isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-300 text-slate-900'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-2 opacity-80">Nomor Telepon / WhatsApp</label>
                <input 
                  type="tel" 
                  required
                  placeholder="08123456789"
                  value={contactForm.telepon}
                  onChange={(e) => setContactForm({ ...contactForm, telepon: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-cyan-400 ${
                    isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-300 text-slate-900'
                  }`}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium mb-2 opacity-80">Layanan yang Ingin Digunakan</label>
              <select 
                value={contactForm.layanan}
                onChange={(e) => setContactForm({ ...contactForm, layanan: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-cyan-400 ${
                  isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-300 text-slate-900'
                }`}
              >
                <option value="Penetration Testing">Penetration Testing</option>
                <option value="Cloud Security">Cloud Security</option>
                <option value="Incident Response">Incident Response</option>
                <option value="Aplikasi Centa / Tools">Penggunaan Aplikasi Centa (Grabber/dll)</option>
                <option value="Software Engineering / Custom Dev">Software Engineering / Custom Application</option>
                <option value="Konsultasi Lainnya">Konsultasi Lainnya</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium mb-2 opacity-80">Deskripsi / Penjelasan Kebutuhan</label>
              <textarea 
                rows={4}
                required
                placeholder="Jelaskan secara singkat layanan atau jasa apa yang ingin kamu gunakan..."
                value={contactForm.deskripsi}
                onChange={(e) => setContactForm({ ...contactForm, deskripsi: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-cyan-400 ${
                  isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-300 text-slate-900'
                }`}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-4 rounded-xl font-semibold text-gray-950 bg-cyan-400 hover:bg-cyan-300 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Pesan</span>
            </button>
          </form>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm pt-4">
            <a href="mailto:contact@centalimited.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Mail className="w-4 h-4 text-cyan-400" /> contact@centalimited.com
            </a>
            <a href="tel:+18005550199" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Phone className="w-4 h-4 text-cyan-400" /> +1 (800) 555-0199
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className={`border-t py-8 text-center text-xs text-slate-500 ${isDarkMode ? 'border-slate-800/80' : 'border-slate-200'}`}>
        <p>&copy; 2026 Centa Limited. All rights reserved.</p>
      </footer>
    </div>
  );
}