import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../services/article.service";


interface Article {
  id: string;
  title: string;
  excerpt?: string | null;
  thumbnail?: string | null;
  publishedAt?: string | null;
  createdAt?: string;
  category?: {
    name: string;
  };
}


export default function Articles() {

  const [articles,setArticles] = useState<Article[]>([]);
  const [loading,setLoading] = useState(true);


  useEffect(()=>{

    const fetchArticles = async()=>{

      try{

        const response = await getArticles();

        setArticles(
          response.data || []
        );


      }catch(error){

        console.error(
          "Failed load articles:",
          error
        );

      }finally{

        setLoading(false);

      }

    };


    fetchArticles();

  },[]);



  return (

    <main className="bg-[#050816] min-h-screen text-white">


      {/* Header */}

      <section className="border-b border-white/[0.06]">

        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10">

          <span className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.25em]
            text-cyan-400
          ">
            CENTA / ARTICLES
          </span>


          <h1
  className="
    mt-5
    max-w-4xl
    text-5xl
    font-black
    tracking-[-0.045em]
    sm:text-6xl
  "
>

  Engineering knowledge,

  <span
  className="
  block
  bg-gradient-to-r
  from-cyan-300
  via-cyan-400
  to-blue-500
  bg-clip-text
  text-transparent
  "
>
  secure digital futures.
</span>
</h1>

          <p className="
            mt-6
            max-w-xl
            text-sm
            leading-7
            text-slate-500
          ">

            Explore insights, technical knowledge,
            security research, and perspectives
            from the Centa team.

          </p>


        </div>

      </section>



      {/* Articles */}


      <section>

        <div className="
          mx-auto
          max-w-7xl
          px-6
          py-20
          lg:px-10
        ">


          {
          loading ? (

            <div className="text-slate-500">
              Loading articles...
            </div>


          ) : (


          <div className="
            grid
            gap-5
            md:grid-cols-2
            lg:grid-cols-3
          ">


          {
          articles.map((article)=>(


            <article

              key={article.id}

              className="
              group
              rounded-3xl
              border
              border-white/[0.07]
              bg-white/[0.02]
              p-6
              transition-all
              hover:-translate-y-1
              hover:border-cyan-400/20
              "

            >


              <div className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-cyan-400
              ">

                {
                article.category?.name ||
                "Technology"
                }

              </div>



              <h2 className="
                mt-5
                text-xl
                font-bold
                text-white
              ">

                {article.title}

              </h2>



              <p className="
                mt-3
                text-sm
                leading-6
                text-slate-600
              ">

                {
                article.excerpt ||
                "Explore the latest insight from Centa Limited."
                }

              </p>



              <div className="
                mt-6
                flex
                items-center
                justify-between
                border-t
                border-white/[0.06]
                pt-4
              ">


                <span className="
                  text-[9px]
                  text-slate-700
                ">

                {
                new Date(
                  article.publishedAt ||
                  article.createdAt ||
                  ""
                )
                .toLocaleDateString()
                }

                </span>



                <Link

                  to={`/articles/${article.id}`}

                  className="
                  text-xs
                  font-bold
                  text-cyan-400
                  "
                >

                  Read Article →

                </Link>


              </div>


            </article>


          ))
          }


          </div>


          )

          }


        </div>


      </section>


    </main>

  );
}