import { motion } from "framer-motion";

function DashboardCard({
  title,
  value,
  subtitle,
}) {

  return (
    <motion.div

      initial={{
        opacity: 0,
        y: 30,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      whileHover={{
        scale: 1.03,
      }}

      transition={{
        duration: 0.3,
      }}

      className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 transition-all duration-300"
    >

      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-3 dark:text-white">
        {value}
      </h2>

      <p className="text-green-500 mt-2 text-sm">
        {subtitle}
      </p>

    </motion.div>
  );
}

export default DashboardCard;