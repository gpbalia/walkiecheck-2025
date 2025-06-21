"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          y: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div 
                  className="p-6 lg:p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full bg-white" 
                  key={`${index}-${i}`}
                >
                  <blockquote className="text-gray-800 text-sm lg:text-base leading-relaxed">
                    "{text}"
                  </blockquote>
                  <div className="flex items-center gap-3 mt-5">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={image}
                        alt={`${name}, ${role}`}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <cite className="font-medium tracking-tight leading-5 text-[#6a4cff] not-italic">
                        {name}
                      </cite>
                      <span className="leading-5 opacity-60 tracking-tight text-sm">
                        {role}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
}; 