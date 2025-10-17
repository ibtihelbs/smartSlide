import Image from "next/image";
import { Sparkles, Zap, Layout, ArrowRight } from "lucide-react";
import Form from "./Form";

const Hero = () => {
  return (
    <section className="relative text-center max-w-3xl  mx-auto py-32 px-6 overflow-visible">
      {/* Decorative floating elements */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-blue-100 rounded-full opacity-40 animate-pulse"></div>
      <div
        className="absolute top-20 right-0 w-32 h-32 bg-purple-100 rounded-full opacity-30 animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute bottom-40 left-10 w-20 h-20 bg-pink-100 rounded-full opacity-35 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Speed indicator badge - floating top right */}
      <div className="absolute -top-10 -right-20 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-xl border border-gray-100 animate-bounce">
        <Zap className="w-5 h-5 text-yellow-500" />
        <span className="text-sm font-semibold text-gray-800">10x Faster</span>
      </div>

      {/* Processing indicator - floating top left */}
      <div className="absolute top-6 -left-24 flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-lg border border-gray-100">
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <div
            className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
        <span className="text-xs text-gray-600 font-medium">
          Auto-formatting
        </span>
      </div>

      {/* Main heading with SVG underline */}
      <h1 className="relative text-4xl m-auto font-title max-w-xl md:text-5xl font-bold leading-tight mb-8 z-10">
        Build presentations 10x faster{" "}
        <span className="relative inline-block">
          <span className="relative z-10">no compromises.</span>
          <svg
            className="absolute -bottom-2 left-0 w-full"
            viewBox="0 0 300 20"
          >
            <path
              d="M5 15 Q 150 5, 295 15"
              stroke="#ef4444"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </h1>

      <p className="text-lg text-var-muted mb-10 m-auto max-w-2xl relative z-10">
        SmartSlide turns your content into polished presentations instantly.
        Write your script, choose your layout, and we'll handle the formatting.
      </p>

      {/* Floating slide preview mockups */}
      <div className="mb-12 flex justify-center gap-3 relative z-10 scale-90 md:scale-100">
        <div className="w-40 h-28 md:w-48 md:h-32 border-blue-400 border-4 rounded-lg shadow-2xl transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300 flex items-center justify-center group">
          <Image src="/images/hero-1.gif" fill className="rounded-lg" />
        </div>
        <div className="w-40 h-28 md:w-48 md:h-32   rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 flex items-center justify-center group">
          <div className="w-40 h-28 md:w-48 md:h-32 border-green-400 border-4 rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 flex items-center justify-center group">
            <Image src="/images/hero-2.gif" fill className="rounded-lg" />
          </div>
        </div>
        <div className="w-40 h-28 md:w-48 md:h-32   rounded-lg shadow-2xl transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 flex items-center justify-center group">
          <div className="w-40 h-28 md:w-48 md:h-32 border-pink-400 border-4 rounded-lg shadow-2xl transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 flex items-center justify-center group">
            <Image src="/images/hero-3.gif" fill className="rounded-lg" />
          </div>
        </div>
      </div>

      {/* Form component */}
      <div className="relative z-10">
        <Form />
      </div>

      <p className="text-sm text-var-muted mt-3 relative z-10">
        Launching soon — be the first to get early access.
      </p>

      {/* Subtle background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-full blur-3xl opacity-20 -z-10"></div>
    </section>
  );
};

export default Hero;
