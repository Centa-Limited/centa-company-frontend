const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We understand the business, users, constraints, and technical requirements before defining the solution.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "We translate requirements into a clear technical direction, architecture, and delivery plan.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "We shape the experience and system structure around usability, performance, and maintainability.",
  },
  {
    step: "04",
    title: "Development",
    description:
      "Engineering turns the approved direction into reliable, scalable, and production-ready technology.",
  },
  {
    step: "05",
    title: "Delivery",
    description:
      "We validate, refine, secure, and prepare the system for real-world use and future evolution.",
  },
];

export default function Approach() {
  return (
    <section className="relative scroll-mt-24">
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute right-[-180px] top-[18%] h-[420px] w-[420px] rounded-full bg-cyan-400/[0.035] blur-[140px]" />

      <div className="pointer-events-none absolute left-[-180px] bottom-[12%] h-[360px] w-[360px] rounded-full bg-blue-500/[0.025] blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        {/* =========================================================
            APPROACH — OPERATING MODEL
        ========================================================== */}

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-400">
              <span className="h-px w-8 bg-cyan-400" />
              How We Work
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl lg:text-[60px] lg:leading-[1.02]">
              From concept
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                to production.
              </span>
            </h2>
          </div>

          <div className="lg:pl-16 lg:pb-1">
            <p className="max-w-xl text-sm leading-7 text-slate-400">
              A structured delivery model that keeps business goals,
              engineering quality, and security aligned throughout the
              entire lifecycle.
            </p>
          </div>
        </div>

        {/* =========================================================
            PROCESS TIMELINE
        ========================================================== */}

        <div className="relative mt-16">
          {/* Timeline Line */}
          <div className="pointer-events-none absolute left-[24px] top-8 bottom-8 w-px bg-gradient-to-b from-cyan-400/40 via-cyan-400/10 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-4">
            {process.map((item, index) => (
              <article
                key={item.step}
                className="group relative grid gap-7 overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-[#0b1120]/75 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5 hover:border-cyan-400/25 hover:bg-[#0d1626]/90 hover:shadow-[0_20px_70px_rgba(0,0,0,0.35)] md:grid-cols-[1fr_100px_1fr] md:items-center md:p-7"
              >
                {/* Card Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/[0.025] blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.08]" />

                {/* Left / Title */}
                <div
                  className={`relative ${
                    index % 2 === 0
                      ? "md:order-1"
                      : "md:order-3 md:text-left"
                  }`}
                >
                  <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    Phase {item.step}
                  </div>

                  <h3 className="mt-2.5 text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-[22px]">
                    {item.title}
                  </h3>
                </div>

                {/* Center Step */}
                <div className="relative z-10 flex md:order-2 md:justify-center">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/20 bg-[#07101b] shadow-[0_0_30px_rgba(34,211,238,0.06)] transition-all duration-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/[0.06] group-hover:shadow-[0_0_40px_rgba(34,211,238,0.14)]">
                    {/* Inner Ring */}
                    <div className="absolute inset-1.5 rounded-full border border-cyan-400/[0.08] transition-colors group-hover:border-cyan-400/20" />

                    <span className="relative font-mono text-[10px] font-bold tracking-wider text-cyan-400">
                      {item.step}
                    </span>
                  </div>
                </div>

                {/* Right / Description */}
                <div
                  className={`relative ${
                    index % 2 === 0
                      ? "md:order-3"
                      : "md:order-1 md:text-right"
                  }`}
                >
                  <p className="text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>

                {/* Active Edge */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </article>
            ))}
          </div>
        </div>

        {/* =========================================================
            DELIVERY PRINCIPLES
        ========================================================== */}

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            {
              label: "01",
              title: "Business-first",
              text: "Technology follows the problem.",
            },
            {
              label: "02",
              title: "Security-aware",
              text: "Protection starts before production.",
            },
            {
              label: "03",
              title: "Built to evolve",
              text: "Architecture leaves room to scale.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="group rounded-2xl border border-white/[0.06] bg-[#0b1120]/55 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/15 hover:bg-cyan-400/[0.025]"
            >
              <span className="font-mono text-[9px] font-bold tracking-[0.15em] text-cyan-400">
                {item.label}
              </span>

              <h3 className="mt-4 text-sm font-bold text-white transition-colors group-hover:text-cyan-300">
                {item.title}
              </h3>

              <p className="mt-2 text-[10px] leading-5 text-slate-500">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}