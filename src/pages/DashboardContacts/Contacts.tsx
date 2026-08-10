import { useEffect, useState } from "react";
import {
  Mail,
  Trash2,
  RefreshCw,
  Eye,
  X,
} from "lucide-react";
import toast from "react-hot-toast";

import {
  getAllContactMessages,
  deleteContactMessage,
} from "../../services/contact.service";

import type {
  ContactMessage,
} from "../../types/contact";

const Contacts = () => {
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedContact, setSelectedContact] =
    useState<ContactMessage | null>(null);

  const loadContacts = async () => {
    try {
      setLoading(true);

      const response =
        await getAllContactMessages();

      if (!response.success) {
        throw new Error(
          "Gagal mengambil pesan contact."
        );
      }

      setContacts(response.data);
    } catch (error: any) {
      console.error(
        "GET CONTACT ERROR:",
        error
      );

      toast.error(
        error?.response?.data?.message ??
          error?.message ??
          "Gagal memuat pesan contact."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const handleDelete = async (
    id: number
  ) => {
    const confirmed = window.confirm(
      "Yakin ingin menghapus pesan ini?"
    );

    if (!confirmed) return;

    try {
      await deleteContactMessage(id);

      setContacts((prev) =>
        prev.filter(
          (contact) => contact.id !== id
        )
      );

      toast.success(
        "Pesan berhasil dihapus."
      );
    } catch (error: any) {
      console.error(
        "DELETE CONTACT ERROR:",
        error
      );

      toast.error(
        error?.response?.data?.message ??
          "Gagal menghapus pesan."
      );
    }
  };

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex items-center justify-between gap-4">

        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Contact Messages
          </h1>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Kelola pesan yang dikirim melalui website.
          </p>
        </div>

        <button
          type="button"
          onClick={loadContacts}
          disabled={loading}
          className="
            flex
            items-center
            gap-2
            px-4
            py-2
            rounded-xl
            bg-indigo-600
            hover:bg-indigo-500
            disabled:opacity-50
            text-white
            text-sm
            font-semibold
            transition
          "
        >
          <RefreshCw
            size={15}
            className={
              loading
                ? "animate-spin"
                : ""
            }
          />

          Refresh
        </button>

      </div>


      {/* STAT */}
      <div
        className="
          rounded-2xl
          bg-white/80
          dark:bg-slate-900/80
          backdrop-blur-xl
          border
          border-slate-200/70
          dark:border-slate-800
          p-5
          flex
          items-center
          gap-4
        "
      >

        <div
          className="
            w-11
            h-11
            rounded-xl
            bg-rose-500/10
            text-rose-500
            flex
            items-center
            justify-center
          "
        >
          <Mail size={20} />
        </div>

        <div>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">
            {contacts.length}
          </p>

          <p className="text-xs text-slate-500 dark:text-slate-400">
            Total pesan masuk
          </p>
        </div>

      </div>


      {/* TABLE */}
      <div
        className="
          rounded-2xl
          bg-white/80
          dark:bg-slate-900/80
          backdrop-blur-xl
          border
          border-slate-200/70
          dark:border-slate-800
          overflow-hidden
        "
      >

        <div className="overflow-x-auto">

          <table className="w-full text-left">

            <thead>
              <tr
                className="
                  border-b
                  border-slate-200
                  dark:border-slate-800
                  text-xs
                  text-slate-500
                  dark:text-slate-400
                "
              >

                <th className="px-6 py-4 font-semibold">
                  Pengirim
                </th>

                <th className="px-6 py-4 font-semibold">
                  Subject
                </th>

                <th className="px-6 py-4 font-semibold">
                  Pesan
                </th>

                <th className="px-6 py-4 font-semibold">
                  Tanggal
                </th>

                <th className="px-6 py-4 font-semibold text-right">
                  Action
                </th>

              </tr>
            </thead>


            <tbody>

              {loading ? (
                <tr>
                  <td
                    colSpan={5}
                    className="
                      px-6
                      py-12
                      text-center
                      text-sm
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    Memuat pesan...
                  </td>
                </tr>
              ) : contacts.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="
                      px-6
                      py-12
                      text-center
                      text-sm
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    Belum ada pesan contact.
                  </td>
                </tr>
              ) : (
                contacts.map((contact) => (

                  <tr
                    key={contact.id}
                    className="
                      border-b
                      border-slate-100
                      dark:border-slate-800
                      hover:bg-slate-50
                      dark:hover:bg-slate-800/40
                      transition
                    "
                  >

                    {/* SENDER */}
                    <td className="px-6 py-4">

                      <div className="font-semibold text-sm text-slate-900 dark:text-white">
                        {contact.name}
                      </div>

                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {contact.email}
                      </div>

                    </td>


                    {/* SUBJECT */}
                    <td className="px-6 py-4">

                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        {contact.subject ||
                          "Tanpa subject"}
                      </span>

                    </td>


                    {/* MESSAGE */}
                    <td className="px-6 py-4 max-w-xs">

                      <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                        {contact.message}
                      </p>

                    </td>


                    {/* DATE */}
                    <td className="px-6 py-4">

                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {new Date(
                          contact.createdAt
                        ).toLocaleString(
                          "id-ID"
                        )}
                      </span>

                    </td>


                    {/* ACTION */}
                    <td className="px-6 py-4">

                      <div className="flex justify-end gap-2">

                        <button
                          type="button"
                          onClick={() =>
                            setSelectedContact(
                              contact
                            )
                          }
                          className="
                            w-9
                            h-9
                            rounded-lg
                            border
                            border-slate-200
                            dark:border-slate-700
                            flex
                            items-center
                            justify-center
                            text-slate-500
                            hover:text-indigo-500
                            hover:bg-indigo-500/10
                            transition
                          "
                          title="Lihat pesan"
                        >
                          <Eye size={16} />
                        </button>


                        <button
                          type="button"
                          onClick={() =>
                            handleDelete(
                              contact.id
                            )
                          }
                          className="
                            w-9
                            h-9
                            rounded-lg
                            border
                            border-slate-200
                            dark:border-slate-700
                            flex
                            items-center
                            justify-center
                            text-red-500
                            hover:bg-red-500/10
                            transition
                          "
                          title="Hapus pesan"
                        >
                          <Trash2 size={16} />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))
              )}

            </tbody>

          </table>

        </div>

      </div>


      {/* DETAIL MODAL */}
      {selectedContact && (

        <div
          className="
            fixed
            inset-0
            z-[10000]
            bg-black/60
            backdrop-blur-sm
            flex
            items-center
            justify-center
            p-4
          "
          onClick={() =>
            setSelectedContact(null)
          }
        >

          <div
            className="
              relative
              w-full
              max-w-lg
              rounded-2xl
              bg-white
              dark:bg-slate-900
              border
              border-slate-200
              dark:border-slate-800
              shadow-2xl
              p-6
            "
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  Contact Message
                </h2>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Detail pesan masuk
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedContact(null)
                }
                className="
                  w-9
                  h-9
                  rounded-lg
                  flex
                  items-center
                  justify-center
                  text-slate-500
                  hover:bg-slate-100
                  dark:hover:bg-slate-800
                "
              >
                <X size={18} />
              </button>

            </div>


            <div className="mt-6 space-y-4">

              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Nama
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                  {selectedContact.name}
                </p>
              </div>


              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Email
                </p>

                <p className="mt-1 text-sm text-slate-900 dark:text-white">
                  {selectedContact.email}
                </p>
              </div>


              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Subject
                </p>

                <p className="mt-1 text-sm text-slate-900 dark:text-white">
                  {selectedContact.subject ||
                    "Tanpa subject"}
                </p>
              </div>


              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Pesan
                </p>

                <div
                  className="
                    mt-2
                    rounded-xl
                    bg-slate-50
                    dark:bg-slate-950
                    border
                    border-slate-200
                    dark:border-slate-800
                    p-4
                    text-sm
                    leading-6
                    text-slate-700
                    dark:text-slate-300
                    whitespace-pre-wrap
                  "
                >
                  {selectedContact.message}
                </div>
              </div>


              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Dikirim
                </p>

                <p className="mt-1 text-xs text-slate-700 dark:text-slate-300">
                  {new Date(
                    selectedContact.createdAt
                  ).toLocaleString("id-ID")}
                </p>
              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default Contacts;