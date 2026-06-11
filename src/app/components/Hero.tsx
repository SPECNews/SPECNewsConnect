import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.h1
      className="glitch"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      SPEC NEWS
    </motion.h1>
  );
}

