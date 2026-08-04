import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getUsers,
  deleteUser,
} from "../../services/user.service";

import type {
  User,
  Pagination,
} from "../../types/user";

import { useNavigate } from "react-router-dom";


const Users = () => {
 const navigate = useNavigate();

  const [users, setUsers] =
    useState<User[]>([]);


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



  const loadUsers = async () => {

    try {

      setLoading(true);


      const response =
        await getUsers({
          page,
          limit: pagination.limit,
          search: debouncedSearch || undefined,
        });


      setUsers(response.data);

      setPagination(response.pagination);


    } catch (error: any) {


      toast.error(
        error?.response?.data?.message ??
        "Gagal memuat user"
      );


    } finally {

      setLoading(false);

    }

  };




  const handleDelete = async (
    id: string
  ) => {


    const confirmDelete =
      window.confirm(
        "Yakin ingin menghapus user ini?"
      );


    if (!confirmDelete) {
      return;
    }



    try {


      await deleteUser(id);


      toast.success(
        "User berhasil dihapus"
      );



      if (
        users.length === 1 &&
        page > 1
      ) {

        setPage(
          (prev) => prev - 1
        );

        return;

      }



      loadUsers();



    } catch (error: any) {


      toast.error(
        error?.response?.data?.message ??
        "Gagal menghapus user"
      );


    }

  };




  useEffect(() => {

    loadUsers();

  }, [
    page,
    debouncedSearch,
  ]);




  useEffect(() => {


    const timer =
      setTimeout(() => {

        setDebouncedSearch(search);

      }, 500);



    return () =>
      clearTimeout(timer);


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
            Memuat user...
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
      Users
    </h1>


    <p
      className="
        mt-2
       text-slate-500
dark:text-slate-400
      "
    >
      Total Users : {pagination.total}
    </p>

  </div>



  <button
    onClick={() =>
      navigate(
        "/dashboard/users/create"
      )
    }
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
    + New User
  </button>


</div>



        <input

          type="text"

          placeholder="Search user..."

          value={search}

          onChange={(e)=>{

            setSearch(
              e.target.value
            );

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
        "
      >


        <table className="w-full text-left">


        <thead
  className="
    bg-slate-100/70
    dark:bg-slate-800/60
    backdrop-blur-md
  "
>
            <tr>

              <th className="p-4">
                Name
              </th>


              <th className="p-4">
                Email
              </th>


              <th className="p-4">
                Role
              </th>


              <th className="p-4">
                Created
              </th>


              <th className="p-4">
                Action
              </th>


            </tr>


          </thead>



          <tbody>


          {
            users.length === 0 ? (

              <tr>

                <td
                  colSpan={5}
                  className="
                    p-6
                    text-center
                    text-slate-500
dark:text-slate-400
                  "
                >
                  Belum ada user.
                </td>

              </tr>


            ) : (


              users.map((user)=>(


                <tr

                  key={user.id}

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
                    "
                  >
                    {user.name}
                  </td>



                  <td className="p-4">

                    {user.email}

                  </td>



                  <td className="p-4">


                    <span
                      className={`
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        font-semibold

                        ${
                          user.role === "SUPER_ADMIN"
                          ?
                          "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                          :
                          "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                        }

                      `}
                    >

                      {user.role}

                    </span>


                  </td>




                  <td className="p-4 text-gray-500 dark:text-gray-400">

                    {
                      new Date(
                        user.createdAt
                      )
                      .toLocaleDateString()
                    }

                  </td>




                  <td className="p-4">


                   <button
  onClick={() =>
    navigate(
      `/dashboard/users/${user.id}/edit`
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

                      onClick={() =>
                        handleDelete(
                          user.id
                        )
                      }

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


            )
          }


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
  onClick={() =>
    setPage((prev) => prev - 1)
  }
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
              text-gray-600
              dark:text-gray-400
            "
          >

            Page {page} of {pagination.totalPages}

          </span>





          <button

            disabled={
              page >= pagination.totalPages
            }

            onClick={() =>
              setPage(
                (prev)=>prev + 1
              )
            }

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

  );


};


export default Users;