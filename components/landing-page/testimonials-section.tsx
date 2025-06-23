"use client";
import { TestimonialsColumn, Testimonial } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials: Testimonial[] = [
  {
    text: "WalkieCheck made our set operations so much smoother. The audit trail is a game changer!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Jamie Lee",
    role: "1st AD",
  },
  {
    text: "Finally, a tool built for film crews. Assigning and tracking walkies is now effortless.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Alex Kim",
    role: "Production Coordinator",
  },
  {
    text: "The real-time collaboration keeps everyone on the same page, even on the busiest days.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Morgan Patel",
    role: "Locations Manager",
  },
  {
    text: "The reporting features are a lifesaver for our production office. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Chris Evans",
    role: "Production Office Manager",
  },
  {
    text: "WalkieCheck's intuitive dashboard makes managing equipment a breeze.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Samantha Green",
    role: "Sound Department Head",
  },
  {
    text: "We love the transparency and accountability WalkieCheck brings to our workflow.",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "David Lin",
    role: "Producer",
  },
  {
    text: "The support team is fantastic and always ready to help.",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    name: "Priya Singh",
    role: "Props Master",
  },
  {
    text: "WalkieCheck has become an essential tool for our crew.",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    name: "Carlos Martinez",
    role: "Key Grip",
  },
  {
    text: "From check-in to check-out, everything is tracked and organized.",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    name: "Emily Chen",
    role: "Script Supervisor",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsSection() {
  return (
    <section className="bg-white py-20 relative" id="testimonials">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6a4cff]/5 via-transparent to-[#e3f2fd]/20"></div>
      <div className="container z-10 mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg border-[#6a4cff] text-[#6a4cff] bg-white/90 backdrop-blur-sm shadow-sm">Testimonials</div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-6 text-[#6a4cff] text-center">What our users say</h2>
          <p className="text-center mt-6 opacity-75 text-gray-700 max-w-[480px] text-lg">
            See what our customers have to say about us.
          </p>
        </motion.div>
        <div 
          className="flex justify-center gap-6 lg:gap-8 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden"
          aria-label="Customer testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
} 