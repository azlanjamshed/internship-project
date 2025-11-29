"use client";
import { motion } from "framer-motion";
export function Hero() {
  return (
    <section className="relative  min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto w-full">
      
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance leading-tight max-w-4xl mx-auto">
            Transforming Ideas Into
            <span className="block text-primary mt-2">Digital Excellence</span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto text-pretty leading-relaxed">
            We craft stunning web experiences that elevate your brand and engage
            your audience. From concept to launch, we bring your vision to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-foreground bg-primary rounded-lg hover:opacity-90 transition-opacity"
            >
              Start Your Project
            </a>

            <a
              href="#portfolio"
              className="w-auto sm:w-auto inline-flex items-center justify-center  px-8 py-4 text-base font-semibold text-foreground bg-transparent border-2 border-border rounded-lg hover:bg-accent transition-colors"
            >
              View Our Work
            </a>
          </div>
        </motion.div>
      </div>

      {/* Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[500px] md:w-[650px] h-[450px] sm:h-[500px] md:h-[650px] bg-primary/10 rounded-full blur-3xl -z-10" />
    </section>
  );
}
