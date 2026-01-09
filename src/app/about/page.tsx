"use client";

import { cookie, playfairBold, playfairRegular, playfairSemiBold } from "../styles/font/fonts";
import { services, teamMembers } from "../components/map";
import CloudinaryImage from "../components/CloudinaryImage";
import { images } from "../components/media/images";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const logoPublicId = images.mainLogo;

  return (
    <main className="mx-auto relative bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-40 sm:h-48 lg:h-56 overflow-hidden">
        <CloudinaryImage
          src={images.aboutMassage} // public_id key in registry
          alt="Massage Background"
          width={1920}
          height={600}
          className="absolute inset-0 w-full h-full object-cover object-right z-0"
        />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white bg-black/30 px-4">
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl ${cookie.className} leading-tight text-center`}
          >
            About Us
          </h1>
        </div>
      </div>

      {/* Who am I? Section */}
      <div className="relative grid grid-cols-1 sm:grid-cols-[40%_60%] h-auto lg:h-[550px] overflow-visible px-6 sm:px-10 py-6 gap-8">
        <div className="w-full flex justify-center items-start relative -mb-20 z-10">
          <div className="relative">
            <CloudinaryImage
              src={images.leaf2}
              alt="Background"
              width={600}
              height={600}
              className="absolute w-40 sm:w-52 lg:w-48 xl:w-84 -rotate-[45deg] sm:-rotate-[30deg] lg:-rotate-[45deg] xl:-rotate-[35deg]
        opacity-70 z-10 object-cover mt-18 bottom-15 sm:-bottom-1 lg:-bottom-20 xl:bottom-2 -left-10 sm:-left-13 lg:-left-10 xl:-left-20"
            />

            {/* Scroll target wrapper */}
            <ScrollTilt3D>
              <CloudinaryImage
                src={images.threeD}
                alt="3D Logo"
                width={700}
                height={700}
                className="w-full h-full object-contain p-10"
                priority
              />
            </ScrollTilt3D>
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col justify-center px-2 sm:px-6 overflow-hidden h-full">
          <p
            className={`text-[#2c3e50] ${cookie.className} text-5xl lg:text-7xl xl:text-8xl mb-2 lg:mb-0 w-full text-center lg:text-left`}
          >
            Who are we?
          </p>

          <div className="flex flex-col">
            <p
              className={`text-base sm:text-xs lg:text-lg xl:text-xl text-left z-30 relative text-[#405d3f] mb-3 ${playfairRegular.className}`}
            >
              We are a new mobile massage parlor dedicated to bringing
              relaxation, balance, and renewal directly to your doorstep.
              Whether you are at home, at work, or in a private space of your
              choosing, our goal is to create a calm and restorative environment
              that allows you to fully disconnect from stress and reconnect with
              your body. Every session is designed to feel like a personal
              retreat, combining professional techniques with a thoughtful,
              soothing approach that adapts to your unique needs and
              preferences.
            </p>
            <p
              className={`text-base sm:text-xs lg:text-lg xl:text-xl text-left z-30 relative text-[#405d3f] mb-3 ${playfairRegular.className}`}
            >
              Whether you&apos;re recovering from stress, managing pain, or
              simply in need of deep relaxation, each session is tailored to
              meet your unique needs. I believe in the power of healing through
              touch and the importance of self-care as part of a balanced
              lifestyle.
            </p>
            <p
              className={`text-base sm:text-xs lg:text-lg xl:text-xl text-left z-30 relative text-[#405d3f] mb-3 ${playfairRegular.className}`}
            >
              Let <a className={`${playfairBold.className}`}>Sherayah's Mobile Body Massage</a> be your space to pause, breathe, and reconnect
              — <a className={`${playfairSemiBold.className}`}>with yourself.</a>&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[750px] xl:h-[800px] overflow-hidden">
        <Image
          src="/images/aboutCover.jpg"
          alt="About Cover"
          width={1920}
          height={1200}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#405d3f] opacity-40 mix-blend-multiply z-0"></div>

        <div className="overflow-hidden rounded-2xl absolute inset-0 flex flex-col items-center justify-start my-6 mx-auto bg-white w-[90%] sm:w-[90%] md:w-[90%] lg:w-4/5 max-w-[1600px] p-6 sm:p-10">
          <div
            className={`${cookie.className} text-center text-5xl sm:text-5xl md:text-[70px] text-[#e7d882] mb-6 underline`}
          >
            Meet the Team
          </div>

          <div className="w-full max-h-[550px] overflow-y-auto lg:max-h-none lg:overflow-y-visible overflow-x-hidden">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8 sm:gap-x-12 sm:px-8">
              {teamMembers.map((member, index) => {
                const isLastOdd =
                  teamMembers.length % 2 !== 0 &&
                  index === teamMembers.length - 1;

                return (
                  <div
                    key={index}
                    className={`
                      flex flex-col justify-center items-center w-40 sm:w-48 md:w-56 group
                      ${isLastOdd ? "col-span-2 lg:col-span-1 lg:justify-self-auto justify-self-center" : ""}
                    `}
                  >
                    <div className="relative rounded-full overflow-hidden w-24 h-24 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:h-50 lg:w-50">
                      <CloudinaryImage
                        src={images[member.imageKey]}
                        alt={member.name}
                        width={600}
                        height={600}
                        className="h-full w-full object-cover object-center transition-opacity duration-100"
                      />
                      <div className="absolute inset-0 bg-[#405d3f] opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full" />
                    </div>

                    <div className="mt-4 flex flex-col justify-center items-center text-center">
                      <div
                        className={`text-lg sm:text-xl md:text-2xl ${playfairBold.className}`}
                      >
                        {member.name}
                      </div>
                      <div className="text-xs sm:text-sm md:text-base text-[#405d3f]">
                        {member.role}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-[#8cb692] px-6 sm:px-10 py-6 z-10">
        <div className="flex justify-center items-center mb-5 lg:mb-0">
          <h2
            className={`${cookie.className} text-center text-5xl sm:text-6xl md:text-[70px] text-[#2c3e50]`}
          >
            Our Services
          </h2>
        </div>

        <div className="max-h-[700px] overflow-y-auto lg:overflow-y-visible lg:max-h-[800px] xl:max-h-[700px] md:mb-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:mb-2">
            {[0, 1, 2].map((col) => (
              <div
                key={col}
                className="flex flex-col gap-8 justify-center items-center h-full mt-5 sm:mt-3 sm:px-4"
              >
                {services.slice(col * 3, col * 3 + 3).map((service, index) => (
                  <div
                    key={index}
                    className="group flex flex-row sm:flex-col lg:flex-row gap-4 items-center justify-center bg-white p-4 rounded-xl transition duration-200 w-full max-w-md sm:h-[22rem] lg:h-[14rem] xl:h-[10rem]"
                  >
                    <div className="rounded-full w-20 h-20 sm:w-28 sm:h-28 flex justify-center items-center overflow-hidden shrink-0">
                      <CloudinaryImage
                        src={images[service.imageKey]}
                        alt={service.title}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>

                    <div className="flex flex-col justify-start items-start w-full flex-grow overflow-hidden">
                      <p className="text-lg sm:text-xl font-bold text-[#2e4c2d] underline decoration-[#2e4c2d] group-hover:decoration-[#e7d882]">
                        {service.title}
                      </p>
                      <p className="text-sm sm:text-lg text-black">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function ScrollTilt3D({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll progress relative to THIS element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 20%"], // longer scroll window = bigger effect duration
  });

  // Bigger, more obvious effect ranges
  const rotateX = useTransform(scrollYProgress, [0, 1], [28, -28]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-32, 32]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1.25]);
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <div
      ref={ref}
      className="
        relative z-20 left-13 bottom-18 sm:left-10 sm:-bottom-1
        h-[320px] w-[320px]
        lg:-bottom-[126px] xl:-bottom-[26px] xl:left-20
        lg:h-[460px] lg:w-[420px]
        xl:h-[560px] xl:w-[520px]
        [perspective:1400px]
      "
    >
      <motion.div
        style={{ rotateX, rotateY, scale, y, transformStyle: "preserve-3d" }}
        className="
          w-full h-full
          rounded-full
          border-4 border-[#405d3f]
          bg-white/5
          backdrop-blur-sm
          shadow-[0_30px_80px_rgba(0,0,0,0.35)]
          overflow-hidden
          will-change-transform
        "
      >
        {children}
      </motion.div>
    </div>
  );
}
