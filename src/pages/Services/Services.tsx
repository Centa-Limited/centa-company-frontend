import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  getServices,
  deleteService,
} from "../../services/service.service";

import type {
  Service,
} from "../../types/service";



const Services = () => {
const navigate = useNavigate();

  const [services,setServices] =
    useState<Service[]>([]);


  const [search,setSearch] =
    useState("");



  const [page,setPage] =
    useState(1);



  const [totalPages,setTotalPages] =
    useState(1);



  const [loading,setLoading] =
    useState(false);






  const fetchServices = async()=>{

    try{

      setLoading(true);


      const response =
        await getServices({

          page,

          limit:10,

          search,

        });



      setServices(
        response.data
      );


      setTotalPages(
        response.pagination.totalPages
      );



    }catch(error:any){


      toast.error(
        "Gagal mengambil service"
      );


    }finally{


      setLoading(false);


    }


  };





  useEffect(()=>{

    fetchServices();

  },[
    page,
    search
  ]);








  const handleDelete = async(
    id:string
  )=>{


    if(
      !confirm(
        "Hapus service ini?"
      )
    ) return;



    try{


      await deleteService(id);



      toast.success(
        "Service berhasil dihapus"
      );


      fetchServices();



    }catch(error:any){


      toast.error(
        "Gagal menghapus service"
      );


    }


  };







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
    items-start
    mb-8
  "
>

  <div>

    <h1
      className="
        text-3xl
        font-bold
      "
    >
      Services
    </h1>


    <p
      className="
        mt-2
        text-gray-500
      "
    >
      Manage company services
    </p>

  </div>


  <button
    onClick={() =>
      navigate(
        "/dashboard/services/create"
      )
    }
   className="
bg-blue-600
hover:bg-blue-700
text-white
px-4
py-2
rounded-lg
text-sm
font-medium
transition
"
  >
    + New Service
  </button>


</div>





      <input

        type="text"

        placeholder="Search service..."

        value={search}

        onChange={(e)=>{

          setPage(1);

          setSearch(
            e.target.value
          );

        }}

     className="
mb-6
w-full
rounded-xl
border
border-slate-200/70
dark:border-slate-700
bg-white/70
dark:bg-slate-900/70
backdrop-blur-md
px-4
py-3
text-sm
text-slate-900
dark:text-white
placeholder:text-slate-400
shadow-sm
transition-all
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


        <table
          className="
            w-full
          "
        >

          <thead>

           <tr
className="
bg-slate-100/70
dark:bg-slate-800/60
border-b
border-slate-200
dark:border-slate-700
"
>

             <th
className="
p-5
text-left
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
text-left
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
text-left
text-xs
font-bold
uppercase
tracking-wider
text-slate-500
dark:text-slate-400
"
>
                Order
              </th>


            <th
className="
p-5
text-left
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


          {
            loading ? (

              <tr>

                <td
                  colSpan={4}
                  className="p-5 text-center"
                >
                  Loading...
                </td>

              </tr>


            ) : services.map(
              (service)=>(


             <tr
key={service.id}
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

                  {service.title}

                </td>




                <td className="p-4">

                  {
                    service.isActive
                    ? "Active"
                    : "Inactive"
                  }

                </td>




                <td className="p-4">

                  {service.order}

                </td>




              <td className="p-4">

  <button
    onClick={() =>
      navigate(
        `/dashboard/services/${service.id}/edit`
      )
    }
    className="
text-blue-600
dark:text-blue-400
mr-4
font-medium
hover:text-blue-700
transition
">
    Edit
  </button>


  <button
    onClick={() =>
      handleDelete(service.id)
    }
   className="
text-red-600
dark:text-red-400
font-medium
hover:text-red-700
transition
"
  >
    Delete
  </button>


</td>


              </tr>


            ))}



          </tbody>


        </table>


      </div>






<div
className="
flex
items-center
justify-between
p-4
mt-6
rounded-2xl
bg-white/80
dark:bg-slate-900/80
backdrop-blur-xl
border
border-slate-200/70
dark:border-slate-800
"
>


        <button

          disabled={page===1}

          onClick={()=>
            setPage(
              page-1
            )
          }
className="
px-4
py-2
border
border-gray-300
dark:border-gray-700
rounded-lg
disabled:opacity-50
transition
hover:bg-slate-100
dark:hover:bg-slate-800
"

        >

          Prev

        </button>





        <span className="px-4 py-2">

          {page} / {totalPages}

        </span>






        <button

  disabled={
    page >= totalPages
  }

  onClick={() =>
    setPage(
      (prev) => prev + 1
    )
  }

  className="
px-4
py-2
border
border-gray-300
dark:border-gray-700
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

  );

};


export default Services;