function StudentModal({
  student,
  onClose,
  onDelete,
  onEdit,
}) {

  if (!student) return null;

  return (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white dark:bg-slate-800 w-[500px] rounded-3xl p-8 relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-black dark:hover:text-white"
        >
          ✕
        </button>

        {/* Avatar */}
        <div className="flex items-center gap-5 mb-8">

          <div className="w-20 h-20 rounded-full bg-[#6C63FF] flex items-center justify-center text-white text-3xl font-bold">

            {student.name.charAt(0)}

          </div>

          <div>

            <h2 className="text-3xl font-bold dark:text-white">
              {student.name}
            </h2>

            <p className="text-gray-500">
              {student.course}
            </p>

          </div>

        </div>

        {/* Info */}
        <div className="space-y-5">

          <div>
            <p className="text-gray-500 text-sm">
              Email
            </p>

            <p className="font-semibold dark:text-white">
              {student.email}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Nivel
            </p>

            <p className="font-semibold dark:text-white">
              {student.level}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Progreso
            </p>

            <p className="font-semibold dark:text-white">
              {student.progress}%
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Clases
            </p>

            <p className="font-semibold dark:text-white">
              {student.classes}
            </p>
          </div>

        </div>

        {/* Actions */}
        <div className="flex gap-4 mt-10">

          <button
               onClick={() =>
                    onEdit(student)
          }
          className="flex-1 bg-[#6C63FF] text-white py-3 rounded-2xl hover:opacity-90 transition"
     >

          Editar

     </button>

          <button
            onClick={() =>
              onDelete(student.id)
            }
            className="flex-1 bg-red-500 text-white py-3 rounded-2xl hover:opacity-90 transition"
          >

            Eliminar

          </button>

        </div>

      </div>

    </div>
  );
}

export default StudentModal;