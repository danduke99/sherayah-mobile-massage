/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import {
  playfairBold,
  playfairRegular,
  playfairSemiBold,
} from "../styles/font/fonts";
import CloudinaryImage from "./CloudinaryImage";

export default function Navbar() {
  const [showStickyLogo, setShowStickyLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowStickyLogo(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use your actual Cloudinary public IDs (NO .png extension)
  const mainLogoPublicId = "Sherayah_c62od8"; // or just 'Sherayah_c62od8' depending on how you uploaded it
  const soloLogoPublicId = "soloLogo_aeelqi"; // upload soloLogo.png to Cloudinary and use its public_id

  return (
    <>
      {/* Top Bar */}
      <div className="flex flex-col items-center justify-center w-full bg-[#8cb692] px-4 py-4">
        <div className="grid grid-cols-3 w-full max-w-screen-xl transition-all duration-700 ease-in-out lg:flex lg:flex-row lg:justify-between">
          {/* Left side */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
            <div className="rounded-full w-9 h-9 sm:w-10 sm:h-10 bg-[#405d3f] flex justify-center items-center">
              <MapPinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="flex flex-col text-white justify-center items-center">
              <div
                className={`text-sm sm:text-lg ${playfairRegular.className}`}
              >
                Mobile Massage
              </div>
              <div
                className={`text-sm sm:text-lg font-bold ${playfairBold.className}`}
              >
                We Come To You!
              </div>
            </div>
          </div>

          {/* Center Logo */}
          <div className="flex justify-center">
            <div
              className={`rounded-full bg-white w-24 h-24 flex justify-center items-center transition-opacity duration-1000 ease-in-out ${
                showStickyLogo ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <CloudinaryImage
                src={mainLogoPublicId}
                alt="Main Logo"
                width={96}
                height={96}
                className="w-20 h-20 object-contain"
                priority
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col sm:flex-row items-center gap-2 justify-center">
            <div className="rounded-full w-9 h-9 sm:w-10 sm:h-10 bg-[#405d3f] flex justify-center items-center">
              <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="flex flex-col justify-center items-center text-right">
              <div
                className={`text-sm sm:text-lg ${playfairRegular.className}`}
              >
                Contact Us
              </div>
              <Link
                href="/contact"
                className="hover:underline hover:underline-[#487d5d] hover:decoration-[#487d5d]"
              >
                <p
                  className={`text-sm sm:text-lg font-bold text-white hover:text-[#405d3f] ${playfairBold.className}`}
                >
                  Click Here
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Nav */}
      <nav className="sticky top-0 z-50 bg-[#405d3f] text-white text-lg h-18 lg:h-20 shadow-xl justify-end">
        <div className="absolute h-full flex items-center justify-center left-3 sm:left-4">
          <div
            className={`transition-all duration-700 ease-in-out w-full justify-center items-center ${
              showStickyLogo
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <div className="rounded-full bg-white w-12 h-12 lg:w-16 lg:h-16 flex justify-center items-center">
              <CloudinaryImage
                src={soloLogoPublicId}
                alt="Solo Logo"
                width={64}
                height={64}
                className="w-12 h-12 lg:w-14 lg:h-14 object-contain"
              />
            </div>
          </div>
        </div>

        <div
          className={`${playfairSemiBold.className} flex items-center gap-5 h-full justify-center lg:gap-25`}
        >
          <Link
            href="/"
            className="flex items-center justify-center text-base sm:text-xl lg:text-2xl font-semibold rounded-full transition-colors duration-200 hover:bg-[#82a687] px-4 py-2"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="flex items-center justify-center text-base sm:text-xl lg:text-2xl font-semibold rounded-full transition-colors duration-200 hover:bg-[#82a687] px-4 py-2"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center text-base sm:text-xl lg:text-2xl font-semibold rounded-full transition-colors duration-200 hover:bg-[#82a687] px-4 py-2"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </>
  );
}
