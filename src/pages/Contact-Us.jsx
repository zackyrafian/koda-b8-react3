import { useState } from "react";
import Navbar from "../components/navbar";

function ContactPage() {
  const [messsages, setMessages] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());
    const update = [...messsages, data];
    setMessages(update);
    e.target.reset();
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-6">
        <h1 className="text-xl font-medium text-gray-800 mb-5">Contact Us</h1>
  
        <form
          onSubmit={handleForm}
          className="border border-gray-300 rounded p-5 bg-white mb-6 flex flex-col gap-4"
        >
          <label htmlFor="name" className="flex flex-col gap-1">
            <span className="text-sm text-gray-500">Nama</span>
            <input
              name="name"
              type="text"
              id="name"
              placeholder="Masukkan nama kamu..."
              className="border border-gray-300 rounded px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:border-gray-500"
            />
          </label>
          <label htmlFor="email" className="flex flex-col gap-1">
            <span className="text-sm text-gray-500">Email</span>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="example@mail.com"
              className="border border-gray-300 rounded px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:border-gray-500"
            />
          </label>
          <label htmlFor="message" className="flex flex-col gap-1">
            <span className="text-sm text-gray-500">Pesan</span>
            <textarea
              name="message"
              id="message"
              placeholder="Tulis pesan kamu di sini..."
              className="border border-gray-300 rounded px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:border-gray-500 resize-y min-h-[90px]"
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-gray-700 text-white py-2 rounded text-sm hover:bg-gray-800 transition cursor-pointer"
          >
            Kirim Pesan
          </button>
        </form>
  
        <div className="border border-gray-300 rounded p-5 bg-white">
          <h2 className="text-base font-medium text-gray-700 mb-4">
            Daftar Pesan Masuk
          </h2>
          {messsages.length === 0 ? (
            <p className="text-red-500 text-sm">* Belum ada data pesan</p>
          ) : (
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-500">
                  <th className="border border-gray-200 py-2 px-3 text-left w-10">
                    No
                  </th>
                  <th className="border border-gray-200 py-2 px-3 text-left">
                    Nama
                  </th>
                  <th className="border border-gray-200 py-2 px-3 text-left">
                    Email
                  </th>
                  <th className="border border-gray-200 py-2 px-3 text-left">
                    Pesan
                  </th>
                </tr>
              </thead>
              <tbody>
                {messsages.map((e, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="border border-gray-200 px-3 py-2">{i + 1}</td>
                    <td className="border border-gray-200 px-3 py-2">{e.name}</td>
                    <td className="border border-gray-200 px-3 py-2">
                      {e.email}
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      {e.message}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;