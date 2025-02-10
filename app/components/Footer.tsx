"use client";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { socials } from "../data";

const EMAIL = "kovidtiwarifeb3@gmail.com";
export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });

  const words = EMAIL.split("");

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.1, backgroundColor: "#333" },
    tap: { scale: 0.95 },
  };

  const MotionLink = motion(Link);

  return (
    <footer className="cursor-auto md:cursor-none bg-white mix-blend-difference text-black h-[40vh] flex flex-col justify-center items-end p-2">
      <motion.div
        ref={ref}
        className="tracking-widest text-lg sm:text-2xl md:text-3xl lg:text-4xl mt-5 break-words text-center font-serif flex gap-1"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {words.map((word, index) => (
          <motion.span key={index} variants={wordVariants}>
            {word}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        className="flex gap-6 mt-5 justify-center items-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={iconVariants}
      >
        <MotionLink
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          whileHover={{ scale: 1.2, color: "#0e76a8" }}
          whileTap={{ scale: 0.9 }}
        >
          <Linkedin size={30} />
        </MotionLink>
        <MotionLink
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          whileHover={{ scale: 1.2, color: "#333" }}
          whileTap={{ scale: 0.9 }}
        >
          <Github size={30} />
        </MotionLink>
        <MotionLink
          href="https://www.geeksforgeeks.org/user/kovidtiwari19/"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256" style={{ mixBlendMode: "normal" }}>
            <g fill="#0d0d0d" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
              <g transform="scale(5.33333,5.33333)">
                <path d="M29.035,24c-0.021,-0.329 -0.035,-0.661 -0.035,-1c0,-6.08 2.86,-10 7,-10c3.411,0 6.33,2.662 7,7h2l0.001,-9h-2.001c0,0 -0.533,1.506 -1,1.16c-1.899,-1.066 -3.723,-1.132 -6.024,-1.132c-5.8,0 -10.976,5.232 -10.976,11.892c0,0.364 0.021,0.723 0.049,1.08h-2.099c0.029,-0.357 0.05,-0.716 0.05,-1.08c0,-6.66 -5.176,-11.892 -10.976,-11.892c-2.301,0 -4.125,0.065 -6.024,1.132c-0.467,0.346 -1,-1.16 -1,-1.16h-2.001l0.001,9h2c0.67,-4.338 3.589,-7 7,-7c4.14,0 7,3.92 7,10c0,0.339 -0.014,0.671 -0.035,1h-18.965v2h1.009c1.083,0 1.977,0.861 1.999,1.943c0.038,1.846 0.216,4.063 0.992,5.057c1.269,1.625 3,3 8,3c5.022,0 9.92,-4.527 11,-10h2c1.08,5.473 5.978,10 11,10c5,0 6.731,-1.375 8,-3c0.776,-0.994 0.954,-3.211 0.992,-5.057c0.022,-1.082 0.917,-1.943 1.999,-1.943h1.009v-2zM11.477,33.73c-1.605,0 -4.155,-0.006 -4.477,-1.73c-0.109,-0.583 -0.091,-2.527 -0.057,-4.046c0.025,-1.087 0.912,-1.954 2,-1.954h10.057c-0.794,4.781 -3.985,7.73 -7.523,7.73zM41,32c-0.322,1.724 -2.872,1.73 -4.477,1.73c-3.537,0 -6.729,-2.949 -7.523,-7.73h10.057c1.088,0 1.975,0.867 2,1.954c0.034,1.519 0.052,3.463 -0.057,4.046z"></path>
              </g>
            </g>
          </svg>
        </MotionLink>
        <MotionLink
          href="https://x.com/TiwariKovid?t=iRFRNFvfGRD6egAff8J-3Q&s=08"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256" style={{ mixBlendMode: "normal" }}>
            <g fill="#0d0d0d" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
              <g transform="scale(5.33333,5.33333)">
                <path d="M42,12.429c-1.323,0.586 -2.746,0.977 -4.247,1.162c1.526,-0.906 2.7,-2.351 3.251,-4.058c-1.428,0.837 -3.01,1.452 -4.693,1.776c-1.344,-1.425 -3.261,-2.309 -5.385,-2.309c-4.08,0 -7.387,3.278 -7.387,7.32c0,0.572 0.067,1.129 0.193,1.67c-6.138,-0.308 -11.582,-3.226 -15.224,-7.654c-0.64,1.082 -1,2.349 -1,3.686c0,2.541 1.301,4.778 3.285,6.096c-1.211,-0.037 -2.351,-0.374 -3.349,-0.914c0,0.022 0,0.055 0,0.086c0,3.551 2.547,6.508 5.923,7.181c-0.617,0.169 -1.269,0.263 -1.941,0.263c-0.477,0 -0.942,-0.054 -1.392,-0.135c0.94,2.902 3.667,5.023 6.898,5.086c-2.528,1.96 -5.712,3.134 -9.174,3.134c-0.598,0 -1.183,-0.034 -1.761,-0.104c3.271,2.071 7.155,3.285 11.324,3.285c13.585,0 21.017,-11.156 21.017,-20.834c0,-0.317 -0.01,-0.633 -0.025,-0.945c1.45,-1.024 2.7,-2.316 3.687,-3.792"></path>
              </g>
            </g>
          </svg>
        </MotionLink>
        <MotionLink
          className=""
          href="/assets/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          locale={false}
        >
          <motion.button
            className="bg-black text-white p-2 rounded-xl font-serif"
            variants={buttonVariants}
            whileHover={{ scale: 1.1, backgroundColor: "#333" }}
            whileTap={{ scale: 0.95}}
          >
            Resume
          </motion.button>
        </MotionLink>
      </motion.div>
    </footer>
  );
}
