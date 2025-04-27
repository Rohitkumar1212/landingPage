"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function FaqWithImage() {
  const faqs = [
    {
      question: "What is an optpdoce text-to-voice platform?",
      answer: "Optpdoce's text-to-voice platform uses AI to instantly transform written text into realistic, human-like voiceovers in multiple languages and tones.",
    },
    {
      question: "How does a ThinkAi text-to-voice platform work?",
      answer: "ThinkAi’s platform analyzes your input text using deep learning models and generates high-quality audio files that sound natural and expressive, suitable for any project.",
    },
    {
      question: "Can I customize the voice of the generated speech?",
      answer: "Yes! You can choose from a variety of voices, accents, speaking speeds, and emotional tones to perfectly match your brand or project requirements.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-4 md:px-8 py-16 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          viewport={{ once: false }}
          className="flex-1"
        >
          <img
            src="/images/img_16.png"
            alt="FAQ Visual"
            className="rounded-2xl object-contain w-full h-[500px]"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          viewport={{ once: false }}
          className="flex-1"
        >
          
          {/* Small Badge */}
          <div className="mb-4">
            <span className="bg-purple-100 text-purple-800 text-xs px-4 py-1 rounded-full">
              Creative Approach
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Questions?{" "}
            <span className="bg-gradient-to-r from-[#6A41FB] to-[#F49957] bg-clip-text text-transparent">
              We have
            </span>{" "}
            Answers.
          </h2>

          {/* FAQs List */}
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b pb-4">
                
                {/* Question */}
                <div
                  onClick={() => toggleFAQ(idx)}
                  className="flex justify-between items-center cursor-pointer hover:text-[#6A41FB] transition"
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <span className="text-2xl">
                    {openIndex === idx ? "−" : "+"}
                  </span>
                </div>

                {/* Answer */}
                {openIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-gray-600 text-base leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}

              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}


// "use client";

// import { useState } from "react";

// export default function FaqWithImage() {
//   const faqs = [
//     {
//       question: "What is an optpdoce text-to-voice platform?",
//       answer: "Optpdoce's text-to-voice platform uses AI to instantly transform written text into realistic, human-like voiceovers in multiple languages and tones.",
//     },
//     {
//       question: "How does a ThinkAi text-to-voice platform work?",
//       answer: "ThinkAi’s platform analyzes your input text using deep learning models and generates high-quality audio files that sound natural and expressive, suitable for any project.",
//     },
//     {
//       question: "Can I customize the voice of the generated speech?",
//       answer: "Yes! You can choose from a variety of voices, accents, speaking speeds, and emotional tones to perfectly match your brand or project requirements.",
//     },
//   ];

//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="w-full px-4 md:px-8 py-16 bg-white text-black">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        
//         {/* Left Image */}
//         <div className="flex-1">
//           <img
//             src="/images/img_16.png"
//             alt="FAQ Visual"
//             className="rounded-2xl object-contain w-full h-[500px]"
//           />
//         </div>

//         {/* Right Content */}
//         <div className="flex-1">
          
//           {/* Small Badge */}
//           <div className="mb-4">
//             <span className="bg-purple-100 text-purple-800 text-xs px-4 py-1 rounded-full">
//               Creative Approach
//             </span>
//           </div>

//           {/* Main Heading */}
//           <h2 className="text-3xl md:text-5xl font-bold mb-8">
//             Questions?{" "}
//             <span className="bg-gradient-to-r from-[#6A41FB] to-[#F49957] bg-clip-text text-transparent">
//               We have
//             </span>{" "}
//             Answers.
//           </h2>

//           {/* FAQs List */}
//           <div className="space-y-6">
//             {faqs.map((faq, idx) => (
//               <div key={idx} className="border-b pb-4">
                
//                 {/* Question */}
//                 <div
//                   onClick={() => toggleFAQ(idx)}
//                   className="flex justify-between items-center cursor-pointer hover:text-[#6A41FB] transition"
//                 >
//                   <span className="text-lg font-medium">{faq.question}</span>
//                   <span className="text-2xl">
//                     {openIndex === idx ? "−" : "+"}
//                   </span>
//                 </div>

//                 {/* Answer */}
//                 {openIndex === idx && (
//                   <div className="mt-4 text-gray-600 text-base leading-relaxed transition-all duration-300">
//                     {faq.answer}
//                   </div>
//                 )}

//               </div>
//             ))}
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }
