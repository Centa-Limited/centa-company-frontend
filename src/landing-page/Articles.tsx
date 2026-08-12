import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../services/article.service";
import { getAllCategories } from "../services/category.service";
import { API_BASE_URL } from "../config/env";
import type { Category } from "../types/category";

interface Article {
  id: string;
  title: string;
  excerpt?: string | null;
  thumbnail?: string | null;
  publishedAt?: string | null;
  createdAt?: string;

  category?: {
    id: string;
    name: string;
    slug: string;
  } | null;
}

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const [loading, setLoading] = useState(true);
  const [categoryLoading, setCategoryLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] =
    useState<string>("all");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await getArticles({
          status: "PUBLISHED",
          limit: 100,
          sortBy: "publishedAt",
          sortOrder: "desc",
        });

        setArticles(response.data || []);
      } catch (error) {
        console.error(
          "Failed load articles:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();

        setCategories(data || []);
      } catch (error) {
        console.error(
          "Failed load categories:",
          error
        );
      } finally {
        setCategoryLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const filteredArticles = useMemo(() => {
    if (selectedCategory === "all") {
      return articles;
    }

    return articles.filter(
      (article) =>
        article.category?.id === selectedCategory
    );
  }, [articles, selectedCategory]);

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050816]
        text-white
      "
    >
    

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          top-[8%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-violet-500/[0.10]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[180px]
          top-[45%]
          h-[480px]
          w-[480px]
          rounded-full
          bg-purple-500/[0.08]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[25%]
          bottom-[5%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-cyan-400/[0.045]
          blur-[140px]
        "
      />

      

      <section className="relative border-b border-white/[0.06]">
        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            py-32
            lg:px-10
          "
        >
          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-cyan-400
            "
          >
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

          <p
            className="
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-slate-500
            "
          >
            Explore insights, technical knowledge,
            security research, and perspectives from
            the Centa team.
          </p>
        </div>
      </section>

      {/* =====================================================
          CATEGORY FILTER
      ===================================================== */}

      <section className="relative">
        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            pt-10
            lg:px-10
          "
        >
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-2
            "
          >
            {/* ALL */}

            <button
              type="button"
              onClick={() =>
                setSelectedCategory("all")
              }
              className={`
                rounded-full
                border
                px-4
                py-2
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                transition-all
                duration-300

                ${
                  selectedCategory === "all"
                    ? `
                      border-cyan-400/40
                      bg-cyan-400/10
                      text-cyan-300
                      shadow-[0_0_20px_rgba(34,211,238,0.08)]
                    `
                    : `
                      border-white/[0.08]
                      bg-white/[0.02]
                      text-slate-500
                      hover:border-white/[0.15]
                      hover:bg-white/[0.04]
                      hover:text-white
                    `
                }
              `}
            >
              All
            </button>

            {/* DYNAMIC CATEGORIES */}

            {!categoryLoading &&
              categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() =>
                    setSelectedCategory(
                      category.id
                    )
                  }
                  className={`
                    rounded-full
                    border
                    px-4
                    py-2
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    transition-all
                    duration-300

                    ${
                      selectedCategory ===
                      category.id
                        ? `
                          border-cyan-400/40
                          bg-cyan-400/10
                          text-cyan-300
                          shadow-[0_0_20px_rgba(34,211,238,0.08)]
                        `
                        : `
                          border-white/[0.08]
                          bg-white/[0.02]
                          text-slate-500
                          hover:border-white/[0.15]
                          hover:bg-white/[0.04]
                          hover:text-white
                        `
                    }
                  `}
                >
                  {category.name}
                </button>
              ))}
          </div>
        </div>
      </section>

    
      <section className="relative">
        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            py-12
            lg:px-10
          "
        >
          {/* Loading */}

          {loading && (
            <div
              className="
                flex
                min-h-[300px]
                items-center
                justify-center
                text-sm
                text-slate-500
              "
            >
              Loading articles...
            </div>
          )}

          {/* Empty */}

          {!loading &&
            filteredArticles.length === 0 && (
              <div
                className="
                  rounded-3xl
                  border
                  border-white/[0.06]
                  bg-white/[0.02]
                  px-6
                  py-20
                  text-center
                "
              >
                <p className="text-sm text-slate-500">
                  No articles available in this
                  category.
                </p>
              </div>
            )}

          {/* Articles */}

          {!loading &&
            filteredArticles.length > 0 && (
              <div
                className="
                  grid
                  gap-6
                  md:grid-cols-2
                  lg:grid-cols-3
                "
              >
                {filteredArticles.map(
                  (article) => {
                    const categoryName =
                      article.category?.name ||
                      "Technology";

                    const articleDate =
                      article.publishedAt ||
                      article.createdAt ||
                      "";

                    return (
                      <article
                        key={article.id}
                        className="
                          group
                          relative
                          overflow-hidden
                          rounded-3xl
                          border
                          border-white/[0.07]
                          bg-white/[0.02]
                          transition-all
                          duration-500
                          hover:-translate-y-1
                          hover:border-cyan-400/20
                          hover:bg-white/[0.035]
                        "
                      >
                       

                        <div
                          className="
                            pointer-events-none
                            absolute
                            -right-24
                            -top-24
                            h-56
                            w-56
                            rounded-full
                            bg-cyan-400/[0.10]
                            opacity-0
                            blur-[90px]
                            transition-opacity
                            duration-700
                            group-hover:opacity-100
                          "
                        />

                        <div
                          className="
                            pointer-events-none
                            absolute
                            -bottom-24
                            -left-20
                            h-48
                            w-48
                            rounded-full
                            bg-violet-500/[0.08]
                            opacity-0
                            blur-[90px]
                            transition-opacity
                            duration-700
                            group-hover:opacity-100
                          "
                        />

                  

                    {article.thumbnail && (
  <div
    className="
      relative
      aspect-[16/9]
      overflow-hidden
      border-b
      border-white/[0.06]
      bg-slate-900
    "
  >
    <img
      src={
        article.thumbnail.startsWith("http")
          ? article.thumbnail
          : `${API_BASE_URL}${article.thumbnail}`
      }
      alt={article.title}
      className="
        h-full
        w-full
        object-cover
        transition-transform
        duration-700
        group-hover:scale-105
      "
    />

    <div
      className="
        pointer-events-none
        absolute
        inset-0
        bg-gradient-to-t
        from-[#050816]/70
        via-transparent
        to-transparent
      "
    />
  </div>
)}

                              

                        <div className="relative p-6">
                          {/* Category */}

                          <div
                            className="
                              flex
                              items-center
                              justify-between
                              gap-4
                            "
                          >
                            <span
                              className="
                                inline-flex
                                items-center
                                rounded-full
                                border
                                border-cyan-400/20
                                bg-cyan-400/[0.06]
                                px-3
                                py-1
                                text-[9px]
                                font-bold
                                uppercase
                                tracking-[0.18em]
                                text-cyan-400
                              "
                            >
                              {categoryName}
                            </span>

                            <span
                              className="
                                h-1.5
                                w-1.5
                                shrink-0
                                rounded-full
                                bg-cyan-400/70
                                shadow-[0_0_10px_rgba(34,211,238,0.5)]
                              "
                            />
                          </div>

                          {/* Title */}

                          <h2
                            className="
                              mt-5
                              text-xl
                              font-bold
                              leading-snug
                              tracking-tight
                              text-white
                              transition-colors
                              duration-300
                              group-hover:text-cyan-50
                            "
                          >
                            {article.title}
                          </h2>

                          {/* Excerpt */}

                          <p
                            className="
                              mt-3
                              line-clamp-3
                              text-sm
                              leading-6
                              text-slate-500
                            "
                          >
                            {article.excerpt ||
                              "Explore the latest insight from Centa Limited."}
                          </p>

                          {/* Divider */}

                          <div
                            className="
                              mt-6
                              h-px
                              bg-gradient-to-r
                              from-white/[0.08]
                              via-white/[0.04]
                              to-transparent
                            "
                          />

                          {/* Footer */}

                          <div
                            className="
                              mt-4
                              flex
                              items-center
                              justify-between
                              gap-4
                            "
                          >
                            <span
                              className="
                                text-[9px]
                                font-medium
                                uppercase
                                tracking-[0.12em]
                                text-slate-600
                              "
                            >
                              {articleDate
                                ? new Date(
                                    articleDate
                                  ).toLocaleDateString(
                                    "en-US",
                                    {
                                      year: "numeric",
                                      month:
                                        "short",
                                      day: "numeric",
                                    }
                                  )
                                : "CENTA"}
                            </span>

                            <Link
                              to={`/articles/${article.id}`}
                              className="
                                text-xs
                                font-bold
                                text-cyan-400
                                transition-all
                                duration-300
                                hover:text-cyan-300
                                group-hover:translate-x-0.5
                              "
                            >
                              Read Article →
                            </Link>
                          </div>
                        </div>
                      </article>
                    );
                  }
                )}
              </div>
            )}
        </div>
      </section>
    </main>
  );
}