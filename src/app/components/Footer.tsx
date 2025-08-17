import Link from 'next/link'
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/solid'
import {
  cookie,
  playfairMedium,
  playfairRegular,
  playfairSemiBold,
} from '../styles/font/page'

export default function Footer() {
  return (
    <>
      {/* Top Footer */}
      <div className="bg-[#2C3E50] text-white font-serif min-h-56 grid grid-cols-1 gap-6 sm:flex sm:flex-row justify-center lg:justify-evenly items-center px-6 py-6">
        {/* Left: Title */}
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center text-center">
            <p className={`text-5xl ${cookie.className} text-[#e7d882]`}>
              Sherayah's
            </p>
            <p className={`text-xl ${playfairRegular.className} text-white`}>
              Mobile Body Massage
            </p>
          </div>
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center items-center">
          <div className="rounded-full bg-white w-40 h-40 flex justify-center items-center">
            <img
              src="/images/soloLogo.png"
              alt="Sherayah's logo"
              className="w-32 h-32 object-contain"
            />
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col items-center gap-4 text-center">
          <p
            className={`text-5xl text-[#e7d882] font-bold ${cookie.className}`}
          >
            Contact Us
          </p>

          <div className="flex gap-2 items-center justify-center">
            <EnvelopeIcon className="w-5 h-5" />
            <a
              href="mailto:info@yourdomain.com"
              className={`${playfairMedium.className} underline hover:text-[#e7d882]`}
            >
              info@yourdomain.com
            </a>
          </div>

          <div className="flex gap-2 items-center justify-center">
            <PhoneIcon className="w-5 h-5" />
            <div className={`${playfairSemiBold.className}`}>
              +1 (721) 586 2966
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#1c2833] text-white text-xs font-sans h-20 flex flex-col justify-center items-center px-4 text-center">
        <div className="mb-2">
          <Link
            href="https://carib-premier.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-[#00e590]"
          >
            <img
              src="/images/logo.png"
              alt="Caribbean Premier logo"
              className="w-10 h-10 mx-auto"
            />
          </Link>
        </div>

        <div className={`text-xs ${playfairRegular.className} text-white`}>
          Created by{' '}
          <Link
            href="https://carib-premier.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-[#00e590] hover:underline hover:decoration-[#0176ff] ${cookie.className} text-lg`}
          >
            Caribbean Premier A.P.S
          </Link>
        </div>
      </div>
    </>
  )
}
