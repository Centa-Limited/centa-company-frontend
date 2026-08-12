import {
  ArrowRight,
  Globe,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";


export default function FooterPublic() {

  const navigate = useNavigate();
  const location = useLocation();


  const companyLinks = [
    {
      name: "About",
      type: "section",
      section: "about",
    },
    {
      name: "Approach",
      type: "page",
      path: "/approach",
    },
    {
      name: "Team",
      type: "page",
      path: "/team",
    },
    {
      name: "Articles",
      type: "page",
      path: "/articles",
    },
    {
      name: "Contact",
      type: "section",
      section: "contact",
    },
  ];


  const capabilities = [
    "Software Engineering",
    "Web Development",
    "Application Development",
    "Cyber Security",
    "Cloud Infrastructure",
    "Security Advisory",
  ];



  const handleSectionNavigation = (
    section:string
  )=>{

    if(location.pathname === "/"){

      document
        .getElementById(section)
        ?.scrollIntoView({
          behavior:"smooth",
          block:"start",
        });

      return;
    }


    navigate(`/#${section}`);

  };



  return (

<footer
className="
relative
overflow-hidden
border-t
border-white/[0.08]
bg-[#020617]
"
>


{/* GRID BACKGROUND */}

<div
className="
pointer-events-none
absolute
inset-0
bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)]
bg-[size:80px_80px]
opacity-40
"
/>



{/* GLOW */}










<div
className="
relative
mx-auto
max-w-[1440px]
px-6
py-20
lg:px-10
xl:px-12
"
>



{/* MAIN */}


<div
className="
grid
gap-14
lg:grid-cols-[1.7fr_1fr_1fr]
"
>



{/* BRAND */}

<div>


<Link
to="/"
className="
group
inline-flex
items-center
gap-4
"
>


<div
className="
relative
flex
h-16
w-16
items-center
justify-center
rounded-2xl
border
border-cyan-400/30
bg-gradient-to-br
from-cyan-400/20
to-transparent
shadow-[0_0_60px_rgba(34,211,238,0.25)]
transition
group-hover:scale-105
"
>


<div
className="
absolute
inset-1
rounded-xl
border
border-white/10
"
/>


<span
className="
relative
text-2xl
font-black
text-cyan-300
"
>
C
</span>


</div>




<div>

<div
className="
text-xl
font-black
tracking-[0.45em]
text-white
"
>
CENTA
</div>


<div
className="
mt-1
text-[10px]
tracking-[0.5em]
text-white/40
"
>
LIMITED
</div>


</div>


</Link>





<p
className="
mt-7
max-w-md
text-sm
leading-7
text-white/50
"
>
Engineering secure digital products,
scalable software systems,
infrastructure, and cybersecurity
solutions for modern businesses.
</p>





{/* STATUS */}

<div
className="
mt-7
inline-flex
items-center
gap-3
rounded-2xl
border
border-cyan-400/20
bg-cyan-400/[0.05]
px-4
py-3
backdrop-blur-xl
"
>


<span
className="
h-2
w-2
rounded-full
bg-emerald-400
animate-pulse
shadow-[0_0_15px_rgba(52,211,153,.8)]
"
/>


<div>

<p
className="
text-xs
font-semibold
text-white
"
>
Systems Operational
</p>


<p
className="
text-[11px]
text-white/40
"
>
Security monitoring active
</p>


</div>


</div>





{/* TRUST */}

<div
className="
mt-5
flex
flex-wrap
gap-2
"
>

{
[
"ISO 27001 Ready",
"Secure Architecture",
"24/7 Monitoring"
]
.map(item=>(

<span
key={item}
className="
rounded-lg
border
border-white/10
bg-white/[0.03]
px-3
py-2
text-[11px]
text-white/50
"
>
{item}
</span>

))
}


</div>



</div>








{/* COMPANY */}


<div>


<h4
className="
text-xs
font-semibold
tracking-[0.35em]
text-white/70
"
>
COMPANY
</h4>


<ul
className="
mt-7
space-y-4
"
>

{
companyLinks.map((item:any)=>(

<li
key={item.name}
>


{
item.type==="page" ? (

<Link
to={item.path}
className="
group
flex
items-center
gap-3
text-sm
text-white/45
transition-all
hover:translate-x-1
hover:text-cyan-300
"
>

<span
className="
h-px
w-0
bg-cyan-400
transition-all
group-hover:w-4
"
/>

{item.name}

</Link>


):(

<button
onClick={()=>
handleSectionNavigation(item.section)
}
className="
group
flex
items-center
gap-3
text-sm
text-white/45
transition-all
hover:translate-x-1
hover:text-cyan-300
"
>

<span
className="
h-px
w-0
bg-cyan-400
transition-all
group-hover:w-4
"
/>


{item.name}

</button>

)

}


</li>

))

}

</ul>


</div>








{/* CAPABILITIES */}


<div>


<h4
className="
text-xs
font-semibold
tracking-[0.35em]
text-white/70
"
>
CAPABILITIES
</h4>


<ul
className="
mt-7
space-y-4
"
>

{
capabilities.map(item=>(

<li
key={item}
className="
flex
items-center
gap-3
text-sm
text-white/45
transition
hover:text-cyan-300
"
>

<LockKeyhole
className="
h-4
w-4
text-cyan-400/70
"
/>


{item}


</li>

))

}


</ul>



</div>



</div>








{/* CTA */}


<div
className="
relative
mt-16
overflow-hidden
rounded-3xl
border
border-white/[0.08]
bg-gradient-to-br
from-cyan-400/[0.08]
via-white/[0.03]
to-transparent
p-8
backdrop-blur-xl
"
>


<div
className="
relative
flex
flex-col
gap-6
md:flex-row
md:items-center
md:justify-between
"
>


<div>


<div
className="
mb-3
flex
items-center
gap-3
text-[10px]
tracking-[0.4em]
text-cyan-400/80
"
>

<ShieldCheck
className="
h-4
w-4
"
/>

SECURE PROJECT INITIATION

</div>



<h3
className="
text-xl
font-bold
text-white
"
>
Build secure digital systems
</h3>



<p
className="
mt-3
max-w-xl
text-sm
text-white/45
"
>
Tell us your challenge.
Our engineering and security team
will design the right solution.
</p>



</div>





<button
  onClick={()=>handleSectionNavigation("contact")}
  className="
    group
    inline-flex
    items-center
    gap-3
    rounded-2xl
    border
    border-cyan-300/20
    bg-cyan-300/10
    px-6
    py-3
    text-sm
    font-semibold
    text-cyan-200
    transition
    hover:bg-cyan-300/20
  "
>
  Start a project

  <ArrowRight
    className="
      h-4
      w-4
      transition
      group-hover:translate-x-1
    "
  />
</button>



</div>


</div>








{/* BOTTOM */}


<div
className="
mt-12
flex
flex-col
gap-5
border-t
border-white/[0.08]
pt-7
text-xs
text-white/40
md:flex-row
md:items-center
md:justify-between
"
>


<p>
© 2026 Centa Limited. All rights reserved.
</p>



<div
className="
flex
items-center
gap-5
"
>


<span
className="
flex
items-center
gap-2
"
>

<Globe
className="
h-3.5
w-3.5
"
/>

Indonesia

</span>



<span
className="
text-cyan-400/70
"
>
Build. Secure. Scale.
</span>


</div>


</div>





</div>


</footer>

  );
}