import Navbar from "@/pages/navbar";
import CarouselMenon from "@/pages/carousel";
import Step from "@/pages/step";
import Footer from "@/pages/footer";
export default function Home() {
  return (
    <div className="container mx-auto  font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <CarouselMenon />
      <Step />
      <Footer />
    </div>
  );
}
