"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CarouselItem } from "./map";

interface CarouselProps {
  items: CarouselItem[];
  rounded?: string;
}

export default function Carousel({ items, rounded = "rounded-3xl" }: CarouselProps) {
  const [[currentIndex, direction], setCurrentIndex] = useState<[number, number]>([0, 0]);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);
  const [containerWidth, setContainerWidth] = useState(0);

  // Use useRef for the container
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth >= 1024) setItemsPerSlide(3);
      else setItemsPerSlide(1);

      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(items.length / itemsPerSlide);

  const prevSlide = () =>
    setCurrentIndex([(currentIndex - 1 + totalSlides) % totalSlides, -1]);
  const nextSlide = () =>
    setCurrentIndex([(currentIndex + 1) % totalSlides, 1]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? containerWidth : -containerWidth,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? -containerWidth : containerWidth,
      opacity: 0,
    }),
  };

  const slideItems = items.slice(
    currentIndex * itemsPerSlide,
    currentIndex * itemsPerSlide + itemsPerSlide
  );

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-4" ref={containerRef}>
      <div className={`overflow-hidden ${rounded} w-full relative flex justify-center items-center`}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            className="absolute top-0 left-0 flex w-full justify-center gap-4"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.5 }}
          >
            {slideItems.map((item, idx) =>
              item.type === "image" ? (
                <img
                  key={`img-${currentIndex}-${idx}`}
                  src={item.src}
                  alt={item.alt || ""}
                  className="max-h-[500px] w-fit object-contain rounded-3xl"
                />
              ) : (
                <video
                  key={`vid-${currentIndex}-${idx}`}
                  src={item.src}
                  className="max-h-[500px] w-fit object-contain rounded-3xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )
            )}
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-1 h-10 w-10 p-1 rounded-full text-2xl bg-white bg-opacity-40 shadow-md hover:bg-opacity-100 -translate-y-1/2 transition"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-1 h-10 w-10 p-1 rounded-full text-2xl bg-white bg-opacity-10 shadow-lg hover:bg-opacity-100 -translate-y-1/2 transition"
        >
          &#10095;
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <span
            key={idx}
            className={`h-2 w-3 rounded-full cursor-pointer transition ${idx === currentIndex ? "bg-[#2e4c2d]" : "bg-[#8cb692]"
              }`}
            onClick={() => setCurrentIndex([idx, idx > currentIndex ? 1 : -1])}
          />
        ))}
      </div>
    </div>
  );
}
