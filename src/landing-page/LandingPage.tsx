import { useEffect, useState, } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import {
  sendContactMessage,
} from "../services/contact.service";
import {
  ArrowRight,
  Check,
  ChevronDown,

  Globe2,
  Mail,
  MessageCircle,

  Phone,
  Send,


  User,
} from "lucide-react";

export default function LandingPage() {

const [openFaq, setOpenFaq] = useState<number | null>(null);









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
      
      
      title: "Software Development",
      description:
        "Pengembangan software custom yang dirancang sesuai kebutuhan bisnis, workflow, dan skala organisasi.",
      tags: ["Custom Software", "API", "Backend"],
    },
    {
      title: "Web Development",
      description:
        "Membangun website dan web application yang modern, responsif, cepat, scalable, dan security-aware.",
      tags: ["Web App", "Frontend", "Backend"],
    },
    {
      title: "Application Development",
      description:
        "Mengembangkan aplikasi digital yang membantu bisnis menciptakan proses kerja lebih efisien dan terintegrasi.",
      tags: ["Application", "Integration", "Automation"],
    },
    {
      
      
      title: "Cyber Security",
      description:
        "Mengidentifikasi dan mengurangi risiko keamanan melalui security assessment, penetration testing, dan hardening.",
      tags: ["Pentest", "Assessment", "Hardening"],
    },
    {
      title: "Infrastructure & Cloud",
      description:
        "Membantu merancang dan mengamankan infrastruktur server, network, cloud, dan environment digital.",
      tags: ["Cloud", "Network", "Infrastructure"],
    },
    {
      title: "Security Advisory",
      description:
        "Pendampingan teknis untuk membantu organisasi memahami risiko, meningkatkan security posture, dan mengambil keputusan yang tepat.",
      tags: ["Advisory", "Risk", "Compliance"],
    },
  ];

  const capabilities = [
    {
      title: "Engineering",
      description:
        "Software architecture, backend, frontend, API, database, dan custom application development.",
    },
    {
      title: "Product & UI/UX",
      description:
        "Menerjemahkan kebutuhan bisnis menjadi pengalaman digital yang intuitif, modern, dan mudah digunakan.",
    },
    {
      title: "Security",
      description:
        "Security testing dan secure development untuk membantu memastikan aplikasi dibangun dengan mempertimbangkan keamanan.",
    },
    {
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
const headings = [
  "Build secure digital products with confidence",
  "Protect your business from modern cyber threats",
  "Create software that grows with your needs",
  "Empower your team with reliable technology",
];

const [headingIndex, setHeadingIndex] = useState(0);
const [charIndex, setCharIndex] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
  const currentHeading = headings[headingIndex];

  let speed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === currentHeading.length) {
    speed = 2000;
  }

  const timeout = setTimeout(() => {
    if (!isDeleting) {
      if (charIndex < currentHeading.length) {
        setCharIndex((prev) => prev + 1);
      } else {
        setIsDeleting(true);
      }
    } else {
      if (charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(false);
        setHeadingIndex((prev) => (prev + 1) % headings.length);
      }
    }
  }, speed);

  return () => clearTimeout(timeout);
}, [charIndex, headingIndex, isDeleting]);
  
    return (
  <div className="min-h-screen overflow-hidden text-white">
     

    <main>
  {/* =========================================================
    HERO
========================================================= */}

<section
  id="top"
  className="
    relative
    flex
    min-h-screen
    items-center
    overflow-hidden
    scroll-mt-24
    px-6
    py-24
    sm:px-8
    lg:px-12
  "
>
  {/* =========================================================
      AMBIENT BACKGROUND
  ========================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      right-[-180px]
      top-[30%]
      h-[420px]
      w-[420px]
      rounded-full
      bg-violet-600/[0.045]
      blur-[140px]
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      left-[-220px]
      top-[15%]
      h-[360px]
      w-[360px]
      rounded-full
      bg-cyan-400/[0.025]
      blur-[130px]
    "
  />

  {/* Top cyan line */}

  <div
    className="
      pointer-events-none
      absolute
      inset-x-0
      top-0
      h-px
      bg-gradient-to-r
      from-transparent
      via-cyan-400/20
      to-transparent
    "
  />

  {/* Background grid */}

  <div
    className="
      pointer-events-none
      absolute
      inset-0
      opacity-[0.015]
      [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
      [background-size:64px_64px]
    "
  />

  {/* =========================================================
      HERO CONTAINER
  ========================================================== */}

  <div className="relative z-10 mx-auto w-full max-w-7xl">

   

<div className="mx-auto w-full max-w-5xl text-center">

  {/* =====================================================
      MAIN MESSAGE
  ====================================================== */}

  <div className="relative">

    {/* Typing Heading */}

    <h1
      className="
        min-h-[150px]
        text-5xl
        font-black
        leading-[0.98]
        tracking-[-0.055em]
        text-white
        sm:min-h-[180px]
        sm:text-6xl
        lg:min-h-[185px]
        lg:text-[76px]
      "
    >
      <span
        className="
          bg-gradient-to-r
          from-white
          via-slate-200
          to-white
          bg-clip-text
          text-transparent
        "
      >
        {headings[headingIndex].substring(0, charIndex)}
      </span>

      {/* Typing cursor */}

      <span
        className="
          ml-1
          inline-block
          text-white
          animate-pulse
        "
      >
        |
      </span>
    </h1>

    {/* Accent line */}

    <span
      className="
        absolute
        -bottom-3
        left-1/2
        h-px
        w-24
        -translate-x-1/2
        bg-white/30
      "
    />

  </div>

  {/* =====================================================
      DESCRIPTION
  ====================================================== */}

  <div className="mx-auto mt-10 max-w-2xl">

    <p
      className="
        text-base
        leading-8
        text-slate-400
        sm:text-lg
      "
    >
      Centa membantu bisnis membangun software, digital
      products, infrastructure, dan security systems yang
      modern, scalable, dan resilient dengan pendekatan
      security-first untuk menghadapi ancaman digital masa kini.
    </p>

    {/* Security-first indicator */}

    <div
      className="
        mt-4
        flex
        items-center
        justify-center
        gap-2
        text-xs
        font-semibold
        text-slate-400
      "
    >
      <span
        className="
          h-1
          w-1
          rounded-full
          bg-white/60
        "
      />

      Security-first engineering
    </div>

  </div>

  {/* =====================================================
      ACTIONS
  ====================================================== */}

  <div
    className="
      mt-9
      flex
      flex-col
      justify-center
      gap-3
      sm:flex-row
    "
  >

    {/* =================================================
        PRIMARY BUTTON
    ================================================== */}

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
    border-cyan-300/30
    bg-cyan-400
    px-6
    py-3.5
    text-sm
    font-bold
    text-[#030712]
    shadow-[0_0_30px_rgba(34,211,238,0.10)]
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
      bg-white/30
      blur-md
      transition-all
      duration-700
      group-hover:left-[120%]
    "
  />

  <span className="relative z-10">
    Start a Project
  </span>

  <ArrowRight
    className="
      relative
      z-10
      h-4
      w-4
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
  />
</a>

    {/* =================================================
        SECONDARY BUTTON
    ================================================== */}

    <a
      href="#services"
      className="
        group
        relative
        inline-flex
        items-center
        justify-center
        gap-3
        overflow-hidden
        rounded-xl
        border
        border-white/[0.10]
        bg-white/[0.025]
        px-6
        py-3.5
        text-sm
        font-semibold
        text-white
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-white/20
        hover:bg-white/[0.05]
        hover:shadow-[0_15px_45px_rgba(255,255,255,0.04)]
      "
    >

      {/* Hover grid */}

      <span
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
          [background-size:16px_16px]
        "
      />

      <span
        className="
          relative
          z-10
          h-1.5
          w-1.5
          rounded-full
          bg-white/50
          transition-all
          duration-300
          group-hover:bg-white
          group-hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]
        "
      />

      <span className="relative z-10">
       Why Centa
      </span>

      <ArrowRight
        className="
          relative
          z-10
          h-4
          w-4
          text-slate-500
          transition-all
          duration-300
          group-hover:translate-x-1
          group-hover:text-white
        "
      />

    </a>

  </div>

</div>
</div>
</section>

     

 {/* =========================================================
    SERVICES
========================================================= */}

<section
  id="services"
  className="relative scroll-mt-24"
>
  {/* =========================================================
      SECTION ATMOSPHERE
  ========================================================== */}

  <div
    aria-hidden="true"
    className="
      pointer-events-none
      absolute
      -right-[220px]
      top-[12%]
      h-[520px]
      w-[520px]
      rounded-full
      bg-cyan-400/[0.035]
      blur-[150px]
    "
  />

  <div
    aria-hidden="true"
    className="
      pointer-events-none
      absolute
      -left-[220px]
      bottom-[5%]
      h-[460px]
      w-[460px]
      rounded-full
      bg-violet-500/[0.025]
      blur-[150px]
    "
  />

  {/* Section grid */}
  <div
    aria-hidden="true"
    className="
      pointer-events-none
      absolute
      inset-0
      opacity-[0.012]
      [background-image:linear-gradient(rgba(34,211,238,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.35)_1px,transparent_1px)]
      [background-size:64px_64px]
      [mask-image:linear-gradient(to_bottom,black,transparent_85%)]
    "
  />

  <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">

   {/* =========================================================
    HEADER
========================================================== */}

<div className="mb-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">

  <div>

    {/* Label */}
   

    {/* Heading */}
    <h2
      className="
        mt-6
        text-4xl
        font-black
        tracking-[-0.045em]
        text-[var(--centa-text)]
        sm:text-5xl
        lg:text-[58px]
        lg:leading-[1.02]
      "
    >
      Technology built

     <span
  className="
    block
    bg-gradient-to-r
    from-white
    via-[var(--centa-cyan)]
    to-cyan-300
    bg-clip-text
    text-transparent
  "
>
  for real businesses.
</span>
    </h2>

  </div>

  {/* Description */}
  <div className="lg:pl-16 lg:pb-1">

    <p className="max-w-xl text-sm leading-7 text-slate-400">
      Dari membangun aplikasi dari nol hingga mengamankan sistem
      yang sudah berjalan, Centa membantu bisnis mengembangkan
      teknologi yang reliable, scalable, dan security-aware.
    </p>

  </div>

</div>

    {/* =========================================================
        SERVICE GRID
    ========================================================== */}

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

   {services.map((service) => {
  

  return (
    <article
     
    className="
  group
  relative
  isolate
  h-full
  overflow-hidden
  rounded-[1.75rem]
  border
  border-[#1a1d1d]
  bg-[#0b0d0d]/75
  p-7
  backdrop-blur-xl
  transition-all
  duration-500
  hover:-translate-y-0.5
  hover:border-[#15E0ED]/25
  hover:bg-[#0f1414]/90
  hover:shadow-[0_20px_70px_rgba(0,0,0,0.35)]

      "
    >

      {/* Subtle Grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          transition-opacity
          duration-500
          group-hover:opacity-[0.05]
          [background-image:linear-gradient(rgba(34,211,238,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.4)_1px,transparent_1px)]
          [background-size:32px_32px]
        "
      />

      {/* Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          bg-cyan-400/[0.04]
          blur-3xl
          transition-all
          duration-700
          group-hover:scale-125
          group-hover:bg-cyan-400/[0.08]
        "
      />

     {/* Content */}
<div className="relative z-10">

  {/* Title */}
  <h3
    className="
      text-xl
      font-bold
      tracking-[-0.02em]
      text-white
      transition-colors
      duration-300
      group-hover:text-cyan-300
    "
  >
    {service.title}
  </h3>

  {/* Description */}
  <p
    className="
      mt-3
      text-[11px]
      leading-5
      text-slate-400
      transition-colors
      duration-300
      group-hover:text-slate-300
    "
  >
    {service.description}
  </p>
{/* =====================================================
    CONTACT CTA
===================================================== */}

<div
  className="
    mt-6
    flex
    items-center
    justify-between
    border-t
    border-white/[0.06]
    pt-4
  "
>
 
  <a
    href="#contact"
    onClick={(event) => {
      event.stopPropagation();
    }}
    className="
      group/contact
      inline-flex
      items-center
      gap-2
      rounded-lg
      border
      border-cyan-400/20
      bg-cyan-400/[0.04]
      px-3
      py-2
      font-mono
      text-[8px]
      font-bold
      uppercase
      tracking-[0.14em]
      text-cyan-400
      transition-all
      duration-300
      hover:border-cyan-400/40
      hover:bg-cyan-400/[0.08]
      hover:text-cyan-300
      hover:shadow-[0_0_20px_rgba(34,211,238,0.10)]
    "
  >
    Contact Us

    <ArrowRight
      className="
        h-3
        w-3
        transition-transform
        duration-300
        group-hover/contact:translate-x-1
      "
    />
  </a>
</div>

</div>

{/* HUD Corner */}
<div
  className="
    pointer-events-none
    absolute
    left-0
    top-0
    h-6
    w-6
    border-l
    border-t
    border-cyan-400/10
    transition-all
    duration-500
    group-hover:h-8
    group-hover:w-8
    group-hover:border-cyan-400/40
  "
/>

<div
  className="
    pointer-events-none
    absolute
    bottom-0
    right-0
    h-6
    w-6
    border-b
    border-r
    border-cyan-400/10
    transition-all
    duration-500
    group-hover:h-8
    group-hover:w-8
    group-hover:border-cyan-400/40
  "
/>

</article>
  );
})}

    </div>

    

{/* =========================================================
    BOTTOM PRINCIPLE
========================================================= */}

<div className="mt-5 grid gap-3 sm:grid-cols-3">

  {[
    {
      label: "01",
      title: "Engineering-first",
      text: "Built around reliable technical foundations.",
    },
    {
      label: "02",
      title: "Security-aware",
      text: "Security considered throughout the lifecycle.",
    },
    {
      label: "03",
      title: "Built to scale",
      text: "Architecture designed for future growth.",
    },
  ].map((item) => (

    <div
      key={item.label}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-[#1a1d1d]
        bg-[#0b0d0d]/55
        p-5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-[#15E0ED]/20
        hover:bg-[#15E0ED]/[0.025]
      "
    >

      {/* GRID */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          [background-image:linear-gradient(rgba(21,224,237,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(21,224,237,0.05)_1px,transparent_1px)]
          [background-size:24px_24px]
        "
      />

      {/* LABEL */}
      <span
        className="
          relative
          font-mono
          text-[9px]
          font-bold
          tracking-[0.15em]
          text-[#15E0ED]
        "
      >
        {item.label}
      </span>

      {/* TITLE */}
      <h3
        className="
          relative
          mt-4
          text-sm
          font-bold
          text-[#eef2f2]
          transition-colors
          group-hover:text-[#15E0ED]
        "
      >
        {item.title}
      </h3>

      {/* DESCRIPTION */}
      <p
        className="
          relative
          mt-2
          text-[10px]
          leading-5
          text-[#5c6666]
        "
      >
        {item.text}
      </p>

      {/* BOTTOM ACCENT */}
      <div
        className="
          absolute
          bottom-0
          left-5
          right-5
          h-px
          origin-left
          scale-x-0
          bg-gradient-to-r
          from-[#15E0ED]/50
          to-transparent
          transition-transform
          duration-500
          group-hover:scale-x-100
        "
      />

    </div>

  ))}



    </div>

  </div>
</section>
       
        
{/* =========================================================
    ABOUT — COMPANY SYSTEM
========================================================= */}

<section
  id="about"
  className="scroll-mt-24 border-t border-[#1a1d1d]"
>
  <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">

    {/* Main About */}
    <div className="max-w-4xl">

      {/* Badge */}
    

      {/* Heading */}
      <h2 className="mt-6 text-4xl font-black tracking-[-0.045em] text-[#eef2f2] sm:text-5xl lg:text-[58px] lg:leading-[1.02]">
        Technology is the product.

        <span className="block bg-gradient-to-r from-white via-[#15E0ED] to-white bg-clip-text text-transparent">
          Security is the foundation.
        </span>
      </h2>

      {/* Description */}
      <div className="mt-8 max-w-2xl space-y-5">
        <p className="text-sm leading-7 text-[#8a9494]">
          Centa Limited is a technology company focused on building
          digital products, software systems, and secure technology
          infrastructure for modern businesses.
        </p>

        <p className="text-sm leading-7 text-[#8a9494]">
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
            className="
              group
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-[#1a1d1d]
              bg-[#0b0d0d]/55
              px-4
              py-3
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-[#15E0ED]/20
              hover:bg-[#15E0ED]/[0.025]
            "
          >

            <div
              className="
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-md
                border
                border-[#15E0ED]/10
                bg-[#15E0ED]/[0.05]
                transition-all
                duration-300
                group-hover:border-[#15E0ED]/25
                group-hover:bg-[#15E0ED]/[0.08]
              "
            >
              <Check className="h-3 w-3 text-[#15E0ED]" />
            </div>

            <span
              className="
                text-[10px]
                font-medium
                text-[#5c6666]
                transition-colors
                duration-300
                group-hover:text-[#b5bebe]
              "
            >
              {item}
            </span>

          </div>

        ))}

      </div>

    </div>

    {/* =====================================================
        BOTTOM METRICS
    ====================================================== */}

    <div className="mt-16 grid gap-3 sm:grid-cols-3">

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
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-[#1a1d1d]
            bg-[#0b0d0d]/55
            p-5
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-[#15E0ED]/20
            hover:bg-[#15E0ED]/[0.025]
          "
        >

          {/* Grid */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
              [background-image:linear-gradient(rgba(21,224,237,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(21,224,237,0.05)_1px,transparent_1px)]
              [background-size:24px_24px]
            "
          />

          {/* Number */}
          <span
            className="
              relative
              font-mono
              text-[8px]
              font-bold
              tracking-[0.15em]
              text-[#15E0ED]
            "
          >
            {item.value}
          </span>

          {/* Title */}
          <h3
            className="
              relative
              mt-4
              text-xs
              font-bold
              text-[#eef2f2]
              transition-colors
              duration-300
              group-hover:text-[#15E0ED]
            "
          >
            {item.title}
          </h3>

          {/* Description */}
          <p
            className="
              relative
              mt-1.5
              text-[10px]
              leading-5
              text-[#5c6666]
              transition-colors
              duration-300
              group-hover:text-[#8a9494]
            "
          >
            {item.text}
          </p>

          {/* Bottom accent */}
          <div
            className="
              absolute
              bottom-0
              left-5
              right-5
              h-px
              origin-left
              scale-x-0
              bg-gradient-to-r
              from-[#15E0ED]/50
              to-transparent
              transition-transform
              duration-500
              group-hover:scale-x-100
            "
          />

        </div>

      ))}

    </div>

  </div>
</section>

  

      {/* =========================================================
    FAQ — PRODUCT STYLE
========================================================= */}

<section
  id="faq"
  className="border-t border-[#1a1d1d]"
>
  <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">

    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

      {/* =====================================================
          LEFT — CONTEXT
      ====================================================== */}

      <div className="lg:sticky lg:top-32 lg:self-start">

        {/* Badge */}
       

        {/* Heading */}
        <h2
          className="
            mt-6
            text-4xl
            font-black
            tracking-[-0.04em]
            text-[#eef2f2]
            sm:text-5xl
          "
        >
          Questions
          <br />

          <span
            className="
              bg-gradient-to-r
              from-white
              via-[#15E0ED]
              to-white
              bg-clip-text
              text-transparent
            "
          >
            before we build.
          </span>
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-md text-sm leading-7 text-[#687272]">
          Beberapa hal yang biasanya ingin diketahui sebelum memulai
          software, web, application, atau security project bersama
          Centa.
        </p>

        {/* =================================================
            MINI SUPPORT CARD
        ================================================== */}

        <div
          className="
            mt-10
            overflow-hidden
            rounded-3xl
            border
            border-[#1a1d1d]
            bg-[#0b0d0d]/60
            backdrop-blur-xl
          "
        >

       
         
         

          
        </div>

      </div>


      {/* =====================================================
          RIGHT — FAQ LIST
      ====================================================== */}

      <div className="space-y-3">

        {faqs.map((faq, index) => {
          const isOpen = openFaq === index;

          return (
            <div
              key={faq.question}
              className={`
                group
                overflow-hidden
                rounded-3xl
                border
                transition-all
                duration-300

                ${
                  isOpen
                    ? `
                      border-[#15E0ED]/20
                      bg-[#15E0ED]/[0.025]
                      shadow-[0_15px_50px_rgba(21,224,237,0.045)]
                    `
                    : `
                      border-[#1a1d1d]
                      bg-[#0b0d0d]/60
                      backdrop-blur-xl
                      hover:border-[#15E0ED]/10
                    `
                }
              `}
            >

              <button
                type="button"
                onClick={() =>
                  setOpenFaq(isOpen ? null : index)
                }
                className="
                  flex
                  w-full
                  items-start
                  gap-5
                  px-6
                  py-6
                  text-left
                  sm:px-7
                "
              >

                {/* =================================================
                    NUMBER
                ================================================== */}

                <div
                  className={`
                    mt-0.5
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    text-[10px]
                    font-black
                    transition-all
                    duration-300

                    ${
                      isOpen
                        ? `
                          border-[#15E0ED]/20
                          bg-[#15E0ED]/10
                          text-[#15E0ED]
                        `
                        : `
                          border-[#1a1d1d]
                          bg-white/[0.015]
                          text-[#3f4949]
                          group-hover:border-[#15E0ED]/10
                          group-hover:text-[#687272]
                        `
                    }
                  `}
                >
                  0{index + 1}
                </div>


                {/* =================================================
                    QUESTION + ANSWER
                ================================================== */}

                <div className="flex-1">

                  <div
                    className={`
                      text-sm
                      font-bold
                      transition-colors
                      duration-300
                      sm:text-[15px]

                      ${
                        isOpen
                          ? "text-[#15E0ED]"
                          : "text-[#eef2f2]"
                      }
                    `}
                  >
                    {faq.question}
                  </div>


                  {/* Answer */}
                  {isOpen && (
                    <div
                      className="
                        mt-4
                        max-w-2xl
                        border-t
                        border-[#1a1d1d]
                        pt-4
                      "
                    >
                      <p
                        className="
                          text-sm
                          leading-7
                          text-[#687272]
                        "
                      >
                        {faq.answer}
                      </p>
                    </div>
                  )}

                </div>


                {/* =================================================
                    CHEVRON
                ================================================== */}

                <div
                  className={`
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    transition-all
                    duration-300

                    ${
                      isOpen
                        ? `
                          rotate-180
                          border-[#15E0ED]/20
                          bg-[#15E0ED]/10
                        `
                        : `
                          border-[#1a1d1d]
                          bg-white/[0.015]
                        `
                    }
                  `}
                >
                  <ChevronDown
                    className={`
                      h-3.5
                      w-3.5
                      transition-colors

                      ${
                        isOpen
                          ? "text-[#15E0ED]"
                          : "text-[#4e5959]"
                      }
                    `}
                  />
                </div>

              </button>

            </div>
          );
        })}


        {/* =====================================================
            BOTTOM HINT
        ====================================================== */}

        <div className="flex items-center gap-3 px-2 pt-5">

          <div className="h-px flex-1 bg-[#1a1d1d]" />

          <span
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-[#3f4949]
            "
          >
            More questions? Let's talk.
          </span>

          <div className="h-px flex-1 bg-[#1a1d1d]" />

        </div>

      </div>

    </div>
  </div>
</section>
  {/* =========================================================
    CONTACT
========================================================= */}

<section
  id="contact"
  className="scroll-mt-24 border-t border-[#1a1d1d]"
>
  <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">

    {/* Header */}
    <div className="max-w-3xl">

     

      <h2 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#eef2f2] sm:text-5xl lg:text-[64px]">
        Let's build something
        <span className="block bg-gradient-to-r from-white via-[#15E0ED] to-white bg-clip-text text-transparent">
          secure and scalable.
        </span>
      </h2>

      <p className="mt-6 max-w-2xl text-sm leading-7 text-[#7a8585]">
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

      <div className="relative overflow-hidden rounded-[2rem] border border-[#1a1d1d] bg-[#0b0d0d]/90 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8">

        {/* Ambient glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#15E0ED]/[0.045] blur-[100px]" />

        <div className="relative">

          {/* Form Header */}
          <div className="mb-8">

            <div className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#4f5959]">
              PROJECT INQUIRY
            </div>

            <h3 className="mt-2 text-xl font-bold text-[#eef2f2]">
              Tell us about your project
            </h3>

            <p className="mt-2 text-xs leading-6 text-[#687272]">
              Isi form berikut, tim Centa akan menerima pesan Anda.
            </p>

          </div>


          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Name + Email */}
            <div className="grid gap-5 sm:grid-cols-2">

              {/* Name */}
              <div>

                <label
                  htmlFor="name"
                  className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#899393]"
                >
                  Name *
                </label>

                <div className="relative">

                  <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4f5959]" />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-[#1a1d1d] bg-[#0f1212] py-3.5 pl-10 pr-4 text-sm text-white outline-none transition-all placeholder:text-[#3f4848] focus:border-[#15E0ED]/30 focus:bg-[#15E0ED]/[0.018] focus:ring-1 focus:ring-[#15E0ED]/10"
                  />

                </div>
              </div>


              {/* Email */}
              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#899393]"
                >
                  Email *
                </label>

                <div className="relative">

                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4f5959]" />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-[#1a1d1d] bg-[#0f1212] py-3.5 pl-10 pr-4 text-sm text-white outline-none transition-all placeholder:text-[#3f4848] focus:border-[#15E0ED]/30 focus:bg-[#15E0ED]/[0.018] focus:ring-1 focus:ring-[#15E0ED]/10"
                  />

                </div>
              </div>

            </div>


            {/* Phone + Company */}
            <div className="grid gap-5 sm:grid-cols-2">

              {/* Phone */}
              <div>

                <label
                  htmlFor="phone"
                  className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#899393]"
                >
                  Phone / WhatsApp
                </label>

                <div className="relative">

                  <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4f5959]" />

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+62-812-3456-7890"
                    className="w-full rounded-xl border border-[#1a1d1d] bg-[#0f1212] py-3.5 pl-10 pr-4 text-sm text-white outline-none transition-all placeholder:text-[#3f4848] focus:border-[#15E0ED]/30 focus:bg-[#15E0ED]/[0.018] focus:ring-1 focus:ring-[#15E0ED]/10"
                  />

                </div>
              </div>


              {/* Company */}
              <div>

                <label
                  htmlFor="company"
                  className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#899393]"
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
                  className="w-full rounded-xl border border-[#1a1d1d] bg-[#0f1212] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-[#3f4848] focus:border-[#15E0ED]/30 focus:bg-[#15E0ED]/[0.018] focus:ring-1 focus:ring-[#15E0ED]/10"
                />

              </div>

            </div>


            {/* Service */}
            <div>

              <label
                htmlFor="service"
                className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#899393]"
              >
                Service
              </label>

              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-[#1a1d1d] bg-[#0f1212] px-4 py-3.5 text-sm text-[#dce2e2] outline-none transition-all hover:border-[#2a3030] focus:border-[#15E0ED]/30 focus:bg-[#15E0ED]/[0.018] focus:ring-1 focus:ring-[#15E0ED]/10"
              >

                <option
                  value=""
                  className="bg-[#080e0e] text-[#687272]"
                >
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
                  className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#899393]"
                >
                  Project Details
                  <span className="ml-1 text-[#15E0ED]">*</span>
                </label>

                <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-[#414949]">
                  SECURE INPUT
                </span>

              </div>


              <div className="relative">

                {/* Glow */}
                <div className="pointer-events-none absolute -inset-px rounded-2xl bg-[#15E0ED]/0 blur-xl transition-all duration-500 focus-within:bg-[#15E0ED]/[0.04]" />


                {/* Textarea */}
                <div className="relative overflow-hidden rounded-2xl border border-[#1a1d1d] bg-[#080d0d]/90 backdrop-blur-xl transition-all duration-500 focus-within:border-[#15E0ED]/30 focus-within:bg-[#15E0ED]/[0.012] focus-within:shadow-[0_0_35px_rgba(21,224,237,0.04)]">

                  {/* Grid */}
                  <div className="pointer-events-none absolute inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(21,224,237,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(21,224,237,0.5)_1px,transparent_1px)] [background-size:22px_22px]" />


                  {/* Scanline */}
                  <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#15E0ED] to-transparent opacity-0 transition-opacity duration-500 group-focus-within/message:opacity-40" />


                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, requirements, timeline, or the problem you want to solve..."
                    className="relative z-10 w-full resize-none bg-transparent px-4 py-4 text-sm leading-6 text-white outline-none placeholder:text-[#3f4848]"
                  />


                  {/* Telemetry */}
                  <div className="relative z-10 flex items-center justify-between border-t border-[#1a1d1d] px-4 py-2.5">

                    <div className="flex items-center gap-2">

                      <span className="h-1.5 w-1.5 rounded-full bg-[#15E0ED]/30 transition-all duration-300 group-focus-within/message:bg-[#15E0ED] group-focus-within/message:shadow-[0_0_8px_rgba(21,224,237,0.8)]" />

                      <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-[#414949]">
                        Input Channel
                      </span>

                    </div>

                    <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-[#414949]">
                      Encrypted
                    </span>

                  </div>


                  {/* HUD */}
                  <span className="pointer-events-none absolute left-0 top-0 h-5 w-5 border-l border-t border-[#15E0ED]/20" />

                  <span className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b border-r border-[#15E0ED]/20" />

                </div>

              </div>

            </div>


            {/* Submit */}
            <button
              type="submit"
              className="group relative isolate flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl border border-[#15E0ED]/25 bg-[#15E0ED] px-6 py-4 text-sm font-bold text-[#030707] shadow-[0_10px_40px_rgba(21,224,237,0.12)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#49e8f2] hover:shadow-[0_18px_55px_rgba(21,224,237,0.22)] active:translate-y-0"
            >

              {/* Moving energy */}
              <span className="pointer-events-none absolute inset-y-0 left-[-60%] w-[45%] skew-x-[-20deg] bg-white/35 blur-md transition-all duration-700 group-hover:left-[120%]" />

              <span className="relative z-10 h-1.5 w-1.5 rounded-full bg-[#030707]/60 transition-all duration-300 group-hover:bg-[#030707] group-hover:shadow-[0_0_8px_rgba(3,7,7,0.7)]" />

              <span className="relative z-10">
                Send Project Inquiry
              </span>

              <Send className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />

            </button>


            {/* Privacy */}
            <div className="flex items-center justify-center gap-2">

              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/60 shadow-[0_0_7px_rgba(52,211,153,0.5)]" />

              <p className="text-center font-mono text-[7px] uppercase tracking-[0.15em] leading-5 text-[#414949]">
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
          className="group block rounded-3xl border border-[#1a1d1d] bg-[#0b0d0d]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-emerald-400/[0.02]"
        >

          <div className="flex items-start justify-between">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.05]">
              <MessageCircle className="h-5 w-5 text-emerald-400" />
            </div>

            <ArrowRight className="h-4 w-4 text-[#414949] transition-all group-hover:translate-x-1 group-hover:text-emerald-400" />

          </div>

          <div className="mt-6">

            <div className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#4f5959]">
              WhatsApp
            </div>

            <h3 className="mt-2 text-sm font-bold text-[#eef2f2]">
              Chat with Centa
            </h3>

            <p className="mt-2 text-xs leading-6 text-[#687272]">
              Diskusikan kebutuhan project secara langsung dengan tim Centa.
            </p>

          </div>

        </a>


        {/* Email */}
        <a
          href="mailto:centalimited@gmail.com"
          className="group block rounded-3xl border border-[#1a1d1d] bg-[#0b0d0d]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#15E0ED]/20 hover:bg-[#15E0ED]/[0.02]"
        >

          <div className="flex items-start justify-between">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#15E0ED]/15 bg-[#15E0ED]/[0.05]">
              <Mail className="h-5 w-5 text-[#15E0ED]" />
            </div>

            <ArrowRight className="h-4 w-4 text-[#414949] transition-all group-hover:translate-x-1 group-hover:text-[#15E0ED]" />

          </div>

          <div className="mt-6">

            <div className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#4f5959]">
              Email
            </div>

            <h3 className="mt-2 text-sm font-bold text-[#eef2f2]">
              centalimited@gmail.com
            </h3>

            <p className="mt-2 text-xs leading-6 text-[#687272]">
              Untuk project inquiry, partnership, atau kebutuhan bisnis.
            </p>

          </div>

        </a>


        {/* Instagram */}
        <a
          href="https://instagram.com/centa.ltd"
          target="_blank"
          rel="noreferrer"
          className="group block rounded-3xl border border-[#1a1d1d] bg-[#0b0d0d]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-violet-400/[0.02]"
        >

          <div className="flex items-start justify-between">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-400/15 bg-violet-400/[0.05]">
              <Globe2 className="h-5 w-5 text-violet-400" />
            </div>

            <ArrowRight className="h-4 w-4 text-[#414949] transition-all group-hover:translate-x-1 group-hover:text-violet-400" />

          </div>

          <div className="mt-6">

            <div className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#4f5959]">
              Instagram
            </div>

            <h3 className="mt-2 text-sm font-bold text-[#eef2f2]">
              Follow Centa
            </h3>

            <p className="mt-2 text-xs leading-6 text-[#687272]">
              Ikuti update, project, dan aktivitas terbaru dari Centa.
            </p>

          </div>

        </a>


        {/* Availability */}
        <div className="rounded-3xl border border-[#1a1d1d] bg-[#0b0d0d]/60 p-5">

          <div className="flex items-center gap-2">

            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />

            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-400">
              Open for new projects
            </span>

          </div>

          <p className="mt-3 text-xs leading-6 text-[#687272]">
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