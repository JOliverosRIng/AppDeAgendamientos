function StudentCard({
  student,
  onClick,
}) {

  return (

    <div
      onClick={() => onClick(student)}
      className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 transition hover:scale-[1.02] duration-300 cursor-pointer"
    >

      {/* Avatar */}
      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-full bg-[#6C63FF] flex items-center justify-center text-white font-bold text-xl">

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

        <div className="w-full h-3 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">

          <div
            className="h-full bg-[#6C63FF]"
            style={{
              width: `${student.progress}%`,
            }}
          />

        </div>

      </div>

    </div>

  );
}

export default StudentCard;