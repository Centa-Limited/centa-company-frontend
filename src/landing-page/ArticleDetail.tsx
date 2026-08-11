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
}


export default function ArticleDetail() {

  const { id } = useParams();

  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchArticle = async () => {

      try {

        if (!id) return;

        const response = await getArticleById(id);

        setArticle(
          response.data || response
        );


      } catch (error) {

        console.error(
          "Failed load article:",
          error
        );

      } finally {

        setLoading(false);

      }

    };


    fetchArticle();

  }, [id]);



  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050816]">
        <p className="text-slate-500">
          Loading article...
        </p>
      </div>
    );
  }



  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#050816]">

        <h1 className="text-3xl font-bold text-white">
          Article Not Found
        </h1>

        <Link
          to="/articles"
          className="mt-5 text-cyan-400"
        >
          Back to Articles
        </Link>

      </div>
    );
  }



  return (

    <main className="bg-[#050816] min-h-screen text-white">


      {/* HERO */}

      <section className="border-b border-white/10">

        <div className="mx-auto max-w-5xl px-6 py-32">


          <Link
            to="/articles"
            className="text-xs uppercase tracking-widest text-cyan-400"
          >
            ← Back to Articles
          </Link>


          <div className="mt-8">

            <span className="text-xs uppercase tracking-widest text-slate-500">
              {article.category?.name || "Technology"}
            </span>


            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">
              {article.title}
            </h1>


            <p className="mt-6 text-slate-400 max-w-2xl leading-7">
              {article.excerpt}
            </p>


            <div className="mt-6 text-xs uppercase tracking-widest text-slate-600">
              {new Date(
                article.publishedAt ||
                article.createdAt ||
                ""
              ).toLocaleDateString()}
            </div>

          </div>


        </div>

      </section>



      {/* IMAGE */}

      {article.thumbnail && (

        <section className="mx-auto max-w-5xl px-6 py-10">

          <img
            src={article.thumbnail}
            alt={article.title}
            className="
              w-full
              rounded-3xl
              border
              border-white/10
              object-cover
            "
          />

        </section>

      )}



      {/* CONTENT */}

      <section className="mx-auto max-w-3xl px-6 pb-32">

        <article
          className="
            prose
            prose-invert
            max-w-none
            text-slate-300
          "
        >

          {article.content}

        </article>


      </section>


    </main>

  );
}