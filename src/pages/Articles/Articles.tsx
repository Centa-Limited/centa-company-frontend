import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import {
  getArticles,
  deleteArticle,
  publishArticle,
  draftArticle,
} from "../../services/article.service";

import {
  getAllCategories,
} from "../../services/category.service";

import type {
  Article,
  Pagination,
} from "../../types/article";

import type {
  Category,
} from "../../types/category";






const Articles = () => {


  const [articles, setArticles] = useState<Article[]>([]);

  const [pagination, setPagination] = useState<Pagination>({
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 0,
  });

  const [loading, setLoading] = useState(true);

  const [categories, setCategories] = useState<Category[]>([]);

  const [search, setSearch] = useState("");

  const [debouncedSearch, setDebouncedSearch] =
  useState(search);

const [status, setStatus] = useState<
  "DRAFT" | "PUBLISHED" | ""
>("");

const [categoryId, setCategoryId] = useState("");
const [page, setPage] = useState(1);
  
  const navigate = useNavigate();


  const loadArticles = async () => {
    
    try {
      setLoading(true);

    const response = await getArticles({
  page,
  limit: pagination.limit,
  search: debouncedSearch || undefined,
  status: status || undefined,
  categoryId: categoryId || undefined,
});

      setArticles(response.data);
      setPagination(response.pagination);

    } catch (error: any) {

      toast.error(
        error?.response?.data?.message ??
        "Gagal memuat artikel."
      );

    } finally {

      setLoading(false);

    }
  };

   const loadCategories = async () => {

    try {

      const data = await getAllCategories();

      setCategories(data);

    } catch(error){

      toast.error(
        "Gagal mengambil kategori"
      );

    }

  };


 useEffect(() => {
  loadArticles();
}, [
  page,
  debouncedSearch,
  status,
  categoryId,
]);

  const handleDelete = async (
  id: string
) => {

  const confirmDelete = window.confirm(
    "Yakin ingin menghapus artikel ini?"
  );


  if (!confirmDelete) {
    return;
  }


  try {

    await deleteArticle(id);


    toast.success(
      "Artikel berhasil dihapus"
    );


    loadArticles();


  } catch (error: any) {

    toast.error(
      error?.response?.data?.message ??
      "Gagal menghapus artikel"
    );

  }

};

const handleStatusChange = async (
  article: Article
) => {

  try {

    if(article.status === "DRAFT"){

      await publishArticle(article.id);

      toast.success(
        "Artikel berhasil dipublish"
      );

    } else {

      await draftArticle(article.id);

      toast.success(
        "Artikel dipindahkan ke draft"
      );

    }


    loadArticles();


  } catch(error:any){

    toast.error(
      error?.response?.data?.message ??
      "Gagal mengubah status artikel"
    );

  }

};


 useEffect(() => {
  loadArticles();
}, [
 debouncedSearch,
  status,
  categoryId,
]);


useEffect(() => {
  loadCategories();
}, []);


useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedSearch(search);
  }, 500);

  return () => clearTimeout(timer);
}, [search]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">

        <div className="text-center">

          <div
            className="
              w-10 h-10
              border-4
              border-blue-600
              border-t-transparent
              rounded-full
              animate-spin
              mx-auto
            "
          />

          <p className="mt-4 text-gray-500">
            Memuat artikel...
          </p>

        </div>

      </div>
    );
  }


 return (
  <div
  className="
    min-h-screen
    p-8
    bg-gradient-to-br
    from-slate-50
    via-white
    to-slate-100
    dark:from-slate-950
    dark:via-slate-950
    dark:to-slate-900
    text-slate-900
    dark:text-white
  "
>

     <div
  className="
    flex
    justify-between
    items-center
    mb-8
    flex-wrap
    gap-4
  "
>
  <div>
    <h1
      className="
        text-3xl
        font-bold
        tracking-tight
      "
    >
      Articles
    </h1>

    <p
      className="
        mt-2
        text-slate-500
        dark:text-slate-400
      "
    >
      Total Article : {pagination.total}
    </p>

    <div
      className="
        mt-4
        flex
        gap-2
        flex-wrap
      "
    >
      <span
        className="
          px-3
          py-1
          rounded-full
          bg-blue-100
          text-blue-600
          text-xs
        "
      >
        Live
      </span>

      <span
        className="
          px-3
          py-1
          rounded-full
          bg-emerald-100
          text-emerald-600
          text-xs
        "
      >
        CMS
      </span>
    </div>
  </div>

  <button
     onClick={() => navigate("/dashboard/articles/create")}
    className="
      px-5
      py-3
      rounded-xl
      bg-gradient-to-r
      from-blue-600
      to-indigo-600
      hover:shadow-lg
      hover:shadow-blue-500/20
      transition
      text-white
      font-semibold
    "
  >
    + New Article
  </button>
</div>

<div
  className="
    flex
    flex-wrap
    gap-4
    mb-8
  "
>

<input
  type="text"
  placeholder="Search article..."
  value={search}
  onChange={(e) => {
    setSearch(e.target.value);
    setPage(1);
  }}
 className="
flex-1
rounded-xl
border
border-slate-200/70
dark:border-slate-700
bg-white/70
dark:bg-slate-900/70
backdrop-blur-md
px-4
py-2.5
text-sm
text-slate-900
dark:text-white
placeholder:text-slate-400
shadow-sm
transition-all
duration-300
focus:border-blue-500
focus:ring-4
focus:ring-blue-500/10
outline-none
"
/>


<select
  value={status}
  onChange={(e) => {
    setStatus(e.target.value as "" | "DRAFT" | "PUBLISHED");
    setPage(1);
  }}
  className="
rounded-xl
border
border-slate-200/70
dark:border-slate-700
bg-white/70
dark:bg-slate-900/70
backdrop-blur-md
px-4
py-2.5
text-sm
text-slate-900
dark:text-white
shadow-sm
transition-all
focus:border-blue-500
focus:ring-4
focus:ring-blue-500/10
outline-none
">

<option value="">
  All Status
</option>

<option value="DRAFT">
  Draft
</option>

<option value="PUBLISHED">
  Published
</option>

</select>



<select
  value={categoryId}
  onChange={(e) => {
    setCategoryId(e.target.value);
    setPage(1);
  }}
  className="
rounded-xl
border
border-slate-200/70
dark:border-slate-700
bg-white/70
dark:bg-slate-900/70
backdrop-blur-md
px-4
py-2.5
text-sm
text-slate-900
dark:text-white
shadow-sm
transition-all
duration-300
focus:border-blue-500
focus:ring-4
focus:ring-blue-500/10
outline-none
">

<option value="">
  All Category
</option>


{
  categories.map((category)=>(
    <option
      key={category.id}
      value={category.id}
    >
      {category.name}
    </option>
  ))
}


</select>


</div>
     
     
   <div
  className="
relative
overflow-hidden
rounded-2xl
bg-white/80
dark:bg-slate-900/80
backdrop-blur-xl
border
border-slate-200/70
dark:border-slate-800
shadow-sm
transition-all
duration-300

before:absolute
before:inset-0
before:bg-gradient-to-r
before:from-blue-500/0
before:via-blue-500/5
before:to-indigo-500/0
before:opacity-0
hover:before:opacity-100
before:transition
"
>
<div className="relative z-10">
        <table
          className="
            w-full
            text-left
          "
        >

        <thead
  className="
bg-slate-100/70
dark:bg-slate-800/60
backdrop-blur-md
"
>

            <tr>

             <th
  className="
p-5
text-xs
font-bold
uppercase
tracking-wider
text-slate-500
dark:text-slate-400
"
>
                Thumbnail
              </th>

             <th
  className="
p-5
text-xs
font-bold
uppercase
tracking-wider
text-slate-500
dark:text-slate-400
"
>
                Title
              </th>

            <th
  className="
p-5
text-xs
font-bold
uppercase
tracking-wider
text-slate-500
dark:text-slate-400
"
>
                Category
              </th>

            <th
  className="
p-5
text-xs
font-bold
uppercase
tracking-wider
text-slate-500
dark:text-slate-400
"
>
                Status
              </th>

             <th
  className="
p-5
text-xs
font-bold
uppercase
tracking-wider
text-slate-500
dark:text-slate-400
"
>
                Author
              </th>

             <th
  className="
p-5
text-xs
font-bold
uppercase
tracking-wider
text-slate-500
dark:text-slate-400
"
>
                Action
              </th>

            </tr>

          </thead>


          <tbody>

            {articles.length === 0 ? (

              <tr>

                <td
                  colSpan={6}
                  className="
                    p-6
                    text-center
                    text-gray-500
                  "
                >
                  Belum ada artikel.
                </td>

              </tr>

            ) : (

              articles.map((article) => (

<tr
  key={article.id}
  className="
    group
    border-b
    border-slate-200/70
    dark:border-slate-800
    transition-all
    duration-300
    hover:bg-blue-50/40
    dark:hover:bg-slate-800/40
  "
>

                  <td className="p-4">

                    {article.thumbnail ? (

                      <img
                        src={article.thumbnail}
                        alt={article.title}
                     className="
w-16
h-16
rounded-xl
object-cover
border
border-slate-200
dark:border-slate-700
shadow-sm
"
                      />

                    ) : (

                      <div
                        className="
                          w-16
                          h-16
                          bg-gray-200
                          rounded
                          flex
                          items-center
                          justify-center
                          text-xs
                          dark:bg-gray-800
text-gray-500
dark:text-gray-400
                        "
                      >
                        No Image
                      </div>

                    )}

                  </td>


                  <td className="p-4">

                  <p
className="
font-semibold
text-slate-900
dark:text-white
group-hover:text-blue-600
transition-colors
"
>
  {article.title}
</p>

                  </td>


                  <td
  className="
    p-4
    text-gray-700
    dark:text-gray-300
  "
>
  {article.category.name}
</td>


                  <td className="p-4">

               <span
  className={`
    inline-flex
    items-center
    rounded-full
    px-3
    py-1
    text-xs
    font-bold
    backdrop-blur-sm
    ${
      article.status === "PUBLISHED"
        ? "bg-indigo-500/15 text-indigo-600 dark:text-indigo-300"
        : "bg-blue-500/15 text-blue-600 dark:text-blue-300"
    }
  `}
>
  {article.status}
</span>
                  </td>


                  <td
  className="
    p-4
    text-gray-700
    dark:text-gray-300
  "
>
  {article.author.name}
</td>


                 <td className="p-4">

  <button
    onClick={() =>
      navigate(
        `/dashboard/articles/${article.id}/edit`
      )
    }
    className="
      text-blue-600
      dark:text-blue-400
      mr-3
    "
  >
    Edit
  </button>


  <button
    onClick={() => handleDelete(article.id)}
    className="
  text-red-600
  dark:text-red-400
  mr-3
"
  >
    Delete
  </button>


  <button
    onClick={() => handleStatusChange(article)}
    className="
  text-green-600
  dark:text-green-400
"
  >
    {
      article.status === "DRAFT"
        ? "Publish"
        : "Draft"
    }
  </button>

</td>



                </tr>

              ))

            )}

          </tbody>

        </table>
<div
  className="
    flex
    items-center
    justify-between
    p-4
    border-t
    border-slate-200
    dark:border-slate-800
  "


>

  <button
    disabled={page === 1}
    onClick={() => setPage((prev) => prev - 1)}
    className="
  px-4
  py-2
  border
  border-gray-300
  dark:border-gray-700
  dark:text-gray-200
  rounded-lg
  disabled:opacity-50
"
  >
    Previous
  </button>

 <span
  className="
    text-sm
    text-gray-600
    dark:text-gray-400
  "
>
    Page {page} of {pagination.totalPages}
  </span>

 

<button
    disabled={page >= pagination.totalPages}
    onClick={() => setPage((prev) => prev + 1)}
    className="
      px-4
      py-2
      border
      border-gray-300
      dark:border-gray-700
      dark:text-gray-200
      rounded-lg
      disabled:opacity-50
    "
  >
    Next
  </button>

</div> 

</div> 

</div>

</div>
  );
};


export default Articles;