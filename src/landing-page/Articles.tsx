import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../services/article.service";

interface Article {
  id: string;
  title: string;
  excerpt?: string | null;
  thumbnail?: string | null;
  publishedAt?: string | null;
  category?: {
    name: string;
  };
}

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const response = await getArticles();

        setArticles(response.data || []);
      } catch (error) {
        console.error(
          "Failed to load articles:",
          error
        );

        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);


  return (
    <div>

      {/* Header */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10">

          <div className="max-w-3xl">

            <span className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-cyan-400
            ">
              CENTA / ARTICLES
            </span>


            <h1 className="
              mt-5
              text-5xl
              font-black
              tracking-[-0.045em]
              sm:text-6xl
            ">
              Insights, ideas,
              <span className="
                block
                text-slate-600
              ">
                and technology.
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

        </div>
      </section>



      {/* Categories */}
      <section className="
        border-b
        border-white/[0.06]
      ">

        <div className="
          mx-auto
          flex
          max-w-7xl
          gap-3
          overflow-x-auto
          px-6
          py-5
          lg:px-10
        ">

          <button
            className="
              rounded-full
              bg-cyan-400
              px-4
              py-2
              text-xs
              font-bold
              text-[#030712]
            "
          >
            All
          </button>


          <button
            className="
              rounded-full
              border
              border-white/[0.08]
              px-4
              py-2
              text-xs
              text-slate-500
              hover:text-white
            "
          >
            Technology
          </button>


          <button
            className="
              rounded-full
              border
              border-white/[0.08]
              px-4
              py-2
              text-xs
              text-slate-500
              hover:text-white
            "
          >
            Cyber Security
          </button>


          <button
            className="
              rounded-full
              border
              border-white/[0.08]
              px-4
              py-2
              text-xs
              text-slate-500
              hover:text-white
            "
          >
            Software Engineering
          </button>

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


          {loading ? (

            <div className="
              grid
              gap-5
              md:grid-cols-2
              lg:grid-cols-3
            ">

              {[1,2,3].map((item)=>(
                <div
                  key={item}
                  className="
                    h-64
                    animate-pulse
                    rounded-3xl
                    border
                    border-white/[0.07]
                    bg-white/[0.02]
                  "
                />
              ))}

            </div>


          ) : articles.length === 0 ? (

            <div className="
              rounded-3xl
              border
              border-white/[0.07]
              bg-white/[0.02]
              px-6
              py-20
              text-center
            ">

              <h2 className="
                text-xl
                font-bold
                text-white
              ">
                No articles available
              </h2>


              <p className="
                mt-3
                text-sm
                text-slate-500
              ">
                Articles from Centa Limited
                will appear here.
              </p>

            </div>


          ) : (

            <div className="
              grid
              gap-5
              md:grid-cols-2
              lg:grid-cols-3
            ">

              {articles.map((article)=>(

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
                    {article.category?.name ?? "Technology"}
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
                    {article.excerpt ??
                    "Explore insights from Centa Limited."}
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

                      {article.publishedAt
                        ? new Date(
                            article.publishedAt
                          ).toLocaleDateString(
                            "en-US",
                            {
                              month:"short",
                              day:"numeric",
                              year:"numeric",
                            }
                          )
                        : "Centa Insight"
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

              ))}


            </div>

          )}


        </div>

      </section>


    </div>
  );
}