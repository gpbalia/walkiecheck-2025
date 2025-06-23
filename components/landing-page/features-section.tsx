const features = [
  {
    icon: "🎬",
    title: "Purpose-Built for Film/TV",
    description:
      "Designed specifically for production teams to manage walkie inventories with ease and precision.",
    gradient: "from-[#2962ff] to-[#6a4cff]",
  },
  {
    icon: "🤝",
    title: "Real-Time Collaboration",
    description:
      "Invite team members, assign roles, and track changes live for seamless on-set and office workflows.",
    gradient: "from-[#f50057] to-[#ff8a80]",
  },
  {
    icon: "📝",
    title: "Full Audit Trail",
    description:
      "Every action is logged and time-stamped, ensuring accountability and transparency for your equipment.",
    gradient: "from-[#00bfa5] to-[#a7ffeb]",
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-white py-20 relative" id="features">
      <div className="absolute inset-0 bg-gradient-to-r from-[#e3f2fd]/20 to-[#f5f7fa]/20"></div>
      <div className="container z-10 mx-auto px-4 relative">
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg border-[#6a4cff] text-[#6a4cff] bg-white/90 backdrop-blur-sm shadow-sm">
              Features
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-6 text-[#6a4cff] text-center">
            What Makes WalkieCheck Different?
          </h2>
          <p className="text-center mt-6 opacity-75 text-gray-700 max-w-[480px] text-lg">
            Built for film/TV crews: real-time collaboration, audit trails, and
            intuitive workflows.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mt-16">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="group relative p-8 rounded-3xl bg-white/60 backdrop-blur-lg border border-white/30 shadow-2xl shadow-slate-900/10 transition-all duration-300 hover:scale-105 hover:bg-white/80"
            >
              <div
                className={`absolute -top-7 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl shadow-lg transition-all duration-300 group-hover:scale-110`}
                aria-hidden="true"
              >
                {feature.icon}
              </div>
              <div className="mt-12 text-center">
                <h3 className="text-xl lg:text-2xl font-bold text-[#1a237e] mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-base lg:text-lg">
                {feature.description}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 