import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { teamMembers } from "./teamData";

export default function Team() {
  return (
    <section className="relative scroll-mt-24">

      <div className="pointer-events-none absolute right-[-180px] top-[15%] h-[420px] w-[420px] rounded-full bg-cyan-400/[0.035] blur-[140px]" />

      <div className="pointer-events-none absolute left-[-180px] bottom-[10%] h-[360px] w-[360px] rounded-full bg-blue-500/[0.025] blur-[130px]" />

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



        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

          {teamMembers.map((member, index) => (

            <Link
              key={member.name}
              to={`/team/${member.slug}`}
              className="group block"
            >

              <article
                className="
                relative
                overflow-hidden
                rounded-[1.75rem]
                border
                border-white/[0.07]
                bg-[#0b1120]/75
                p-6
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1.5
                hover:border-cyan-400/25
                hover:bg-[#0d1626]/90
                hover:shadow-[0_20px_70px_rgba(0,0,0,0.35)]
                "
              >

                <div className="
                  pointer-events-none
                  absolute
                  -right-14
                  -top-14
                  h-36
                  w-36
                  rounded-full
                  bg-cyan-400/[0.035]
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-cyan-400/[0.11]
                " />


                <div className="relative">

                  <div className="flex items-start justify-between">

                    <div className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-cyan-400/15
                      bg-gradient-to-br
                      from-cyan-400/[0.10]
                      to-blue-500/[0.05]
                      text-base
                      font-black
                      text-cyan-400
                    ">
                      {member.name}
                    </div>


                    <span className="
                      font-mono
                      text-[8px]
                      font-semibold
                      tracking-[0.15em]
                      text-slate-600
                      transition-colors
                      group-hover:text-cyan-400/50
                    ">
                      0{index + 1}
                    </span>

                  </div>



                  <div className="mt-9">

                    <h2 className="
                      text-base
                      font-bold
                      leading-6
                      tracking-tight
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-cyan-50
                    ">
                      {member.name}
                    </h2>


                    <p className="
                      mt-2.5
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-slate-400
                    ">
                      {member.role}
                    </p>

                  </div>



                  <div className="
                    mt-9
                    flex
                    items-center
                    justify-between
                    border-t
                    border-white/[0.06]
                    pt-4
                  ">

                    <span className="
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.16em]
                      text-slate-500
                    ">
                      Centa Team
                    </span>


                    <div className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/[0.07]
                      bg-white/[0.015]
                      transition-all
                      duration-300
                      group-hover:border-cyan-400/25
                      group-hover:bg-cyan-400/[0.06]
                    ">

                      <ArrowRight
                        className="
                        h-3
                        w-3
                        text-slate-500
                        transition-all
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:text-cyan-400
                        "
                      />

                    </div>

                  </div>

                </div>

              </article>

            </Link>

          ))}

        </div>



        <div className="
          mt-5
          overflow-hidden
          rounded-[1.75rem]
          border
          border-white/[0.07]
          bg-[#0b1120]/55
          backdrop-blur-xl
        ">


          <div className="
            grid
            md:grid-cols-[1fr_auto]
            md:items-center
          ">


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
                    One team, multiple disciplines.
                  </span>

                  <span className="
                    mt-0.5
                    block
                    text-[8px]
                    uppercase
                    tracking-[0.16em]
                    text-slate-600
                  ">
                    Engineering · Design · Growth
                  </span>

                </div>

              </div>

            </div>



            <div className="
              border-t
              border-white/[0.06]
              p-6
              md:border-l
              md:border-t-0
              sm:p-7
            ">

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