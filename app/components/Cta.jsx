import React from "react";
import Form from "./Form";

const Cta = () => {
  return (
    <section
      id="waitlist"
      className="text-center py-24 px-6 border-t border-var-border"
    >
      <h2 className="text-3xl font-title font-semibold mb-4">
        Join the Waitlist
      </h2>
      <div>
        <p className="text-var-muted ">
          Be the first to experience faster presentation creation.
        </p>
        <p className="text-var-muted mb-8 ">
          Get early access and exclusive perks.
        </p>
      </div>
      <Form />
      <p className="text-sm text-var-muted mt-3">
        We respect your inbox — no spam, ever.
      </p>
    </section>
  );
};

export default Cta;
