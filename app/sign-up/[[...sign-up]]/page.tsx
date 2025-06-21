import { SignUp } from '@clerk/nextjs'
import { Navbar1 } from '@/components/ui/navbar-1'
import { Footerdemo } from '@/components/ui/footer-section'

export default function Page() {
  return (
    <div className="min-h-screen relative overflow-hidden text-[#1a237e] flex flex-col">
      {/* Radiant Background */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8faff] via-[#f0f4ff] to-[#e8f2ff]" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-gradient-to-r from-[#2962ff]/20 to-[#1a237e]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 -right-4 w-96 h-96 bg-gradient-to-l from-[#2962ff]/15 to-[#e3f2fd]/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-[#1a237e]/10 to-[#2962ff]/15 rounded-full blur-3xl animate-pulse delay-2000" />
        
        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent" />
        
        {/* Radial gradient for depth */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at center, transparent 0%, transparent 50%, rgba(248, 250, 255, 0.5) 100%)'
        }} />
      </div>
      
      <Navbar1 />
      <main className="flex-1 flex items-center justify-center py-16 relative z-10">
              <SignUp 
                appearance={{ 
                  elements: { 
              card: 'bg-white rounded-2xl shadow-lg p-8',
                    headerTitle: 'text-2xl font-bold text-[#2962ff] mb-4 text-center', 
                    headerSubtitle: 'mb-6 text-gray-700 text-center', 
                    formButtonPrimary: 'btn-primary w-full py-3 text-base font-semibold', 
                    formButtonReset: 'btn-outline w-full py-3 text-base font-semibold',
                    formFieldInput: 'bg-white border-[#b6ccfa] text-[#1a237e] placeholder:text-gray-500 focus:border-[#2962ff] focus:ring-[#2962ff]',
                    formFieldLabel: 'text-[#1a237e] font-medium',
                    footerActionLink: 'text-[#2962ff] hover:text-[#1a237e] font-medium',
                    dividerLine: 'bg-[#e3f2fd]',
                    dividerText: 'text-gray-600 bg-white'
                  } 
                }} 
              />
      </main>
      <Footerdemo />
    </div>
  )
}