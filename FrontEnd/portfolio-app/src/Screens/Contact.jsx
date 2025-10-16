import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center px-4 py-12 bg-white">
      <div className="max-w-xl mx-auto w-full">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Contact </h1>
        <form className="bg-gray-50 p-6 rounded-lg shadow-sm space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#FF6464]"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#FF6464]"
              placeholder="Your email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#FF6464]"
              rows="4"
              placeholder="Your message"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#FF6464] text-white py-2 rounded hover:bg-[#FF6434] cursor-pointer transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
