import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function MainLayout() {
  return (
    <div
      className="
        relative
        min-h-screen
        overflow-x-hidden

        bg-slate-50
        text-slate-900

        dark:bg-slate-950
        dark:text-white
      "
    >
      {/* =====================================================
          GLOBAL AMBIENT BACKGROUND
      ====================================================== */}

      {/* Top glow */}
      <div
        className="
          pointer-events-none
          fixed
          inset-x-0
          top-0
          z-0
          h-[520px]
          bg-[radial-gradient(circle_at_50%_-10%,rgba(59,130,246,0.12),transparent_62%)]
          dark:bg-[radial-gradient(circle_at_50%_-10%,rgba(59,130,246,0.12),transparent_62%)]
        "
      />

      {/* Right indigo glow */}
      <div
        className="
          pointer-events-none
          fixed
          -right-48
          top-[25%]
          z-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-indigo-500/[0.04]
          blur-[120px]
          dark:bg-indigo-500/[0.07]
        "
      />

      {/* Left blue glow */}
      <div
        className="
          pointer-events-none
          fixed
          -left-48
          top-[65%]
          z-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-500/[0.035]
          blur-[120px]
          dark:bg-blue-500/[0.06]
        "
      />

      {/* =====================================================
          SUBTLE GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
          opacity-[0.018]
          dark:opacity-[0.025]

          [background-image:linear-gradient(rgba(15,23,42,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.8)_1px,transparent_1px)]
          dark:[background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

          [background-size:64px_64px]
        "
      />

      {/* =====================================================
          CONTENT LAYER
      ====================================================== */}

      <div className="relative z-10">
        <Navbar />

        <main className="min-h-screen">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}
