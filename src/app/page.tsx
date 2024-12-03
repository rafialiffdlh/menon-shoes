import Navbar from "@/pages/navbar";
import { CarouselMenon } from "@/pages/carousel";
export default function Home() {
  return (
    <div className="container mx-auto  font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <CarouselMenon />
    </div>
  );
}
