import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#2962ff]/5 via-white to-[#e3f2fd]/30 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#2962ff]/[0.02] opacity-50"></div>
      <div className="container z-10 mx-auto px-4 relative">
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg border-[#2962ff] text-[#2962ff] bg-white/90 backdrop-blur-sm shadow-sm">Inventory Management for Film/TV</div>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-6 text-[#2962ff] text-center">WalkieCheck: A Smarter Way to Manage Radios on Set</h1>
          <p className="text-center mt-6 opacity-75 text-gray-700 max-w-[480px] text-lg">
            WalkieCheck is a powerful, production-grade inventory management web application built for the film and television industry. Streamline the handling of walkie-talkie equipment across departments, projects, and teams—on set or in the office.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center w-full sm:w-auto">
            <Link 
              href="/sign-up" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#2962ff] text-white font-bold text-lg shadow-lg hover:bg-[#1a237e] transition-all hover:scale-105 duration-200 focus:outline-none focus:ring-2 focus:ring-[#2962ff] focus:ring-offset-2"
            >
              Sign Up
            </Link>
            <Link 
              href="/sign-in" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-[#2962ff] text-[#2962ff] font-bold text-lg bg-white/90 backdrop-blur-sm hover:bg-[#2962ff] hover:text-white transition-all hover:scale-105 duration-200 focus:outline-none focus:ring-2 focus:ring-[#2962ff] focus:ring-offset-2"
            >
              Sign In
            </Link>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <div className="w-[280px] h-[560px] sm:w-[320px] sm:h-[640px] bg-white rounded-3xl flex items-center justify-center shadow-2xl border border-[#e3f2fd] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2962ff]/5 to-transparent rounded-3xl"></div>
            <Image 
              src="/window.svg" 
              alt="WalkieCheck app interface preview" 
              width={180} 
              height={360} 
              className="opacity-80 w-auto h-auto max-w-[140px] sm:max-w-[180px] relative z-10" 
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
} 