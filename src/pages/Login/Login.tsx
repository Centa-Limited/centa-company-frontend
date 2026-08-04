import React, { useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import { login as loginService } from "../../services/auth.service";

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);

  const [isForgotOpen, setIsForgotOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      toast.error("Isi semua kolom!");
      return;
    }

    try {
      const response = await loginService({
        email,
        password,
      });

      login(
        response.data.token,
        response.data.user
      );

      toast.success(
        `Selamat datang, ${response.data.user.name}!`
      );

      navigate("/dashboard");
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ??
          "Email atau password salah."
      );
    }
  };

  const handleForgotPassword = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!forgotEmail.trim()) {
      toast.error("Harap masukkan email.");
      return;
    }

    toast(
      "Fitur reset password belum tersedia.",
      {
        icon: "ℹ️",
      }
    );

    setForgotEmail("");
    setIsForgotOpen(false);
  };

  return (
  <div
    className="
      fixed
      inset-0
      min-h-screen
      bg-gradient-to-br
      from-gray-950
      via-slate-900
      to-black
      flex
      items-center
      justify-center
      p-6
      z-[1000]
    "
  >

    <div
      className="
        w-full
        max-w-[420px]
        bg-white/10
        backdrop-blur-xl
        border
        border-white/10
        rounded-3xl
        p-8
        shadow-2xl
      "
    >


      <button
        type="button"
        onClick={() => navigate("/")}
        className="
          flex
          items-center
          gap-2
          text-sm
          text-gray-400
          hover:text-blue-400
          transition
          mb-8
        "
      >
        <ArrowLeft size={16}/>
        Kembali ke Beranda
      </button>



      <div className="text-center mb-10">

        <h1
          className="
            text-4xl
            font-black
            tracking-wide
            text-white
          "
        >
          CENTA{" "}
          <span
            className="
              bg-gradient-to-r
              from-blue-400
              to-purple-500
              bg-clip-text
              text-transparent
            "
          >
            LIMITED
          </span>
        </h1>


        <p
          className="
            text-gray-400
            mt-3
            text-sm
          "
        >
          Secure Admin Dashboard
        </p>


      </div>




      <form
        onSubmit={handleLogin}
        className="
          flex
          flex-col
          gap-5
        "
      >


        <div>

          <label
            className="
              text-xs
              font-semibold
              text-gray-300
            "
          >
            Email
          </label>


          <input
            type="email"
            value={email}
            onChange={(e)=>
              setEmail(e.target.value)
            }
            placeholder="admin@centa.local"
            className="
              mt-2
              w-full
              px-4
              py-3
              rounded-xl
              bg-black/40
              border
              border-white/10
              text-white
              placeholder-gray-500
              outline-none
              focus:border-blue-500
              transition
            "
            required
          />

        </div>





        <div>

          <label
            className="
              text-xs
              font-semibold
              text-gray-300
            "
          >
            Password
          </label>


          <input
            type="password"
            value={password}
            onChange={(e)=>
              setPassword(e.target.value)
            }
            placeholder="Masukkan password"
            className="
              mt-2
              w-full
              px-4
              py-3
              rounded-xl
              bg-black/40
              border
              border-white/10
              text-white
              placeholder-gray-500
              outline-none
              focus:border-blue-500
              transition
            "
            required
          />


        </div>





        <div
          className="
            flex
            justify-between
            items-center
            text-xs
          "
        >

          <label
            className="
              flex
              items-center
              gap-2
              text-gray-400
            "
          >

            <input
              type="checkbox"
              checked={remember}
              onChange={(e)=>
                setRemember(
                  e.target.checked
                )
              }
            />

            Ingat saya

          </label>




          <button
            type="button"
            onClick={()=>
              setIsForgotOpen(true)
            }
            className="
              text-blue-400
              hover:text-blue-300
            "
          >
            Lupa password?
          </button>


        </div>





        <button
          type="submit"
          className="
            mt-3
            w-full
            py-3.5
            rounded-xl
            font-semibold
            text-white
            bg-gradient-to-r
            from-blue-600
            to-purple-600
            hover:from-blue-500
            hover:to-purple-500
            shadow-lg
            shadow-blue-900/40
            transition
          "
        >
          Login
        </button>



      </form>


    </div>




    {isForgotOpen && (

      <div
        className="
          fixed
          inset-0
          bg-black/70
          backdrop-blur-sm
          flex
          items-center
          justify-center
          p-4
        "
      >

        <div
          className="
            bg-gray-900
            border
            border-white/10
            rounded-2xl
            p-8
            max-w-md
            w-full
          "
        >

          <button
            onClick={()=>
              setIsForgotOpen(false)
            }
            className="
              float-right
              text-gray-400
              hover:text-white
            "
          >
            <X size={18}/>
          </button>



          <h2
            className="
              text-xl
              font-bold
              text-white
              mb-5
            "
          >
            Reset Password
          </h2>



          <form
            onSubmit={handleForgotPassword}
            className="
              flex
              flex-col
              gap-4
            "
          >

            <input
              type="email"
              value={forgotEmail}
              onChange={(e)=>
                setForgotEmail(
                  e.target.value
                )
              }
              placeholder="admin@centa.local"
              className="
                px-4
                py-3
                rounded-xl
                bg-black/40
                border
                border-white/10
                text-white
                outline-none
              "
              required
            />


            <button
              className="
                bg-blue-600
                hover:bg-blue-500
                text-white
                py-3
                rounded-xl
                font-semibold
              "
            >
              Kirim Link Reset
            </button>


          </form>


        </div>


      </div>

    )}

  </div>
);
}