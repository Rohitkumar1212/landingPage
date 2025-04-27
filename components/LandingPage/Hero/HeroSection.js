"use client";

export default function HeroSection() {
  return (
    <section className="w-full mt-0 md:mt-16 bg-black text-white flex flex-col items-center justify-center px-4 md:px-8 relative overflow-hidden pb-4">
      {/* Left Circle Image */}
      <div className="hidden md:block absolute top-10 left-8">
        <img src="/images/img_1.png" alt="Side Image" className="h-40 w-40 rounded-full object-cover" />
      </div>

      {/* Right Circle Image */}
      {/* <div className="hidden md:block absolute top-10 right-0">
        <img src="/images/img_2.png" alt="Side Image" className="h-40 w-40 rounded-full object-cover" />
      </div> */}
      {/* Right Hero Image */}
  <div className="hidden md:flex absolute top-20 right-8 w-48 h-64 justify-center items-start">
    {/* Top Dashed Border */}
    <div className="absolute top-[-7px] w-48 h-48 border-t-2 border-dashed border-white rounded-full"></div>

    {/* Image */}
    <img
      src="/images/img_2.png"
      alt="Hero"
      className="w-48 h-64 object-cover rounded-t-full"
    />
  </div>

      {/* Main Content */}
      <div className="flex flex-col items-center text-center max-w-2xl z-10 mt-12 md:mt-0">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Best AI Content Platform
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold pb-4 mb-6 gradient_text">
          Image Generate
        </h2>
        <p className="text-gray-400 text-sm md:text-base mb-8 px-4 w-[80%]">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.        </p>

        {/* Search Bar */}
        <div className="flex w-full max-w-md bg-[#343435] rounded-full overflow-hidden p-2">
          <input
            type="text"
            placeholder="An Astronaut riding a horse on mars, hd"
            className="flex-1 px-4 py-2 text-black focus:outline-none text-sm md:text-base placeholder-white"
          />
          <button className="gradient_btn rounded-none rounded-r-full px-6 py-2 text-sm md:text-base">
            Generate Now
          </button>
        </div>

        {/* Popular Tags */}
        <div className="flex items-center mt-6 gap-4">
          <span className="text-gray-400 text-sm">Popular tags:</span>
          <div className="flex flex-wrap justify-center gap-2">
            {["Creative", "Sport", "Animation", "Fantasy"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-[#343435] rounded-full text-xs md:text-sm hover:bg-gray-700 cursor-pointer transition">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
