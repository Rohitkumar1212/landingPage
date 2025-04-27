"use client";

export default function Showcase() {
  return (
    <section className="w-full px-4 md:px-8 py-12 bg-black text-white">
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto items-center">
        
        {/* Left Part - Big Image + Text */}
        <div className="flex-1 flex flex-col gap-6">
          <img
            src="/images/img_3.png"
            alt="Main Creative"
            className="w-full h-[470px] object-cover rounded-2xl"
          />

          {/* Text Content */}
          <div className="flex flex-col gap-4">
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              We're passionate about empowering creatives with the tools they need to <span className="text-pink-400">bring their vision to life</span> — that's why we've developed
            </p>

            {/* Button + Customer Count */}
            <div className="flex items-center gap-6">
              <button className="bg-gradient-to-r from-[#6A41FB] to-[#F49957] text-white px-6 py-2 rounded-full text-sm md:text-base font-semibold hover:opacity-80 transition">
                Get Started
              </button>
              <div className="text-xl font-bold">
                100k+ <span className="text-sm font-normal text-gray-400">Happy Customer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Part - Grid Images */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          <img
            src="/images/img_4.png"
            alt="Gallery 1"
            className="w-full h-[190px] object-cover rounded-2xl"
          />
          <img
            src="/images/img_5.png"
            alt="Gallery 2"
            className="w-full h-[190px] object-cover rounded-2xl"
          />
          <img
            src="/images/img_6.png"
            alt="Gallery 3"
            className="w-full h-[400px] object-cover rounded-2xl col-span-2"
          />
        </div>

      </div>
    </section>
  );
}
