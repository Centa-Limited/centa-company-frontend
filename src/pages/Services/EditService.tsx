import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import {
  getServiceById,
  updateService,
} from "../../services/service.service";

import type {
  ServicePayload,
} from "../../types/service";


const EditService = () => {


  const navigate = useNavigate();

  const { id } = useParams();



  const [form, setForm] =
    useState<ServicePayload>({
      title: "",
      shortDescription: "",
      description: "",
      icon: "",
      thumbnail: "",
      order: 0,
      isActive: true,
    });



  const [loading, setLoading] =
    useState(false);



  const [fetching, setFetching] =
    useState(true);






  useEffect(() => {


    const fetchService = async () => {

      try {


        if(!id) return;



        const data =
          await getServiceById(id);



        setForm({

          title: data.title,

          shortDescription:
            data.shortDescription,

          description:
            data.description,

          icon:
            data.icon ?? "",

          thumbnail:
            data.thumbnail ?? "",

          order:
            data.order,

          isActive:
            data.isActive,

        });



      } catch(error:any){


        toast.error(
          "Gagal mengambil data service"
        );


      } finally {


        setFetching(false);


      }

    };



    fetchService();


  },[id]);








  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {


    const value =
      e.target.name === "order"
        ? Number(e.target.value)
        : e.target.name === "isActive"
        ? e.target.value === "true"
        : e.target.value;



    setForm({

      ...form,

      [e.target.name]:
        value,

    });


  };







  const handleSubmit = async (
    e: React.FormEvent
  ) => {


    e.preventDefault();



    try {


      setLoading(true);



      await updateService(
        id!,
        form
      );



      toast.success(
        "Service berhasil diperbarui"
      );



      navigate(
        "/dashboard/services"
      );



    } catch(error:any){


      toast.error(
        error?.response?.data?.message ??
        "Gagal update service"
      );


    } finally {


      setLoading(false);


    }


  };






  if(fetching){

    return (

      <div className="p-6">

        Loading...

      </div>

    );

  }






  return (

    <div className="p-6">


      <h1
        className="
          text-2xl
          font-bold
          mb-6
        "
      >
        Edit Service
      </h1>




      <form

        onSubmit={handleSubmit}

        className="
          space-y-5
          bg-white
          dark:bg-gray-800
          p-6
          rounded-xl
          shadow
        "

      >



        <input

          name="title"

          value={form.title}

          onChange={handleChange}

          placeholder="Title"

          className="
            w-full
            px-4
            py-2
            border
            rounded-lg
            dark:bg-gray-900
          "

        />





        <textarea

          name="shortDescription"

          value={form.shortDescription}

          onChange={handleChange}

          placeholder="Short Description"

          className="
            w-full
            px-4
            py-2
            border
            rounded-lg
            dark:bg-gray-900
          "

        />







        <textarea

          rows={5}

          name="description"

          value={form.description}

          onChange={handleChange}

          placeholder="Description"

          className="
            w-full
            px-4
            py-2
            border
            rounded-lg
            dark:bg-gray-900
          "

        />







        <input

          name="icon"

          value={form.icon ?? ""}

          onChange={handleChange}

          placeholder="Icon"

          className="
            w-full
            px-4
            py-2
            border
            rounded-lg
            dark:bg-gray-900
          "

        />







        <input

          name="thumbnail"

          value={form.thumbnail ?? ""}

          onChange={handleChange}

          placeholder="Thumbnail"

          className="
            w-full
            px-4
            py-2
            border
            rounded-lg
            dark:bg-gray-900
          "

        />







        <input

          type="number"

          name="order"

          value={form.order ?? 0}

          onChange={handleChange}

          className="
            w-full
            px-4
            py-2
            border
            rounded-lg
            dark:bg-gray-900
          "

        />








        <select

          name="isActive"

          value={
            form.isActive
              ? "true"
              : "false"
          }

          onChange={handleChange}

          className="
            w-full
            px-4
            py-2
            border
            rounded-lg
            dark:bg-gray-900
          "

        >

          <option value="true">
            Active
          </option>


          <option value="false">
            Inactive
          </option>


        </select>








        <button

          disabled={loading}

          className="
            bg-blue-600
            text-white
            px-6
            py-2
            rounded-lg
          "

        >

          {
            loading
              ? "Updating..."
              : "Update Service"
          }


        </button>



      </form>


    </div>

  );


};


export default EditService;