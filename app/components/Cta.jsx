import React from "react";

const Cta = () => {
  return (
    <section
      id="waitlist"
      className="text-center py-24 px-6 border-t border-var-border"
    >
      <h2 className="text-3xl font-title font-semibold mb-4">
        Join the Waitlist
      </h2>
      <p className="text-var-muted mb-8">
        Be the first to experience faster presentation creation. Get early
        access and exclusive perks.
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
        We respect your inbox — no spam, ever.
      </p>
    </section>
  );
};

export default Cta;
