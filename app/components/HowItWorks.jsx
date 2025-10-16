import React from "react";

const HowItWorks = () => {
  const howItWorks = [
    {
      id: 1,
      icons: "images/pencil.svg",
      bg: "bg-blue-200",
      title: "Write Your Script",
      description:
        "Type your content in a simple format: Slide 1: Title, Subtitle, Bullet points... SmartSlide understands your structure automatically.",
    },
    {
      id: 2,
      icons: "images/click.svg",
      bg: "bg-pink-200",
      title: "Select a Layout",
      description:
        "Browse layout options designed for your content type. Click to choose, and watch your content auto-fill into beautiful slides.",
    },
    {
      id: 3,
      icons: "images/folder-star.svg",
      bg: "bg-green-200",
      title: "Refine & Export",
      description:
        "Fine-tune spacing and styling to match your vision. Export to PowerPoint or Google Slides when you're ready.",
    },
  ];
  return (
    <section
      id="how"
      className="max-w-5xl mx-auto py-20 px-6 border-t border-var-border"
    >
      <h2 className="text-3xl font-title font-semibold text-center mb-12">
        From Script to Slides in 3 Simple Steps
      </h2>
      <div className="grid md:grid-cols-3 gap-10 ">
        <div className="h-full w-full bg-gray-300 border-gray-300  border-2 rounded-xl"></div>
        <div className="col-span-2 flex flex-col gap-6">
          {howItWorks.map((items) => (
            <div
              className={`border-gray-300 border-2 rounded-xl p-4 flex gap-2.5 `}
            >
              <div
                className={`w-24 ${items.bg} flex justify-center items-center border-gray-300  border-2 rounded-xl`}
              >
                <img
                  className="object-cover "
                  src={items.icons}
                  alt={items.title}
                />
              </div>
              <div>
                <h3 className="font-title font-medium text-lg mb-2">
                  {items.title}
                </h3>
                <p className="text-var-muted">{items.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
