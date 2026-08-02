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
    <div className="fixed inset-0 bg-white z-[1000] flex items-center justify-center p-6 min-h-screen">
      <div className="max-w-[420px] w-full bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl border border-gray-100 animate-fadeUp">

        <button
          type="button"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 mb-6 transition-colors"
        >
          <ArrowLeft size={16} />
          Kembali ke Beranda
        </button>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            CENTA{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              LIMITED
            </span>
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Login Admin
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-700">
              Alamat Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="admin@centa.local"
              className="text-sm px-4 py-3 border border-gray-200 rounded-xl outline-none bg-gray-50 text-slate-900"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-700">
              Kata Sandi
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Masukkan kata sandi"
              className="text-sm px-4 py-3 border border-gray-200 rounded-xl outline-none bg-gray-50 text-slate-900"
              required
            />
          </div>

          <div className="flex justify-between items-center text-xs">
            <label className="flex items-center gap-2 text-gray-500 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) =>
                  setRemember(e.target.checked)
                }
              />

              Ingat saya
            </label>

            <button
              type="button"
              onClick={() =>
                setIsForgotOpen(true)
              }
              className="text-blue-600 font-medium hover:underline"
            >
              Lupa kata sandi?
            </button>
          </div>

          <button
            type="submit"
            className="w-full text-sm font-semibold text-white bg-blue-600 hover:bg-indigo-600 py-3.5 rounded-full transition"
          >
            Masuk
          </button>
        </form>
      </div>

      {isForgotOpen && (
        <div className="fixed inset-0 bg-black/50 z-[1100] flex items-center justify-center p-4">
          <div className="bg-white max-w-[440px] w-full rounded-2xl p-8 relative">
            <button
              type="button"
              onClick={() =>
                setIsForgotOpen(false)
              }
              className="absolute top-4 right-4"
            >
              <X size={18} />
            </button>

            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Lupa Kata Sandi
            </h2>

            <form
              onSubmit={handleForgotPassword}
              className="flex flex-col gap-4"
            >
              <input
                type="email"
                value={forgotEmail}
                onChange={(e) =>
                  setForgotEmail(
                    e.target.value
                  )
                }
                placeholder="admin@centa.local"
                className="px-4 py-3 border rounded-xl"
                required
              />

              <button
                type="submit"
                className="bg-blue-600 text-white py-3 rounded-full"
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