"use client";

import { useEffect, useState } from "react";
import type { CarouselItem } from "./homeContent";
import CloudinaryImage from "./CloudinaryImage";
import {
  Carousel as UICarousel,
  CarouselContent,
  CarouselItem as UICarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import { images } from "@/app/components/media/images";
import { videos } from "@/app/components/media/video";
import { cloudinaryVideoUrl } from "@/app/components/media/cloudinary";

interface CarouselProps {
  items: CarouselItem[];
  rounded?: string;
}

export default function Carousel({
  items,
  rounded = "rounded-3xl",
}: CarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
      setSnapCount(api.scrollSnapList().length);
    };

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => api.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-6">
      <UICarousel
        setApi={setApi}
        opts={{ align: "start", loop: true }}
        className={`overflow-hidden w-full ${rounded}`}
      >
        <div className="px-2 sm:px-4 lg:px-6">
          <CarouselContent>
            {items.map((item) => (
              <UICarouselItem
                key={item.id}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="rounded-3xl overflow-hidden bg-white backdrop-blur-sm shadow transition-transform duration-300 hover:scale-[1.02]">
                  {item.type === "image" ? (
                    <CloudinaryImage
                      src={images[item.srcKey]}
                      alt={item.alt || ""}
                      width={800}
                      height={500}
                      className="block h-[360px] w-full object-cover object-center sm:h-[420px] lg:h-[500px]"
                      priority={item.id === 1}
                    />
                  ) : (
                    <video
                      src={cloudinaryVideoUrl(
                        videos[item.srcKey],
                        "f_auto,q_auto"
                      )}
                      className="block h-[360px] w-full object-cover object-center sm:h-[420px] lg:h-[500px]"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                  )}
                </div>
              </UICarouselItem>
            ))}
          </CarouselContent>
        </div>

        <CarouselPrevious
          className="
            absolute top-1/2 left-3 h-12 w-12 flex items-center justify-center
            rounded-full bg-gray-200 backdrop-blur-md shadow-md border-0
            hover:bg-gray-300 hover:scale-105 transition -translate-y-1/2 cursor-pointer
          "
        />

        <CarouselNext
          className="
            absolute top-1/2 right-3 h-12 w-12 flex items-center justify-center
            rounded-full bg-gray-200 backdrop-blur-md shadow-md border-0
            hover:bg-gray-300 hover:scale-105 transition -translate-y-1/2 cursor-pointer
          "
        />
      </UICarousel>

      <div className="flex justify-center mt-5 gap-3">
        {Array.from({ length: snapCount }).map((_, idx) => (
          <span
            key={idx}
            className={`
              h-2 w-4 rounded-full cursor-pointer transition-all
              ${idx === currentIndex ? "bg-[#2e4c2d] scale-110" : "bg-[#8cb692] opacity-60"}
            `}
            onClick={() => api?.scrollTo(idx)}
          />
        ))}
      </div>
    </div>
  );
}
