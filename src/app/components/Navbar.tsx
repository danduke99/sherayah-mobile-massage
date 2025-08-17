'use client'
import Link from 'next/link'
import { MapPinIcon, PhoneIcon, CalendarIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import { playfairBold, playfairRegular, playfairSemiBold } from '../styles/font/page'

export default function Navbar() {
  const [showStickyLogo, setShowStickyLogo] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setShowStickyLogo(scrollY > 100) // adjust threshold as needed
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
              <div className={`text-sm sm:text-lg ${playfairRegular.className} justify-center items-center`}>Mobile Massage</div>
              <div className={`text-sm sm:text-lg font-bold ${playfairBold.className}`}>We Come To You!</div>
            </div>
          </div>

          {/* Center Logo with fade in/out */}
          <div className="flex justify-center">
            <div
              className={`rounded-full bg-white w-24 h-24 flex justify-center items-center transition-opacity duration-1000 ease-in-out ${showStickyLogo ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
            >
              <img
                src="/images/Sherayah.png"
                alt="Main Logo"
                className="w-18 h-18 flex-shrink-0"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col sm:flex-row items-center gap-2 justify-center">
            <div className="rounded-full w-9 h-9 sm:w-10 sm:h-10 bg-[#405d3f] flex justify-center items-center">
              <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="flex flex-col justify-center items-center text-right">
              <div className={`text-sm sm:text-lg ${playfairRegular.className}`}>Contact Us</div>
              <Link
                href="/contact"
                className="hover:underline hover:underline-[#487d5d] hover:decoration-[#487d5d]"
              >
                <p className={`text-sm sm:text-lg font-bold text-white hover:text-[#405d3f] ${playfairBold.className}`}>
                  Click Here
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Nav */}
      <nav className="sticky top-0 z-50 bg-[#405d3f] text-white text-lg h-18 lg:h-20 shadow-xl justify-end">
        {/* Left fixed space for logo */}
        <div className="absolute h-full flex items-center justify-center left-3 sm:left-4">
          <div
            className={`transition-all duration-700 ease-in-out w-full justify-center items-center
      ${showStickyLogo ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}
          >
            <div className="rounded-full bg-white w-12 h-12 lg:w-16 lg:h-16 flex justify-center items-center">
              <img
                src="/images/soloLogo.png"
                alt="Main Logo"
                className="w-12 h-12"
              />
            </div>
          </div>
        </div>

        {/* Center nav links */}
        <div className={`${playfairSemiBold.className} flex items-center gap-5 h-full justify-center lg:gap-25`}>
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
  )
}
