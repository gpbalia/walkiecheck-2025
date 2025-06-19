import { SignUp } from '@clerk/nextjs'
import { Navbar1 } from '@/components/ui/navbar-1'
import { Footerdemo } from '@/components/ui/footer-section'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] via-white to-[#e3f2fd] text-[#1a237e] flex flex-col">
      <Navbar1 />
      <main className="flex-1 flex items-center justify-center pt-20 pb-16">
        <div className="w-full max-w-md mx-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#e3f2fd] p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2962ff]/5 to-transparent rounded-2xl"></div>
            <div className="relative z-10">
              <SignUp 
                appearance={{ 
                  elements: { 
                    card: 'shadow-none bg-transparent', 
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
            </div>
          </div>
        </div>
      </main>
      <Footerdemo />
    </div>
  )
}