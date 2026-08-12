import { useParams } from "react-router-dom";
import { teamMembers } from "./teamData";

export default function TeamProfile() {
  const { slug } = useParams();

  const member = teamMembers.find(
    (item) => item.slug === slug
  );

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050b1d] text-white">
        Member Not Found
      </div>
    );
  }

  return (
    <section className="
      min-h-screen
      bg-[#050b1d]
      py-24
      px-6
    ">

      <div className="
        max-w-6xl
        mx-auto
      ">


       

        <div className="
          grid
          md:grid-cols-2
          gap-14
          items-center
        ">


<div
  className="
    flex
    justify-center
    relative
    group
   -translate-x-30
  "
>


  <div
    className="
      absolute
      inset-[-4px]
      rounded-3xl
      border
      border-cyan-400/40
      shadow-[0_0_25px_rgba(34,211,238,0.15)]
      transition-all
      duration-500
      group-hover:shadow-[0_0_45px_rgba(34,211,238,0.35)]
      group-hover:border-cyan-400/70
    "
  />



  <img
  src={member.image}
  alt={member.name}
  className="
    relative
    w-full
    max-w-md
    h-[620px]
    object-cover
   object-[center_48%]
    rounded-3xl
    border
    border-white/10
    ring-1
    ring-cyan-400/20
    transition-all
    duration-500
    group-hover:scale-[1.01]
  "
/>

</div>

         

          <div>

            <p className="
              text-cyan-400
              uppercase
              tracking-[0.3em]
              text-sm
            ">
              Centa Limited
            </p>


            <h1 className="
              mt-4
              text-5xl
              md:text-6xl
              font-bold
              text-white
            ">
              {member.name}
            </h1>


            <h2 className="
              mt-4
              text-xl
              text-cyan-400
            ">
              {member.role}
            </h2>



            <p className="
              mt-8
              text-gray-400
              leading-8
            ">
              {member.about}
            </p>



            {/* EXPERTISE */}

            <div className="mt-10">


              <h3 className="
                text-white
                font-semibold
                text-lg
                mb-5
              ">
                Expertise
              </h3>


              <div className="
                flex
                flex-wrap
                gap-3
              ">

                {member.expertise.map((skill)=>(
                  <span
                    key={skill}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-white/5
                      border
                      border-white/10
                      text-gray-300
                      text-sm
                      hover:border-cyan-400/40
                      transition
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>


          </div>


        </div>




       

        {member.journey && (
          <div className="
            mt-32
            max-w-4xl
          ">


            <h3 className="
              text-3xl
              font-bold
              text-white
              mb-10
            ">
              Journey
            </h3>



            <div className="
              relative
              border-l
              border-cyan-400/20
              pl-8
              space-y-10
            ">


              {member.journey.map((item,index)=>(
                <div
                  key={index}
                  className="
                    relative
                  "
                >


                  {/* DOT */}

                  <div className="
                    absolute
                    -left-[42px]
                    top-1
                    w-4
                    h-4
                    rounded-full
                    bg-cyan-400
                    shadow-[0_0_15px_rgba(34,211,238,0.8)]
                  "/>



                  <p className="
                    text-cyan-400
                    font-semibold
                    text-sm
                  ">
                    {item.year}
                  </p>


                  <p className="
                    mt-2
                    text-gray-400
                    leading-7
                  ">
                    {item.text}
                  </p>


                </div>
              ))}


            </div>


          </div>
        )}


      </div>


    </section>
  );
}