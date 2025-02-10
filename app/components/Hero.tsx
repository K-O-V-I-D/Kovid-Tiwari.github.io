"use client";
import AnimatedText from "./AnimatedText";
import { useEffect, useState } from "react";
import ExperienceTag from "./ui/ExperienceTag";

export default function Hero() {
  const data = {
    experience: "Junior",
    infoOne: `Greetings! Final year Integrated MTech Computer Science Engineering student at Vellore Institute of Technology, Bhopal specialization in Cyber Security & Digital Forensics.`,
    infoTwo: `Driven by a deep passion for Secured Software Development. Always wants to deep dive into the tech world to learn, improve and develop new skills every day.`,
  };

  const roles = ["Developer", "Security Analyst", "Cloud Geek", "Software Tester", "Coder"];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 1000); // Change role every 3 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div
      style={{
        height: "calc(100vh - 80px)",
      }}
      className="cursor-auto md:cursor-none flex justify-center items-center py-20 p-2 font-sans mix-blend-difference text-white"
    >
      <div className="flex flex-col justify-center items-center">
        <ExperienceTag value={data.experience} />
        
        <br />

        <div className="wrapper h2 mt-5 relative text-center">
          {roles.map((role, index) => (
            <strong
              key={index}
              className={`absolute transition-opacity duration-1000 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ whiteSpace: "nowrap", fontSize: "5rem", display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '1vh', width: '100%' }} // Increase font size
            >
              {role.split("").map((letter, i) => (
                <span
                  key={i}
                  className="inline-block transition-transform duration-200"
                  style={{
                    animation: index === activeIndex ? `fadeIn 0.03s ${i * 0.03}s forwards` : "none",
                  }}
                >
                  {letter}
                </span>
              ))}
            </strong>
          ))}
        </div>

        <br />

        <div className="mt-6 text-sm sm:flex sm:gap-4 justify-between items-center">
          <div className="w-80 h-32 mb-3 sm:mb-0">
            <AnimatedText text={data.infoOne} />
          </div>
          <div className="w-80 h-32">
            <AnimatedText text={data.infoTwo} />
          </div>
        </div>
      </div>

      {/* Add Tailwind animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
