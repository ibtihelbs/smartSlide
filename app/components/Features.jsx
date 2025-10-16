import React from "react";
const features = [
  {
    id: 1,
    icons: "images/checklist.svg",
    bg: "bg-blue-200",

    title: "Structure Your Content",
    description:
      "Write your presentation in simple, structured format. No design skills needed—just focus on your message.",
  },
  {
    id: 2,
    icons: "images/layout.svg",
    bg: "bg-puple-200",

    title: "Choose Your Layout",
    description:
      "Browse professionally designed layouts that match your content. Pick what works, and SmartSlide auto-fills everything instantly.",
  },
  {
    id: 3,
    bg: "bg-green-200",
    icons: "images/brush.svg",
    title: "Customize Your Way",
    description:
      "Adjust spacing, styling, and colors to match your brand. Advanced users can create custom layouts for ultimate flexibility.",
  },
  {
    id: 4,
    icons: "images/file-arrow-right.svg",
    bg: "bg-yellow-200",

    title: "Export Anywhere",
    description:
      "Download as PowerPoint or Google Slides—fully editable and ready to present.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="max-w-6xl mx-auto py-24 px-6 border-t border-var-border"
    >
      <h2 className="text-3xl font-title font-semibold text-center mb-16">
        Fast Creation, Full Control
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f) => (
          <div
            key={f.title}
            className={`p-6 border ${f.bg} border-var-border rounded-2xl bg-var-card hover:shadow-md transition`}
          >
            <div className="w-16 h-16 flex mb-2 justify-center items-center border-gray-300  border-2 rounded-xl ">
              <img src={f.icons} alt={f.title} />
            </div>
            <h3 className="font-medium text-lg mb-2 font-title">{f.title}</h3>
            <p className="text-var-muted text-sm">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
