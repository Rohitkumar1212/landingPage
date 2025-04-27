"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full mt-0 md:mt-16 bg-black text-white flex items-center justify-center px-4 md:px-8 overflow-hidden pb-8">
      
      {/* Wrapper Flex */}
      <div className="flex w-full max-w-10xl items-center justify-between">
        
        {/* Left Image */}
        <motion.div 
          className="hidden md:flex flex-1 justify-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="/images/img_1.png"
            alt="Left Side"
            className="h-40 w-40 rounded-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Center Content */}
        <motion.div 
          className="flex flex-col items-center text-center flex-[2] md:flex-[4] px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Best AI Content Platform
          </motion.h1>

          <motion.h2 
            className="text-2xl md:text-4xl font-bold pb-4 mb-6 gradient_text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Image Generate
          </motion.h2>

          <motion.p 
            className="text-gray-400 text-sm md:text-base mb-8 w-[80%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            className="flex w-full max-w-lg bg-[#343435] rounded-full overflow-hidden p-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <input
              type="text"
              placeholder="An Astronaut riding a horse on mars, hd"
              className="flex-1 px-4 py-2 bg-transparent placeholder-gray-300 text-gray-300 focus:outline-none text-sm md:text-base"
            />
            <button className="gradient_btn rounded-none rounded-r-full px-6 py-2 text-sm md:text-base">
              Generate Now
            </button>
          </motion.div>

          {/* Popular Tags */}
          <motion.div 
            className="flex items-center mt-6 gap-4 flex-wrap justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="text-gray-400 text-sm">Popular tags:</span>
            {["Creative", "Sport", "Animation", "Fantasy"].map((tag) => (
              <motion.span
                key={tag}
                className="px-3 py-1 bg-[#343435] rounded-full text-xs md:text-sm hover:bg-gray-700 cursor-pointer transition"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          className="hidden md:flex flex-1 justify-center relative"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Dashed Border Circle */}
          <div className="absolute top-[-10px] w-48 h-48 border-t-2 border-dashed border-white rounded-full"></div>
          
          <motion.img
            src="/images/img_2.png"
            alt="Right Side"
            className="h-64 w-48 object-cover rounded-t-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

      </div>
    </section>
  );
}

// without animation
// "use client";

// export default function HeroSection() {
//   return (
//     <section className="w-full mt-0 md:mt-16 bg-black text-white flex items-center justify-center px-4 md:px-8 overflow-hidden pb-8">
      
//       {/* Wrapper Flex */}
//       <div className="flex w-full max-w-10xl items-center justify-between">
        
//         {/* Left Image */}
//         <div className="hidden md:flex flex-1 justify-center">
//           <img
//             src="/images/img_1.png"
//             alt="Left Side"
//             className="h-40 w-40 rounded-full object-cover"
//           />
//         </div>

//         {/* Center Content */}
//         <div className="flex flex-col items-center text-center flex-[2] md:flex-[4] px-4">
//           <h1 className="text-3xl md:text-5xl font-bold mb-4">
//             Best AI Content Platform
//           </h1>
//           <h2 className="text-2xl md:text-4xl font-bold pb-4 mb-6 gradient_text">
//             Image Generate
//           </h2>
//           <p className="text-gray-400 text-sm md:text-base mb-8 w-[80%]">
//             It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
//           </p>

//           {/* Search Bar */}
//           <div className="flex w-full max-w-lg bg-[#343435] rounded-full overflow-hidden p-2">
//             <input
//               type="text"
//               placeholder="An Astronaut riding a horse on mars, hd"
//               className="flex-1 px-4 py-2 bg-transparent placeholder-gray-300 text-gray-300 focus:outline-none text-sm md:text-base"
//             />
//             <button className="gradient_btn rounded-none rounded-r-full px-6 py-2 text-sm md:text-base">
//               Generate Now
//             </button>
//           </div>

//           {/* Popular Tags */}
//           <div className="flex items-center mt-6 gap-4 flex-wrap justify-center">
//             <span className="text-gray-400 text-sm">Popular tags:</span>
//             {["Creative", "Sport", "Animation", "Fantasy"].map((tag) => (
//               <span
//                 key={tag}
//                 className="px-3 py-1 bg-[#343435] rounded-full text-xs md:text-sm hover:bg-gray-700 cursor-pointer transition"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="hidden md:flex flex-1 justify-center relative">
//           {/* Dashed Border Circle */}
//           <div className="absolute top-[-10px] w-48 h-48 border-t-2 border-dashed border-white rounded-full"></div>
          
//           <img
//             src="/images/img_2.png"
//             alt="Right Side"
//             className="h-64 w-48 object-cover rounded-t-full"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }


