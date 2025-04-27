import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  image?: string;
  title: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ image, title, subtitle, className = "", children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 ,rotateY: 90}}
      whileInView={{ opacity: 1, y: 0,rotateY: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className={`w-full p-4 rounded-xl shadow-md bg-background ${className}`}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="rounded-lg shadow-lg object-cover w-full mb-4"
          onError={(e) => e.target.src = "/imagenes/team/avatar.webp"} // Cambia a la imagen por defecto si ocurre un error
        />
      )}
      <h3 className="text-xl font-semibold">{title}</h3>
      {subtitle && <p className="text-sm text-description">{subtitle}</p>}
      {children}
    </motion.div>
  );
};

export default Card;
