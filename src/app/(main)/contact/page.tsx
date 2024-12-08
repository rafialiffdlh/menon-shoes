import React from "react";
import Navbar from "@/pages/navbar";
import Footer from "@/pages/footer";
export default function ContactPage() {
  return (
    <div className="bg-gray-100">
      <Navbar />

      <div className="text-center py-16 bg-teal-50">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
        <div>
          <form className="bg-white p-8 shadow-md rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-md p-3 w-full"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="border border-gray-300 rounded-md p-3 w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded-md p-3 w-full mt-4"
            />
            <textarea
              placeholder="Message"
              className="border border-gray-300 rounded-md p-3 w-full mt-4 h-32"
            />
            <button className="bg-teal-500 text-white py-2 px-6 rounded-md mt-4 w-full">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <p className="font-semibold">(+876) 765 685</p>
          <p className="text-gray-500 mt-2">Call us for more information</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <p className="font-semibold">mail@mail.id</p>
          <p className="text-gray-500 mt-2">Email us for support</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <p className="font-semibold">Banten, Indonesia</p>
          <p className="text-gray-500 mt-2">Visit our office</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <iframe
          className="w-full h-72 rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.649!2d-0.119519!3d51.503324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x490fcecc146a8fd0!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1669361963333!5m2!1sen!2suk"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <Footer />
    </div>
  );
}
