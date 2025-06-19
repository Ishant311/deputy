import { useEffect, useState } from "react";

const HeroSection = () => {
  const [text, setText] = useState("");
  const phrases = [
    "Success stories",
    "Happier teams",
    "Healthy profits"
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout;

    if (!deleting && charIndex <= currentPhrase.length) {
      timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 100);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else if (!deleting && charIndex > currentPhrase.length) {
      timeout = setTimeout(() => setDeleting(true), 1000);
    } else if (deleting && charIndex < 0) {
      setDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <section className="bg-[#0A0084] text-white pt-24 pb-20 px-4 sm:px-8 md:px-12 flex flex-col md:flex-row items-center justify-between">
      <div className="flex-1 space-y-6 max-w-xl text-center md:text-left">
        <p className="text-yellow-400 font-extrabold text-5xl md:text-6xl font-serif">
          {text}
          <span className="animate-pulse">|</span>
        </p>
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight font-sans">start here</h1>
        <p className="text-lg md:text-xl leading-relaxed font-light">
          Simplify employee scheduling, timesheets and HR in one place.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <button className="bg-teal-400 hover:bg-teal-500 text-blue-900 font-bold px-6 py-3 rounded-lg transition">
            Try Deputy for free
          </button>
          <button className="border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-blue-900 font-bold px-6 py-3 rounded-lg transition">
            Book a demo
          </button>
        </div>
        <p className="text-sm text-white/80 pt-2">
           Up to 31 days, no credit card required
        </p>
      </div>

      <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
        <div className="relative w-full max-w-2xl">
          <div className="rounded-3xl overflow-hidden  shadow-lg">
            <img
              src="https://a.storyblok.com/f/64010/1250x818/06b665c4bd/deputy-hero-us-png.png/m/1250x0"
              alt="Trek Team"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
