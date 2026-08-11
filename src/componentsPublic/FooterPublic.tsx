import React from "react";
import { Link } from "react-router-dom";

export const FooterPublic: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#030611] text-white">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-[-250px] h-[400px] w-[400px] rounded-full bg-[#00BFFF]/5 blur-[140px]" />

        <div className="absolute right-[-150px] bottom-[-250px] h-[450px] w-[450px] rounded-full bg-blue-600/5 blur-[140px]" />
      </div>

      {/* =========================================================
          MAIN FOOTER
      ========================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-16 sm:px-8 lg:px-10 lg:pt-20">
        {/* Top CTA */}
        <div className="mb-16 flex flex-col justify-between gap-8 border-b border-white/5 pb-12 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#00BFFF]">
              Centa Limited
            </div>

            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Build better.
              <br />
              <span className="text-slate-500">
                Build securely.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
              Software, web, application, and cybersecurity solutions
              designed to help your business move forward with confidence.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex w-fit items-center gap-3 rounded-xl bg-[#00BFFF] px-6 py-3.5 text-sm font-bold text-[#050816] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
          >
            Start a Project

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* =========================================================
            GRID
        ========================================================== */}

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr_1fr]">
          {/* BRAND */}
          <div>
            <Link
              to="/"
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <img
                  src="/logo-centa.jpeg"
                  alt="Centa Limited"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display =
                      "none";
                  }}
                />
              </div>

              <div>
                <div className="text-lg font-black tracking-tight">
                  Centa
                  <span className="text-[#00BFFF]">
                    Limited
                  </span>
                </div>

                <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                  Technology & Security
                </div>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-6 text-slate-500">
              Centa Limited adalah perusahaan teknologi yang berfokus pada
              software development, pengembangan website dan aplikasi,
              serta cybersecurity solutions.
            </p>

            {/* Status */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.025] px-3 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                Technology Partner
              </span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white">
              Explore
            </h3>

            <ul className="space-y-3">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Services", "/services"],
                ["Articles & News", "/articles"],
                ["Contact", "/contact"],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="group inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-[#00BFFF]"
                  >
                    <span className="h-px w-0 bg-[#00BFFF] transition-all duration-300 group-hover:w-3" />

                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white">
              Capabilities
            </h3>

            <ul className="space-y-3 text-sm text-slate-500">
              <li className="transition-colors hover:text-slate-300">
                Software Development
              </li>

              <li className="transition-colors hover:text-slate-300">
                Web Development
              </li>

              <li className="transition-colors hover:text-slate-300">
                Application Development
              </li>

              <li className="transition-colors hover:text-slate-300">
                Cyber Security
              </li>

              <li className="transition-colors hover:text-slate-300">
                Security Assessment
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white">
              Get in Touch
            </h3>

            <div className="space-y-5">
              <div>
                <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                  Email
                </div>

                <a
                  href="mailto:info@centalimited.com"
                  className="text-sm font-medium text-slate-300 transition-colors hover:text-[#00BFFF]"
                >
                  info@centalimited.com
                </a>
              </div>

              <div>
                <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                  Focus
                </div>

                <p className="text-sm leading-5 text-slate-500">
                  Software Development
                  <br />
                  Web & Application
                  <br />
                  Cyber Security
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#00BFFF] transition-colors hover:text-cyan-300"
              >
                Contact our team
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM
        ========================================================== */}

        <div className="mt-16 flex flex-col gap-5 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-slate-600">
            © {currentYear} Centa Limited. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-[11px] text-slate-600 transition-colors hover:text-slate-400"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-[11px] text-slate-600 transition-colors hover:text-slate-400"
            >
              Terms of Service
            </Link>

            <span className="hidden h-3 w-px bg-white/10 sm:block" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-700">
              Built with purpose
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPublic;
