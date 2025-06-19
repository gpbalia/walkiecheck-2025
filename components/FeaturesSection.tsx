const features = [
  {
    icon: "🎬",
    title: "Purpose-Built for Film/TV",
    description: "Designed specifically for production teams to manage walkie inventories with ease and precision."
  },
  {
    icon: "🤝",
    title: "Real-Time Collaboration",
    description: "Invite team members, assign roles, and track changes live for seamless on-set and office workflows."
  },
  {
    icon: "📝",
    title: "Full Audit Trail",
    description: "Every action is logged and time-stamped, ensuring accountability and transparency for your equipment."
  }
]

export function FeaturesSection() {
  return (
    <section className="bg-white py-20 relative" id="features">
      <div className="absolute inset-0 bg-gradient-to-r from-[#e3f2fd]/20 to-[#f5f7fa]/20"></div>
      <div className="container z-10 mx-auto px-4 relative">
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg border-[#6a4cff] text-[#6a4cff] bg-white/90 backdrop-blur-sm shadow-sm">Features</div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-6 text-[#6a4cff] text-center">What Makes WalkieCheck Different?</h2>
          <p className="text-center mt-6 opacity-75 text-gray-700 max-w-[480px] text-lg">
            Built for film/TV crews: real-time collaboration, audit trails, and intuitive workflows.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mt-16">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-white rounded-2xl border border-[#e3f2fd] shadow-lg hover:shadow-xl flex flex-col items-center p-8 lg:p-10 text-center hover:scale-105 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#6a4cff] focus-within:ring-offset-2 relative group"
              tabIndex={0}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6a4cff]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="mb-6 text-5xl relative z-10" aria-hidden="true">{feature.icon}</div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#6a4cff] mb-4 relative z-10">{feature.title}</h3>
              <p className="text-gray-700 text-base lg:text-lg relative z-10">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 