import React, { useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';

interface LoginProps {
  onLoginSuccess: (user: any) => void;
  showToast: (type: 'success' | 'error' | 'info', message: string) => void;
}

const USERS_KEY = 'centa_users';
const SESSION_KEY = 'centa_session';

export const Login: React.FC<LoginProps> = ({ onLoginSuccess, showToast }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  
  // Forgot Password Modal State
  const [isForgotOpen, setIsForgotOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');

  const getUsers = () => {
    const data = localStorage.getItem(USERS_KEY);
    if (!data) {
      const defaultUser = [
        { id: 1, name: 'Administrator', email: 'admin@centa.com', password: 'admin123', role: 'admin' }
      ];
      localStorage.setItem(USERS_KEY, JSON.stringify(defaultUser));
      return defaultUser;
    }
    return JSON.parse(data);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      showToast('error', 'Isi semua kolom!');
      return;
    }

    const users = getUsers();
    const user = users.find((u: any) => u.email === email && u.password === password);

    if (!user) {
      showToast('error', 'Email atau password salah!');
      return;
    }

    if (user.role !== 'admin') {
      showToast('error', 'Hanya admin yang bisa login!');
      return;
    }

    const sessionData = { userId: user.id, name: user.name, email: user.email, role: user.role };
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));

    showToast('success', `Selamat datang, ${user.name}!`);
    onLoginSuccess(sessionData);
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotEmail.trim()) {
      showToast('error', 'Harap masukkan email!');
      return;
    }

    const users = getUsers();
    const found = users.some((u: any) => u.email === forgotEmail.trim());

    if (!found) {
      showToast('error', 'Email tidak terdaftar!');
      return;
    }

    showToast('success', `📧 Link reset telah dikirim ke ${forgotEmail}`);
    setIsForgotOpen(false);
    setForgotEmail('');
  };

  return (
    <div className="fixed inset-0 bg-white z-[1000] flex items-center justify-center p-6 min-h-screen">
      <div className="max-w-[420px] w-full bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl border border-gray-100 animate-fadeUp">
        <button className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 mb-6 transition-colors">
          <ArrowLeft size={16} /> Kembali ke Beranda
        </button>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            CENTA <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">LIMITED</span>
          </h1>
          <p className="text-sm text-gray-500 mt-1">Login Admin</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-700">Alamat Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@centa.com"
              className="text-sm px-4 py-3 border border-gray-200 rounded-xl outline-none bg-gray-50 text-slate-900 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 transition-all"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-700">Kata Sandi</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan kata sandi"
              className="text-sm px-4 py-3 border border-gray-200 rounded-xl outline-none bg-gray-50 text-slate-900 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 transition-all"
              required
            />
          </div>

          <div className="flex justify-between items-center text-xs">
            <label className="flex items-center gap-2 text-gray-500 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4.5 h-4.5 accent-blue-600 rounded cursor-pointer"
              />
              Ingat saya
            </label>
            <button
              type="button"
              onClick={() => setIsForgotOpen(true)}
              className="text-blue-600 font-medium hover:underline hover:text-indigo-600"
            >
              Lupa kata sandi?
            </button>
          </div>

          <button
            type="submit"
            className="w-full text-sm font-semibold text-white bg-blue-600 hover:bg-indigo-600 py-3.5 rounded-full shadow-lg shadow-blue-600/20 transition-all mt-2"
          >
            Masuk
          </button>
        </form>
      </div>

      {/* Modal Lupa Password */}
      {isForgotOpen && (
        <div className="fixed inset-0 bg-black/50 z-[1100] flex items-center justify-center p-4">
          <div className="bg-white max-w-[440px] w-full rounded-2xl p-8 relative animate-scaleUp shadow-2xl">
            <button
              onClick={() => setIsForgotOpen(false)}
              className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-600 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            >
              <X size={18} />
            </button>

            <h2 className="text-xl font-bold text-slate-900 mb-1">Lupa Kata Sandi</h2>
            <p className="text-xs text-gray-500 leading-relaxed mb-6">
              Masukkan alamat Email Anda, kami akan mengirimkan link untuk mereset kata sandi.
            </p>

            <form onSubmit={handleForgotPassword} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-700">Alamat Email</label>
                <input
                  type="email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  placeholder="admin@centa.com"
                  className="text-sm px-4 py-3 border border-gray-200 rounded-xl outline-none bg-gray-50 text-slate-900 focus:border-blue-600 focus:bg-white transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-sm font-semibold text-white bg-blue-600 hover:bg-indigo-600 py-3 rounded-full shadow-lg shadow-blue-600/20 transition-all mt-2"
              >
                Kirim Link Reset
              </button>

              <button
                type="button"
                onClick={() => setIsForgotOpen(false)}
                className="text-xs font-medium text-gray-500 hover:text-blue-600 transition-colors py-2"
              >
                ← Kembali ke Login
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};