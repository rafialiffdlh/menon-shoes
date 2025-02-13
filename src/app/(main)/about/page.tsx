import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/pages/navbar";
import Footer from "@/pages/footer";
import Image from "next/image";
export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Tentang Menon Shoes
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {`Kami adalah merek sepatu yang berdedikasi untuk menghadirkan
            kualitas, kenyamanan, dan gaya dalam setiap langkah perjalanan Anda.`}
          </p>
        </section>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Perjalanan Kami
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 mb-4">
                  {`Didirikan pada tahun 2015, Menon Shoes bermula dari passion
                  kami akan sepatu berkualitas tinggi yang menyatukan desain
                  modern dengan kenyamanan sejati. Setiap sepatu kami dibuat
                  dengan ketelitian dan dedikasi untuk memenuhi standar
                  tertinggi.`}
                </p>
                <div className="flex space-x-2 justify-center">
                  <Badge variant="secondary">Kualitas Terbaik</Badge>
                  <Badge variant="secondary">Desain Modern</Badge>
                  <Badge variant="secondary">Kenyamanan Utama</Badge>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/image/menon.png"
                  alt="Menon Shoes"
                  height={300}
                  width={300}
                  className="w-full h-full "
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Nilai-Nilai Kami
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Kualitas",
                description:
                  "Kami tidak pernah berkompromi dengan kualitas bahan dan proses produksi.",
                icon: "✨",
              },
              {
                title: "Inovasi",
                description:
                  "Selalu menciptakan desain dan teknologi sepatu terkini.",
                icon: "🚀",
              },
              {
                title: "Keberlanjutan",
                description:
                  "Berkomitmen pada praktik ramah lingkungan dalam setiap produksi.",
                icon: "🌿",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-center mb-8">Tim Kami</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: "rafi",
                role: "Founder & CEO",
                image: "",
              },
              {
                name: "rafi",
                role: "Desain Kepala",
                image: "",
              },
              {
                name: "rafi",
                role: "Manajer Produksi",
                image: "",
              },
              {
                name: "rafi",
                role: "Direktur Kreatif",
                image: "",
              },
            ].map((member, index) => (
              <Card key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Bergabunglah dengan Perjalanan Kami
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            {`Temukan kenyamanan dan gaya sejati dengan Menon Shoes. Setiap
            langkah adalah sebuah cerita.`}
          </p>
          <button className="btn bg-[#71C9CE] btn-lg">Jelajahi Koleksi</button>
        </section>
      </div>
      <Footer />
    </div>
  );
}
