import React from "react";

const Hero = () => {
  return (
    <section className="text-center max-w-3xl mx-auto py-32 px-6">
      <h1 className=" text-4xl font-title   md:text-5xl font-bold mb-6 leading-tight">
        Build presentations 10x faster — without l compromises.
      </h1>
      <p className="text-lg text-var-muted mb-10">
        SmartSlide turns your content into polished presentations instantly.
        Write your script, choose your layout, and we'll handle the
        formatting—giving you speed without sacrificing control.
      </p>
      <form className="flex justify-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-3 rounded-full border border-var-border bg-white w-64 focus:outline-none focus:ring-2 focus:ring-var-accent"
        />
        <button
          type="submit"
          className="px-5 py-3 rounded-full bg-var-accent text-white hover:opacity-90 transition"
        >
          Join Waitlist
        </button>
      </form>
      <p className="text-sm text-var-muted mt-3">
        Launching soon — be the first to get early access.
      </p>
    </section>
  );
};

export default Hero;
