'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { cookie, playfairBold, playfairMedium, playfairRegular } from './styles/font/page'
import { services } from './components/map'

const title = "Welcome to Sherayah's";
const title2 = "Mobile Body Massage";
const titleLg = "Welcome to Sherayah's Mobile Body Massage";

export default function Home() {
  const titleLetters = title.split("");
  const titleLetters2 = title2.split("");
  const titleLettersLg = titleLg.split("");

  return (
    <main className='flex flex-col'>
      <div className="relative text-center h-96 lg:h-[500px] overflow-hidden flex flex-col items-center justify-center">
        <motion.div
          className="absolute inset-0 bg-cover bg-center scale-100 bg-[url(/images/massage2.jpg)]"
          initial={{ scale: 1 }}
          animate={{ scale: 1.10 }}
          transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        />

        <div className="z-10">
          {/* Main animated heading */}
          <motion.p
            className={`text-5xl sm:text-6xl lg:hidden ${cookie.className} text-[#e7d882] text-center mr-10 sm:mr-40`}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {titleLetters.map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.p>

          <motion.p
            className={`text-5xl sm:text-6xl lg:hidden ${cookie.className} text-[#e7d882] text-center ml-10 sm:ml-40 mt-1`}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {titleLetters2.map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.p>

          <motion.p
            className={`hidden lg:block lg:text-7xl ${cookie.className} text-[#e7d882] text-center`}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {titleLettersLg.map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.p>

          {/* Subtitle text */}
          <motion.p
            className={`mt-4 text-base ${playfairRegular.className} text-white mx-5 text-center lg:text-xl`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Rejuvenate your body and mind with professional massage therapy in a calming space.
          </motion.p>

          {/* CTA Button */}
          <Link href="/contact" className='lg:mt-10'>
            <motion.button
              className={`bg-[#405d3f] text-white text-lg px-8 py-2 lg:py-3 lg:px-16 lg:text-xl rounded-full mt-4 lg:mt-8 hover:bg-[#2e4c2d] transition ${playfairBold.className} block mx-auto`}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2, type: 'spring', stiffness: 10, damping: 10 }}
              whileHover={{
                x: [0, -15, 15, -15, 15, 0],
                y: [0, -15, 15, -15, 15, 0],
                transition: { duration: 0.5 },
                cursor: 'pointer',
              }}
            >
              Book Now
            </motion.button>
          </Link>
        </div>
      </div>

      <div className="relative bg-[#bee5d7] flex flex-col items-center justify-center overflow-hidden">
        {/* Decorative Images */}
        <img src="/images/orchid.png" alt="Orchid Right" className="absolute -top-24 right-4 sm:right-10 h-[24rem] rotate-[30deg] object-cover z-10 opacity-90 pointer-events-none select-none" />
        <img src="/images/snake.png" alt="Snake Plant Left" className="absolute bottom-0 left-4 sm:left-10 h-[24rem] object-cover z-10 opacity-90 pointer-events-none select-none" />

        {/* Top and bottom gradients */}
        <div className="absolute top-0 left-0 right-0 h-56 bg-gradient-to-b from-[#8cb692] to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#8cb692] to-transparent z-20 pointer-events-none" />

        {/* Main Content */}
        <div className="relative z-30 flex flex-col justify-center items-center w-full">
          {/* Title */}
          <div className="flex flex-col items-center justify-center">
            <svg
              width="75px"
              height="75px"
              viewBox="-2 -2 24.00 24.00"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#000000"
              transform="matrix(1, 0, 0, 1, 0, 0)"
              className="mt-5"
            >
              <g
                id="SVGRepo_bgCarrier"
                strokeWidth={0}
                transform="translate(0,0), scale(1)"
              >
                <path
                  transform="translate(-2, -2), scale(0.75)"
                  d="M16,31.175094731152058C19.966608382994167,31.369486422081536,23.571960170313943,29.18726967207683,26.434019853176526,26.43401985317653C29.36121410378977,23.618111754318804,31.969628260467182,20.057074717611467,31.77482236283166,16C31.585708000322487,12.061458568833036,28.319678963128773,9.255626983053405,25.47792122888493,6.522078771115073C22.716348619245107,3.8656623643774695,19.828803675226563,0.6738907576485698,16.000000000000004,0.8258572699768205C12.241127180044598,0.9750482030168327,9.968987260543365,4.650493904738033,7.245720963662871,7.245720963662869C4.407353482922799,9.950637518326275,0.2288373122369592,12.082103181080763,0.07721924036741257,15.999999999999996C-0.07629896817332146,19.966997426305667,3.6670304515894796,22.720210689666985,6.540883644259907,25.45911635574009C9.313249172225959,28.101299913459062,12.174819866392237,30.987634018501478,16,31.175094731152058"
                  fill="#e7d882"
                  strokeWidth={0}
                />
              </g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="0.16"
              />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>leaf [#15]</title> <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                <g id="Page-1" strokeWidth="0.0002" fill="none" fillRule="evenodd">
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-180.000000, -8119.000000)"
                    fill="#405d3f"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M136.231,7973 C135.469,7973 133.335,7972.944 131.549,7972.865 L135.121,7969.294 L138.021,7970.526 C138.369,7970.673 138.772,7970.595 139.039,7970.328 C139.504,7969.863 139.351,7969.076 138.746,7968.819 L136.535,7967.879 L139.316,7965.098 C139.707,7964.707 139.707,7964.074 139.316,7963.684 C138.926,7963.293 138.293,7963.293 137.902,7963.684 L136.578,7965.008 L135.806,7963.686 C135.487,7963.139 134.736,7963.042 134.287,7963.49 C133.977,7963.801 133.914,7964.282 134.136,7964.662 L135.164,7966.422 L130.137,7971.449 C130.056,7969.658 130,7967.53 130,7966.769 C130,7963.208 131.3,7961 137.769,7961 C138.617,7961 140.536,7961.079 141.846,7961.18 C141.934,7962.193 142,7963.513 142,7964.231 C142,7973 137.809,7973 136.231,7973 M143.609,7959.391 C142.703,7959.143 138.754,7959 137.769,7959 C131.822,7959 128,7960.822 128,7966.769 C128,7967.533 128.087,7971.278 128.241,7973.345 L124.293,7977.293 C123.902,7977.683 123.902,7978.317 124.293,7978.707 C124.684,7979.098 125.317,7979.098 125.707,7978.707 L129.655,7974.759 C131.722,7974.913 135.467,7975 136.231,7975 C142.179,7975 144,7970.178 144,7964.231 C144,7963.246 143.856,7960.297 143.609,7959.391"
                        id="leaf-[#15]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>

            <div className={`text-[76px] text-[#2c3e50] ${cookie.className}`}>Our Services</div>
          </div>

          {/* Services Grid */}
          <div className="mb-6 mx-6 max-w-7xl flex flex-col gap-4 overflow-y-auto lg:overflow-visible lg:flex-row lg:flex-wrap lg:gap-x-6 lg:gap-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-row lg:flex-col rounded-lg bg-white text-surface shadow-lg text-black h-36 lg:h-auto w-full lg:flex-[1_1_30%]"
              >
                {/* Image */}
                <div className="w-36 h-36 lg:w-full lg:h-52 flex-shrink-0 
                rounded-l-lg rounded-bl-lg rounded-t-none rounded-r-none rounded-b-none 
                lg:rounded-l-none lg:rounded-t-lg lg:rounded-tr-lg lg:rounded-tl-lg overflow-hidden"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full ${service.title === "Chair Massage" ? "object-top" : "object-cover"}`}
                  />
                </div>


                {/* Text Content */}
                <div className="flex flex-col justify-center lg:justify-start p-4">
                  <h3 className={`text-xl font-semibold ${playfairBold.className}`}>
                    {service.title}
                  </h3>
                  <p className={`mt-2 text-md text-gray-600 ${playfairRegular.className}`}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex flex-col w-full h-auto z-10 p-4 lg:flex-row">
        {/* Left Column: 40% on lg */}
        <div className="w-full lg:w-[40%] flex justify-center items-start relative z-10">
          <div className="relative">
            <img
              src="/images/leaf2.png"
              alt="Background"
              className="absolute w-48 sm:w-58 -rotate-[45deg] opacity-70 z-10 object-cover mt-18 -left-6 sm:-left-20 bottom-5 lg:-left-10"
            />
            <img
              src="/images/portrait.png"
              alt="Foreground"
              className="relative w-[300px] sm:w-[350px] lg:w-[380px] object-cover z-20 left-10 sm:left-15 lg:-bottom-4"
            />
          </div>
        </div>

        {/* Right Column: 60% on lg */}
        <div className="w-full lg:w-[60%] bg-white flex flex-col justify-center items-center text-center lg:text-left lg:items-start z-20 lg:mx-5">
          <p className={`text-[#2c3e50] ${cookie.className} text-[60px] lg:text-[80px] text-start`}>Who Are We?</p>
          <p className={`max-w-2xl text-gray-700 text-md mb-3 lg:max-w-3xl ${playfairRegular.className}`}>
            We are a new mobile massage parlor bringing relaxation and rejuvenation directly to your doorstep. Whether you're at home or at work, our professionalism creates a calming experience wherever you are.
          </p>
          <Link href="/about" className="w-fit">
            <button
              className={`bg-[#82a687] text-white py-2 px-6 lg:py-3 lg:px-13 lg:mt-8 rounded-full hover:bg-[#405d3f] transition hover:cursor-pointer ${playfairBold.className}`}
            >
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
