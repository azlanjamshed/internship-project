"use client";
import { Zap, Target, Users, Code, Rocket, Shield } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Optimized performance ensuring your website loads in milliseconds, providing the best user experience.",
    },
    {
      icon: Target,
      title: "Strategic Design",
      description:
        "Data-driven design decisions that align with your business goals and convert visitors into customers.",
    },
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Maintainable, scalable code built with modern best practices and cutting-edge technologies.",
    },
    {
      icon: Users,
      title: "User-Centric",
      description:
        "Intuitive interfaces designed with your users in mind, ensuring seamless navigation and engagement.",
    },
    {
      icon: Rocket,
      title: "Rapid Delivery",
      description:
        "Agile development process that gets your project from concept to launch quickly and efficiently.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description:
        "Enterprise-grade security and reliability ensuring your website is always protected and online.",
    },
  ];

  return (
    <section className=" relativepy-16 px-4 md:py-24 lg:py-32 bg-background">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]"></div>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        {/* <div className="text-center mb-12 md:mb-16"> */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Choose Our Agency
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            We combine creativity, technology, and strategy to deliver
            exceptional digital experiences
          </p>
        </motion.div>

        {/* Features Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"> */}
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
