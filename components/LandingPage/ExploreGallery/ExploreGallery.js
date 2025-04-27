"use client";

export default function ExploreGallery() {
  return (
    <section className="w-full px-4 md:px-8 py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Small Badge */}
        <div className="mb-4">
          <span className="bg-gray-800 text-gray-300 text-xs px-4 py-1 rounded-full">
            Recently Created
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          Create anything with <span className="bg-gradient-to-r from-[#6A41FB] to-[#F49957] bg-clip-text text-transparent">Optpdoce</span> AI
        </h2>

        {/* Category Filters */}
        <div className="flex items-center gap-6 text-gray-400 mb-12">
          {["All", "Cartoon", "Realistic", "3D"].map((category) => (
            <button key={category} className="hover:text-white transition">
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Layout */}
        <div className="flex flex-col md:flex-row gap-6 mt-10 w-full">

      {/* Left Big Image */}
      <div className="flex-1">
        <div className="h-[600px] overflow-hidden rounded-2xl">
          <img src="/images/img_11.png" alt="Left" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Middle Smaller Images */}
      <div className="flex flex-col gap-6 flex-2">
        <div className="flex gap-6">
          <div className="flex-1 h-[290px] overflow-hidden rounded-2xl">
            <img src="/images/img_12.png" alt="Top Left" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 h-[290px] overflow-hidden rounded-2xl">
            <img src="/images/img_13.png" alt="Top Right" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="h-[290px] overflow-hidden rounded-2xl">
          <img src="/images/img_14.png" alt="Bottom" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Right Big Image */}
      <div className="flex-1">
        <div className="h-[600px] overflow-hidden rounded-2xl">
          <img src="/images/img_15.png" alt="Right" className="w-full h-full object-cover" />
        </div>
      </div>

    </div>

        {/* Button */}
        <button className="mt-14 bg-gradient-to-r from-[#6A41FB] to-[#F49957] text-white px-6 py-3 rounded-full font-semibold hover:opacity-80 transition">
          Go to our AI gallery
        </button>

      </div>
    </section>
  );
}
