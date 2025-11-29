"use client";

import { motion } from "framer-motion";
import testimonials from "../data/testimonials";
import Title from "./Title";
export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <Title
          title="What Our Clients Say"
          details="Don't just take our word for it. Here's what our clients have to say
            about working with us."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-base md:text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
