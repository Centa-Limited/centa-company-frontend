import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import {
  getCategories,
   deleteCategory,
} from "../../services/category.service";

import type {
  Category,
  Pagination,
} from "../../types/category";

const Categories = () => {

  const navigate = useNavigate();

  const [categories, setCategories] = useState<Category[]>([]);

  const [pagination, setPagination] =
    useState<Pagination>({
      total: 0,
      page: 1,
      limit: 10,
      totalPages: 0,
    });

  const [loading, setLoading] =
    useState(true);

  const [page, setPage] =
    useState(1);

  const [search, setSearch] =
    useState("");

  const [debouncedSearch, setDebouncedSearch] =
    useState("");

  
  
    const loadCategories = async () => {

    try {

      setLoading(true);

      const response = await getCategories({
        page,
        limit: pagination.limit,
        search: debouncedSearch || undefined,
      });

      setCategories(response.data);

      setPagination(response.pagination);

    } catch (error: any) {

      toast.error(
        error?.response?.data?.message ??
        "Gagal memuat kategori"
      );

    } finally {

      setLoading(false);

    }

  };

  const handleDelete = async (id: string) => {

  const confirmDelete = window.confirm(
    "Yakin ingin menghapus kategori ini?"
  );

  if (!confirmDelete) {
    return;
  }

  try {

    await deleteCategory(id);

    toast.success(
      "Kategori berhasil dihapus"
    );

    if (
      categories.length === 1 &&
      page > 1
    ) {
      setPage((prev) => prev - 1);
      return;
    }

    loadCategories();

  } catch (error: any) {

    toast.error(
      error?.response?.data?.message ??
      "Gagal menghapus kategori"
    );

  }

};

 

useEffect(() => {
    loadCategories();
  }, [
    page,
    debouncedSearch,
  ]);

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
              w-10
              h-10
              border-4
              border-blue-600
              border-t-transparent
              rounded-full
              animate-spin
              mx-auto
            "
          />

          <p className="mt-4 text-gray-500">
            Memuat kategori...
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
      Categories
    </h1>

    <p
      className="
        mt-2
        text-slate-500
        dark:text-slate-400
      "
    >
      Total Categories : {pagination.total}
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
        CMS
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
        Categories
      </span>

    </div>

  </div>

  <button
    onClick={() => navigate("/dashboard/categories/create")}
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
    + New Category
  </button>

</div>

   <div
  className="
    flex
    mb-8
  "
>

      <input
        type="text"
        placeholder="Search category..."
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
before:pointer-events-none
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

<table className="w-full text-left">




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
              Name
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
              Slug
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
              Created
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

          {categories.length === 0 ? (

            <tr>

              <td
                colSpan={4}
                className="
                  p-6
                  text-center
                 text-slate-500
dark:text-slate-400
                "
              >
                Belum ada kategori.
              </td>

            </tr>

          ) : (

            categories.map((category) => (

             <tr
  key={category.id}
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

               <td
  className="
    p-4
    font-semibold
    text-slate-900
    dark:text-white
    group-hover:text-blue-600
    transition-colors
  "
>
  {category.name}
</td>

               <td
  className="
    p-4
    text-slate-500
    dark:text-slate-400
  "
>
                  {category.slug}
                </td>

               <td
  className="
    p-4
    text-slate-500
    dark:text-slate-400
  "
>
                  {new Date(category.createdAt).toLocaleDateString()}
                </td>

                <td className="p-4">

                 <button
  onClick={() =>
    navigate(`/dashboard/categories/${category.id}/edit`)
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
  onClick={() => handleDelete(category.id)}
  className="
    text-red-600
    dark:text-red-400
  "
>
  Delete
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
border-slate-300
dark:border-slate-700
dark:text-slate-200
rounded-lg
disabled:opacity-50
transition
hover:bg-slate-100
dark:hover:bg-slate-800
"
        >
          Previous
        </button>

        <span
  className="
    text-sm
    text-slate-600
    dark:text-slate-400
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
border-slate-300
dark:border-slate-700
dark:text-slate-200
rounded-lg
disabled:opacity-50
transition
hover:bg-slate-100
dark:hover:bg-slate-800
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

export default Categories;
