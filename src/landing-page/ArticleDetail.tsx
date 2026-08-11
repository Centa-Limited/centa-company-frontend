import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticleById } from "../services/article.service";


interface Article {
  id: string;
  title: string;
  excerpt?: string | null;
  content?: string | null;
  thumbnail?: string | null;
  publishedAt?: string | null;
  createdAt?: string;
  category?: {
    name: string;
  };
  author?: {
    name: string;
  };
}



export default function ArticleDetail() {


  const { id } = useParams();


  const [article,setArticle] =
    useState<Article | null>(null);

  const [loading,setLoading] =
    useState(true);



  useEffect(()=>{


    const fetchArticle = async()=>{


      try{


        if(!id) return;


        const response =
          await getArticleById(id);


        setArticle(
          response.data
        );


      }catch(error){


        console.error(
          "Failed load article:",
          error
        );


      }finally{


        setLoading(false);


      }


    };


    fetchArticle();


  },[id]);





  if(loading){

    return (

      <main className="
        min-h-screen
        bg-[#050816]
        flex
        items-center
        justify-center
        text-slate-500
      ">

        Loading article...

      </main>

    );

  }





  if(!article){


    return (

      <main className="
        min-h-screen
        bg-[#050816]
        text-white
        flex
        flex-col
        items-center
        justify-center
      ">


        <h1 className="
          text-3xl
          font-black
        ">

          Article Not Found

        </h1>


        <Link

          to="/articles"

          className="
          mt-6
          text-cyan-400
          text-sm
          "

        >

          ← Back to Articles

        </Link>


      </main>

    );

  }






  return (

    <main className="
      min-h-screen
      bg-[#050816]
      text-white
    ">




      {/* HERO */}


      <section className="
        border-b
        border-white/[0.06]
      ">


        <div className="
          mx-auto
          max-w-5xl
          px-6
          py-28
          lg:px-10
        ">



          <Link

            to="/articles"

            className="
            text-xs
            uppercase
            tracking-[0.25em]
            text-cyan-400
            hover:text-cyan-300
            "

          >

            ← CENTA / ARTICLES

          </Link>




          <div className="mt-10">


            <div className="
              inline-flex
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/5
              px-4
              py-2
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-cyan-400
            ">

              {article.category?.name || "Technology"}

            </div>





            <h1 className="
              mt-8
              max-w-4xl
              text-4xl
              font-black
              leading-tight
              tracking-[-0.04em]
              sm:text-6xl
            ">


              {article.title}


            </h1>





            <p className="
              mt-7
              max-w-3xl
              text-base
              leading-8
              text-slate-400
            ">

              {article.excerpt}


            </p>






            <div className="
              mt-8
              flex
              flex-wrap
              gap-6
              text-xs
              uppercase
              tracking-[0.15em]
              text-slate-600
            ">


              <span>

                {new Date(
                  article.publishedAt ||
                  article.createdAt ||
                  ""
                )
                .toLocaleDateString(
                  "en-US",
                  {
                    month:"short",
                    day:"numeric",
                    year:"numeric"
                  }
                )}

              </span>





              {article.author && (

                <span>

                  By {article.author.name}

                </span>

              )}



            </div>


          </div>


        </div>


      </section>







      {/* IMAGE */}


      {article.thumbnail && (

        <section className="
          mx-auto
          max-w-6xl
          px-6
          py-12
          lg:px-10
        ">


          <div className="
            overflow-hidden
            rounded-3xl
            border
            border-white/[0.08]
            bg-white/[0.02]
          ">


            <img

              src={article.thumbnail}

              alt={article.title}

              className="
              w-full
              max-h-[600px]
              object-cover
              "

            />


          </div>


        </section>

      )}








      {/* CONTENT */}


      <section className="
        mx-auto
        max-w-3xl
        px-6
        pb-32
      ">


        <article className="
          prose
          prose-invert
          max-w-none
          prose-p:text-slate-300
          prose-headings:text-white
        ">


          <p className="
            whitespace-pre-line
            leading-8
            text-slate-300
          ">

            {article.content}

          </p>


        </article>


      </section>






    </main>

  );

}