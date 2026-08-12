import React from "react";
import { Outlet } from "react-router-dom";
import NavbarPublic from "../componentsPublic/NavbarPublic";
import FooterPublic from "../componentsPublic/FooterPublic";

export const PublicLayout: React.FC = () => {
  return (
    <div
      className="
        relative
        min-h-screen
        overflow-x-hidden
        bg-[#050816]
        text-slate-100
        antialiased
        font-sans
        selection:bg-blue-500
        selection:text-white
      "
    >
      {/* =====================================================
          GLOBAL ATMOSPHERE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          inset-0
          z-0

          bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.12),transparent_38%),radial-gradient(circle_at_100%_30%,rgba(99,102,241,0.055),transparent_30%),radial-gradient(circle_at_0%_70%,rgba(14,165,233,0.035),transparent_32%)]
        "
      />

      {/* =====================================================
          TOP AURA
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-1/2
          top-[-300px]
          z-0
          h-[650px]
          w-[950px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/[0.055]
          blur-[170px]
        "
      />

      {/* =====================================================
          RIGHT AMBIENT GLOW
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          -right-[350px]
          top-[20%]
          z-0
          h-[700px]
          w-[700px]
          rounded-full
          bg-indigo-500/[0.035]
          blur-[180px]
        "
      />

      {/* =====================================================
          LEFT AMBIENT GLOW
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          -left-[350px]
          top-[58%]
          z-0
          h-[700px]
          w-[700px]
          rounded-full
          bg-cyan-500/[0.025]
          blur-[180px]
        "
      />

      {/* =====================================================
          TECHNICAL GRID
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
          opacity-[0.025]

          [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

          [background-size:80px_80px]

          [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_80%)]
        "
      />

      {/* =====================================================
          MICRO GRID
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
          opacity-[0.012]

          [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]

          [background-size:20px_20px]

          [mask-image:linear-gradient(to_bottom,black,transparent_70%)]
        "
      />

      {/* =====================================================
          TOP EDGE LIGHT
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-1/2
          top-0
          z-0
          h-px
          w-[85%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-blue-400/30
          to-transparent
        "
      />

      {/* =====================================================
          CENTER DEPTH
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-1/2
          top-[45%]
          z-0
          h-[450px]
          w-[450px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/[0.018]
          blur-[130px]
        "
      />

      {/* =====================================================
          VIGNETTE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
          bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.38)_100%)]
        "
      />

      {/* =====================================================
          PUBLIC CONTENT
      ====================================================== */}

      <div className="relative z-10 flex min-h-screen flex-col">
        <NavbarPublic />

        <main className="relative flex-1">
          <Outlet />
        </main>

        <FooterPublic />
      </div>
    </div>
  );
};

export default PublicLayout;