import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  Globe2,
  Layers3,
  LockKeyhole,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  Network,
  Palette,
  Phone,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  User,
  Zap,
} from "lucide-react";

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
});

const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const whatsappNumber = "6287867738173";

  const text = `
Hello Centa Limited,

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Service: ${formData.service}

Project Details:
${formData.message}
  `.trim();

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.open(whatsappUrl, "_blank");
};

  const services = [
    {
      number: "01",
      icon: Code2,
      title: "Software Development",
      description:
        "Pengembangan software custom yang dirancang sesuai kebutuhan bisnis, workflow, dan skala organisasi.",
      tags: ["Custom Software", "API", "Backend"],
    },
    {
      number: "02",
      icon: Globe2,
      title: "Web Development",
      description:
        "Membangun website dan web application yang modern, responsif, cepat, scalable, dan security-aware.",
      tags: ["Web App", "Frontend", "Backend"],
    },
    {
      number: "03",
      icon: MonitorSmartphone,
      title: "Application Development",
      description:
        "Mengembangkan aplikasi digital yang membantu bisnis menciptakan proses kerja lebih efisien dan terintegrasi.",
      tags: ["Application", "Integration", "Automation"],
    },
    {
      number: "04",
      icon: ShieldCheck,
      title: "Cyber Security",
      description:
        "Mengidentifikasi dan mengurangi risiko keamanan melalui security assessment, penetration testing, dan hardening.",
      tags: ["Pentest", "Assessment", "Hardening"],
    },
    {
      number: "05",
      icon: Network,
      title: "Infrastructure & Cloud",
      description:
        "Membantu merancang dan mengamankan infrastruktur server, network, cloud, dan environment digital.",
      tags: ["Cloud", "Network", "Infrastructure"],
    },
    {
      number: "06",
      icon: LockKeyhole,
      title: "Security Advisory",
      description:
        "Pendampingan teknis untuk membantu organisasi memahami risiko, meningkatkan security posture, dan mengambil keputusan yang tepat.",
      tags: ["Advisory", "Risk", "Compliance"],
    },
  ];

  const capabilities = [
    {
      icon: Code2,
      title: "Engineering",
      description:
        "Software architecture, backend, frontend, API, database, dan custom application development.",
    },
    {
      icon: Palette,
      title: "Product & UI/UX",
      description:
        "Menerjemahkan kebutuhan bisnis menjadi pengalaman digital yang intuitif, modern, dan mudah digunakan.",
    },
    {
      icon: ShieldCheck,
      title: "Security",
      description:
        "Security testing dan secure development untuk membantu memastikan aplikasi dibangun dengan mempertimbangkan keamanan.",
    },
    {
      icon: Server,
      title: "Infrastructure",
      description:
        "Server, deployment, networking, cloud environment, monitoring, dan infrastructure security.",
    },
  ];

  const faqs = [
    {
      question: "Apa saja layanan utama Centa Limited?",
      answer:
        "Centa Limited bergerak di bidang software development dan cyber security. Layanan kami mencakup web development, application development, custom software, infrastructure, penetration testing, security assessment, dan security advisory.",
    },
    {
      question: "Apakah Centa hanya menyediakan layanan cyber security?",
      answer:
        "Tidak. Software engineering merupakan salah satu fokus utama Centa. Kami mengembangkan website, web application, custom software, dan aplikasi digital, dengan security sebagai bagian penting dari proses engineering.",
    },
    {
      question: "Apakah Centa bisa mengembangkan aplikasi custom?",
      answer:
        "Ya. Kami dapat membantu mengembangkan aplikasi berdasarkan kebutuhan bisnis, mulai dari perancangan konsep, UI/UX, backend, frontend, database, API integration, deployment, hingga security review.",
    },
    {
      question: "Apakah security testing bisa dilakukan pada aplikasi yang sudah ada?",
      answer:
        "Bisa. Kami dapat melakukan assessment terhadap aplikasi atau infrastructure yang sudah berjalan untuk membantu mengidentifikasi vulnerability, configuration issue, dan risiko keamanan lainnya.",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#030712] text-white">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

     <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
  <div
    className="absolute inset-0 opacity-[0.018]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
      backgroundSize: "56px 56px",
    }}
  />

  <div className="absolute left-1/2 top-[-320px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/[0.07] blur-[160px]" />

  <div className="absolute right-[-220px] top-[18%] h-[650px] w-[650px] rounded-full bg-blue-600/[0.06] blur-[160px]" />

  <div className="absolute bottom-[-300px] left-[-220px] h-[650px] w-[650px] rounded-full bg-cyan-500/[0.035] blur-[160px]" />
</div>

      <main>
        {/* =========================================================
            HERO
        ========================================================== */}

        <section className="relative scroll-mt-24">
        <div className="absolute right-[-180px] top-[35%] h-[420px] w-[420px] rounded-full bg-violet-600/[0.045] blur-[140px]" />

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

          <div className="mx-auto max-w-7xl px-6 pb-24 pt-12 sm:px-8 lg:px-10 lg:pb-32 lg:pt-16">
            {/* Top Label */}
            <div className="mb-10 flex items-center gap-3">
              <span className="flex h-7 items-center rounded-full border border-white/10 bg-white/[0.035] px-3 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                CENTA / DIGITAL ENGINEERING
              </span>

              <span className="hidden h-px w-12 bg-white/10 sm:block" />

              <span className="hidden text-[9px] uppercase tracking-[0.18em] text-slate-400 sm:block">
                Build with confidence
              </span>
            </div>

            <div className="grid items-end gap-14 lg:grid-cols-[1.25fr_0.75fr]">
              {/* Main Message */}
              <div>
                <div className="relative max-w-4xl">
                 <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-[76px]">
  Build technology
  <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
    that moves business.
  </span>
</h1>

                  <span className="absolute -bottom-2 left-0 h-px w-24 bg-cyan-400/60" />
                </div>

                <div className="mt-8 max-w-2xl">
                  <p className="text-base leading-8 text-slate-400 sm:text-lg">
                    Centa membantu bisnis membangun software, digital
                    products, infrastructure, dan security systems yang
                    modern, reliable, scalable, dan security-aware.
                  </p>

                  <div className="mt-3 text-xs font-semibold text-slate-400">
                    + Security
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#030712] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
                  >
                    Start a Project

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>

                  <a
                    href="#services"
                   className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/[0.08] bg-[#0b1120]/60 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-violet-400/25 hover:bg-violet-400/[0.05]"
                  >
                    Explore Capabilities

                    <span className="text-slate-400 transition-colors group-hover:text-cyan-400">
                      →
                    </span>
                  </a>
                </div>
              </div>

            {/* =========================================================
    RIGHT PRODUCT PREVIEW — ANIMATED ENGINEERING SYSTEM
========================================================= */}

<div className="relative mx-auto w-full max-w-[520px] lg:mx-0">

  {/* Ambient Glow */}
  <div className="pointer-events-none absolute -inset-10 -z-10">
    <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.08] blur-[110px] animate-pulse" />

    <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-violet-600/[0.08] blur-[90px]" />
  </div>

  {/* Floating System Container */}
  <div className="relative animate-[float_7s_ease-in-out_infinite]">

    {/* Moving Border Glow */}
    <div className="pointer-events-none absolute -inset-px overflow-hidden rounded-[1.75rem]">
      <div className="absolute -left-1/2 top-1/2 h-[180%] w-[200%] -translate-y-1/2 animate-[spin_12s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_280deg,rgba(34,211,238,0.5)_320deg,rgba(139,92,246,0.35)_345deg,transparent_360deg)] opacity-70" />
    </div>

    {/* Main Interface */}
    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#080e19]/95 shadow-[0_35px_120px_rgba(0,0,0,0.65)] backdrop-blur-2xl">

      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Top Glow Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />

      {/* =====================================================
          BROWSER BAR
      ====================================================== */}

      <div className="relative flex items-center justify-between border-b border-white/[0.06] px-4 py-3.5">

        {/* Traffic Lights */}
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
        </div>

        {/* Address */}
        <div className="relative overflow-hidden rounded-md border border-white/[0.06] bg-white/[0.025] px-4 py-1.5">

          {/* Moving Shine */}
          <div className="absolute inset-y-0 -left-10 w-10 animate-[shimmer_4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

          <span className="font-mono text-[8px] tracking-wide text-slate-400">
            app.centa.engineering
          </span>
        </div>

        {/* Connection */}
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          <span className="hidden text-[7px] uppercase tracking-wider text-slate-600 sm:block">
            Live
          </span>
        </div>
      </div>

      {/* =====================================================
          DASHBOARD
      ====================================================== */}

      <div className="relative p-4 sm:p-5">

        {/* Header */}
        <div className="flex items-center justify-between">

          <div>
            <div className="text-[8px] uppercase tracking-[0.22em] text-slate-500">
              Digital Engineering
            </div>

            <div className="mt-1 text-sm font-bold tracking-tight text-white">
              System Architecture
            </div>
          </div>

          {/* Animated Icon */}
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06]">

            <div className="absolute inset-0 animate-ping rounded-xl bg-cyan-400/[0.05]" />

            <Sparkles className="relative h-4 w-4 text-cyan-400" />
          </div>
        </div>

        {/* =================================================
            MAIN METRIC
        ================================================== */}

        <div className="relative mt-6 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">

          {/* Scan Line */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px animate-[scan_3.5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

          <div className="flex items-end justify-between">

            <div>

              <div className="text-[8px] uppercase tracking-[0.18em] text-slate-500">
                System Readiness
              </div>

              <div className="mt-2 flex items-baseline gap-2">

                <span className="text-3xl font-black tracking-tight text-white">
                  94%
                </span>

                <span className="text-[8px] font-semibold text-cyan-400">
                  +12.4%
                </span>

              </div>
            </div>

            {/* Health Badge */}
            <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-2.5 py-1">

              <span className="relative flex h-1.5 w-1.5">

                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />

              </span>

              <span className="text-[8px] font-bold tracking-wide text-emerald-400">
                HEALTHY
              </span>
            </div>
          </div>

          {/* =================================================
              GRAPH
          ================================================== */}

          <div className="relative mt-6 h-24">

            {/* Horizontal Guides */}
            <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
              <span className="h-px w-full bg-white/[0.035]" />
              <span className="h-px w-full bg-white/[0.035]" />
              <span className="h-px w-full bg-white/[0.035]" />
              <span className="h-px w-full bg-white/[0.035]" />
            </div>

            {/* Bars */}
            <div className="absolute inset-0 flex items-end gap-1.5">

              {[
                28,
                42,
                35,
                54,
                48,
                67,
                59,
                76,
                69,
                84,
                78,
                94,
              ].map((height, index) => (
                <div
                  key={index}
                  className="group relative flex-1"
                >
                  <div
                    className="absolute bottom-0 w-full rounded-t-sm bg-gradient-to-t from-cyan-400/10 to-cyan-400/40 transition-all duration-500 group-hover:from-cyan-400/30 group-hover:to-cyan-400/70"
                    style={{
                      height: `${height}%`,
                    }}
                  />

                  {/* Bar Glow */}
                  <div
                    className="absolute bottom-0 w-full rounded-t-sm bg-cyan-400/20 blur-[5px] opacity-50"
                    style={{
                      height: `${height}%`,
                    }}
                  />
                </div>
              ))}

            </div>
          </div>

          {/* Graph Footer */}
          <div className="mt-3 flex items-center justify-between">

            <span className="text-[7px] uppercase tracking-[0.15em] text-slate-600">
              Performance
            </span>

            <span className="font-mono text-[7px] text-slate-600">
              LIVE / 24H
            </span>

          </div>
        </div>

        {/* =================================================
            ARCHITECTURE CARDS
        ================================================== */}

        <div className="mt-3 grid grid-cols-3 gap-2">

          {[
            {
              icon: Code2,
              label: "Build",
              value: "Active",
            },
            {
              icon: ShieldCheck,
              label: "Secure",
              value: "Protected",
            },
            {
              icon: Zap,
              label: "Scale",
              value: "Ready",
            },
        ].map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.018] p-3 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-cyan-400/[0.035]"
              >

                {/* Hover Glow */}
                <div className="absolute -right-5 -top-5 h-12 w-12 rounded-full bg-cyan-400/[0.08] blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div className="relative flex h-6 w-6 items-center justify-center rounded-md bg-cyan-400/[0.06]">

                  <Icon className="h-3.5 w-3.5 text-cyan-400 transition-transform duration-500 group-hover:scale-110" />

                </div>

                <div className="mt-3 text-[9px] font-bold text-white">
                  {item.label}
                </div>

                <div className="mt-1 flex items-center gap-1">

                  <span className="h-1 w-1 rounded-full bg-emerald-400" />

                  <span className="text-[7px] uppercase tracking-wider text-slate-500">
                    {item.value}
                  </span>

                </div>

              </div>
            );
          })}

        </div>

        {/* =================================================
            MINI SYSTEM FLOW
        ================================================== */}

        <div className="mt-3 rounded-xl border border-white/[0.06] bg-white/[0.015] p-3">

          <div className="flex items-center justify-between">

            <span className="text-[7px] uppercase tracking-[0.18em] text-slate-600">
              Infrastructure Flow
            </span>

            <span className="font-mono text-[7px] text-cyan-400/70">
              ACTIVE
            </span>

          </div>

          <div className="mt-3 flex items-center">

            {/* Node 1 */}
            <div className="flex h-6 w-6 items-center justify-center rounded-md border border-cyan-400/15 bg-cyan-400/[0.05]">
              <Code2 className="h-3 w-3 text-cyan-400" />
            </div>

            {/* Connection */}
            <div className="relative mx-2 h-px flex-1 overflow-hidden bg-white/[0.07]">
              <div className="absolute left-0 top-0 h-px w-8 animate-[flow_2s_linear_infinite] bg-cyan-400/70" />
            </div>

            {/* Node 2 */}
            <div className="flex h-6 w-6 items-center justify-center rounded-md border border-violet-400/15 bg-violet-400/[0.05]">
              <Server className="h-3 w-3 text-violet-400" />
            </div>

            {/* Connection */}
            <div className="relative mx-2 h-px flex-1 overflow-hidden bg-white/[0.07]">
              <div className="absolute left-0 top-0 h-px w-8 animate-[flow_2s_linear_infinite] bg-violet-400/70" />
            </div>

            {/* Node 3 */}
            <div className="flex h-6 w-6 items-center justify-center rounded-md border border-emerald-400/15 bg-emerald-400/[0.05]">
              <ShieldCheck className="h-3 w-3 text-emerald-400" />
            </div>

          </div>
        </div>

      </div>

      {/* =====================================================
          BOTTOM STATUS
      ====================================================== */}

      <div className="relative flex items-center justify-between border-t border-white/[0.06] px-5 py-3">

        <div className="flex items-center gap-2">

          <span className="relative flex h-1.5 w-1.5">

            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />

          </span>

          <span className="text-[8px] font-semibold uppercase tracking-[0.15em] text-slate-500">
            All systems operational
          </span>

        </div>

        <span className="font-mono text-[8px] text-slate-700">
          v2.4.0
        </span>

      </div>

    </div>

    {/* =====================================================
        FLOATING SECURITY CARD
    ====================================================== */}

    <div className="absolute -bottom-6 -left-5 hidden animate-[floatSmall_5s_ease-in-out_infinite] sm:block">

      <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#080e19]/95 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl">

        {/* Card Glow */}
        <div className="absolute -right-5 -top-5 h-14 w-14 rounded-full bg-cyan-400/[0.08] blur-xl" />

        <div className="relative flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/10 bg-cyan-400/[0.06]">

            <ShieldCheck className="h-4 w-4 text-cyan-400" />

          </div>

          <div>

            <div className="text-[8px] uppercase tracking-[0.16em] text-slate-600">
              Security
            </div>

            <div className="mt-0.5 text-[10px] font-bold text-white">
              Built-in from day one
            </div>

          </div>

        </div>

      </div>

    </div>

    {/* Floating Status Dot */}
    <div className="absolute -right-2 top-16 hidden h-8 w-8 items-center justify-center rounded-full border border-cyan-400/20 bg-[#080e19]/90 shadow-xl backdrop-blur-xl sm:flex">

      <span className="relative flex h-2 w-2">

        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />

        <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />

      </span>

    </div>
</div>
  </div>
</div>
            {/* Hero Bottom Meta */}
            <div className="mt-20 grid border-t border-white/[0.06] pt-6 sm:grid-cols-3">
              <div className="flex items-center gap-3 border-b border-white/[0.06] py-4 sm:border-b-0 sm:border-r sm:py-0">
                <span className="text-[9px] font-black text-cyan-400">
                  01
                </span>

                <span className="text-[9px] uppercase tracking-[0.16em] text-slate-400">
                  Software Engineering
                </span>
              </div>

              <div className="flex items-center gap-3 border-b border-white/[0.06] py-4 sm:border-b-0 sm:px-6">
                <span className="text-[9px] font-black text-cyan-400">
                  02
                </span>

                <span className="text-[9px] uppercase tracking-[0.16em] text-slate-400">
                  Product Development
                </span>
              </div>

              <div className="flex items-center gap-3 py-4 sm:border-l sm:border-white/[0.06] sm:pl-6">
                <span className="text-[9px] font-black text-cyan-400">
                  03
                </span>

                <span className="text-[9px] uppercase tracking-[0.16em] text-slate-400">
                  Cyber Security
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            VALUE BAR — MODERN SIGNAL STRIP
        ========================================================== */}

        <section className="border-y border-white/[0.06] bg-white/[0.012]">
          <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 3).map((item) => (
                <div
                  key={item.number}
                 className="group rounded-2xl border border-white/[0.06] bg-[#0b1120]/60 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/20 hover:bg-violet-400/[0.025] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-slate-700">
                      / {item.number}
                    </span>

                    <ArrowRight className="h-3.5 w-3.5 -translate-x-1 text-slate-700 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-cyan-400 group-hover:opacity-100" />
                  </div>

                  <div className="mt-5">
                    <h3 className="text-sm font-bold tracking-tight text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-[210px] text-[11px] leading-5 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            SERVICES
        ========================================================== */}

        <section id="services" className="scroll-mt-24">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
            <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400">
                  What We Do
                </div>

               <h2 className="text-4xl font-black tracking-[-0.035em] text-white sm:text-5xl">
  Technology built
  <br />
  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
    for real businesses.
  </span>
</h2>
              </div>

              <p className="max-w-xl text-sm leading-7 text-slate-500 lg:ml-auto">
                Dari membangun aplikasi dari nol hingga mengamankan sistem
                yang sudah berjalan, Centa membantu bisnis mengembangkan
                teknologi yang reliable, scalable, dan security-aware.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.number}
                   className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#0b1120]/70 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-[#0f172a]/80 hover:shadow-[0_20px_70px_rgba(0,0,0,0.35)]"
                  >
                   <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-violet-500/[0.055] blur-3xl transition-all duration-500 group-hover:bg-violet-400/[0.09]" />

                    <div className="relative">
                      <div className="mb-10 flex items-start justify-between">
                       <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-400/15 bg-violet-400/[0.06]">
                          <Icon className="h-5 w-5 text-cyan-400" />
                        </div>

                        <span className="text-4xl font-black tracking-tight text-white/[0.05] transition-colors group-hover:text-cyan-400/10">
                          {service.number}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white transition-colors group-hover:text-cyan-400">
                        {service.title}
                      </h3>

                      <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
                        {service.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/[0.06] bg-white/[0.025] px-2.5 py-1 text-[9px] font-semibold text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            APPROACH — SYSTEM CAPABILITIES
        ========================================================== */}

        <section id="approach" className="scroll-mt-24 border-t border-white/[0.05]">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
            {/* Header */}
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-slate-500">
                    The Centa Stack
                  </span>
                </div>

                <h2 className="mt-6 max-w-3xl text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl lg:text-[60px] lg:leading-[1.02]">
  Different disciplines.
  <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
    One connected system.
  </span>
</h2>
              </div>

              <div className="max-w-sm lg:pb-1">
                <p className="text-sm leading-7 text-slate-500">
                  Great digital products don't come from isolated teams.
                  Engineering, product, infrastructure, and security need to
                  work together from day one.
                </p>
              </div>
            </div>

            {/* Capability System */}
            <div className="relative mt-16">
              {/* Connection line */}
              <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent lg:block" />

              <div className="grid gap-3 lg:grid-cols-2">
                {capabilities.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className={`group relative overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-[#0b1120]/70 p-7 backdrop-blur-xl transition-all duration-500 hover:border-violet-400/20 hover:shadow-[0_20px_70px_rgba(0,0,0,0.3)] ${
                        index === 0 || index === 3
                          ? "lg:translate-y-8" 
                          : ""
                      }`}
                    >
                      {/* Ambient glow */}
                      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-500/[0.04] blur-[90px] transition-all duration-500 group-hover:bg-violet-400/[0.09]" />

                      <div className="relative">
                        {/* Top row */}
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-400/10 bg-violet-400/[0.05] transition-all group-hover:border-violet-400/25 group-hover:bg-violet-400/10">
                              <Icon className="h-[18px] w-[18px] text-cyan-400" />
                            </div>

                            <div>
                              <span className="block font-mono text-[8px] uppercase tracking-[0.2em] text-slate-700">
                                Layer 0{index + 1}
                              </span>

                              <span className="mt-1 block text-[9px] uppercase tracking-[0.16em] text-slate-400">
                                Capability
                              </span>
                            </div>
                          </div>

                          <ArrowRight className="h-4 w-4 -translate-x-1 text-slate-700 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-cyan-400 group-hover:opacity-100" />
                        </div>

                        {/* Main */}
                        <div className="mt-10">
                          <h3 className="text-xl font-bold tracking-tight text-white">
                            {item.title}
                          </h3>

                          <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500">
                            {item.description}
                          </p>
                        </div>

                        {/* Visual system bar */}
                        <div className="mt-10">
                          <div className="flex items-center justify-between text-[8px] uppercase tracking-[0.18em] text-slate-700">
                            <span>Integrated layer</span>
                            <span>Active</span>
                          </div>

                          <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.05]">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-cyan-400/20 via-cyan-400/70 to-cyan-400"
                              style={{
                                width: `${68 + index * 7}%`,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Center System Node */}
              <div className="relative z-10 mx-auto mt-8 hidden w-fit lg:block">
                <div className="flex items-center gap-3 rounded-full border border-cyan-400/15 bg-[#07101b] px-4 py-2 shadow-[0_0_40px_rgba(34,211,238,0.06)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

                  <span className="font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                    Connected Technology Stack
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 flex flex-col gap-5 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="text-[9px] uppercase tracking-[0.2em] text-slate-700">
                  Need a custom combination?
                </span>

                <p className="mt-1 text-xs text-slate-500">
                  Tell us what you're building and we'll assemble the right
                  stack.
                </p>
              </div>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_40px_rgba(59,130,246,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_50px_rgba(99,102,241,0.3)]"
              >
                Build your stack

                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================
            ABOUT — COMPANY SYSTEM
        ========================================================== */}

        <section id="about" className="scroll-mt-24 border-t border-white/[0.05]">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
            <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              {/* Left — Story */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-400/[0.04] px-3 py-1.5">
                  <Layers3 className="h-3 w-3 text-cyan-400" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-cyan-400">
                    About Centa
                  </span>
                </div>

                <h2 className="mt-6 text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl lg:text-[58px] lg:leading-[1.02]">
  Technology is the product.
  <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
    Security is the foundation.
  </span>
</h2>

                <div className="mt-8 max-w-xl space-y-5">
                  <p className="text-sm leading-7 text-slate-400">
                    Centa Limited is a technology company focused on building
                    digital products, software systems, and secure technology
                    infrastructure for modern businesses.
                  </p>

                  <p className="text-sm leading-7 text-slate-400">
                    We combine software engineering and cyber security so teams
                    don't have to treat development and protection as two
                    separate problems.
                  </p>
                </div>

                {/* Principles */}
                <div className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {[
                    "Engineering-first",
                    "Security-aware",
                    "Scalable by design",
                    "Built for business",
                  ].map((item) => (
                    <div
                      key={item}
                      className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.015] px-4 py-3 transition-colors hover:border-cyan-400/15 hover:bg-cyan-400/[0.025]"
                    >
                      <div className="flex h-5 w-5 items-center justify-center rounded-md border border-cyan-400/10 bg-cyan-400/[0.05]">
                        <Check className="h-3 w-3 text-cyan-400" />
                      </div>

                      <span className="text-[10px] font-medium text-slate-500 transition-colors group-hover:text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — System Visualization */}
              <div className="relative">
                {/* Ambient */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.045] blur-[110px]" />

               <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.07] bg-[#0b1120]/80 shadow-2xl backdrop-blur-xl">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">
                    <div>
                      <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700">
                        CENTA / SYSTEM
                      </div>

                      <div className="mt-1 text-xs font-bold text-white">
                        Technology Architecture
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/[0.04] px-2.5 py-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />

                      <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-emerald-400">
                        Operational
                      </span>
                    </div>
                  </div>

                  {/* System */}
                  <div className="relative p-6 sm:p-8">
                    {/* Connection lines */}
                    <div className="pointer-events-none absolute left-1/2 top-[105px] hidden h-[230px] w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/30 via-cyan-400/10 to-transparent sm:block" />

                    {/* Core */}
                    <div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/[0.05] shadow-[0_0_90px_rgba(124,58,237,0.12)]">
                      <div className="absolute inset-2 rounded-full border border-cyan-400/10" />

                      <div className="text-center">
                        <div className="text-lg font-black tracking-[0.12em] text-white">
                          C
                        </div>

                        <div className="mt-1 font-mono text-[7px] uppercase tracking-[0.2em] text-cyan-400">
                          Core
                        </div>
                      </div>
                    </div>

                    {/* Modules */}
                    <div className="relative mt-10 grid grid-cols-2 gap-2">
                      {[
                        {
                          icon: Code2,
                          title: "Engineering",
                          value: "Build",
                        },
                        {
                          icon: ShieldCheck,
                          title: "Security",
                          value: "Protect",
                        },
                        {
                          icon: Server,
                          title: "Infrastructure",
                          value: "Operate",
                        },
                        {
                          icon: Globe2,
                          title: "Digital Products",
                          value: "Deliver",
                        },
                      ].map((item) => {
                        const Icon = item.icon;

                        return (
                          <div
                            key={item.title}
                           className="group rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/20 hover:bg-violet-400/[0.025]"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/[0.05]">
                                <Icon className="h-3.5 w-3.5 text-cyan-400" />
                              </div>

                              <ArrowRight className="h-3 w-3 text-slate-800 transition-all group-hover:translate-x-0.5 group-hover:text-cyan-400" />
                            </div>

                            <div className="mt-5 text-[10px] font-bold text-white">
                              {item.title}
                            </div>

                            <div className="mt-1 text-[8px] uppercase tracking-[0.16em] text-slate-700">
                              {item.value}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Bottom status */}
                    <div className="mt-3 flex items-center justify-between rounded-xl border border-white/[0.05] bg-white/[0.015] px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

                        <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-slate-400">
                          All systems connected
                        </span>
                      </div>

                      <span className="font-mono text-[8px] text-slate-700">
                        v1.0
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom metrics */}
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                {
                  value: "01",
                  title: "Engineering",
                  text: "Build the right technical foundation.",
                },
                {
                  value: "02",
                  title: "Security",
                  text: "Reduce risk before it becomes a problem.",
                },
                {
                  value: "03",
                  title: "Scale",
                  text: "Keep systems ready for what's next.",
                },
              ].map((item) => (
                <div
                  key={item.value}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-5"
                >
                  <span className="font-mono text-[8px] font-bold text-cyan-400">
                    {item.value}
                  </span>

                  <h3 className="mt-4 text-xs font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-[10px] leading-5 text-slate-700">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            FAQ — PRODUCT STYLE
        ========================================================== */}

        <section className="border-t border-white/[0.05]">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
              {/* LEFT — CONTEXT */}
              <div className="lg:sticky lg:top-32 lg:self-start">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.05] px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-cyan-400">
                    FAQ / Knowledge
                  </span>
                </div>

               <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
  Questions
  <br />
  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
    before we build.
  </span>
</h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-slate-500">
                  Beberapa hal yang biasanya ingin diketahui sebelum memulai
                  software, web, application, atau security project bersama
                  Centa.
                </p>

                {/* Mini Info Card */}
                <div className="mt-10 overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02]">
                  <div className="border-b border-white/[0.06] px-5 py-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        CENTA / SUPPORT
                      </span>

                      <span className="flex items-center gap-2 text-[9px] font-semibold text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        AVAILABLE
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="text-sm font-bold text-white">
                      Still have questions?
                    </div>

                    <p className="mt-2 text-xs leading-6 text-slate-400">
                      Kalau kebutuhan Anda tidak tercantum di sini, langsung
                      diskusikan dengan tim Centa.
                    </p>

                    <Link
                      to="/contact"
                      className="group mt-5 inline-flex items-center gap-2 text-xs font-bold text-cyan-400"
                    >
                      Talk to our team
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* RIGHT — FAQ LIST */}
              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <div
                      key={faq.question}
                      className={`group overflow-hidden rounded-3xl border transition-all duration-300 ${
                       isOpen
  ? "border-violet-400/20 bg-violet-500/[0.035] shadow-[0_15px_50px_rgba(124,58,237,0.06)]"
  : "border-white/[0.07] bg-[#0b1120]/60 backdrop-blur-xl hover:border-white/[0.12]"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenFaq(isOpen ? null : index)
                        }
                        className="flex w-full items-start gap-5 px-6 py-6 text-left sm:px-7"
                      >
                        {/* Number */}
                        <div
                          className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border text-[10px] font-black transition-colors ${
                            isOpen
                              ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-400"
                              : "border-white/[0.07] bg-white/[0.025] text-slate-700 group-hover:text-slate-400"
                          }`}
                        >
                          0{index + 1}
                        </div>

                        {/* Question */}
                        <div className="flex-1">
                          <div
                            className={`text-sm font-bold transition-colors sm:text-[15px] ${
                              isOpen ? "text-cyan-300" : "text-white"
                            }`}
                          >
                            {faq.question}
                          </div>

                          {isOpen && (
                            <div className="mt-4 max-w-2xl border-t border-white/[0.06] pt-4">
                              <p className="text-sm leading-7 text-slate-500">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Icon */}
                        <div
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border transition-all ${
                            isOpen
                              ? "rotate-180 border-cyan-400/20 bg-cyan-400/10"
                              : "border-white/[0.07] bg-white/[0.025]"
                          }`}
                        >
                          <ChevronDown
                            className={`h-3.5 w-3.5 ${
                              isOpen
                                ? "text-cyan-400"
                                : "text-slate-400"
                            }`}
                          />
                        </div>
                      </button>
                    </div>
                  );
                })}

                {/* Bottom Hint */}
                <div className="flex items-center gap-3 px-2 pt-5">
                  <div className="h-px flex-1 bg-white/[0.05]" />

                  <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-slate-700">
                    More questions? Let's talk.
                  </span>

                  <div className="h-px flex-1 bg-white/[0.05]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CONTACT CTA
        ========================================================== */}

       {/* =========================================================
    CONTACT
========================================================= */}

<section id="contact" className="scroll-mt-24 border-t border-white/[0.05]">
  <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">

    {/* Header */}
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.05] px-3 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

        <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-cyan-400">
          Contact / Start a Project
        </span>
      </div>

      <h2 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl lg:text-[64px]">
        Let's build something
        <span className="block bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
          secure and scalable.
        </span>
      </h2>

      <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400">
        Ceritakan kebutuhan, project, atau masalah yang sedang Anda hadapi.
        Tim Centa akan membantu menentukan solusi yang paling tepat dari
        sisi engineering, product, infrastructure, hingga security.
      </p>
    </div>

    {/* Contact Layout */}
    <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">

      {/* =====================================================
          FORM
      ====================================================== */}

      <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.07] bg-[#0b1120]/80 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-8">

        {/* Glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cyan-400/[0.05] blur-[100px]" />

        <div className="relative">

          <div className="mb-8">
            <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600">
              PROJECT INQUIRY
            </div>

            <h3 className="mt-2 text-xl font-bold text-white">
              Tell us about your project
            </h3>

            <p className="mt-2 text-xs leading-6 text-slate-500">
              Isi form berikut dan Anda akan diarahkan ke WhatsApp Centa
              untuk melanjutkan percakapan.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name + Email */}
            <div className="grid gap-5 sm:grid-cols-2">

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400"
                >
                  Name *
                </label>

                <div className="relative">
                  <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-600" />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/[0.07] bg-white/[0.025] py-3.5 pl-10 pr-4 text-sm text-white outline-none transition-all placeholder:text-slate-700 focus:border-cyan-400/30 focus:bg-cyan-400/[0.02] focus:ring-1 focus:ring-cyan-400/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400"
                >
                  Email *
                </label>

                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-600" />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-white/[0.07] bg-white/[0.025] py-3.5 pl-10 pr-4 text-sm text-white outline-none transition-all placeholder:text-slate-700 focus:border-cyan-400/30 focus:bg-cyan-400/[0.02] focus:ring-1 focus:ring-cyan-400/10"
                  />
                </div>
              </div>

            </div>

            {/* Phone + Company */}
            <div className="grid gap-5 sm:grid-cols-2">

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400"
                >
                  Phone / WhatsApp
                </label>

                <div className="relative">
                  <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-600" />

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+62-812-3456-7890"
                    className="w-full rounded-xl border border-white/[0.07] bg-white/[0.025] py-3.5 pl-10 pr-4 text-sm text-white outline-none transition-all placeholder:text-slate-700 focus:border-cyan-400/30 focus:bg-cyan-400/[0.02] focus:ring-1 focus:ring-cyan-400/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400"
                >
                  Company
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company name"
                  className="w-full rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-slate-700 focus:border-cyan-400/30 focus:bg-cyan-400/[0.02] focus:ring-1 focus:ring-cyan-400/10"
                />
              </div>

            </div>

            {/* Service */}
            <div>
              <label
                htmlFor="service"
                className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400"
              >
                Service
              </label>

              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full appearance-none rounded-xl border border-white/[0.07] bg-[#0b1120] px-4 py-3.5 text-sm text-white outline-none transition-all focus:border-cyan-400/30 focus:ring-1 focus:ring-cyan-400/10"
              >
                <option value="" className="bg-[#0b1120]">
                  Select a service
                </option>

                <option value="Software Development">
                  Software Development
                </option>

                <option value="Web Development">
                  Web Development
                </option>

                <option value="Application Development">
                  Application Development
                </option>

                <option value="Cyber Security">
                  Cyber Security
                </option>

                <option value="Infrastructure & Cloud">
                  Infrastructure & Cloud
                </option>

                <option value="Security Advisory">
                  Security Advisory
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400"
              >
                Project Details *
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your project, requirements, timeline, or the problem you want to solve..."
                className="w-full resize-none rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3.5 text-sm leading-6 text-white outline-none transition-all placeholder:text-slate-700 focus:border-cyan-400/30 focus:bg-cyan-400/[0.02] focus:ring-1 focus:ring-cyan-400/10"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-4 text-sm font-bold text-white shadow-[0_10px_40px_rgba(59,130,246,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_50px_rgba(99,102,241,0.3)]"
            >
              Continue via WhatsApp

              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <p className="text-center text-[9px] leading-5 text-slate-700">
              Your information will be used only to respond to your project inquiry.
            </p>

          </form>
        </div>
      </div>

      {/* =====================================================
          CONTACT CHANNELS
      ====================================================== */}

      <div className="space-y-4">

        {/* WhatsApp */}
        <a
          href="https://wa.me/6287867738173"
          target="_blank"
          rel="noreferrer"
          className="group block rounded-3xl border border-white/[0.07] bg-[#0b1120]/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-emerald-400/[0.025]"
        >
          <div className="flex items-start justify-between">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.06]">
              <MessageCircle className="h-5 w-5 text-emerald-400" />
            </div>

            <ArrowRight className="h-4 w-4 text-slate-700 transition-all group-hover:translate-x-1 group-hover:text-emerald-400" />

          </div>

          <div className="mt-6">
            <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-600">
              WhatsApp
            </div>

            <h3 className="mt-2 text-sm font-bold text-white">
              Chat with Centa
            </h3>

            <p className="mt-2 text-xs leading-6 text-slate-500">
              Diskusikan kebutuhan project secara langsung dengan tim Centa.
            </p>
          </div>
        </a>

        {/* Email */}
        <a
          href="mailto:info@centalimited.com"
          className="group block rounded-3xl border border-white/[0.07] bg-[#0b1120]/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-cyan-400/[0.025]"
        >
          <div className="flex items-start justify-between">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.06]">
              <Mail className="h-5 w-5 text-cyan-400" />
            </div>

            <ArrowRight className="h-4 w-4 text-slate-700 transition-all group-hover:translate-x-1 group-hover:text-cyan-400" />

          </div>

          <div className="mt-6">
            <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-600">
              Email
            </div>

            <h3 className="mt-2 text-sm font-bold text-white">
              info@centalimited.com
            </h3>

            <p className="mt-2 text-xs leading-6 text-slate-500">
              Untuk project inquiry, partnership, atau kebutuhan bisnis.
            </p>
          </div>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/centa.ltd"
          target="_blank"
          rel="noreferrer"
          className="group block rounded-3xl border border-white/[0.07] bg-[#0b1120]/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-violet-400/[0.025]"
        >
          <div className="flex items-start justify-between">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-400/15 bg-violet-400/[0.06]">
              <Globe2  className="h-5 w-5 text-violet-400" />
            </div>

            <ArrowRight className="h-4 w-4 text-slate-700 transition-all group-hover:translate-x-1 group-hover:text-violet-400" />

          </div>

          <div className="mt-6">
            <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-600">
              Instagram
            </div>

            <h3 className="mt-2 text-sm font-bold text-white">
              Follow Centa
            </h3>

            <p className="mt-2 text-xs leading-6 text-slate-500">
              Ikuti update, project, dan aktivitas terbaru dari Centa.
            </p>
          </div>
        </a>

        {/* Availability */}
        <div className="rounded-3xl border border-white/[0.06] bg-white/[0.015] p-5">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-400">
              Open for new projects
            </span>
          </div>

          <p className="mt-3 text-xs leading-6 text-slate-500">
            Software engineering, web development, application development,
            infrastructure, dan cyber security.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>
      </main>

      {/* =========================================================
          FOOTER
      ========================================================== */}

      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <Link to="/" className="inline-flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10">
                  <span className="text-sm font-black text-violet-400">
                    C
                  </span>
                </div>

                <div>
                  <div className="text-sm font-black tracking-[0.16em] text-white">
                    CENTA
                  </div>

                  <div className="text-[8px] tracking-[0.25em] text-slate-700">
                    LIMITED
                  </div>
                </div>
              </Link>

              <p className="mt-5 max-w-sm text-xs leading-6 text-slate-400">
                Software engineering, web & application development, dan cyber
                security untuk membantu bisnis membangun teknologi yang
                modern, reliable, dan secure.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white">
                Company
              </h3>

              <div className="mt-4 space-y-3">
                <a
                  href="#about"
                  className="block text-xs text-slate-400 transition-colors hover:text-cyan-400"
                >
                  About
                </a>

                <a
                  href="#services"
                  className="block text-xs text-slate-400 transition-colors hover:text-cyan-400"
                >
                  Services
                </a>

                <a
                  href="#approach"
                  className="block text-xs text-slate-400 transition-colors hover:text-cyan-400"
                >
                  Approach
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white">
                Services
              </h3>

              <div className="mt-4 space-y-3">
                <span className="block text-xs text-slate-400">
                  Software Development
                </span>

                <span className="block text-xs text-slate-400">
                  Web & Application
                </span>

                <span className="block text-xs text-slate-400">
                  Cyber Security
                </span>

                <span className="block text-xs text-slate-400">
                  Security Advisory
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white">
                Contact
              </h3>

              <div className="mt-4 space-y-3">
                <a
                  href="mailto:info@centalimited.com"
                  className="block text-xs text-slate-400 transition-colors hover:text-cyan-400"
                >
                  info@centalimited.com
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400"
                >
                  Start a project
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
            <p className="text-[10px] text-slate-700">
              © {new Date().getFullYear()} Centa Limited. All rights reserved.
            </p>

            <div className="flex items-center gap-2 text-[10px] text-slate-700">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/70" />
              Build. Secure. Scale.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}