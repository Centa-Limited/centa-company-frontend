import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function FooterPublic() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050816]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">

        {/* Main */}
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              
              <div
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-xl
                  border border-cyan-400/20
                  bg-cyan-400/10
                  shadow-[0_0_30px_rgba(34,211,238,0.15)]
                "
              >
                <span className="font-black text-cyan-400">
                  C
                </span>
              </div>


              <div>
                <div className="text-sm font-black tracking-[0.35em] text-white">
                  CENTA
                </div>

                <div className="text-[10px] tracking-[0.45em] text-white/40">
                  LIMITED
                </div>
              </div>

            </Link>


            <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
              Engineering secure digital products, software systems,
              infrastructure, and cybersecurity solutions for modern
              businesses.
            </p>


            {/* Status */}
            <div
              className="
                mt-6 inline-flex items-center gap-3
                rounded-full
                border border-cyan-400/15
                bg-cyan-400/[0.05]
                px-4 py-2
              "
            >

              <span
                className="
                  h-2 w-2 rounded-full
                  bg-cyan-400
                  shadow-[0_0_12px_rgba(34,211,238,0.8)]
                "
              />

              <span className="text-xs tracking-wide text-white/60">
                All systems operational
              </span>

            </div>


          </div>



          {/* Company */}
          <div>

            <h4 className="text-xs font-semibold tracking-[0.3em] text-white">
              COMPANY
            </h4>


            <ul className="mt-6 space-y-4 text-sm text-white/50">

              {[
                "About",
                "Approach",
                "Team",
                "Articles",
                "Contact",
              ].map((item) => (

                <li
                  key={item}
                  className="transition hover:text-cyan-400"
                >
                  {item}
                </li>

              ))}

            </ul>

          </div>



          {/* Services */}
          <div>

            <h4 className="text-xs font-semibold tracking-[0.3em] text-white">
              CAPABILITIES
            </h4>


            <ul className="mt-6 space-y-4 text-sm text-white/50">

              {[
                "Software Engineering",
                "Web Development",
                "Application Development",
                "Cyber Security",
                "Cloud Infrastructure",
                "Security Advisory",
              ].map((item) => (

                <li
                  key={item}
                  className="transition hover:text-cyan-400"
                >
                  {item}
                </li>

              ))}

            </ul>

          </div>


        </div>



        {/* CTA */}
        <div
          className="
            mt-14
            flex flex-col gap-5
            rounded-2xl
            border border-white/[0.08]
            bg-white/[0.02]
            p-6
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <div>

            <div className="flex items-center gap-2 text-sm font-semibold text-white">

              <ShieldCheck className="h-4 w-4 text-cyan-400" />

              Need a secure digital solution?

            </div>


            <p className="mt-2 text-sm text-white/40">
              Tell us what you are building and we will design
              the right engineering approach.
            </p>

          </div>



          <Link
            to="/contact"
            className="
              inline-flex items-center gap-2
              rounded-xl
              border border-cyan-400/30
              bg-cyan-400/10
              px-5 py-3
              text-sm font-semibold
              text-cyan-300
              transition
              hover:bg-cyan-400/20
            "
          >
            Start a project
            <ArrowRight className="h-4 w-4" />
          </Link>


        </div>



        {/* Bottom */}
        <div
          className="
            mt-10
            flex flex-col gap-4
            border-t border-white/[0.08]
            pt-6
            text-xs text-white/40
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <p>
            © 2026 Centa Limited. All rights reserved.
          </p>


          <div className="flex gap-6">

            <span>
              Indonesia
            </span>


            <span className="text-cyan-400/70">
              Build. Secure. Scale.
            </span>

          </div>


        </div>


      </div>
    </footer>
  );
}