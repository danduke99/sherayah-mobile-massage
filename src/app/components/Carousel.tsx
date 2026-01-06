"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import type { CarouselItem } from "./map";
import CloudinaryImage from "./CloudinaryImage";

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
  const [[currentIndex, direction], setCurrentIndex] = useState<
    [number, number]
  >([0, 0]);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);
  const [containerWidth, setContainerWidth] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;

      if (width >= 1000) setItemsPerSlide(3);
      else if (width >= 850) setItemsPerSlide(2);
      else setItemsPerSlide(1);

      if (containerRef.current)
        setContainerWidth(containerRef.current.offsetWidth);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const totalSlides = Math.ceil(items.length / itemsPerSlide);

  const prevSlide = () =>
    setCurrentIndex([(currentIndex - 1 + totalSlides) % totalSlides, -1]);
  const nextSlide = () =>
    setCurrentIndex([(currentIndex + 1) % totalSlides, 1]);

  const variants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? containerWidth : -containerWidth,
      transition: {
        duration: 0.45,
        ease: [0.0, 0.0, 1.0, 1.0] as [number, number, number, number],
      },
    }),
    center: {
      x: 0,
      transition: {
        duration: 0.45,
        ease: [0.0, 0.0, 1.0, 1.0] as [number, number, number, number],
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -containerWidth : containerWidth,
      transition: {
        duration: 0.45,
        ease: [0.0, 0.0, 1.0, 1.0] as [number, number, number, number],
      },
    }),
  };

  const slideItems = items.slice(
    currentIndex * itemsPerSlide,
    currentIndex * itemsPerSlide + itemsPerSlide
  );

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, [currentIndex, itemsPerSlide]); // OK (your original behavior)

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-6" ref={containerRef}>
      <div className={`overflow-hidden ${rounded} w-full`}>
        <div className="flex justify-center items-center w-full min-h-[350px] px-2 sm:px-4 lg:px-6">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              className="flex w-full justify-center gap-4 sm:gap-6 lg:gap-10"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {slideItems.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-3xl overflow-hidden bg-white backdrop-blur-sm shadow"
                >
                  {item.type === "image" ? (
                    <CloudinaryImage
                      src={images[item.srcKey]}
                      alt={item.alt || ""}
                      width={800}
                      height={500}
                      className="max-h-[450px] lg:max-h-[500px] w-auto object-contain"
                      priority={item.id === 1}
                    />
                  ) : (
                    <video
                      src={cloudinaryVideoUrl(
                        videos[item.srcKey],
                        "f_auto,q_auto"
                      )}
                      className="max-h-[450px] lg:max-h-[500px] w-auto object-contain"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="
            absolute top-1/2 left-3 h-12 w-12 flex items-center justify-center
            rounded-full text-3xl bg-gray-200 backdrop-blur-md shadow-md
            hover:bg-gray-300 hover:scale-105 transition -translate-y-1/2 cursor-pointer
          "
        >
          &#10094;
        </button>

        <button
          onClick={nextSlide}
          className="
            absolute top-1/2 right-3 h-12 w-12 flex items-center justify-center
            rounded-full text-3xl bg-gray-200 backdrop-blur-md shadow-md
            hover:bg-gray-300 hover:scale-105 transition -translate-y-1/2 cursor-pointer
          "
        >
          &#10095;
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-5 gap-3">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <span
            key={idx}
            className={`
              h-2 w-4 rounded-full cursor-pointer transition-all
              ${idx === currentIndex ? "bg-[#2e4c2d] scale-110" : "bg-[#8cb692] opacity-60"}
            `}
            onClick={() => setCurrentIndex([idx, idx > currentIndex ? 1 : -1])}
          />
        ))}
      </div>
    </div>
  );
}
