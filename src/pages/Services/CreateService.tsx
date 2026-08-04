import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  createService,
} from "../../services/service.service";

import type {
  ServicePayload,
} from "../../types/service";


const CreateService = () => {


  const navigate = useNavigate();


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


    if(
      !form.title ||
      !form.shortDescription ||
      !form.description
    ){

      toast.error(
        "Field wajib harus diisi"
      );

      return;

    }



    try {


      setLoading(true);



      await createService(form);



      toast.success(
        "Service berhasil dibuat"
      );



      navigate(
        "/dashboard/services"
      );



    } catch(error:any){


      toast.error(
        error?.response?.data?.message ??
        "Gagal membuat service"
      );


    } finally {


      setLoading(false);


    }


  };





  return (

    <div
      className="
        p-6
      "
    >


      <h1
        className="
          text-2xl
          font-bold
          mb-6
        "
      >
        Create Service
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


        <div>

          <label
            className="
              block
              mb-2
              text-sm
              font-medium
            "
          >
            Title
          </label>


          <input

            type="text"

            name="title"

            value={form.title}

            onChange={handleChange}

            placeholder="Service title"

            className="
              w-full
              px-4
              py-2
              rounded-lg
              border
              dark:bg-gray-900
              dark:border-gray-700
            "

          />


        </div>





        <div>

          <label
            className="
              block
              mb-2
              text-sm
              font-medium
            "
          >
            Short Description
          </label>


          <textarea

            name="shortDescription"

            value={form.shortDescription}

            onChange={handleChange}

            placeholder="Short description"

            className="
              w-full
              px-4
              py-2
              rounded-lg
              border
              dark:bg-gray-900
              dark:border-gray-700
            "

          />


        </div>






        <div>

          <label
            className="
              block
              mb-2
              text-sm
              font-medium
            "
          >
            Description
          </label>


          <textarea

            rows={5}

            name="description"

            value={form.description}

            onChange={handleChange}

            placeholder="Full description"

            className="
              w-full
              px-4
              py-2
              rounded-lg
              border
              dark:bg-gray-900
              dark:border-gray-700
            "

          />


        </div>






        <div>

          <label
            className="
              block
              mb-2
              text-sm
              font-medium
            "
          >
            Icon
          </label>


          <input

            type="text"

            name="icon"

            value={form.icon ?? ""}

            onChange={handleChange}

            placeholder="icon name / url"

            className="
              w-full
              px-4
              py-2
              rounded-lg
              border
              dark:bg-gray-900
              dark:border-gray-700
            "

          />


        </div>







        <div>

          <label
            className="
              block
              mb-2
              text-sm
              font-medium
            "
          >
            Thumbnail
          </label>


          <input

            type="text"

            name="thumbnail"

            value={form.thumbnail ?? ""}

            onChange={handleChange}

            placeholder="thumbnail url"

            className="
              w-full
              px-4
              py-2
              rounded-lg
              border
              dark:bg-gray-900
              dark:border-gray-700
            "

          />


        </div>






        <div>

          <label
            className="
              block
              mb-2
              text-sm
              font-medium
            "
          >
            Order
          </label>


          <input

            type="number"

            name="order"

            value={form.order ?? 0}

            onChange={handleChange}

            className="
              w-full
              px-4
              py-2
              rounded-lg
              border
              dark:bg-gray-900
              dark:border-gray-700
            "

          />


        </div>






        <div>

          <label
            className="
              block
              mb-2
              text-sm
              font-medium
            "
          >
            Status
          </label>


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
              rounded-lg
              border
              dark:bg-gray-900
              dark:border-gray-700
            "

          >

            <option value="true">
              Active
            </option>


            <option value="false">
              Inactive
            </option>


          </select>


        </div>







        <button

          disabled={loading}

          className="
            bg-blue-600
            text-white
            px-6
            py-2
            rounded-lg
            hover:bg-blue-700
          "

        >

          {
            loading
            ? "Saving..."
            : "Create Service"
          }

        </button>



      </form>


    </div>

  );


};


export default CreateService;