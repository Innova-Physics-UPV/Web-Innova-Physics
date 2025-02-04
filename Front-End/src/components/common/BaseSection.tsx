import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface BaseSectionProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

const BaseSection: React.FC<BaseSectionProps> = ({title, children, className = ""}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      viewport={{ once: true }}
      className={`relative max-w-screen-xl mx-auto px-2 py-10 bg-background rounded-2xl z-10 shadow-lg space-y-6 mb-30 ${className}`}
    >
      <div className="container mx-auto">
        {title && <h2 className="text-3xl font-bold text-center">{title}</h2>}
        {children}
      </div>
    </motion.div>
  );
};

export default BaseSection;