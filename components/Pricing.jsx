"use client";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import plans from "../data/plans";
import Title from "./Title";

export function Pricing() {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <Title
          title="Simple, Transparent Pricing"
          details="Choose the perfect plan for your business. All plans include our
            premium support and quality guarantee."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-8 border-2 transition-all hover:shadow-xl ${
                plan.popular
                  ? "border-primary shadow-lg scale-105"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-8 my-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm text-pretty">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-foreground hover:bg-secondary/80 border-2 border-border"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
