import { SignUp } from '@clerk/nextjs'
import { Navbar1 } from '@/components/ui/navbar-1'
import { Footerdemo } from '@/components/ui/footer-section'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] via-white to-[#e3f2fd] text-[#1a237e] flex flex-col">
      <Navbar1 />
      <main className="flex-1 flex items-center justify-center py-16">
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