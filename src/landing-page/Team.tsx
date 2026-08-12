import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { teamMembers } from "./teamData";

export default function Team() {
  const [activeMember, setActiveMember] = useState<string | null>(null);

  return (
    <section
      className="
        relative
        scroll-mt-24
        overflow-hidden
        bg-[#050d18]
      "
    >
     

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          top-[8%]
          h-[540px]
          w-[540px]
          rounded-full
          bg-violet-500/[0.12]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[200px]
          bottom-[6%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-purple-500/[0.10]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[42%]
          h-[440px]
          w-[440px]
          -translate-x-1/2
          rounded-full
          bg-violet-400/[0.06]
          blur-[130px]
        "
      />

      {/* Global grid */}
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

      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">

      

        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <div className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-cyan-400 sm:text-xs">
              <span className="h-px w-10 bg-cyan-400" />
              CENTA LIMITED
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl lg:text-[58px] lg:leading-[1.02]">
              Internal Team

              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Behind the Technology.
              </span>
            </h1>
          </div>

          <p className="max-w-lg text-sm leading-7 text-slate-400 lg:pb-1">
            A focused team across engineering, design, security, and
            growth — working together to turn complex problems into
            useful technology.
          </p>
        </div>

        {/* =========================================================
            TEAM GRID
        ========================================================== */}

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {teamMembers.map((member, index) => {
            const isActive = activeMember === member.slug;

            return (
              <Link
                key={member.name}
                to={`/team/${member.slug}`}
                onClick={() =>
                  setActiveMember(isActive ? null : member.slug)
                }
                className="group block"
              >
                <article
                  className={`
                    relative
                    overflow-hidden
                    rounded-[1.75rem]
                    border
                    bg-[#03060c]
                    backdrop-blur-xl
                    transition-all
                    duration-500

                    ${
                      isActive
                        ? `
                          -translate-y-2
                          border-cyan-300/40
                          bg-[#06101b]
                          shadow-[0_25px_90px_rgba(34,211,238,0.10)]
                        `
                        : `
                          border-white/[0.07]
                          hover:-translate-y-2
                          hover:border-cyan-400/25
                          hover:shadow-[0_24px_80px_rgba(0,0,0,0.4)]
                        `
                    }
                  `}
                >
                  {/* =================================================
                      OUTER FRAME
                  ================================================== */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      inset-[1px]
                      rounded-[1.65rem]
                      border
                      transition-all
                      duration-500
                      ${
                        isActive
                          ? "border-cyan-400/[0.15]"
                          : "border-white/[0.025]"
                      }
                    `}
                  />

                  {/* =================================================
                      CYBER GRID
                  ================================================== */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      inset-0
                      z-10
                      opacity-0
                      transition-opacity
                      duration-500
                      ${
                        isActive
                          ? "opacity-100"
                          : "group-hover:opacity-100"
                      }

                      [background-image:linear-gradient(rgba(34,211,238,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.055)_1px,transparent_1px)]
                      [background-size:24px_24px]

                      [mask-image:linear-gradient(to_bottom,black,transparent_65%)]
                    `}
                  />

                  {/* =================================================
                      AMBIENT CARD GLOW
                  ================================================== */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      z-10
                      h-48
                      w-48
                      rounded-full
                      bg-cyan-400/[0.035]
                      blur-[70px]
                      transition-all
                      duration-700
                      ${
                        isActive
                          ? "bg-cyan-400/[0.14]"
                          : "group-hover:bg-cyan-400/[0.10]"
                      }
                    `}
                  />

                  {/* =================================================
                      SCANLINE
                  ================================================== */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      left-0
                      right-0
                      top-[-100%]
                      z-30
                      h-[45%]
                      bg-gradient-to-b
                      from-transparent
                      via-cyan-300/[0.08]
                      to-transparent
                      transition-all
                      duration-[1400ms]
                      ${
                        isActive
                          ? "top-[120%]"
                          : "group-hover:top-[120%]"
                      }
                    `}
                  />

                  {/* =================================================
                      CORNER BRACKETS
                  ================================================== */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      left-3
                      top-3
                      z-40
                      h-4
                      w-4
                      border-l
                      border-t
                      transition-all
                      duration-500
                      ${
                        isActive
                          ? "h-6 w-6 border-cyan-300/80"
                          : "border-cyan-400/20 group-hover:border-cyan-400/60"
                      }
                    `}
                  />

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      right-3
                      top-3
                      z-40
                      h-4
                      w-4
                      border-r
                      border-t
                      transition-all
                      duration-500
                      ${
                        isActive
                          ? "h-6 w-6 border-cyan-300/80"
                          : "border-cyan-400/20 group-hover:border-cyan-400/60"
                      }
                    `}
                  />

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      bottom-3
                      left-3
                      z-40
                      h-4
                      w-4
                      border-b
                      border-l
                      transition-all
                      duration-500
                      ${
                        isActive
                          ? "h-6 w-6 border-cyan-300/80"
                          : "border-cyan-400/20 group-hover:border-cyan-400/60"
                      }
                    `}
                  />

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      bottom-3
                      right-3
                      z-40
                      h-4
                      w-4
                      border-b
                      border-r
                      transition-all
                      duration-500
                      ${
                        isActive
                          ? "h-6 w-6 border-cyan-300/80"
                          : "border-cyan-400/20 group-hover:border-cyan-400/60"
                      }
                    `}
                  />

                  {/* =================================================
                      IMAGE
                  ================================================== */}

                  <div className="relative aspect-[0.88] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`
                        h-full
                        w-full
                        object-cover
                        object-[center_35%]
                        transition-all
                        duration-700
                        ${
                          isActive
                            ? "scale-[1.08] grayscale-0 brightness-[1.05]"
                            : "grayscale-[15%] group-hover:scale-[1.06] group-hover:grayscale-0"
                        }
                      `}
                    />

                    {/* Image dark gradient */}
                    <div
                      className={`
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#050b14]
                        via-[#050b14]/15
                        to-transparent
                        transition-opacity
                        duration-500
                        ${
                          isActive
                            ? "opacity-70"
                            : "opacity-100"
                        }
                      `}
                    />

                    {/* Image cyan atmosphere */}
                    <div
                      className={`
                        pointer-events-none
                        absolute
                        inset-0
                        bg-[radial-gradient(circle_at_50%_40%,rgba(34,211,238,0.14),transparent_55%)]
                        transition-opacity
                        duration-500
                        ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-60"
                        }
                      `}
                    />

                    {/* =================================================
                        MEMBER NUMBER
                    ================================================== */}

                    <div
                      className={`
                        absolute
                        right-4
                        top-4
                        rounded-lg
                        border
                        px-2.5
                        py-1.5
                        font-mono
                        text-[8px]
                        font-bold
                        tracking-[0.15em]
                        backdrop-blur-md
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "border-cyan-400/40 bg-cyan-400/[0.08] text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.12)]"
                            : "border-white/10 bg-black/20 text-white/50 group-hover:border-cyan-400/25 group-hover:text-cyan-400"
                        }
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* =================================================
                        STATUS
                    ================================================== */}

                    <div
                      className={`
                        absolute
                        bottom-4
                        left-4
                        flex
                        items-center
                        gap-2
                        rounded-lg
                        border
                        px-3
                        py-1.5
                        backdrop-blur-md
                        transition-all
                        duration-500
                        ${
                          isActive
                            ? "border-cyan-400/30 bg-cyan-400/[0.08]"
                            : "border-white/[0.08] bg-black/25"
                        }
                      `}
                    >
                      <span
                        className={`
                          h-1.5
                          w-1.5
                          rounded-full
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "scale-125 bg-cyan-200 shadow-[0_0_12px_rgba(103,232,249,1)]"
                              : "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                          }
                        `}
                      />

                      <span
                        className={`
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-[0.14em]
                          transition-colors
                          ${
                            isActive
                              ? "text-cyan-300"
                              : "text-white/60"
                          }
                        `}
                      >
                        {isActive ? "Selected" : "Centa Team"}
                      </span>

                      {isActive && (
                        <span className="h-1 w-1 animate-pulse rounded-full bg-cyan-300" />
                      )}
                    </div>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div className="relative z-20 p-5">
                    <h2
                      className={`
                        text-[15px]
                        font-bold
                        leading-6
                        tracking-[-0.01em]
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "text-cyan-200 [text-shadow:0_0_18px_rgba(34,211,238,0.25)]"
                            : "text-cyan-400 group-hover:text-cyan-50"
                        }
                      `}
                    >
                      {member.name}
                    </h2>

                    <p
                      className="
                        mt-2
                        min-h-[28px]
                        text-[9px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.14em]
                        text-slate-500
                        transition-colors
                        duration-300
                        group-hover:text-slate-400
                      "
                    >
                      {member.role}
                    </p>

                    {/* =================================================
                        ACTIVE INFORMATION
                    ================================================== */}

                    <div
                      className={`
                        overflow-hidden
                        transition-all
                        duration-500
                        ${
                          isActive
                            ? "mt-4 max-h-8 opacity-100"
                            : "mt-0 max-h-0 opacity-0"
                        }
                      `}
                    >
                      <div className="flex items-center gap-2">
                        <span className="h-px w-5 bg-cyan-400/50" />

                        <span className="font-mono text-[7px] font-bold uppercase tracking-[0.2em] text-cyan-400/70">
                          Profile Ready
                        </span>

                        <span className="h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                      </div>
                    </div>

                    {/* =================================================
                        FOOTER
                    ================================================== */}

                    <div
                      className={`
                        mt-5
                        flex
                        items-center
                        justify-between
                        border-t
                        pt-4
                        transition-colors
                        duration-300
                        ${
                          isActive
                            ? "border-cyan-400/15"
                            : "border-white/[0.06]"
                        }
                      `}
                    >
                      <span
                        className={`
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.16em]
                          transition-colors
                          ${
                            isActive
                              ? "text-cyan-400/80"
                              : "text-slate-600"
                          }
                        `}
                      >
                        View Profile
                      </span>

                      <div
                        className={`
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-lg
                          border
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "border-cyan-400/40 bg-cyan-400/[0.10] shadow-[0_0_15px_rgba(34,211,238,0.10)]"
                              : "border-white/[0.08] bg-white/[0.02] group-hover:border-cyan-400/30 group-hover:bg-cyan-400/[0.08]"
                          }
                        `}
                      >
                        <ArrowRight
                          className={`
                            h-3
                            w-3
                            transition-all
                            duration-300
                            ${
                              isActive
                                ? "translate-x-0.5 text-cyan-300"
                                : "text-slate-500 group-hover:translate-x-0.5 group-hover:text-cyan-400"
                            }
                          `}
                        />
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      ACTIVE EDGE
                  ================================================== */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      inset-y-5
                      left-0
                      z-50
                      w-[2px]
                      rounded-full
                      bg-gradient-to-b
                      from-cyan-300
                      via-cyan-400
                      to-transparent
                      transition-all
                      duration-500
                      ${
                        isActive
                          ? "opacity-100 shadow-[0_0_15px_rgba(34,211,238,0.9)]"
                          : "opacity-0 group-hover:opacity-100"
                      }
                    `}
                  />

                  {/* =================================================
                      BOTTOM ACTIVE LINE
                  ================================================== */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      bottom-0
                      left-8
                      right-8
                      z-50
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-cyan-400
                      to-transparent
                      transition-all
                      duration-700
                      ${
                        isActive
                          ? "opacity-60"
                          : "opacity-0 group-hover:opacity-25"
                      }
                    `}
                  />
                </article>
              </Link>
            );
          })}
        </div>

        {/* =========================================================
            TEAM FOOTER
        ========================================================== */}

        <div
          className="
            relative
            mt-5
            overflow-hidden
            rounded-[1.75rem]
            border
            border-white/[0.07]
            bg-[#0b1120]/55
            backdrop-blur-xl
          "
        >
          {/* Footer grid */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.025]
              [background-image:linear-gradient(rgba(34,211,238,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.5)_1px,transparent_1px)]
              [background-size:28px_28px]
            "
          />

          <div className="relative grid md:grid-cols-[1fr_auto] md:items-center">

            {/* Team Identity */}
            <div className="p-6 sm:p-7">
              <div className="flex items-center gap-4">

                <div className="flex -space-x-2">
                  {teamMembers.slice(0, 4).map((member) => (
                    <div
                      key={member.name}
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border-2
                        border-[#0b1120]
                        bg-gradient-to-br
                        from-cyan-400/[0.12]
                        to-blue-500/[0.08]
                        text-[7px]
                        font-bold
                        text-cyan-400
                      "
                    >
                      {member.name}
                    </div>
                  ))}
                </div>

                <div>
                  <span className="block text-[10px] font-semibold text-slate-400">
                    Centa Limited | Internal
                  </span>

                  <span
                    className="
                      mt-0.5
                      block
                      text-[8px]
                      uppercase
                      tracking-[0.16em]
                      text-slate-600
                    "
                  >
                    Engineering · Design · Growth
                  </span>
                </div>

              </div>
            </div>

            {/* CTA */}
            <div
              className="
                border-t
                border-white/[0.06]
                p-6
                md:border-l
                md:border-t-0
                sm:p-7
              "
            >
              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-cyan-400
                  transition-colors
                  hover:text-cyan-300
                "
              >
                Work with us

                <ArrowRight
                  className="
                    h-3
                    w-3
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
