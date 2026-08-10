import { useEffect, useState } from "react";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  X,
  ShieldCheck,
  UserPlus,
} from "lucide-react";
import toast from "react-hot-toast";

import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../../services/user.service";

import type {
  User,
  UserPayload,
  Role,
  Pagination,
} from "../../types/user";

const DashboardUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [pagination, setPagination] =
    useState<Pagination | null>(null);

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const [modalOpen, setModalOpen] =
    useState(false);

  const [editingUser, setEditingUser] =
    useState<User | null>(null);

  const [saving, setSaving] = useState(false);

  const [form, setForm] =
    useState<UserPayload>({
      name: "",
      email: "",
      password: "",
      role: "ADMIN",
    });

  const loadUsers = async () => {
    try {
      setLoading(true);

      const response =
        await getUsers({
          page: 1,
          limit: 20,
          search: search || undefined,
        });

      setUsers(response.data ?? []);
      setPagination(
        response.pagination ?? null
      );
    } catch (error: any) {
      console.error(
        "LOAD USERS ERROR:",
        error
      );

      toast.error(
        error?.response?.data?.message ??
          "Gagal memuat pengguna."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, [search]);

  const openCreateModal = () => {
    setEditingUser(null);

    setForm({
      name: "",
      email: "",
      password: "",
      role: "ADMIN",
    });

    setModalOpen(true);
  };

  const openEditModal = (user: User) => {
    setEditingUser(user);

    setForm({
      name: user.name,
      email: user.email,
      password: "",
      role: user.role,
    });

    setModalOpen(true);
  };

  const closeModal = () => {
    if (saving) return;

    setModalOpen(false);
    setEditingUser(null);
  };

  const handleChange = (
    field: keyof UserPayload,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!form.name.trim()) {
      toast.error("Nama wajib diisi.");
      return;
    }

    if (!form.email.trim()) {
      toast.error("Email wajib diisi.");
      return;
    }

    if (
      !editingUser &&
      !form.password?.trim()
    ) {
      toast.error(
        "Password wajib diisi untuk user baru."
      );
      return;
    }

    try {
      setSaving(true);

      if (editingUser) {
        const payload: UserPayload = {
          name: form.name,
          email: form.email,
          role: form.role,
        };

        if (form.password?.trim()) {
          payload.password = form.password;
        }

        await updateUser(
          editingUser.id,
          payload
        );

        toast.success(
          "Pengguna berhasil diperbarui."
        );
      } else {
        await createUser({
          name: form.name,
          email: form.email,
          password: form.password,
          role: form.role,
        });

        toast.success(
          "Pengguna berhasil ditambahkan."
        );
      }

      closeModal();
      await loadUsers();
    } catch (error: any) {
      console.error(
        "SAVE USER ERROR:",
        error
      );

      toast.error(
        error?.response?.data?.message ??
          "Gagal menyimpan pengguna."
      );
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (
    user: User
  ) => {
    const confirmed = window.confirm(
      `Hapus pengguna "${user.name}"?`
    );

    if (!confirmed) return;

    try {
      await deleteUser(user.id);

      toast.success(
        "Pengguna berhasil dihapus."
      );

      await loadUsers();
    } catch (error: any) {
      console.error(
        "DELETE USER ERROR:",
        error
      );

      toast.error(
        error?.response?.data?.message ??
          "Gagal menghapus pengguna."
      );
    }
  };

  return (
    <>
      {/* HEADER */}

      <section className="space-y-6">

        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-4
          "
        >
          <div>
            <p
              className="
                text-xs
                font-medium
                text-indigo-500
                dark:text-indigo-400
              "
            >
              CMS Management
            </p>

            <h2
              className="
                mt-1
                text-2xl
                md:text-3xl
                font-bold
                text-slate-900
                dark:text-white
              "
            >
              Pengguna
            </h2>

            <p
              className="
                mt-2
                text-sm
                text-slate-500
                dark:text-slate-400
              "
            >
              Kelola akun administrator
              Centa Limited.
            </p>
          </div>

          <button
            type="button"
            onClick={openCreateModal}
            className="
              flex
              items-center
              justify-center
              gap-2
              px-4
              py-2.5
              rounded-xl
              bg-indigo-600
              hover:bg-indigo-500
              text-white
              text-xs
              font-semibold
              transition
            "
          >
            <Plus size={15} />
            Tambah Pengguna
          </button>
        </div>


        {/* SEARCH */}

        <div
          className="
            flex
            items-center
            gap-3
            bg-white/80
            dark:bg-slate-900/80
            border
            border-slate-200
            dark:border-slate-800
            rounded-xl
            px-4
            py-3
          "
        >
          <Search
            size={16}
            className="
              text-slate-400
              shrink-0
            "
          />

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Cari nama atau email..."
            className="
              w-full
              bg-transparent
              outline-none
              text-sm
              text-slate-900
              dark:text-white
              placeholder:text-slate-400
            "
          />
        </div>


        {/* TABLE */}

        <div
          className="
            overflow-hidden
            rounded-2xl
            bg-white/80
            dark:bg-slate-900/80
            border
            border-slate-200/70
            dark:border-slate-800
          "
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">

              <thead>
                <tr
                  className="
                    bg-slate-50
                    dark:bg-slate-950
                    border-b
                    border-slate-200
                    dark:border-slate-800
                  "
                >
                  <th className="px-5 py-4 font-semibold">
                    Pengguna
                  </th>

                  <th className="px-5 py-4 font-semibold">
                    Email
                  </th>

                  <th className="px-5 py-4 font-semibold">
                    Role
                  </th>

                  <th className="px-5 py-4 font-semibold">
                    Dibuat
                  </th>

                  <th className="px-5 py-4 font-semibold text-right">
                    Aksi
                  </th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="
                        px-5
                        py-12
                        text-center
                        text-slate-500
                      "
                    >
                      Memuat pengguna...
                    </td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="
                        px-5
                        py-12
                        text-center
                        text-slate-500
                      "
                    >
                      Tidak ada pengguna.
                    </td>
                  </tr>
                ) : (
                  users.map((item) => (
                    <tr
                      key={item.id}
                      className="
                        border-b
                        border-slate-100
                        dark:border-slate-800/70
                        hover:bg-slate-50
                        dark:hover:bg-slate-800/40
                        transition
                      "
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">

                          <div
                            className="
                              w-9
                              h-9
                              rounded-full
                              bg-indigo-500/10
                              text-indigo-500
                              flex
                              items-center
                              justify-center
                              shrink-0
                            "
                          >
                            <UserPlus size={15} />
                          </div>

                          <div>
                            <p
                              className="
                                font-semibold
                                text-slate-900
                                dark:text-white
                              "
                            >
                              {item.name}
                            </p>

                            <p
                              className="
                                text-[10px]
                                text-slate-400
                              "
                            >
                              ID: {item.id.slice(0, 8)}
                            </p>
                          </div>

                        </div>
                      </td>

                      <td
                        className="
                          px-5
                          py-4
                          text-slate-600
                          dark:text-slate-300
                        "
                      >
                        {item.email}
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`
                            inline-flex
                            items-center
                            gap-1.5
                            px-2.5
                            py-1
                            rounded-full
                            text-[10px]
                            font-bold
                            ${
                              item.role ===
                              "SUPER_ADMIN"
                                ? `
                                  bg-red-500/10
                                  text-red-500
                                `
                                : `
                                  bg-indigo-500/10
                                  text-indigo-500
                                `
                            }
                          `}
                        >
                          <ShieldCheck size={11} />

                          {item.role ===
                          "SUPER_ADMIN"
                            ? "SUPER ADMIN"
                            : "ADMIN"}
                        </span>
                      </td>

                      <td
                        className="
                          px-5
                          py-4
                          text-slate-500
                          dark:text-slate-400
                          whitespace-nowrap
                        "
                      >
                        {new Date(
                          item.createdAt
                        ).toLocaleString(
                          "id-ID"
                        )}
                      </td>

                      <td className="px-5 py-4">
                        <div
                          className="
                            flex
                            justify-end
                            gap-2
                          "
                        >
                          <button
                            type="button"
                            onClick={() =>
                              openEditModal(item)
                            }
                            className="
                              w-8
                              h-8
                              rounded-lg
                              flex
                              items-center
                              justify-center
                              text-indigo-500
                              hover:bg-indigo-500/10
                              transition
                            "
                            title="Edit"
                          >
                            <Pencil size={14} />
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              handleDelete(item)
                            }
                            className="
                              w-8
                              h-8
                              rounded-lg
                              flex
                              items-center
                              justify-center
                              text-red-500
                              hover:bg-red-500/10
                              transition
                            "
                            title="Hapus"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>

            </table>
          </div>

          {pagination && (
            <div
              className="
                px-5
                py-4
                border-t
                border-slate-200
                dark:border-slate-800
                text-xs
                text-slate-500
              "
            >
              Total {pagination.total} pengguna
            </div>
          )}
        </div>

      </section>


      {/* MODAL */}

      {modalOpen && (
        <div
          className="
            fixed
            inset-0
            z-[10000]
            flex
            items-center
            justify-center
            p-4
            bg-black/60
            backdrop-blur-sm
          "
        >
          <div
            className="
              w-full
              max-w-lg
              rounded-2xl
              bg-white
              dark:bg-slate-900
              border
              border-slate-200
              dark:border-slate-800
              shadow-2xl
            "
          >

            {/* Modal Header */}

            <div
              className="
                flex
                items-center
                justify-between
                px-6
                py-5
                border-b
                border-slate-200
                dark:border-slate-800
              "
            >
              <div>
                <h3
                  className="
                    text-lg
                    font-bold
                    text-slate-900
                    dark:text-white
                  "
                >
                  {editingUser
                    ? "Edit Pengguna"
                    : "Tambah Pengguna"}
                </h3>

                <p
                  className="
                    mt-1
                    text-xs
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  {editingUser
                    ? "Perbarui informasi akun."
                    : "Buat akun administrator baru."}
                </p>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="
                  w-8
                  h-8
                  rounded-lg
                  flex
                  items-center
                  justify-center
                  text-slate-500
                  hover:bg-slate-100
                  dark:hover:bg-slate-800
                "
              >
                <X size={16} />
              </button>
            </div>


            {/* Form */}

            <form
              onSubmit={handleSubmit}
              className="p-6 space-y-5"
            >

              {/* Name */}

              <div className="space-y-2">
                <label className="
                  text-xs
                  font-semibold
                  text-slate-900
                  dark:text-white
                ">
                  Nama Lengkap
                </label>

                <input
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    handleChange(
                      "name",
                      e.target.value
                    )
                  }
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    bg-slate-50
                    dark:bg-slate-950
                    border
                    border-slate-200
                    dark:border-slate-800
                    outline-none
                    focus:border-indigo-500
                    text-sm
                    text-slate-900
                    dark:text-white
                  "
                  placeholder="Nama administrator"
                />
              </div>


              {/* Email */}

              <div className="space-y-2">
                <label className="
                  text-xs
                  font-semibold
                  text-slate-900
                  dark:text-white
                ">
                  Email
                </label>

                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    handleChange(
                      "email",
                      e.target.value
                    )
                  }
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    bg-slate-50
                    dark:bg-slate-950
                    border
                    border-slate-200
                    dark:border-slate-800
                    outline-none
                    focus:border-indigo-500
                    text-sm
                    text-slate-900
                    dark:text-white
                  "
                  placeholder="admin@centa.ltd"
                />
              </div>


              {/* Password */}

              <div className="space-y-2">
                <label className="
                  text-xs
                  font-semibold
                  text-slate-900
                  dark:text-white
                ">
                  Password
                </label>

                <input
                  type="password"
                  value={form.password ?? ""}
                  onChange={(e) =>
                    handleChange(
                      "password",
                      e.target.value
                    )
                  }
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    bg-slate-50
                    dark:bg-slate-950
                    border
                    border-slate-200
                    dark:border-slate-800
                    outline-none
                    focus:border-indigo-500
                    text-sm
                    text-slate-900
                    dark:text-white
                  "
                  placeholder={
                    editingUser
                      ? "Kosongkan jika tidak diubah"
                      : "Password"
                  }
                />
              </div>


              {/* Role */}

              <div className="space-y-2">
                <label className="
                  text-xs
                  font-semibold
                  text-slate-900
                  dark:text-white
                ">
                  Role
                </label>

                <select
                  value={form.role}
                  onChange={(e) =>
                    handleChange(
                      "role",
                      e.target.value as Role
                    )
                  }
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    bg-slate-50
                    dark:bg-slate-950
                    border
                    border-slate-200
                    dark:border-slate-800
                    outline-none
                    focus:border-indigo-500
                    text-sm
                    text-slate-900
                    dark:text-white
                  "
                >
                  <option value="ADMIN">
                    Administrator
                  </option>

                  <option value="SUPER_ADMIN">
                    Super Administrator
                  </option>
                </select>
              </div>


              {/* Actions */}

              <div
                className="
                  flex
                  justify-end
                  gap-3
                  pt-2
                "
              >
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={saving}
                  className="
                    px-4
                    py-2.5
                    rounded-xl
                    border
                    border-slate-200
                    dark:border-slate-700
                    text-xs
                    font-semibold
                    text-slate-600
                    dark:text-slate-300
                    hover:bg-slate-100
                    dark:hover:bg-slate-800
                  "
                >
                  Batal
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="
                    px-4
                    py-2.5
                    rounded-xl
                    bg-indigo-600
                    hover:bg-indigo-500
                    disabled:opacity-50
                    text-white
                    text-xs
                    font-semibold
                  "
                >
                  {saving
                    ? "Menyimpan..."
                    : editingUser
                    ? "Simpan Perubahan"
                    : "Tambah Pengguna"}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardUsers;
