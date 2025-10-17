"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const HowItWorks = () => {
  const howItWorks = [
    {
      id: 1,
      icons: "images/pencil.svg",
      bg: "blue-200",
      title: "Write Your Script",
      description:
        "Type your content in a simple format: Slide 1: Title, Subtitle, Bullet points... SmartSlide understands your structure automatically.",
    },
    {
      id: 2,
      icons: "images/click.svg",
      bg: "pink-200",
      title: "Select a Layout",
      description:
        "Browse layout options designed for your content type. Click to choose, and watch your content auto-fill into beautiful slides.",
    },
    {
      id: 3,
      icons: "images/folder-star.svg",
      bg: "green-200",
      title: "Refine & Export",
      description:
        "Fine-tune spacing and styling to match your vision. Export to PowerPoint or Google Slides when you're ready.",
    },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <section
      id="how"
      className="max-w-5xl mx-auto py-20 px-6 border-t border-var-border"
    >
      <h2 className="text-3xl font-title font-semibold text-center mb-12">
        From Script to Slides in 3 Simple Steps
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Demo Image */}
        <div
          className={clsx("h-full w-full rounded-xl overflow-hidden border-4", {
            "border-blue-200": howItWorks[current].bg === "blue-200",
            "border-pink-200": howItWorks[current].bg === "pink-200",
            "border-green-200": howItWorks[current].bg === "green-200",
          })}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={howItWorks[current].id}
              src={`images/${howItWorks[current].id}.gif`}
              alt="demo"
              className={"object-cover h-full w-full bg-center rounded-xl "}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
        </div>

        {/* Steps List */}
        <div className="col-span-2 flex flex-col gap-6">
          {howItWorks.map((item, index) => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => setCurrent(index)}
              className={clsx(
                "border-2 rounded-xl p-4 flex gap-2.5 transition cursor-pointer",
                current === index
                  ? "border-var-border bg-var-bg/10"
                  : "border-gray-300 hover:bg-gray-100"
              )}
            >
              <div
                className={clsx(
                  "w-24 flex justify-center items-center border-gray-300 border-2 rounded-xl shrink-0",
                  {
                    "bg-blue-200": item.bg === "blue-200",
                    "bg-pink-200": item.bg === "pink-200",
                    "bg-green-200": item.bg === "green-200",
                  }
                )}
              >
                <img
                  className="object-cover"
                  src={item.icons}
                  alt={item.title}
                />
              </div>

              <div>
                <h3 className="font-title font-medium text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-var-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
