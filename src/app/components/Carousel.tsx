import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { carouselImages } from "../components/map";

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  // Pause/play video when current changes
  useEffect(() => {
    const videoEl = videoRef.current;
    if (videoEl) {
      videoEl.pause();
      videoEl.currentTime = 0;
      videoEl.play().catch(() => {});
    }
  }, [current]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl">
      {/* Slides */}
      <motion.div
        key={current}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-64 sm:h-96"
      >
        {carouselImages[current].type === "image" ? (
          <Image
            src={carouselImages[current].src}
            alt={carouselImages[current].alt || ""}
            fill
            className="object-cover w-full h-full"
            priority
          />
        ) : (
          <video
            ref={videoRef}
            src={carouselImages[current].src}
            className="object-cover w-full h-full"
            muted
            loop
            playsInline
          />
        )}
      </motion.div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
      >
        <ArrowLeftIcon className="text-black"/>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
      >
        <ArrowRightIcon />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {carouselImages.map((_, index: number) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
