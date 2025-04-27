"use client";

import { motion } from "framer-motion";

export default function ExploreGallery() {
  return (
    <section className="w-full px-4 md:px-8 py-16 bg-black text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto flex flex-col items-center"
      >
        {/* Small Badge */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="mb-4"
        >
          <span className="bg-gray-800 text-gray-300 text-xs px-4 py-1 rounded-full">
            Recently Created
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-center mb-6"
        >
          Create anything with <span className="gradient_text">Optpdoce</span> AI
        </motion.h2>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex items-center gap-6 text-gray-400 mb-12"
        >
          {["All", "Cartoon", "Realistic", "3D"].map((category) => (
            <button key={category} className="hover:text-white transition">
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Layout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col md:flex-row gap-6 mt-10 w-full"
        >

          {/* Left Big Image */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="flex-1">
            <div className="h-[600px] overflow-hidden rounded-2xl">
              <img src="/images/img_11.png" alt="Left" className="w-full h-full object-cover image_hover" />
            </div>
          </motion.div>

          {/* Middle Smaller Images */}
          <div className="flex flex-col gap-6 flex-2">
            <div className="flex gap-6">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="flex-1 h-[290px] overflow-hidden rounded-2xl">
                <img src="/images/img_12.png" alt="Top Left" className="w-full h-full object-cover image_hover" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="flex-1 h-[290px] overflow-hidden rounded-2xl">
                <img src="/images/img_13.png" alt="Top Right" className="w-full h-full object-cover image_hover" />
              </motion.div>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="h-[290px] overflow-hidden rounded-2xl">
              <img src="/images/img_14.png" alt="Bottom" className="w-full h-full object-cover image_hover" />
            </motion.div>
          </div>

          {/* Right Big Image */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="flex-1">
            <div className="h-[600px] overflow-hidden rounded-2xl">
              <img src="/images/img_15.png" alt="Right" className="w-full h-full object-cover image_hover" />
            </div>
          </motion.div>

        </motion.div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mt-14 gradient_btn"
        >
          Go to our AI gallery
        </motion.button>
      </motion.div>
    </section>
  );
}


// 
// 
// "use client";

// export default function ExploreGallery() {
//   return (
//     <section className="w-full px-4 md:px-8 py-16 bg-black text-white">
//       <div className="max-w-7xl mx-auto flex flex-col items-center">
        
//         {/* Small Badge */}
//         <div className="mb-4">
//           <span className="bg-gray-800 text-gray-300 text-xs px-4 py-1 rounded-full">
//             Recently Created
//           </span>
//         </div>

//         {/* Heading */}
//         <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
//           Create anything with <span className="gradient_text">Optpdoce</span> AI
//         </h2>

//         {/* Category Filters */}
//         <div className="flex items-center gap-6 text-gray-400 mb-12">
//           {["All", "Cartoon", "Realistic", "3D"].map((category) => (
//             <button key={category} className="hover:text-white transition">
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Gallery Layout */}
//         <div className="flex flex-col md:flex-row gap-6 mt-10 w-full">

//       {/* Left Big Image */}
//       <div className="flex-1">
//         <div className="h-[600px] overflow-hidden rounded-2xl">
//           <img src="/images/img_11.png" alt="Left" className="w-full h-full object-cover image_hover" />
//         </div>
//       </div>

//       {/* Middle Smaller Images */}
//       <div className="flex flex-col gap-6 flex-2">
//         <div className="flex gap-6">
//           <div className="flex-1 h-[290px] overflow-hidden rounded-2xl">
//             <img src="/images/img_12.png" alt="Top Left" className="w-full h-full object-cover image_hover" />
//           </div>
//           <div className="flex-1 h-[290px] overflow-hidden rounded-2xl">
//             <img src="/images/img_13.png" alt="Top Right" className="w-full h-full object-cover image_hover" />
//           </div>
//         </div>
//         <div className="h-[290px] overflow-hidden rounded-2xl">
//           <img src="/images/img_14.png" alt="Bottom" className="w-full h-full object-cover image_hover" />
//         </div>
//       </div>

//       {/* Right Big Image */}
//       <div className="flex-1">
//         <div className="h-[600px] overflow-hidden rounded-2xl">
//           <img src="/images/img_15.png" alt="Right" className="w-full h-full object-cover image_hover" />
//         </div>
//       </div>

//     </div>

//         {/* Button */}
//         <button className="mt-14 gradient_btn">
//           Go to our AI gallery
//         </button>

//       </div>
//     </section>
//   );
// }
