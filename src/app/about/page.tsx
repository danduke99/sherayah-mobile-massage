import { cookie, playfairBold, playfairRegular, playfairSemiBold } from "../styles/font/page"
import { services, teamMembers } from "../components/map";

export default function About() {
  return (
    <main className="mx-auto relative bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-40 sm:h-48 lg:h-56 overflow-hidden">
        <img
          src="/images/aboutMassage.jpg"
          alt="Massage Background"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-right z-0"
        />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white bg-black/30 px-4">
          <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl ${cookie.className} leading-tight text-center`}>
            About Us
          </h1>
        </div>
      </div>

      {/* Who am I? Section */}
      <div className="relative grid grid-cols-1 sm:grid-cols-[40%_60%] h-auto lg:h-[550px] overflow-visible px-6 sm:px-10 py-6 gap-8">
        <div className="w-full flex justify-center items-start relative -mb-20 z-10">
          <div className="relative ">
            <img src="/images/leaf2.png" alt="Background" className=" absolute w-40 sm:w-52 lg:w-48 xl:w-72 -rotate-[45deg] sm:-rotate-[30deg] lg:-rotate-[45deg] xl:-rotate-[35deg]
            opacity-70 z-10 object-cover mt-18 bottom-15 sm:-bottom-1 lg:-bottom-20 xl:-bottom-10 -left-10 sm:-left-13 lg:-left-10 xl:-left-15" />
            <img src="/images/portrait.png" alt="Foreground" className="relative z-20 left-13 bottom-18 sm:left-10 sm:-bottom-1 h-[300px] w-[300px] object-cover lg:-bottom-[126px] xl:-bottom-[26px] xl:left-20 lg:h-[400px] lg:w-[350px] xl:h-[500px] xl:w-full" />
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col justify-center px-2 sm:px-6 overflow-hidden h-full">
          <p className={`text-[#2c3e50] ${cookie.className} text-5xl lg:text-7xl xl:text-8xl mb-2 lg:mb-0 w-full text-center lg:text-left`}>
            Who am I?
          </p>

          <div className="flex flex-col">
            <p className={`text-base sm:text-xs lg:text-lg xl:text-xl text-left z-30 relative text-[#405d3f] mb-3 ${playfairRegular.className}`}>
              "I'm a passionate massage therapist dedicated to helping people feel their best—wherever they are. With Serenity Touch, I bring a calm, rejuvenating experience straight to your doorstep. My mission is to create moments of peace in your day through thoughtful, personalized care.
            </p>
            <p className={`text-base sm:text-xs lg:text-lg xl:text-xl text-left z-30 relative text-[#405d3f] mb-3 ${playfairRegular.className}`}>
              Whether you're recovering from stress, managing pain, or simply in need of deep relaxation, each session is tailored to meet your unique needs. I believe in the power of healing through touch and the importance of self-care as part of a balanced lifestyle.
            </p>
            <p className={`text-base sm:text-xs lg:text-lg xl:text-xl text-left z-30 relative text-[#405d3f] mb-3 ${playfairRegular.className}`}>
              Let Serenity Touch be your space to pause, breathe, and reconnect — <a className="font-semibold">with yourself.</a>"
            </p>
            <p className={`text-base sm:text-xs lg:text-lg xl:text-xl text-left z-30 relative text-[#405d3f] mb-3 ${playfairBold.className}`}>
              Jane Doe - Masseuse
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[750px] xl:h-[800px] overflow-hidden">
        <img
          src="/images/aboutCover.jpg"
          alt="About Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#405d3f] opacity-40 mix-blend-multiply z-0"></div>

        <div className="overflow-hidden rounded-2xl absolute inset-0 flex flex-col items-center justify-start my-6 mx-auto bg-white w-[90%] sm:w-[90%] md:w-[90%] lg:w-4/5 max-w-[1600px] p-6 sm:p-10">
          <div
            className={`${cookie.className} text-center text-5xl sm:text-5xl md:text-[70px] text-[#e7d882] mb-6 underline`}
          >
            Meet the Team
          </div>

          {/* Scrollable content container */}
          <div className="w-full max-h-[550px] overflow-y-auto lg:max-h-none lg:overflow-y-visible overflow-x-hidden">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8 sm:gap-x-12 sm:px-8">
              {teamMembers.map((member, index) => {
                const isLastOdd =
                  teamMembers.length % 2 !== 0 && index === teamMembers.length - 1;
                return (
                  <div
                    key={index}
                    className={`
            flex flex-col justify-center items-center w-40 sm:w-48 md:w-56 group
            ${isLastOdd ? 'col-span-2 lg:col-span-1 lg:justify-self-auto justify-self-center' : ''}
          `}
                  >
                    <div className="relative rounded-full overflow-hidden w-24 h-24 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:h-50 lg:w-50">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover object-center transition-opacity duration-100"
                      />
                      <div className="absolute inset-0 bg-[#405d3f] opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full" />
                    </div>
                    <div className="mt-4 flex flex-col justify-center items-center text-center">
                      <div className={`text-lg sm:text-xl md:text-2xl ${playfairBold.className}`}>
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
          <h2 className={`${cookie.className} text-center text-5xl sm:text-6xl md:text-[70px] text-[#2c3e50]`}>
            Our Services
          </h2>
        </div>
        <div className="max-h-[700px] overflow-y-auto lg:overflow-y-visible lg:max-h-[800px] xl:max-h-[700px]">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {[0, 1, 2].map((col) => (
              <div
                key={col}
                className="flex flex-col gap-8 justify-center items-center h-full mt-1"
              >
                {services.slice(col * 3, col * 3 + 3).map((service, index) => (
                  <div
                    key={index}
                    className="group flex flex-row sm:flex-col lg:flex-row gap-4 items-center justify-center bg-white p-4 rounded-xl transition duration-200 w-full max-w-md sm:h-[22rem] lg:h-[14rem] xl:h-[10rem]"
                  >
                    {/* Image container */}
                    <div className="rounded-full w-20 h-20 sm:w-28 sm:h-28 flex justify-center items-center overflow-hidden shrink-0">
                      <img
                        loading="lazy"
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>

                    {/* Text content */}
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
  )
}
