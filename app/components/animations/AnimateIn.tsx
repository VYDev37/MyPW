"use client";

import { motion } from "framer-motion";

export default function AnimateIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 40, damping: 15, duration: 0.8 }}>
      {children}
    </motion.div>
  );
}