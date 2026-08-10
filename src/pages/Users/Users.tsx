import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


import {
  getUsers,
  deleteUser,
} from "../../services/user.service";

import type { User } from "../../types/user";

import { useAuth } from "../../context/AuthContext";

const Users = () => {
  const navigate = useNavigate();
  const { user: currentUser } = useAuth();

  const { user, logout } = useAuth();

  const [users, setUsers] = useState<User[]>([]);

  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 0,
  });

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");

  const [debouncedSearch, setDebouncedSearch] = useState("");
  useEffect(() => {
  if (
    currentUser &&
    currentUser.role !== "SUPER_ADMIN"
  ) {
    toast.error("Akses hanya untuk SUPER_ADMIN");
    navigate("/dashboard");
  }
}, [currentUser, navigate]);

  // =========================================================
  // LOAD USERS
  // =========================================================

  const loadUsers = async () => {
    try {
      setLoading(true);

      const response = await getUsers({
        page,
        limit: pagination.limit,
        search: debouncedSearch || undefined,
      });

      setUsers(response.data);

      setPagination(response.pagination);
    } catch (error: any) {
      const status = error?.response?.status;

      if (status === 401) {
        toast.error("Sesi login telah berakhir");

        logout();

        navigate("/login");

        return;
      }

      if (status === 403) {
        toast.error(
          "Anda tidak memiliki akses ke User Management"
        );

        navigate("/dashboard");

        return;
      }

      toast.error(
        error?.response?.data?.message ??
          "Gagal memuat user"
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // DELETE USER
  // =========================================================

  const handleDelete = async (id: string) => {
    // Jangan izinkan menghapus akun sendiri
    if (user?.id === id) {
      toast.error(
        "Anda tidak dapat menghapus akun sendiri"
      );

      return;
    }

    const confirmDelete = window.confirm(
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

      // Jika item terakhir di halaman ini
      // dan masih ada halaman sebelumnya
      if (
        users.length === 1 &&
        page > 1
      ) {
        setPage((prev) => prev - 1);

        return;
      }

      await loadUsers();
    } catch (error: any) {
      const status = error?.response?.status;

      if (status === 401) {
        toast.error(
          "Sesi login telah berakhir"
        );

        logout();

        navigate("/login");

        return;
      }

      if (status === 403) {
        toast.error(
          "Anda tidak memiliki izin menghapus user"
        );

        return;
      }

      toast.error(
        error?.response?.data?.message ??
          "Gagal menghapus user"
      );
    }
  };

  // =========================================================
  // PAGINATION / SEARCH
  // =========================================================

  useEffect(() => {
    loadUsers();
  }, [
    page,
    debouncedSearch,
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  // =========================================================
  // ACCESS GUARD
  // =========================================================

  if (user?.role !== "SUPER_ADMIN") {
    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-slate-950
          text-white
          p-8
        "
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold">
            Access Denied
          </h1>

          <p className="mt-2 text-slate-400">
            Hanya SUPER_ADMIN yang dapat
            mengakses User Management.
          </p>

          <button
            type="button"
            onClick={() =>
              navigate("/dashboard")
            }
            className="
              mt-6
              px-5
              py-2.5
              rounded-xl
              bg-blue-600
              hover:bg-blue-700
              transition
              text-white
              font-semibold
            "
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  // =========================================================
  // LOADING
  // =========================================================

  if (!currentUser) {
  return null;
}

if (currentUser.role !== "SUPER_ADMIN") {
  return null;
}
  
  if (loading) {
    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-slate-950
        "
      >
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

  // =========================================================
  // UI
  // =========================================================

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

      {/* HEADER */}

      <div
        className="
          flex
          items-center
          justify-between
          mb-6
        "
      >
        <div>
          <h1
            className="
              text-3xl
              font-bold
            "
          >
            User Management
          </h1>

          <p
            className="
              mt-2
              text-slate-500
              dark:text-slate-400
            "
          >
            Total Admin : {pagination.total}
          </p>
        </div>

        <button
          type="button"
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

      {/* SEARCH */}

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search user..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="
            w-full
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

      {/* TABLE */}

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
        <div className="overflow-x-auto">
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
              {users.length === 0 ? (
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
                users.map((item) => {
                  const isCurrentUser =
                    user?.id === item.id;

                  return (
                    <tr
                      key={item.id}
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

                      {/* NAME */}

                      <td
                        className="
                          p-4
                          font-semibold
                        "
                      >
                        <div>
                          {item.name}
                        </div>

                        {isCurrentUser && (
                          <span
                            className="
                              inline-block
                              mt-1
                              text-xs
                              text-blue-500
                            "
                          >
                            Current Account
                          </span>
                        )}
                      </td>

                      {/* EMAIL */}

                      <td className="p-4">
                        {item.email}
                      </td>

                      {/* ROLE */}

                      <td className="p-4">
                        <span
                          className={`
                            px-3
                            py-1
                            rounded-full
                            text-sm
                            font-semibold

                            ${
                              item.role ===
                              "SUPER_ADMIN"
                                ? `
                                  bg-purple-100
                                  text-purple-700
                                  dark:bg-purple-900
                                  dark:text-purple-300
                                `
                                : `
                                  bg-blue-100
                                  text-blue-700
                                  dark:bg-blue-900
                                  dark:text-blue-300
                                `
                            }
                          `}
                        >
                          {item.role}
                        </span>
                      </td>

                      {/* CREATED */}

                      <td
                        className="
                          p-4
                          text-gray-500
                          dark:text-gray-400
                        "
                      >
                        {new Date(
                          item.createdAt
                        ).toLocaleDateString()}
                      </td>

                  
{/* ACTION */}

<td className="p-4">
  <div className="flex items-center gap-3">

    {/* EDIT */}

    <button
      type="button"
      onClick={() =>
        navigate(
          `/dashboard/users/${item.id}/edit`
        )
      }
      className="
        text-blue-600
        dark:text-blue-400
        hover:underline
      "
    >
      Edit
    </button>

    {/* DELETE */}

    {!isCurrentUser ? (
      <button
        type="button"
        onClick={() =>
          handleDelete(item.id)
        }
        className="
          text-red-600
          dark:text-red-400
          hover:underline
        "
      >
        Delete
      </button>
    ) : (
      <span
        className="
          text-xs
          text-slate-400
        "
      >
        Cannot delete
      </span>
    )}

  </div>
</td>


                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}

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
            type="button"
            disabled={page === 1}
            onClick={() =>
              setPage(
                (prev) => prev - 1
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
            Previous
          </button>

          <span
            className="
              text-sm
              text-gray-600
              dark:text-gray-400
            "
          >
            Page {page} of{" "}
            {pagination.totalPages}
          </span>

          <button
            type="button"
            disabled={
              page >=
              pagination.totalPages
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
