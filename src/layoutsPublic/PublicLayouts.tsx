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
        bg-[#030712]
        text-slate-100
        antialiased
        font-sans
        selection:bg-cyan-400/20
        selection:text-cyan-200
      "
    >
      {/* =====================================================
          GLOBAL ATMOSPHERE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed inset-0 z-0
          bg-[radial-gradient(circle_at_50%_-10%,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_100%_35%,rgba(139,92,246,0.07),transparent_32%),radial-gradient(circle_at_0%_65%,rgba(14,165,233,0.045),transparent_30%)]
        "
      />

      {/* =====================================================
          TOP CYAN AURA
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-1/2
          top-[-360px]
          z-0
          h-[720px]
          w-[1100px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/[0.045]
          blur-[180px]
        "
      />

      {/* =====================================================
          TOP VIOLET AURA
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-[35%]
          top-[-250px]
          z-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-violet-500/[0.035]
          blur-[160px]
        "
      />

      {/* =====================================================
          RIGHT CYBER GLOW
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          -right-[360px]
          top-[18%]
          z-0
          h-[720px]
          w-[720px]
          rounded-full
          bg-violet-500/[0.035]
          blur-[190px]
        "
      />

      {/* =====================================================
          LEFT CYBER GLOW
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          -left-[360px]
          top-[58%]
          z-0
          h-[720px]
          w-[720px]
          rounded-full
          bg-cyan-500/[0.025]
          blur-[190px]
        "
      />

      {/* =====================================================
          LARGE TECHNICAL GRID
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed inset-0 z-0
          opacity-[0.028]
          [background-image:linear-gradient(rgba(34,211,238,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.25)_1px,transparent_1px)]
          [background-size:80px_80px]
          [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_82%)]
        "
      />

      {/* =====================================================
          MICRO GRID
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed inset-0 z-0
          opacity-[0.012]
          [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)]
          [background-size:20px_20px]
          [mask-image:linear-gradient(to_bottom,black,transparent_75%)]
        "
      />

      {/* =====================================================
          SCANNING LINE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-cyan-400/25
          to-transparent
          opacity-40
          animate-[scan_8s_linear_infinite]
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
          w-[90%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-cyan-400/35
          to-transparent
        "
      />

      {/* =====================================================
          TOP TECHNICAL MARKERS
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-6
          top-24
          z-0
          hidden
          font-mono
          text-[7px]
          uppercase
          tracking-[0.25em]
          text-cyan-400/[0.18]
          lg:block
        "
      >
        CENTA / SECURE ENVIRONMENT
      </div>

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          right-6
          top-24
          z-0
          hidden
          font-mono
          text-[7px]
          uppercase
          tracking-[0.25em]
          text-slate-700
          lg:block
        "
      >
        SYS.STATUS / ONLINE
      </div>

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
          h-[520px]
          w-[520px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.015]
          blur-[140px]
        "
      />

      {/* =====================================================
          CENTER CROSSHAIR
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-1/2
          top-[48%]
          z-0
          hidden
          h-12
          w-12
          -translate-x-1/2
          -translate-y-1/2
          opacity-[0.08]
          lg:block
        "
      >
        <div
          className="
            absolute left-1/2 top-0
            h-full w-px
            -translate-x-1/2
            bg-cyan-400
          "
        />

        <div
          className="
            absolute left-0 top-1/2
            h-px w-full
            -translate-y-1/2
            bg-cyan-400
          "
        />

        <div
          className="
            absolute left-1/2 top-1/2
            h-1.5 w-1.5
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-400
          "
        />
      </div>

      {/* =====================================================
          SIDE DATA LINES
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-5
          top-[35%]
          z-0
          hidden
          h-32
          w-px
          bg-gradient-to-b
          from-transparent
          via-cyan-400/10
          to-transparent
          lg:block
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          right-5
          top-[55%]
          z-0
          hidden
          h-40
          w-px
          bg-gradient-to-b
          from-transparent
          via-violet-400/10
          to-transparent
          lg:block
        "
      />

      {/* =====================================================
          VIGNETTE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed inset-0 z-0
          bg-[radial-gradient(ellipse_at_center,transparent_38%,rgba(0,0,0,0.48)_100%)]
        "
      />

      {/* =====================================================
          BOTTOM DEPTH
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          bottom-[-300px]
          left-1/2
          z-0
          h-[600px]
          w-[1000px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/[0.018]
          blur-[170px]
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