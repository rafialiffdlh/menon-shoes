import Navbar from "@/pages/navbar";
import CarouselMenon from "@/pages/carousel";
import Step from "@/pages/step";
import Brand from "@/pages/brand";
import Banner from "@/pages/banner";
import Footer from "@/pages/footer";
export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <CarouselMenon />
      <Step />
      <Brand />
      <Banner />
      <Footer />
    </div>
  );
}
