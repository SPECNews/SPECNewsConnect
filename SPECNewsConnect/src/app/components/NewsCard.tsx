import { motion } from "framer-motion";

interface NewsCardProps {
  title: string;
}

export default function NewsCard({ title }: NewsCardProps) {
  return (
    <motion.div className="card">
      {title}
    </motion.div>
  );
}