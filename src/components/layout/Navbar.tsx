import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import {
  Link,
  useLocation,
} from "react-router-dom";


export default function NavbarPublic() {

  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);



  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);



  useEffect(() => {
    setMobileOpen(false);
  }, [location]);
  const handleAnchorClick = (
  e: React.MouseEvent,
  href: string
) => {
  if (!href.startsWith("/#")) return;

  e.preventDefault();

  const id = href.replace("/#", "");

  if (location.pathname !== "/") {
    window.location.href = href;
    return;
  }

  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};



  const navItems = [
  {
    label: "Platform",
    href: "#about",
    type: "anchor",
  },


  {
    label: "Capabilities",
    href: "#services",
    type: "anchor",
  },


  {
    label: "Security",
    href: "#security",
    type: "anchor",
  },


  {
    label: "Approach",
    href: "/approach",
    type: "route",
  },


  {
    label: "Insights",
    href: "/articles",
    type: "route",
  },


  {
    label: "Team",
    href: "/team",
    type: "route",
  },


  {
    label: "Company",
    href: "#about",
    type: "anchor",
  },


  {
    label: "Contact",
    href: "#contact",
    type: "anchor",
  },
];



  return (

    <header
      className={`
        fixed
        top-0
        z-50
        w-full
        transition-all
        duration-300

        ${
          scrolled
          ? `
            border-b
            border-white/[0.08]
            bg-[#050816]/80
            backdrop-blur-xl
          `
          :
          `
            bg-transparent
          `
        }
      `}
    >


      <nav
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          py-5
          sm:px-8
          lg:px-10
        "
      >


        {/* Brand */}

        <Link
          to="/"
          className="
            group
            flex
            flex-col
          "
        >

          <span
            className="
              text-sm
              font-black
              tracking-[0.35em]
              text-white
            "
          >
            CENTA
          </span>


          <span
            className="
              mt-1
              text-[9px]
              tracking-[0.5em]
              text-cyan-400/70
              transition
              group-hover:text-cyan-300
            "
          >
            LIMITED
          </span>


        </Link>




        {/* Desktop Menu */}

        <div
          className="
            hidden
            items-center
            gap-8
            lg:flex
          "
        >

         {navItems.map((item) => (

  <Link
    key={item.label}
    to={item.href}
    onClick={(e) =>
      handleAnchorClick(e, item.href)
    }
    className="
      text-sm
      text-white/60
      transition
      hover:text-white
    "
  >
    {item.label}
  </Link>

))}


        </div>




        {/* Right */}

        <div
          className="
            hidden
            items-center
            gap-5
            lg:flex
          "
        >


          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/[0.05]
              px-3
              py-1.5
            "
          >

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-cyan-400
                shadow-[0_0_12px_rgba(34,211,238,0.8)]
              "
            />

            <span
              className="
                text-[10px]
                tracking-wide
                text-white/50
              "
            >
              SYSTEM ONLINE
            </span>

          </div>



         <Link
  to="/#contact"
  onClick={(e) =>
    handleAnchorClick(e, "/#contact")
  }
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-cyan-400/30
              bg-cyan-400/10
              px-5
              py-2.5
              text-sm
              font-semibold
              text-cyan-300
              transition
              hover:bg-cyan-400/20
            "
          >

            Start Project

            <ArrowRight
              className="
                h-4
                w-4
                transition
                group-hover:translate-x-1
              "
            />

          </Link>


        </div>





        {/* Mobile Button */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="
            lg:hidden
            text-white
          "
        >

          {
            mobileOpen
            ?
            <X />
            :
            <Menu />
          }

        </button>


      </nav>





      {/* Mobile Menu */}

      {
        mobileOpen && (

          <div
            className="
              border-t
              border-white/[0.08]
              bg-[#050816]/95
              px-6
              py-8
              backdrop-blur-xl
              lg:hidden
            "
          >

            <div
              className="
                flex
                flex-col
                gap-6
              "
            >
{navItems.map((item) => (

  <Link
    key={item.label}
    to={item.href}
    onClick={(e) =>
      handleAnchorClick(e, item.href)
    }
    className="
      text-sm
      text-white/70
      hover:text-cyan-400
    "
  >
    {item.label}
  </Link>

))}



<Link
  to="/#contact"
  onClick={(e) =>
    handleAnchorClick(e, "/#contact")
  }
                className="
                  mt-4
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-cyan-400/30
                  bg-cyan-400/10
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-cyan-300
                "
              >

                Start Project

                <ArrowRight className="h-4 w-4" />

              </Link>


            </div>


          </div>

        )
      }


    </header>

  );
}