import { useEffect, useState } from "react";

const phrases = [
  "HI, I'M KISHAN",
  "WEB DEVELOPER",
  "ML ENTHUSIAST",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[index];
    if (charIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentPhrase.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % phrases.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, index]);

  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 py-12 bg-transparent">
  
  {/* Text Section */}
  <div className="flex-1 w-full text-center md:text-left">
    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 min-h-[3rem] leading-snug">
      {displayText || <span className="invisible">HI, I'M KISHAN</span>}
      <span className="border-r-2 border-white animate-pulse ml-1"></span>
    </h1>

    <p className="text-base sm:text-lg max-w-md mx-auto md:mx-0 mb-6">
      Passionate about clean code, modern UI, and building smart web solutions.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
      <a
        href="/images/Kishan_Resume.pdf"
        download="Kishan_Resume"
        className="px-9 py-4 font-semibold rounded-full border-2 border-white text-white transition duration-300 ease-in-out hover:bg-white hover:text-indigo-900 hover:scale-105"
      >
        Download Resume
      </a>

      <a
        href="mailto:kishangaur160962@gmail.com"
        className="px-9 py-4 font-semibold rounded-full border-2 border-white text-white transition duration-300 ease-in-out hover:bg-white hover:text-indigo-900 hover:scale-105">
        Hire Me
      </a>
    </div>
  </div>

  {/* Avatar Section */}
  <div className="flex-1 flex justify-center">
    <img
      src="/images/kishan-enhance.png"
      alt="Kishan Avatar"
      className="w-40 sm:w-52 h-40 sm:h-52 rounded-full border-4 border-white shadow-2xl"
    />
  </div>
</section>

  );
}

