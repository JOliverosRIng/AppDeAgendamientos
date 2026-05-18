import { motion } from "framer-motion";
import { students } from "../data/students";

function StudentsTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100"
    >

      <div className="flex justify-between items-center mb-6">

        <div>
          <h2 className="text-2xl font-bold">
            Estudiantes
          </h2>

          <p className="text-gray-500 mt-1">
            Seguimiento académico
          </p>
        </div>

        <input
          type="text"
          placeholder="Buscar..."
          className="border border-gray-200 rounded-2xl px-4 py-2"
        />

      </div>

      <table className="w-full">

        <thead>

          <tr className="text-left text-gray-400 border-b border-gray-100">

            <th className="pb-4">Nombre</th>
            <th className="pb-4">Curso</th>
            <th className="pb-4">Progreso</th>
            <th className="pb-4">Estado</th>

          </tr>

        </thead>

        <tbody>

          {students.map((student) => (

            <tr
              key={student.id}
              className="border-b border-gray-50 hover:bg-gray-50 transition"
            >

              <td className="py-5 font-semibold">
                {student.name}
              </td>

              <td>
                {student.course}
              </td>

              <td>
                {student.progress}
              </td>

              <td>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  {student.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </motion.div>
  );
}

export default StudentsTable;