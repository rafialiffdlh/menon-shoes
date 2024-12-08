import React from "react";
import Navbar from "@/pages/navbar";
import Footer from "@/pages/footer";
import Image from "next/image";
export default function BlogPage() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <main className="container mx-auto px-4 ">
          <div className="text-center py-16 bg-teal-50">
            <h1 className="text-4xl font-bold">Blog</h1>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            <aside className="col-span-1 bg-white p-4 shadow rounded">
              <div className="mb-8">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  Brands
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#culture"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      Adidas
                    </a>
                  </li>
                  <li>
                    <a
                      href="#creativity"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      Nike
                    </a>
                  </li>
                  <li>
                    <a
                      href="#food"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      Puma
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  Top News
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#post1"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                  <li>
                    <a
                      href="#post2"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                  <li>
                    <a
                      href="#post3"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
            <section className="col-span-3 grid grid-cols-3 gap-4">
              {Array(6)
                .fill(null)
                .map((_, idx) => (
                  <article key={idx} className="bg-white p-4 shadow rounded">
                    <Image
                      src="/image/menon.png"
                      alt="p"
                      className="rounded mb-4"
                      width={230}
                      height={230}
                    />
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Post Title {idx + 1}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Quisque sollicitudin lacinia sapien, eu tincidunt nunc
                      accumsan nec laoreet.
                    </p>
                  </article>
                ))}
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
