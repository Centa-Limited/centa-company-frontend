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
  <div className="p-8 min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-950 dark:text-gray-100">

      <div
        className="
          flex
          justify-between
          items-center
          mb-6
        "
      >

        <div>

          <h1
            className="
              text-3xl
              font-bold
              text-gray-900
dark:text-white
            "
          >
            Articles
          </h1>


          <p className="text-gray-500 mt-2">
            Total Article : {pagination.total}
          </p>

        </div>


        <button
  className="
    bg-blue-600
    hover:bg-blue-700
    dark:hover:bg-blue-500
    text-white
    px-4
    py-2
    rounded-lg
  "
        >
          + New Article
        </button>

      </div>

<div
  className="
    flex
    gap-4
    mb-6
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
  border
  border-gray-300
  dark:border-gray-700
  bg-white
  dark:bg-gray-900
  text-gray-900
  dark:text-white
  rounded-lg
  px-4
  py-2
  flex-1
"
/>


<select
  value={status}
  onChange={(e) => {
    setStatus(e.target.value as "" | "DRAFT" | "PUBLISHED");
    setPage(1);
  }}
  className="
    border
    border-gray-300
    dark:border-gray-700
    bg-white
    dark:bg-gray-900
    text-gray-900
    dark:text-white<select
  value={categoryId}
    rounded-lg
    px-4
    py-2
  "
>

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
    border
    border-gray-300
    dark:border-gray-700
    bg-white
    dark:bg-gray-900
    text-gray-900
    dark:text-white
    rounded-lg
    px-4
    py-2
  "
>

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
    overflow-x-auto
    bg-white
    dark:bg-gray-900
    rounded-lg
    shadow
    border
    border-gray-200
    dark:border-gray-800
  "

      >

        <table
          className="
            w-full
            text-left
          "
        >

         <thead className="bg-gray-100 dark:bg-gray-800">

            <tr>

              <th className="p-4">
                Thumbnail
              </th>

              <th className="p-4">
                Title
              </th>

              <th className="p-4">
                Category
              </th>

              <th className="p-4">
                Status
              </th>

              <th className="p-4">
                Author
              </th>

              <th className="p-4">
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
    border-b
    border-gray-200
    dark:border-gray-800
    hover:bg-gray-50
    dark:hover:bg-gray-800
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
                          object-cover
                          rounded
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
    text-gray-900
    dark:text-white
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
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        ${
                          article.status === "PUBLISHED"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
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
    border-gray-200
    dark:border-gray-800
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
  );
};


export default Articles;