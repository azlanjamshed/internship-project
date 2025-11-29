"use client";

import { motion } from "framer-motion";
import features from "../data/features";
import Title from "./Title";

export function Features() {
  return (
    <section className=" relativepy-16 px-4 md:py-24 lg:py-32 bg-background">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]"></div>
      <div className="max-w-7xl mx-auto">
        <Title
          title=" Why Choose Our Agency"
          details="We combine creativity, technology, and strategy to deliver
            exceptional digital experiences"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-start p-6 rounded-lg border border-border bg-card hover:border-primary/50  duration-300 shadow-sm hover:shadow-lg transition-all"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
