import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import {
  sendContactMessage,
} from "../services/contact.service";
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

const previewRef = useRef<HTMLDivElement | null>(null);

const [isHovering, setIsHovering] = useState(false);

const [mouse, setMouse] = useState({
  x: 50,
  y: 50,
});

const handlePreviewMove = (
  e: React.MouseEvent<HTMLDivElement>
) => {
  if (!previewRef.current) return;

  const rect = previewRef.current.getBoundingClientRect();

  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  setMouse({
    x,
    y,
  });
};


useEffect(() => {
  const id = window.location.hash.replace("#", "");

  if (!id) return;

  const target = document.getElementById(id);

  if (target) {
    setTimeout(() => {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }
}, []);
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

const handleSubmit = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  


  try {

    await sendContactMessage({

      name: formData.name,

      email: formData.email,

      subject:
        `${formData.service || "Project Inquiry"} - ${formData.company || "Website Visitor"}`,

      message:
        `
Phone: ${formData.phone}

Company:
${formData.company}

Service:
${formData.service}

Project Details:
${formData.message}
        `.trim(),

    });


    toast.success(
      "Message sent successfully. Our team will contact you soon."
    );


    setFormData({
      name:"",
      email:"",
      phone:"",
      company:"",
      service:"",
      message:"",
    });


  } catch(error:any){

    console.error(
      "CONTACT ERROR:",
      error
    );


    toast.error(
      error?.response?.data?.message ??
      "Failed sending message."
    );

  }

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
  <div className="min-h-screen overflow-hidden text-white">
     

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

        {/* =====================================================
            MAIN MESSAGE
        ====================================================== */}

        <div>
          <div className="relative max-w-4xl">

            <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-[76px]">
              Where Engineering

              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Meets Cybersecurity
              </span>
            </h1>

            <span className="absolute -bottom-2 left-0 h-px w-24 bg-cyan-400/60" />

          </div>

          <div className="mt-8 max-w-2xl">
            <p className="text-base leading-8 text-slate-400 sm:text-lg">
              Centa membantu bisnis membangun software, digital products,
              infrastructure, dan security systems yang modern, scalable,
              dan resilient dengan pendekatan security-first untuk
              menghadapi ancaman digital masa kini.
            </p>

            <div className="mt-3 text-xs font-semibold text-slate-400">
              + Security
            </div>
          </div>

          {/* Actions */}
     <div className="mt-9 flex flex-col gap-3 sm:flex-row">

  {/* =====================================================
      PRIMARY — SECURE ACTION
  ====================================================== */}
  <a
    href="#contact"
    className="
      group relative isolate
      inline-flex items-center justify-center
      gap-3
      overflow-hidden
      rounded-xl
      border border-cyan-300/30
      bg-cyan-400
      px-6 py-3.5
      text-sm font-bold
      text-[#030712]
      shadow-[0_0_30px_rgba(34,211,238,0.12)]
      transition-all duration-500
      hover:-translate-y-1
      hover:bg-cyan-300
      hover:shadow-[0_15px_45px_rgba(34,211,238,0.22)]
    "
  >
    {/* Moving light */}
    <span
      className="
        pointer-events-none
        absolute inset-y-0 left-[-60%]
        w-[45%]
        skew-x-[-20deg]
        bg-white/30
        blur-md
        transition-all duration-700
        group-hover:left-[120%]
      "
    />

    <span className="relative z-10">
      Start a Project
    </span>

    <ArrowRight
      className="
        relative z-10
        h-4 w-4
        transition-transform duration-300
        group-hover:translate-x-1
      "
    />
  </a>


  {/* =====================================================
      SECONDARY — SYSTEM NAVIGATION
  ====================================================== */}
  <a
    href="#services"
    className="
      group relative
      inline-flex items-center justify-center
      gap-3
      overflow-hidden
      rounded-xl
      border border-white/[0.08]
      bg-[#07111f]/80
      px-6 py-3.5
      text-sm font-semibold
      text-white
      backdrop-blur-xl
      transition-all duration-500
      hover:-translate-y-1
      hover:border-cyan-400/25
      hover:bg-cyan-400/[0.035]
      hover:shadow-[0_15px_45px_rgba(34,211,238,0.06)]
    "
  >

    {/* Hover grid */}
    <span
      className="
        pointer-events-none
        absolute inset-0
        opacity-0
        transition-opacity duration-500
        group-hover:opacity-100
        [background-image:linear-gradient(rgba(34,211,238,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.12)_1px,transparent_1px)]
        [background-size:16px_16px]
      "
    />

    {/* Status indicator */}
    <span
      className="
        relative z-10
        h-1.5 w-1.5
        rounded-full
        bg-cyan-400/60
        transition-all duration-300
        group-hover:bg-cyan-400
        group-hover:shadow-[0_0_10px_rgba(34,211,238,0.9)]
      "
    />

    <span className="relative z-10">
      Explore Capabilities
    </span>

    <ArrowRight
      className="
        relative z-10
        h-4 w-4
        text-slate-500
        transition-all duration-300
        group-hover:translate-x-1
        group-hover:text-cyan-400
      "
    />

  </a>

</div>
        </div>

        {/* =========================================================
            RIGHT PRODUCT PREVIEW — INTERACTIVE ENGINEERING SYSTEM
        ========================================================== */}

        <div className="relative mx-auto w-full max-w-[520px] lg:mx-0">

          {/* Ambient Glow */}
          <div className="pointer-events-none absolute -inset-16 -z-10">

            <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.08] blur-[110px] animate-pulse" />

            <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-violet-600/[0.08] blur-[90px]" />

          </div>

          {/* =====================================================
              INTERACTIVE SYSTEM CONTAINER
          ====================================================== */}

          <div
            ref={previewRef}
            onMouseMove={handlePreviewMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
              setIsHovering(false);
              setMouse({ x: 50, y: 50 });
            }}
            className="
              group
              relative
              animate-[float_7s_ease-in-out_infinite]
              transition-transform
              duration-500
              ease-out
            "
            style={{
              transform: isHovering
                ? `perspective(1200px)
                   rotateX(${(mouse.y - 50) * -0.035}deg)
                   rotateY(${(mouse.x - 50) * 0.035}deg)
                   translateY(-6px)`
                : "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)",
            }}
          >

            {/* Cursor Spotlight */}
            <div
              className="
                pointer-events-none
                absolute
                -inset-20
                z-20
                rounded-[3rem]
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
              style={{
                background: `
                  radial-gradient(
                    260px circle at ${mouse.x}% ${mouse.y}%,
                    rgba(34,211,238,0.13),
                    transparent 65%
                  )
                `,
              }}
            />

            {/* Moving Border Glow */}
            <div className="pointer-events-none absolute -inset-px overflow-hidden rounded-[1.75rem]">

              <div
                className="
                  absolute
                  -left-1/2
                  top-1/2
                  h-[180%]
                  w-[200%]
                  -translate-y-1/2
                  animate-[spin_10s_linear_infinite]
                  bg-[conic-gradient(from_0deg,transparent_0deg,transparent_255deg,rgba(34,211,238,0.75)_310deg,rgba(139,92,246,0.65)_340deg,transparent_360deg)]
                  opacity-40
                  transition-opacity
                  duration-500
                  group-hover:opacity-90
                "
              />

            </div>

            {/* =====================================================
                MAIN INTERFACE
            ====================================================== */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[1.75rem]
                border
                border-white/[0.08]
                bg-[#080e19]/95
                shadow-[0_35px_120px_rgba(0,0,0,0.65)]
                backdrop-blur-2xl
                transition-all
                duration-500
                group-hover:border-cyan-400/20
                group-hover:shadow-[0_40px_140px_rgba(0,0,0,0.72),0_0_60px_rgba(34,211,238,0.06)]
              "
            >

              {/* Cursor Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  z-10
                  h-[260px]
                  w-[260px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-cyan-400/[0.06]
                  blur-[90px]
                  transition-all
                  duration-150
                "
                style={{
                  left: `${mouse.x}%`,
                  top: `${mouse.y}%`,
                }}
              />

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

              <div className="relative z-20 flex items-center justify-between border-b border-white/[0.06] px-4 py-3.5">

                {/* Traffic Lights */}
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/10 transition-all duration-300 group-hover:bg-red-400/50" />
                  <span className="h-2 w-2 rounded-full bg-white/10 transition-all duration-300 group-hover:bg-yellow-400/50" />
                  <span className="h-2 w-2 rounded-full bg-white/10 transition-all duration-300 group-hover:bg-emerald-400/50" />
                </div>

                {/* Address */}
                <div className="relative overflow-hidden rounded-md border border-white/[0.06] bg-white/[0.025] px-4 py-1.5 transition-all duration-300 group-hover:border-cyan-400/15 group-hover:bg-cyan-400/[0.025]">

                  {/* Moving Shine */}
                  <div className="absolute inset-y-0 -left-10 w-10 animate-[shimmer_4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

                  <span className="font-mono text-[8px] tracking-wide text-slate-400">
                    app.centa.engineering
                  </span>

                </div>

                {/* Connection */}
                <div className="flex items-center gap-1.5">

                  <span className="relative flex h-1.5 w-1.5">

                    <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-50" />

                    <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />

                  </span>

                  <span className="hidden text-[7px] uppercase tracking-wider text-slate-600 sm:block">
                    Live
                  </span>

                </div>

              </div>

              {/* =====================================================
                  DASHBOARD
              ====================================================== */}

              <div className="relative z-20 p-4 sm:p-5">

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
                  <div className="group/icon relative flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] transition-all duration-500 hover:scale-110 hover:border-cyan-300/40 hover:bg-cyan-400/[0.12] hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]">

                    <div className="absolute inset-0 animate-ping rounded-xl bg-cyan-400/[0.05]" />

                    <Sparkles className="relative h-4 w-4 text-cyan-400 transition-transform duration-500 group-hover/icon:rotate-12 group-hover/icon:scale-110" />

                  </div>

                </div>

                {/* =================================================
                    MAIN METRIC
                ================================================== */}

                <div
                  className="
                    group/metric
                    relative
                    mt-6
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    p-4
                    transition-all
                    duration-500
                    hover:-translate-y-0.5
                    hover:border-cyan-400/20
                    hover:bg-cyan-400/[0.025]
                    hover:shadow-[0_15px_50px_rgba(34,211,238,0.06)]
                  "
                >

                  {/* Scan Line */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      top-0
                      h-px
                      animate-[scan_3.5s_ease-in-out_infinite]
                      bg-gradient-to-r
                      from-transparent
                      via-cyan-400/50
                      to-transparent
                      transition-opacity
                      duration-300
                      group-hover/metric:via-cyan-300
                    "
                  />

                  <div className="flex items-end justify-between">

                    <div>

                      <div className="text-[8px] uppercase tracking-[0.18em] text-slate-500">
                        System Readiness
                      </div>

                      <div className="mt-2 flex items-baseline gap-2">

                        <span className="text-3xl font-black tracking-tight text-white transition-all duration-500 group-hover/metric:text-cyan-50 group-hover/metric:drop-shadow-[0_0_15px_rgba(34,211,238,0.25)]">
                          94%
                        </span>

                        <span className="text-[8px] font-semibold text-cyan-400">
                          +12.4%
                        </span>

                      </div>
                    </div>

                    {/* Health Badge */}
                    <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-2.5 py-1 transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/[0.1]">

                      <span className="relative flex h-1.5 w-1.5">

                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />

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
                          className="group/bar relative flex-1 cursor-crosshair"
                        >

                          <div
                            className="
                              absolute
                              bottom-0
                              w-full
                              origin-bottom
                              rounded-t-sm
                              bg-gradient-to-t
                              from-cyan-400/10
                              to-cyan-400/40
                              transition-all
                              duration-500
                              group-hover/bar:scale-y-110
                              group-hover/bar:from-cyan-400/30
                              group-hover/bar:to-cyan-400/80
                              group-hover/bar:shadow-[0_0_14px_rgba(34,211,238,0.35)]
                            "
                            style={{
                              height: `${height}%`,
                            }}
                          />

                          {/* Bar Glow */}
                          <div
                            className="
                              absolute
                              bottom-0
                              w-full
                              rounded-t-sm
                              bg-cyan-400/20
                              blur-[5px]
                              opacity-50
                              transition-all
                              duration-500
                              group-hover/bar:bg-cyan-300/40
                              group-hover/bar:opacity-100
                            "
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
                        className="
                          group/card
                          relative
                          cursor-default
                          overflow-hidden
                          rounded-xl
                          border
                          border-white/[0.06]
                          bg-white/[0.018]
                          p-3
                          transition-all
                          duration-500
                          hover:-translate-y-1
                          hover:border-cyan-400/20
                          hover:bg-cyan-400/[0.035]
                          hover:shadow-[0_12px_35px_rgba(34,211,238,0.07)]
                        "
                      >

                        {/* Shine */}
                        <div
                          className="
                            pointer-events-none
                            absolute
                            -left-20
                            top-0
                            h-full
                            w-16
                            rotate-12
                            bg-gradient-to-r
                            from-transparent
                            via-white/[0.08]
                            to-transparent
                            transition-transform
                            duration-700
                            group-hover/card:translate-x-[180px]
                          "
                        />

                        {/* Hover Glow */}
                        <div className="absolute -right-5 -top-5 h-12 w-12 rounded-full bg-cyan-400/[0.08] blur-xl opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />

                        {/* Icon */}
                        <div
                          className="
                            relative
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            rounded-lg
                            border
                            border-cyan-400/10
                            bg-cyan-400/[0.06]
                            transition-all
                            duration-500
                            group-hover/card:border-cyan-400/30
                            group-hover/card:bg-cyan-400/[0.12]
                            group-hover/card:shadow-[0_0_20px_rgba(34,211,238,0.18)]
                          "
                        >

                          <Icon
                            className="
                              h-3.5
                              w-3.5
                              text-cyan-400
                              transition-all
                              duration-500
                              group-hover/card:scale-125
                              group-hover/card:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]
                            "
                          />

                        </div>

                        <div className="mt-3 text-[9px] font-bold text-white">
                          {item.label}
                        </div>

                        <div className="mt-1 flex items-center gap-1">

                          <span className="relative flex h-1 w-1">
                            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60" />
                            <span className="relative h-1 w-1 rounded-full bg-emerald-400" />
                          </span>

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

                <div className="group/flow mt-3 rounded-xl border border-white/[0.06] bg-white/[0.015] p-3 transition-all duration-500 hover:border-cyan-400/15 hover:bg-cyan-400/[0.02]">

                  <div className="flex items-center justify-between">

                    <span className="text-[7px] uppercase tracking-[0.18em] text-slate-600">
                      Infrastructure Flow
                    </span>

                    <span className="font-mono text-[7px] text-cyan-400/70 transition-colors group-hover/flow:text-cyan-300">
                      ACTIVE
                    </span>

                  </div>

                  <div className="mt-3 flex items-center">

                    {/* Node 1 */}
                    <div
                      className="
                        group/node
                        relative
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-cyan-400/15
                        bg-cyan-400/[0.05]
                        transition-all
                        duration-500
                        hover:scale-110
                        hover:border-cyan-300/40
                        hover:bg-cyan-400/[0.12]
                        hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
                      "
                    >
                      <Code2 className="relative h-3 w-3 text-cyan-400 transition-transform duration-300 group-hover/node:scale-110" />
                    </div>

                    {/* Connection */}
                    <div className="relative mx-2 h-px flex-1 overflow-hidden bg-white/[0.07]">

                      <div className="absolute left-0 top-0 h-px w-10 animate-[flow_1.6s_linear_infinite] bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_8px_rgba(34,211,238,0.8)]" />

                      <div className="absolute left-0 top-1/2 h-1 w-1 -translate-y-1/2 animate-[flow_1.6s_linear_infinite] rounded-full bg-cyan-300 blur-[1px]" />

                    </div>

                    {/* Node 2 */}
                    <div
                      className="
                        group/node
                        relative
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-violet-400/15
                        bg-violet-400/[0.05]
                        transition-all
                        duration-500
                        hover:scale-110
                        hover:border-violet-300/40
                        hover:bg-violet-400/[0.12]
                        hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]
                      "
                    >
                      <Server className="relative h-3 w-3 text-violet-400 transition-transform duration-300 group-hover/node:scale-110" />
                    </div>

                    {/* Connection */}
                    <div className="relative mx-2 h-px flex-1 overflow-hidden bg-white/[0.07]">

                      <div className="absolute left-0 top-0 h-px w-10 animate-[flow_1.6s_linear_infinite] bg-gradient-to-r from-transparent via-violet-300 to-transparent shadow-[0_0_8px_rgba(139,92,246,0.8)]" />

                      <div className="absolute left-0 top-1/2 h-1 w-1 -translate-y-1/2 animate-[flow_1.6s_linear_infinite] rounded-full bg-violet-300 blur-[1px]" />

                    </div>

                    {/* Node 3 */}
                    <div
                      className="
                        group/node
                        relative
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-emerald-400/15
                        bg-emerald-400/[0.05]
                        transition-all
                        duration-500
                        hover:scale-110
                        hover:border-emerald-300/40
                        hover:bg-emerald-400/[0.12]
                        hover:shadow-[0_0_20px_rgba(52,211,153,0.25)]
                      "
                    >
                      <ShieldCheck className="relative h-3 w-3 text-emerald-400 transition-transform duration-300 group-hover/node:scale-110" />
                    </div>

                  </div>

                </div>

              </div>

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
      className="
        group relative isolate h-full
        rounded-[30px]
        p-[1px]
        overflow-hidden
        transition-all duration-700
        hover:-translate-y-2
        hover:shadow-[0_30px_100px_rgba(34,211,238,0.12)]
      "
    >
      {/* ═══════════════════════════════════
          ANIMATED ENERGY BORDER
      ═══════════════════════════════════ */}
      <div
        className="
          absolute inset-[-100%]
          animate-[spin_8s_linear_infinite]
          bg-[conic-gradient(from_0deg,transparent_0deg,transparent_250deg,rgba(34,211,238,0.0)_280deg,rgba(34,211,238,0.9)_315deg,rgba(139,92,246,0.8)_340deg,transparent_360deg)]
          opacity-30
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      {/* Secondary border glow */}
      <div
        className="
          absolute inset-0 rounded-[30px]
          border border-cyan-400/10
          transition-all duration-500
          group-hover:border-cyan-400/30
        "
      />

      {/* ═══════════════════════════════════
          CARD BODY
      ═══════════════════════════════════ */}
      <div
        className="
          relative h-full overflow-hidden
          rounded-[29px]
          bg-[#070d18]
          px-7 py-7
        "
      >

        {/* ═══════════════════════════════════
            DIGITAL GRID
        ═══════════════════════════════════ */}
        <div
          className="
            pointer-events-none absolute inset-0
            opacity-[0.035]
            transition-opacity duration-500
            group-hover:opacity-[0.08]
            [background-image:linear-gradient(rgba(34,211,238,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.6)_1px,transparent_1px)]
            [background-size:28px_28px]
          "
        />

        {/* ═══════════════════════════════════
            TOP RIGHT RADIAL GLOW
        ═══════════════════════════════════ */}
        <div
          className="
            pointer-events-none absolute
            -right-24 -top-24
            h-64 w-64 rounded-full
            bg-cyan-400/[0.035]
            blur-3xl
            transition-all duration-700
            group-hover:scale-150
            group-hover:bg-cyan-400/[0.09]
          "
        />

        {/* Bottom violet glow */}
        <div
          className="
            pointer-events-none absolute
            -bottom-24 -left-24
            h-56 w-56 rounded-full
            bg-violet-500/[0.025]
            blur-3xl
            transition-all duration-700
            group-hover:bg-violet-500/[0.08]
          "
        />

        {/* ═══════════════════════════════════
            SCAN LINE
        ═══════════════════════════════════ */}
        <div
          className="
            pointer-events-none absolute
            left-0 top-0
            h-px w-full
            bg-gradient-to-r
            from-transparent
            via-cyan-400
            to-transparent
            opacity-0
            group-hover:animate-[scan_2.5s_ease-in-out_infinite]
            group-hover:opacity-70
          "
        />

        {/* ═══════════════════════════════════
            CONTENT
        ═══════════════════════════════════ */}
        <div className="relative z-10">

          {/* HEADER */}
          <div className="mb-12 flex items-start justify-between">

            {/* ICON SYSTEM */}
            <div className="relative">

              {/* Outer ring */}
              <div
                className="
                  absolute -inset-2
                  rounded-[20px]
                  border border-cyan-400/0
                  transition-all duration-500
                  group-hover:rotate-45
                  group-hover:border-cyan-400/20
                "
              />

              {/* Glow */}
              <div
                className="
                  absolute inset-0
                  rounded-2xl
                  bg-cyan-400/20
                  blur-xl
                  opacity-0
                  transition-opacity duration-500
                  group-hover:opacity-100
                "
              />

              {/* Icon box */}
              <div
                className="
                  relative flex h-12 w-12
                  items-center justify-center
                  rounded-2xl
                  border border-white/[0.08]
                  bg-white/[0.025]
                  shadow-[inset_0_0_20px_rgba(34,211,238,0.02)]
                  transition-all duration-500
                  group-hover:border-cyan-400/40
                  group-hover:bg-cyan-400/[0.07]
                "
              >
                <Icon
                  className="
                    h-5 w-5
                    text-cyan-400
                    transition-all duration-500
                    group-hover:scale-110
                    group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]
                  "
                />
              </div>

              {/* Status dot */}
              <span
                className="
                  absolute -right-1 -top-1
                  h-2 w-2 rounded-full
                  bg-cyan-400/30
                  transition-all duration-500
                  group-hover:bg-cyan-400
                  group-hover:shadow-[0_0_12px_rgba(34,211,238,1)]
                "
              />
            </div>

            {/* TECHNICAL NUMBER */}
            <div className="relative text-right">

              <div
                className="
                  font-mono text-[9px]
                  uppercase tracking-[0.3em]
                  text-slate-700
                  transition-colors duration-500
                  group-hover:text-cyan-400/50
                "
              >
                SYS / 0{service.number}
              </div>

              <div
                className="
                  mt-1 text-4xl
                  font-black tracking-[-0.1em]
                  text-white/[0.035]
                  transition-all duration-500
                  group-hover:text-cyan-400/[0.13]
                "
              >
                {service.number}
              </div>
            </div>
          </div>

          {/* TITLE */}
          <h3
            className="
              text-xl font-bold
              tracking-[-0.025em]
              text-white
              transition-all duration-300
              group-hover:text-cyan-300
              group-hover:drop-shadow-[0_0_14px_rgba(34,211,238,0.15)]
            "
          >
            {service.title}
          </h3>

          {/* DESCRIPTION */}
          <p
            className="
              mt-3 min-h-[72px]
              max-w-[95%]
              text-sm leading-6
              text-slate-500
              transition-colors duration-300
              group-hover:text-slate-400
            "
          >
            {service.description}
          </p>

          {/* TAGS */}
          <div className="mt-7 flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-md
                  border border-white/[0.06]
                  bg-white/[0.025]
                  px-2.5 py-1.5
                  font-mono text-[8px]
                  font-semibold
                  uppercase tracking-[0.08em]
                  text-slate-500
                  transition-all duration-300
                  group-hover:border-cyan-400/15
                  group-hover:bg-cyan-400/[0.035]
                  group-hover:text-cyan-400/70
                "
              >
                {tag}
              </span>
            ))}
          </div>

          {/* ═══════════════════════════════════
              SECURITY STATUS
          ═══════════════════════════════════ */}
          <div className="mt-8 border-t border-white/[0.06] pt-5">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-2">

                <span
                  className="
                    relative flex h-2 w-2
                  "
                >
                  <span
                    className="
                      absolute inline-flex
                      h-full w-full
                      animate-ping
                      rounded-full
                      bg-cyan-400/40
                    "
                  />

                  <span
                    className="
                      relative inline-flex
                      h-2 w-2 rounded-full
                      bg-cyan-400
                      shadow-[0_0_8px_rgba(34,211,238,0.8)]
                    "
                  />
                </span>

                <span
                  className="
                    font-mono text-[8px]
                    font-bold uppercase
                    tracking-[0.25em]
                    text-slate-600
                    transition-colors
                    group-hover:text-cyan-400/70
                  "
                >
                  Secure System
                </span>
              </div>

              <span
                className="
                  font-mono text-[8px]
                  tracking-[0.2em]
                  text-slate-700
                  transition-colors
                  group-hover:text-slate-500
                "
              >
                ONLINE
              </span>

            </div>

            {/* Progress / signal line */}
            <div className="mt-3 h-[2px] w-full overflow-hidden rounded-full bg-white/[0.04]">
              <div
                className="
                  h-full w-1/3
                  bg-gradient-to-r
                  from-cyan-500/0
                  via-cyan-400/70
                  to-cyan-400/0
                  transition-all duration-700
                  group-hover:w-full
                "
              />
            </div>

          </div>
        </div>

        {/* ═══════════════════════════════════
            HUD CORNERS
        ═══════════════════════════════════ */}

        {/* Top left */}
        <div
          className="
            pointer-events-none absolute left-0 top-0
            h-7 w-7
            border-l border-t
            border-cyan-400/20
            opacity-50
            transition-all duration-500
            group-hover:h-10
            group-hover:w-10
            group-hover:border-cyan-400/70
            group-hover:opacity-100
          "
        />

        {/* Bottom right */}
        <div
          className="
            pointer-events-none absolute bottom-0 right-0
            h-7 w-7
            border-b border-r
            border-violet-400/20
            opacity-50
            transition-all duration-500
            group-hover:h-10
            group-hover:w-10
            group-hover:border-violet-400/70
            group-hover:opacity-100
          "
        />

        {/* Tiny HUD marks */}
        <div className="absolute bottom-3 left-7 flex gap-1 opacity-30">
          <span className="h-[2px] w-2 bg-cyan-400" />
          <span className="h-[2px] w-1 bg-cyan-400" />
          <span className="h-[2px] w-3 bg-cyan-400" />
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

  {/* Central connection line */}
  <div
    className="
      pointer-events-none absolute
      left-1/2 top-0 hidden
      h-full w-px
      -translate-x-1/2
      bg-gradient-to-b
      from-transparent
      via-cyan-400/15
      to-transparent
      lg:block
    "
  />

  {/* Central glowing node */}
  <div
    className="
      pointer-events-none absolute
      left-1/2 top-1/2 hidden
      -translate-x-1/2 -translate-y-1/2
      lg:flex
      h-3 w-3
      items-center justify-center
    "
  >
    <span className="absolute h-8 w-8 rounded-full bg-cyan-400/5 blur-xl" />

    <span
      className="
        relative h-1.5 w-1.5 rounded-full
        bg-cyan-400
        shadow-[0_0_15px_rgba(34,211,238,0.9)]
      "
    />
  </div>

  <div className="grid gap-4 lg:grid-cols-2">

    {capabilities.map((item, index) => {
      const Icon = item.icon;

      return (
        <article
          key={item.title}
          className={`group relative isolate overflow-hidden rounded-[30px] p-[1px] transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_25px_90px_rgba(34,211,238,0.08)] ${
            index === 0 || index === 3
              ? "lg:translate-y-8"
              : ""
          }`}
        >

          {/* =====================================
              ANIMATED BORDER
          ===================================== */}
          <div
            className="
              absolute inset-[-100%]
              bg-[conic-gradient(from_0deg,transparent_0deg,transparent_250deg,rgba(34,211,238,0)_280deg,rgba(34,211,238,0.65)_315deg,rgba(139,92,246,0.55)_340deg,transparent_360deg)]
              opacity-20
              transition-opacity duration-700
              group-hover:opacity-100
              animate-[spin_10s_linear_infinite]
            "
          />

          {/* Static border */}
          <div
            className="
              absolute inset-0
              rounded-[30px]
              border border-cyan-400/[0.08]
              transition-all duration-500
              group-hover:border-cyan-400/25
            "
          />

          {/* =====================================
              CARD BODY
          ===================================== */}
          <div
            className="
              relative h-full overflow-hidden
              rounded-[29px]
              bg-[#080f1d]
              p-7
            "
          >

            {/* Digital grid */}
            <div
              className="
                pointer-events-none absolute inset-0
                opacity-[0.025]
                transition-opacity duration-500
                group-hover:opacity-[0.065]
                [background-image:linear-gradient(rgba(34,211,238,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.6)_1px,transparent_1px)]
                [background-size:30px_30px]
              "
            />

            {/* Top glow */}
            <div
              className="
                pointer-events-none absolute
                -right-24 -top-24
                h-64 w-64
                rounded-full
                bg-cyan-400/[0.025]
                blur-[90px]
                transition-all duration-700
                group-hover:scale-150
                group-hover:bg-cyan-400/[0.08]
              "
            />

            {/* Bottom violet glow */}
            <div
              className="
                pointer-events-none absolute
                -bottom-28 -left-28
                h-60 w-60
                rounded-full
                bg-violet-500/[0.02]
                blur-[90px]
                transition-all duration-700
                group-hover:bg-violet-500/[0.07]
              "
            />

            {/* Scanline */}
            <div
              className="
                pointer-events-none absolute
                left-0 top-0
                h-px w-full
                bg-gradient-to-r
                from-transparent
                via-cyan-400
                to-transparent
                opacity-0
                group-hover:animate-[scan_2.5s_ease-in-out_infinite]
                group-hover:opacity-60
              "
            />

            {/* Content */}
            <div className="relative z-10">

              {/* =====================================
                  TOP ROW
              ===================================== */}
              <div className="flex items-start justify-between">

                <div className="flex items-center gap-4">

                  {/* Icon system */}
                  <div className="relative">

                    {/* Outer HUD ring */}
                    <div
                      className="
                        absolute -inset-2
                        rounded-[19px]
                        border border-cyan-400/0
                        transition-all duration-500
                        group-hover:rotate-45
                        group-hover:border-cyan-400/20
                      "
                    />

                    {/* Icon glow */}
                    <div
                      className="
                        absolute inset-0
                        rounded-2xl
                        bg-cyan-400/20
                        blur-xl
                        opacity-0
                        transition-opacity duration-500
                        group-hover:opacity-100
                      "
                    />

                    {/* Icon */}
                    <div
                      className="
                        relative flex h-12 w-12
                        items-center justify-center
                        rounded-2xl
                        border border-white/[0.07]
                        bg-white/[0.025]
                        transition-all duration-500
                        group-hover:border-cyan-400/35
                        group-hover:bg-cyan-400/[0.06]
                      "
                    >
                      <Icon
                        className="
                          h-[18px] w-[18px]
                          text-cyan-400
                          transition-all duration-500
                          group-hover:scale-110
                          group-hover:drop-shadow-[0_0_9px_rgba(34,211,238,0.9)]
                        "
                      />
                    </div>

                    {/* Live dot */}
                    <span
                      className="
                        absolute -right-1 -top-1
                        h-2 w-2 rounded-full
                        bg-cyan-400
                        shadow-[0_0_8px_rgba(34,211,238,0.8)]
                        transition-all duration-500
                        group-hover:shadow-[0_0_14px_rgba(34,211,238,1)]
                      "
                    />
                  </div>

                  {/* Layer information */}
                  <div>

                    <span
                      className="
                        block font-mono
                        text-[8px]
                        uppercase
                        tracking-[0.25em]
                        text-slate-700
                        transition-colors duration-500
                        group-hover:text-cyan-400/60
                      "
                    >
                      Layer 0{index + 1}
                    </span>

                    <span
                      className="
                        mt-1 block
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-slate-500
                      "
                    >
                      Capability
                    </span>

                  </div>
                </div>

                {/* Arrow */}
                <ArrowRight
                  className="
                    h-4 w-4
                    -translate-x-2
                    text-slate-700
                    opacity-0
                    transition-all duration-500
                    group-hover:translate-x-0
                    group-hover:text-cyan-400
                    group-hover:opacity-100
                    group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]
                  "
                />

              </div>

              {/* =====================================
                  MAIN CONTENT
              ===================================== */}
              <div className="mt-10">

                <div className="flex items-end justify-between gap-4">

                  <h3
                    className="
                      text-xl font-bold
                      tracking-[-0.025em]
                      text-white
                      transition-all duration-300
                      group-hover:text-cyan-300
                    "
                  >
                    {item.title}
                  </h3>

                  <span
                    className="
                      font-mono text-[8px]
                      uppercase tracking-[0.2em]
                      text-slate-700
                      transition-colors
                      group-hover:text-cyan-400/50
                    "
                  >
                    0{index + 1}
                  </span>

                </div>

                <p
                  className="
                    mt-3 max-w-lg
                    text-sm leading-6
                    text-slate-500
                    transition-colors duration-300
                    group-hover:text-slate-400
                  "
                >
                  {item.description}
                </p>

              </div>

              {/* =====================================
                  SYSTEM STATUS
              ===================================== */}
              <div className="mt-9">

                <div
                  className="
                    mb-2 flex items-center
                    justify-between
                    font-mono text-[8px]
                    uppercase
                    tracking-[0.18em]
                    text-slate-700
                  "
                >
                  <span>Integrated Layer</span>

                  <span
                    className="
                      flex items-center gap-2
                      transition-colors
                      group-hover:text-cyan-400/70
                    "
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                    Active
                  </span>
                </div>

                {/* Signal */}
                <div
                  className="
                    relative h-[3px]
                    overflow-hidden rounded-full
                    bg-white/[0.04]
                  "
                >

                  <div
                    className="
                      h-full rounded-full
                      bg-gradient-to-r
                      from-cyan-500/10
                      via-cyan-400/60
                      to-cyan-400
                      transition-all duration-700
                      group-hover:shadow-[0_0_12px_rgba(34,211,238,0.5)]
                    "
                    style={{
                      width: `${68 + index * 7}%`,
                    }}
                  />

                  {/* Moving signal */}
                  <div
                    className="
                      absolute inset-y-0 left-0
                      w-20
                      bg-gradient-to-r
                      from-transparent
                      via-white/30
                      to-transparent
                      -translate-x-full
                      opacity-0
                      group-hover:animate-[shimmer_1.8s_linear_infinite]
                      group-hover:opacity-100
                    "
                  />

                </div>

              </div>

            </div>

            {/* =====================================
                HUD CORNERS
            ===================================== */}

            {/* Top left */}
            <div
              className="
                pointer-events-none absolute
                left-0 top-0
                h-7 w-7
                border-l border-t
                border-cyan-400/20
                opacity-50
                transition-all duration-500
                group-hover:h-10
                group-hover:w-10
                group-hover:border-cyan-400/70
                group-hover:opacity-100
              "
            />

            {/* Bottom right */}
            <div
              className="
                pointer-events-none absolute
                bottom-0 right-0
                h-7 w-7
                border-b border-r
                border-violet-400/20
                opacity-50
                transition-all duration-500
                group-hover:h-10
                group-hover:w-10
                group-hover:border-violet-400/70
                group-hover:opacity-100
              "
            />

            {/* Tiny technical marks */}
            <div
              className="
                pointer-events-none absolute
                bottom-4 left-7
                flex gap-1 opacity-30
              "
            >
              <span className="h-[2px] w-2 bg-cyan-400" />
              <span className="h-[2px] w-1 bg-cyan-400" />
              <span className="h-[2px] w-3 bg-cyan-400" />
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
  className="
    group
    relative
    isolate
    inline-flex
    items-center
    justify-center
    gap-3
    overflow-hidden
    rounded-xl
    border
    border-cyan-300/25
    bg-cyan-400
    px-6
    py-3.5
    text-sm
    font-bold
    text-[#030712]
    shadow-[0_10px_35px_rgba(34,211,238,0.10)]
    transition-all
    duration-500
    hover:-translate-y-1
    hover:bg-cyan-300
    hover:shadow-[0_15px_45px_rgba(34,211,238,0.22)]
  "
>
  {/* Moving light */}
  <span
    className="
      pointer-events-none
      absolute
      inset-y-0
      left-[-60%]
      w-[45%]
      skew-x-[-20deg]
      bg-white/35
      blur-md
      transition-all
      duration-700
      group-hover:left-[120%]
    "
  />

  {/* Status */}
  <span
    className="
      relative
      z-10
      h-1.5
      w-1.5
      rounded-full
      bg-[#030712]/60
      transition-all
      duration-300
      group-hover:bg-[#030712]
      group-hover:shadow-[0_0_8px_rgba(3,7,18,0.7)]
    "
  />

  <span className="relative z-10">
    Build Your Stack
  </span>

  <ArrowRight
    className="
      relative
      z-10
      h-3.5
      w-3.5
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
  />
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

  {/* Ambient glow */}
  <div
    className="
      pointer-events-none absolute
      left-1/2 top-1/2
      h-[520px] w-[520px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-cyan-400/[0.035]
      blur-[120px]
    "
  />

  {/* Secondary ambient */}
  <div
    className="
      pointer-events-none absolute
      -right-20 -top-20
      h-64 w-64
      rounded-full
      bg-violet-500/[0.04]
      blur-[100px]
    "
  />

  {/* Outer animated border */}
  <div
    className="
      absolute inset-[-1px]
      rounded-[2rem]
      bg-[conic-gradient(from_180deg,transparent,rgba(34,211,238,0.45),transparent,rgba(139,92,246,0.35),transparent)]
      opacity-30
      blur-[1px]
      transition-opacity duration-700
      hover:opacity-80
    "
  />

  <div
    className="
      relative overflow-hidden
      rounded-[2rem]
      border border-white/[0.08]
      bg-[#070d18]/95
      shadow-[0_30px_100px_rgba(0,0,0,0.35)]
      backdrop-blur-2xl
    "
  >

    {/* =====================================
        DIGITAL GRID
    ===================================== */}
    <div
      className="
        pointer-events-none absolute inset-0
        opacity-[0.035]
        [background-image:linear-gradient(rgba(34,211,238,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.5)_1px,transparent_1px)]
        [background-size:32px_32px]
      "
    />

    {/* Scanline */}
    <div
      className="
        pointer-events-none absolute
        left-0 top-0
        h-px w-full
        bg-gradient-to-r
        from-transparent
        via-cyan-400
        to-transparent
        opacity-40
        animate-[scan_5s_ease-in-out_infinite]
      "
    />

    {/* =====================================
        HEADER
    ===================================== */}
    <div
      className="
        relative z-10
        flex items-center justify-between
        border-b border-white/[0.06]
        px-6 py-5
      "
    >

      <div>

        <div
          className="
            font-mono text-[8px]
            uppercase tracking-[0.3em]
            text-slate-700
          "
        >
          CENTA / SYSTEM / ARCH
        </div>

        <div
          className="
            mt-1.5 text-xs
            font-bold tracking-tight
            text-white
          "
        >
          Technology Architecture
        </div>

      </div>

      {/* Operational status */}
      <div
        className="
          flex items-center gap-2
          rounded-full
          border border-emerald-400/15
          bg-emerald-400/[0.035]
          px-3 py-1.5
        "
      >

        <span className="relative flex h-1.5 w-1.5">

          <span
            className="
              absolute inset-0
              animate-ping
              rounded-full
              bg-emerald-400/50
            "
          />

          <span
            className="
              relative h-1.5 w-1.5
              rounded-full
              bg-emerald-400
              shadow-[0_0_8px_rgba(52,211,153,0.9)]
            "
          />

        </span>

        <span
          className="
            font-mono text-[7px]
            font-bold uppercase
            tracking-[0.18em]
            text-emerald-400/80
          "
        >
          Operational
        </span>

      </div>
    </div>


    {/* =====================================
        SYSTEM VISUALIZATION
    ===================================== */}
    <div className="relative z-10 p-6 sm:p-8">

      {/* Technical coordinates */}
      <div
        className="
          absolute right-6 top-6
          font-mono text-[7px]
          tracking-[0.2em]
          text-slate-800
        "
      >
        SYS.CORE / 01
      </div>


      {/* =====================================
          CORE SYSTEM
      ===================================== */}
      <div className="relative mx-auto flex h-40 w-40 items-center justify-center">

        {/* Outer orbit */}
        <div
          className="
            absolute inset-0
            rounded-full
            border border-cyan-400/[0.08]
            animate-[spin_18s_linear_infinite]
          "
        />

        {/* Orbit accent */}
        <div
          className="
            absolute inset-[-7px]
            rounded-full
            border border-transparent
            border-t-cyan-400/40
            border-r-violet-400/20
            animate-[spin_10s_linear_infinite]
          "
        />

        {/* Orbit dot */}
        <div
          className="
            absolute -top-1
            left-1/2
            h-2 w-2
            -translate-x-1/2
            rounded-full
            bg-cyan-400
            shadow-[0_0_14px_rgba(34,211,238,1)]
          "
        />

        {/* Inner ring */}
        <div
          className="
            absolute inset-5
            rounded-full
            border border-cyan-400/10
            bg-cyan-400/[0.025]
            shadow-[inset_0_0_40px_rgba(34,211,238,0.035)]
          "
        />

        {/* Core glow */}
        <div
          className="
            absolute inset-12
            rounded-full
            bg-cyan-400/[0.08]
            blur-2xl
          "
        />

        {/* Core */}
        <div
          className="
            relative flex
            h-20 w-20
            items-center justify-center
            rounded-full
            border border-violet-400/25
            bg-[#0b1424]
            shadow-[0_0_60px_rgba(124,58,237,0.14)]
          "
        >

          <div className="text-center">

            <div
              className="
                text-xl font-black
                tracking-[0.15em]
                text-white
                drop-shadow-[0_0_12px_rgba(255,255,255,0.1)]
              "
            >
              C
            </div>

            <div
              className="
                mt-1 font-mono
                text-[6px]
                uppercase
                tracking-[0.3em]
                text-cyan-400
              "
            >
              Core
            </div>

          </div>

        </div>
      </div>


      {/* Core label */}
      <div className="mt-5 text-center">

        <div
          className="
            font-mono text-[7px]
            uppercase tracking-[0.25em]
            text-slate-700
          "
        >
          Central Architecture
        </div>

        <div
          className="
            mt-1 text-[9px]
            font-semibold
            uppercase tracking-[0.15em]
            text-slate-500
          "
        >
          Unified Technology Layer
        </div>

      </div>


      {/* =====================================
          CONNECTION SYSTEM
      ===================================== */}
      <div
        className="
          relative mx-auto
          mt-8 hidden h-8
          w-[70%]
          sm:block
        "
      >

        {/* Main line */}
        <div
          className="
            absolute left-0 right-0 top-1/2
            h-px
            bg-gradient-to-r
            from-transparent
            via-cyan-400/20
            to-transparent
          "
        />

        {/* Moving signal */}
        <div
          className="
            absolute left-0 top-1/2
            h-px w-16
            -translate-y-1/2
            bg-gradient-to-r
            from-transparent
            via-cyan-400
            to-transparent
            animate-[flow_2.5s_linear_infinite]
          "
        />

        {/* Center node */}
        <div
          className="
            absolute left-1/2 top-1/2
            h-2 w-2
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-400
            shadow-[0_0_12px_rgba(34,211,238,0.9)]
          "
        />

      </div>


      {/* =====================================
          MODULES
      ===================================== */}
      <div className="relative grid grid-cols-2 gap-2.5">

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
        ].map((item, index) => {

          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                group/module
                relative overflow-hidden
                rounded-2xl
                border border-white/[0.06]
                bg-white/[0.02]
                p-4
                transition-all duration-500
                hover:-translate-y-1
                hover:border-cyan-400/20
                hover:bg-cyan-400/[0.025]
                hover:shadow-[0_15px_40px_rgba(34,211,238,0.06)]
              "
            >

              {/* Module grid */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  opacity-0
                  transition-opacity duration-500
                  group-hover/module:opacity-100
                  [background-image:linear-gradient(rgba(34,211,238,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.4)_1px,transparent_1px)]
                  [background-size:18px_18px]
                "
              />

              {/* Module glow */}
              <div
                className="
                  pointer-events-none absolute
                  -right-8 -top-8
                  h-20 w-20
                  rounded-full
                  bg-cyan-400/[0.04]
                  blur-2xl
                  transition-all duration-500
                  group-hover/module:bg-cyan-400/[0.1]
                "
              />

              <div className="relative z-10">

                {/* Top */}
                <div className="flex items-center justify-between">

                  <div
                    className="
                      flex h-9 w-9
                      items-center justify-center
                      rounded-xl
                      border border-cyan-400/10
                      bg-cyan-400/[0.035]
                      transition-all duration-500
                      group-hover/module:border-cyan-400/30
                      group-hover/module:bg-cyan-400/[0.07]
                    "
                  >
                    <Icon
                      className="
                        h-3.5 w-3.5
                        text-cyan-400
                        transition-all duration-500
                        group-hover/module:scale-110
                        group-hover/module:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]
                      "
                    />
                  </div>

                  <span
                    className="
                      font-mono text-[7px]
                      text-slate-800
                      transition-colors
                      group-hover/module:text-cyan-400/50
                    "
                  >
                    0{index + 1}
                  </span>

                </div>

                {/* Title */}
                <div
                  className="
                    mt-5 text-[10px]
                    font-bold
                    text-white
                    transition-colors
                    group-hover/module:text-cyan-300
                  "
                >
                  {item.title}
                </div>

                {/* Action */}
                <div
                  className="
                    mt-1 flex items-center
                    justify-between
                  "
                >

                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.16em]
                      text-slate-700
                    "
                  >
                    {item.value}
                  </span>

                  <ArrowRight
                    className="
                      h-3 w-3
                      text-slate-800
                      transition-all duration-300
                      group-hover/module:translate-x-0.5
                      group-hover/module:text-cyan-400
                    "
                  />

                </div>

                {/* Module signal */}
                <div
                  className="
                    mt-4 h-[2px]
                    overflow-hidden
                    rounded-full
                    bg-white/[0.04]
                  "
                >
                  <div
                    className="
                      h-full
                      w-1/2
                      bg-gradient-to-r
                      from-cyan-400/10
                      via-cyan-400/50
                      to-transparent
                      transition-all duration-500
                      group-hover/module:w-full
                    "
                  />
                </div>

              </div>

              {/* Corner */}
              <span
                className="
                  pointer-events-none
                  absolute bottom-0 right-0
                  h-4 w-4
                  border-b border-r
                  border-cyan-400/0
                  transition-all duration-500
                  group-hover/module:border-cyan-400/40
                "
              />

            </div>
          );
        })}
      </div>


      {/* =====================================
          SYSTEM STATUS
      ===================================== */}
      <div
        className="
          mt-3 flex items-center
          justify-between
          rounded-xl
          border border-white/[0.05]
          bg-white/[0.015]
          px-4 py-3
        "
      >

        <div className="flex items-center gap-2">

          <span className="relative flex h-1.5 w-1.5">

            <span
              className="
                absolute inset-0
                animate-ping
                rounded-full
                bg-cyan-400/40
              "
            />

            <span
              className="
                relative h-1.5 w-1.5
                rounded-full
                bg-cyan-400
                shadow-[0_0_7px_rgba(34,211,238,0.9)]
              "
            />

          </span>

          <span
            className="
              font-mono text-[7px]
              uppercase
              tracking-[0.18em]
              text-slate-500
            "
          >
            All systems connected
          </span>

        </div>

        <div className="flex items-center gap-3">

          <span
            className="
              font-mono text-[7px]
              uppercase
              tracking-[0.15em]
              text-slate-800
            "
          >
            STABLE
          </span>

          <span
            className="
              font-mono text-[7px]
              text-slate-700
            "
          >
            v1.0
          </span>

        </div>

      </div>


      {/* =====================================
          FOOTER TELEMETRY
      ===================================== */}
      <div
        className="
          mt-4 flex items-center
          justify-between
          font-mono text-[6px]
          uppercase tracking-[0.2em]
          text-slate-800
        "
      >
        <span>SECURE ARCHITECTURE</span>

        <span className="flex items-center gap-1.5">
          <span className="h-px w-5 bg-cyan-400/20" />
          CENTA.LTD
        </span>
      </div>

    </div>


    {/* HUD corners */}

    <div
      className="
        pointer-events-none absolute
        left-0 top-0
        h-8 w-8
        border-l border-t
        border-cyan-400/30
      "
    />

    <div
      className="
        pointer-events-none absolute
        right-0 bottom-0
        h-8 w-8
        border-b border-r
        border-violet-400/30
      "
    />

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

        <section 
                  id="faq"
        className="border-t border-white/[0.05]">
        
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
       <span className="block text-blue-400">
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
             Isi form berikut,tim Centa akan menerima pesan Anda
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
<div className="group/message">
  <div className="mb-2 flex items-end justify-between">
    <label
      htmlFor="message"
      className="
        block
        font-mono
        text-[9px]
        font-bold
        uppercase
        tracking-[0.2em]
        text-slate-400
      "
    >
      Project Details
      <span className="ml-1 text-cyan-400">*</span>
    </label>

    <span
      className="
        font-mono
        text-[7px]
        uppercase
        tracking-[0.15em]
        text-slate-700
      "
    >
      SECURE INPUT
    </span>
  </div>

  <div className="relative">
    {/* Ambient glow */}
    <div
      className="
        pointer-events-none
        absolute
        -inset-px
        rounded-2xl
        bg-cyan-400/0
        blur-xl
        transition-all duration-500
        focus-within:bg-cyan-400/[0.05]
      "
    />

    {/* Textarea container */}
    <div
      className="
        relative
        overflow-hidden
        rounded-2xl
        border border-white/[0.07]
        bg-[#07111f]/80
        backdrop-blur-xl
        transition-all duration-500
        focus-within:border-cyan-400/30
        focus-within:bg-cyan-400/[0.018]
        focus-within:shadow-[0_0_35px_rgba(34,211,238,0.05)]
      "
    >
      {/* Technical grid */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.018]
          [background-image:linear-gradient(rgba(34,211,238,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.5)_1px,transparent_1px)]
          [background-size:22px_22px]
        "
      />

      {/* Scan line */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-cyan-400
          to-transparent
          opacity-0
          transition-opacity duration-500
          group-focus-within/message:opacity-40
        "
      />

      <textarea
        id="message"
        name="message"
        required
        rows={6}
        value={formData.message}
        onChange={handleInputChange}
        placeholder="Tell us about your project, requirements, timeline, or the problem you want to solve..."
        className="
          relative z-10
          w-full
          resize-none
          bg-transparent
          px-4
          py-4
          text-sm
          leading-6
          text-white
          outline-none
          placeholder:text-slate-700
        "
      />

      {/* Bottom telemetry */}
      <div
        className="
          relative z-10
          flex items-center
          justify-between
          border-t border-white/[0.05]
          px-4
          py-2.5
        "
      >
        <div className="flex items-center gap-2">
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-cyan-400/30
              transition-all duration-300
              group-focus-within/message:bg-cyan-400
              group-focus-within/message:shadow-[0_0_8px_rgba(34,211,238,0.8)]
            "
          />

          <span
            className="
              font-mono
              text-[7px]
              uppercase
              tracking-[0.18em]
              text-slate-700
            "
          >
            Input Channel
          </span>
        </div>

        <span
          className="
            font-mono
            text-[7px]
            uppercase
            tracking-[0.15em]
            text-slate-700
          "
        >
          Encrypted
        </span>
      </div>

      {/* HUD corners */}
      <span
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-5
          w-5
          border-l
          border-t
          border-cyan-400/20
        "
      />

      <span
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          h-5
          w-5
          border-b
          border-r
          border-cyan-400/20
        "
      />
    </div>
  </div>
</div>

{/* Submit */}
<button
  type="submit"
  className="
    group
    relative
    isolate
    flex
    w-full
    items-center
    justify-center
    gap-3
    overflow-hidden
    rounded-2xl
    border
    border-cyan-300/25
    bg-cyan-400
    px-6
    py-4
    text-sm
    font-bold
    text-[#030712]
    shadow-[0_10px_40px_rgba(34,211,238,0.12)]
    transition-all
    duration-500
    hover:-translate-y-1
    hover:bg-cyan-300
    hover:shadow-[0_18px_55px_rgba(34,211,238,0.22)]
    active:translate-y-0
  "
>
  {/* Moving energy */}
  <span
    className="
      pointer-events-none
      absolute
      inset-y-0
      left-[-60%]
      w-[45%]
      skew-x-[-20deg]
      bg-white/35
      blur-md
      transition-all
      duration-700
      group-hover:left-[120%]
    "
  />

  {/* Status */}
  <span
    className="
      relative
      z-10
      h-1.5
      w-1.5
      rounded-full
      bg-[#030712]/60
      transition-all
      duration-300
      group-hover:bg-[#030712]
      group-hover:shadow-[0_0_8px_rgba(3,7,18,0.7)]
    "
  />

  <span className="relative z-10">
    Send Project Inquiry
  </span>

  <Send
    className="
      relative
      z-10
      h-4
      w-4
      transition-transform
      duration-300
      group-hover:translate-x-1
      group-hover:-translate-y-0.5
    "
  />
</button>

{/* Privacy */}
<div className="flex items-center justify-center gap-2">
  <span
    className="
      h-1.5
      w-1.5
      rounded-full
      bg-emerald-400/60
      shadow-[0_0_7px_rgba(52,211,153,0.5)]
    "
  />

  <p
    className="
      text-center
      font-mono
      text-[7px]
      uppercase
      tracking-[0.15em]
      leading-5
      text-slate-700
    "
  >
    Project information is used only for secure inquiry response
  </p>
</div>

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

    

     
    </div>
  );
}