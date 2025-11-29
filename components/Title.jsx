"use client";

import { motion } from "framer-motion";

import React from "react";

const Title = ({ title, details }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center mb-12 md:mb-16"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
        {title}
      </h2>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
        {details}
      </p>
    </motion.div>
  );
};

export default Title;
