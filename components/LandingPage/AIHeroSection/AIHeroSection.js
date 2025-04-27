"use client";

export default function AIHeroSection() {
  return (
    <section className="w-full px-4 md:px-8 py-12 bg-white text-black">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-7xl mx-auto">
        
        {/* Left - Big Image */}
        <div className="flex-1 relative">
          <div className="p-2 rounded-3xl">
            <img
              src="/images/img_7.png"
              alt="AI Generated"
              className="w-full h-[600px] object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Small Label */}
          <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-xs w-fit">
            Introduce opticode AI
          </span>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Unlocking the Power of <span className="gradient_text">AI for a Smarter</span> Future 
          </h1>

          {/* Small Thumbnails */}
          <div className="flex gap-4 mt-4">
            {["img_8.png", "img_9.png", "img_10.png"].map((thumb, idx) => (
              <img
                key={idx}
                src={`/images/${thumb}`}
                alt={`Thumbnail ${idx}`}
                className="w-20 h-20 object-cover rounded-xl"
              />
            ))}
          </div>

          {/* Try Now Button + Description */}
          <div className="flex items-center gap-6 mt-6">
            <button className="bg-gradient-to-r from-[#6A41FB] to-[#F49957] text-white px-6 py-2 rounded-full text-sm md:text-base font-semibold hover:opacity-80 transition">
              Try Now
            </button>

            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
