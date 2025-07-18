import amruthImg from "@/assets/amruth_XXL.jpeg";

export const HeroSection = () => (
  <section className="h-screen bg-[#d8d1b9]/40 dark:bg-[#525150] text-black dark:text-white px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row items-center justify-center h-full gap-8 md:gap-16">
      {/* Image on the left */}
      <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-120 lg:h-120 overflow-hidden rounded-full shrink-0 drop-shadow-[0_0_30px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
        <img
          src={amruthImg}
          alt="Amruth Gouda"
          className="w-full h-full object-cover object-[54%_center] filter sepia dark:sepia-0  dark:grayscale"
        />
      </div>

      {/* Text content on the right */}
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left max-w-xl">
        <p className="text-base sm:text-lg mb-2">&lt; Hello, World! /&gt;</p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4">
          AMRUTH GOUDA
          <span className="ml-2 blink text-3xl lg:text-5xl">_</span>
        </h1>

        <p className="text-sm sm:text-base lg:text-lg mb-6">
          Open to job opportunities worldwide. Passionate about building
          polished, intuitive, and thoughtful digital experiences that leave a
          mark.
        </p>

        {/* Flip effect button */}
        <button className="group relative min-h-[44px] px-6 sm:px-8 md:px-10 py-2 sm:py-3 rounded-3xl bg-white dark:bg-white text-black dark:text-[#2b2925] font-semibold overflow-hidden hover:bg-gray-900 transition text-sm sm:text-base">
          <span className="block relative h-full">
            <span className="block transition-transform duration-500 ease-[cubic-bezier(.51,.92,.24,1.15)] group-hover:-translate-y-full">
              Contact
            </span>
            <span className="block absolute top-full left-0 w-full transition-transform duration-500 ease-[cubic-bezier(.51,.92,.24,1.15)] group-hover:translate-y-[-100%] text-white dark:text-white">
              Contact
            </span>
          </span>
        </button>
      </div>
    </div>
  </section>
);
