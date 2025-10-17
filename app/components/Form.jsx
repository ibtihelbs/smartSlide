"use client";
import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subscriberEmail: email }),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! You've been added to our waitlist.",
        });
        setEmail("");
      } else {
        setSubmitStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="flex justify-center gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="px-4 py-3 rounded-full border border-var-border bg-white w-64 focus:outline-none focus:ring-2 focus:ring-var-accent"
          disabled={isSubmitting}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-5 py-3 rounded-full bg-var-accent text-white hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Joining..." : "Join Waitlist"}
        </button>
      </form>

      {submitStatus && (
        <div
          className={`mt-3 px-4 py-2 rounded-full text-sm ${
            submitStatus.type === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {submitStatus.message}
        </div>
      )}
    </div>
  );
};

export default Form;
