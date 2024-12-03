"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const carouselItems = [
  {
    title: "adidas",
    description: "adidas",
    buttonText: "view product",
    buttonLink: "/carts",
    image: "/image/adidas.jpg",
  },
  {
    title: "nike",
    description: "nike",
    buttonText: "view product",
    buttonLink: "/produce",
    image: "/image/nike.jpg",
  },
  {
    title: "puma",
    description: "puma",
    buttonText: "view product",
    buttonLink: "/local",
    image: "/image/puma.jpg",
  },
];

export default function CarouselMenon() {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index}>
            <Card className="border-none bg-[#F5F5F5] rounded-3xl">
              <CardContent className="flex flex-row items-center p-0 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px]">
                <div className="w-1/2 p-3 sm:p-4 md:p-6 lg:p-12 space-y-1 sm:space-y-2 md:space-y-4">
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold tracking-tight line-clamp-2">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-400 line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
                    {item.description}
                  </p>
                  <Button asChild size={"sm"} className="text-xs sm:text-sm">
                    <Link href={item.buttonLink}>{item.buttonText}</Link>
                  </Button>
                </div>
                <div className="w-1/2 h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px] relative">
                  {" "}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                    className=" rounded-3xl border-none"
                  />
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" absolute left-0" />
      <CarouselNext className=" absolute right-0" />
    </Carousel>
  );
}
