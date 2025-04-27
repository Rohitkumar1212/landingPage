
"use client";

import { motion } from "framer-motion";

export default function ShowCase() {
  return (
    <section className="w-full px-4 md:px-8 py-12 bg-black text-white">
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto items-center">
        
        {/* Left Part - Big Image + Text */}
        <motion.div 
          className="flex-1 flex flex-col gap-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/images/img_3.png"
            alt="Main Creative"
            className="w-full h-[470px] object-contain rounded-2xl image_hover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />

          {/* Text Content */}
          <div className="flex flex-col gap-4">
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              We're passionate about empowering creatives with the tools they need to <span className="text-pink-400">bring their vision to life</span> — that's why we've developed
            </p>

            {/* Button + Customer Count */}
            <div className="flex items-center gap-6">
              <motion.button 
                className="gradient_btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
              <div className="text-xl font-bold">
                100k+ <span className="text-sm font-normal text-gray-400">Happy Customer</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Part - Grid Images */}
        <motion.div 
          className="flex-1 grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/images/img_4.png"
            alt="Gallery 1"
            className="w-full h-[190px] object-inherit rounded-2xl image_hover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="/images/img_5.png"
            alt="Gallery 2"
            className="w-full h-[190px] object-cover rounded-2xl image_hover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="/images/img_6.png"
            alt="Gallery 3"
            className="w-full h-[400px] object-cover rounded-2xl col-span-2 image_hover"
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

// export default function ShowCase() {
//   return (
//     <section className="w-full px-4 md:px-8 py-12 bg-black text-white">
//       <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto items-center">
        
//         {/* Left Part - Big Image + Text */}
//         <div className="flex-1 flex flex-col gap-6">
//           <img
//             src="/images/img_3.png"
//             alt="Main Creative"
//             className="w-full h-[470px] object-contain rounded-2xl image_hover"
//           />

//           {/* Text Content */}
//           <div className="flex flex-col gap-4">
//             <p className="text-gray-300 text-sm md:text-base leading-relaxed">
//               We're passionate about empowering creatives with the tools they need to <span className="text-pink-400">bring their vision to life</span> — that's why we've developed
//             </p>

//             {/* Button + Customer Count */}
//             <div className="flex items-center gap-6">
//               <button className="gradient_btn">
//                 Get Started
//               </button>
//               <div className="text-xl font-bold">
//                 100k+ <span className="text-sm font-normal text-gray-400">Happy Customer</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Part - Grid Images */}
//         <div className="flex-1 grid grid-cols-2 gap-4">
//           <img
//             src="/images/img_4.png"
//             alt="Gallery 1"
//             className="w-full h-[190px] object-inherit rounded-2xl image_hover"
//           />
//           <img
//             src="/images/img_5.png"
//             alt="Gallery 2"
//             className="w-full h-[190px] object-cover rounded-2xl image_hover"
//           />
//           <img
//             src="/images/img_6.png"
//             alt="Gallery 3"
//             className="w-full h-[400px] object-cover rounded-2xl col-span-2 image_hover"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }
