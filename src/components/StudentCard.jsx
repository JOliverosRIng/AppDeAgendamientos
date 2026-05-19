import { motion } from "framer-motion";

function StudentCard({
  student,
  onClick,
}) {

  return (

    <motion.div
      onClick={() => onClick(student)}

      initial={{ opacity: 0, y: 20 }}

      animate={{ opacity: 1, y: 0 }}

      whileHover={{
        scale: 1.03,
      }}

      transition={{
        duration: 0.3,
      }}

      className="
          w-full
          min-h-[260px]
          bg-white
          dark:bg-slate-800
          p-6
          rounded-3xl
          shadow-sm
          border
          border-gray-100
          dark:border-slate-700
          cursor-pointer
      "
    >

      {/* Avatar */}
      <div className="flex items-center gap-4">

        <div className="
          w-14
          h-14
          rounded-full
          bg-[#6C63FF]
          flex
          items-center
          justify-center
          text-white
          font-bold
          text-xl
        ">

          {student.name.charAt(0)}

        </div>

        <div>

          <h3 className="font-bold text-lg dark:text-white">
            {student.name}
          </h3>

          <p className="text-gray-500 text-sm">
            {student.course}
          </p>

        </div>

      </div>

      {/* Progress */}
      <div className="mt-6">

        <div className="flex justify-between text-sm mb-2">

          <span className="text-gray-500">
            Progreso
          </span>

          <span className="font-semibold dark:text-white">
            {student.progress}%
          </span>

        </div>

        <div className="
          w-full
          h-3
          bg-gray-200
          dark:bg-slate-700
          rounded-full
          overflow-hidden
        ">

          <motion.div
            initial={{ width: 0 }}

            animate={{
              width: `${student.progress}%`,
            }}

            transition={{
              duration: 0.8,
            }}

            className="h-full bg-[#6C63FF]"
          />

        </div>

      </div>

      {/* Footer */}
      <div className="mt-6 flex justify-between items-center">

        <span className="
          text-sm
          px-3
          py-1
          rounded-full
          bg-green-100
          text-green-700
          dark:bg-green-900/30
          dark:text-green-400
        ">

          {student.status}

        </span>

        <span className="text-sm text-gray-500">

          {student.classes} clases

        </span>

      </div>

    </motion.div>

  );
}

export default StudentCard;