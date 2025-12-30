import React, { useEffect, useState } from "react";
import BestsellerCard from "./BestsellerCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BestSeller = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getAllBooks = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/api/books/getBooks");
      // console.log(res.data);
      setBooks(res?.data);
      setError(null);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError("Failed to fetch books. Please try again later.");
      setLoading(false);
      setBooks([]);
    }
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  // console.log(books);

  return (
    <div className="px-6 py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800" data-aos="zoom-in-up">
          Today's bestsellers
        </h2>
        <a
          href="#"
          className="text-blue-600 text-sm font-medium"
          data-aos="zoom-in-up"
        >
          See all →
        </a>
      </div>

      <div>
        {error && <p className="text-red-500">{error}</p>}
        {loading ? (
          <div className="grid grid-cols-7 gap-4">
            <div className="animate-pulse p-3 rounded-2xl bg-gray-100 flex flex-col gap-3">
              <div className="w-40 h-52 bg-gray-300 rounded-2xl "></div>
              <div className="w-36 h-6 rounded bg-gray-300"></div>
              <div className="w-32 h-4 rounded bg-gray-300"></div>
              <div className="w-24 h-3 rounded bg-gray-300"></div>
            </div>
            <div className="animate-pulse p-3 rounded-2xl bg-gray-100 flex flex-col gap-3">
              <div className="w-40 h-52 bg-gray-300 rounded-2xl "></div>
              <div className="w-36 h-6 rounded bg-gray-300"></div>
              <div className="w-32 h-4 rounded bg-gray-300"></div>
              <div className="w-24 h-3 rounded bg-gray-300"></div>
            </div>
            <div className="animate-pulse p-3 rounded-2xl bg-gray-100 flex flex-col gap-3">
              <div className="w-40 h-52 bg-gray-300 rounded-2xl "></div>
              <div className="w-36 h-6 rounded bg-gray-300"></div>
              <div className="w-32 h-4 rounded bg-gray-300"></div>
              <div className="w-24 h-3 rounded bg-gray-300"></div>
            </div>
            <div className="animate-pulse p-3 rounded-2xl bg-gray-100 flex flex-col gap-3">
              <div className="w-40 h-52 bg-gray-300 rounded-2xl "></div>
              <div className="w-36 h-6 rounded bg-gray-300"></div>
              <div className="w-32 h-4 rounded bg-gray-300"></div>
              <div className="w-24 h-3 rounded bg-gray-300"></div>
            </div>
            <div className="animate-pulse p-3 rounded-2xl bg-gray-100 flex flex-col gap-3">
              <div className="w-40 h-52 bg-gray-300 rounded-2xl "></div>
              <div className="w-36 h-6 rounded bg-gray-300"></div>
              <div className="w-32 h-4 rounded bg-gray-300"></div>
              <div className="w-24 h-3 rounded bg-gray-300"></div>
            </div>
            <div className="animate-pulse p-3 rounded-2xl bg-gray-100 flex flex-col gap-3">
              <div className="w-40 h-52 bg-gray-300 rounded-2xl "></div>
              <div className="w-36 h-6 rounded bg-gray-300"></div>
              <div className="w-32 h-4 rounded bg-gray-300"></div>
              <div className="w-24 h-3 rounded bg-gray-300"></div>
            </div>
            <div className="animate-pulse p-3 rounded-2xl bg-gray-100 flex flex-col gap-3">
              <div className="w-40 h-52 bg-gray-300 rounded-2xl "></div>
              <div className="w-36 h-6 rounded bg-gray-300"></div>
              <div className="w-32 h-4 rounded bg-gray-300"></div>
              <div className="w-24 h-3 rounded bg-gray-300"></div>
            </div>
          </div>
        ) : (
          <div className="flex gap-4 overflow-x-auto scrollbar element py-2">
            {books?.map((book) => (
              <BestsellerCard key={book._id} book={book} navigate={navigate} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default BestSeller;
