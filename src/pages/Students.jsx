import { useEffect, useState } from "react";

import StudentCard from "../components/StudentCard";
import StudentModal from "../components/StudentModal";
import StudentFormModal from "../components/StudentFormModal";

import { toast } from "react-toastify";

import { students as initialStudents } from "../data/students";

function Students() {

  const [students, setStudents] = useState([]);

  const [selectedStudent, setSelectedStudent] =
    useState(null);

  const [search, setSearch] = useState("");

  const [showFormModal, setShowFormModal] =
    useState(false);

  const [editingStudent, setEditingStudent] =
    useState(null);

  // Cargar estudiantes
  useEffect(() => {

    const savedStudents =
      localStorage.getItem("students");

    if (
      savedStudents &&
      JSON.parse(savedStudents).length > 0
    ) {

      setStudents(JSON.parse(savedStudents));

    } else {

      setStudents(initialStudents);

    }

  }, []);

  // Guardar estudiantes
  useEffect(() => {

    localStorage.setItem(
      "students",
      JSON.stringify(students)
    );

  }, [students]);

  // Filtrar estudiantes
  const filteredStudents = students.filter(
    (student) =>
      student.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  // Agregar estudiante
  const handleAddStudent = (student) => {

    setStudents([
      student,
      ...students,
    ]);

  };

  // Eliminar estudiante
  const handleDeleteStudent = (id) => {

    const updatedStudents =
      students.filter(
        (student) =>
          student.id !== id
      );

    setStudents(updatedStudents);

    setSelectedStudent(null);

    toast.error("Estudiante eliminado");

  };

  // Editar estudiante
  const handleEditStudent = (updatedStudent) => {

    const updatedStudents =
      students.map((student) =>

        student.id === updatedStudent.id
          ? updatedStudent
          : student

      );

    setStudents(updatedStudents);

    toast.info("Estudiante actualizado");

  };

  return (

    <div>

      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-4xl font-bold dark:text-white">
            Estudiantes 👨‍🎓
          </h1>

          <p className="text-gray-500 mt-2">
            Gestiona tus estudiantes y su progreso.
          </p>

        </div>

        <button
          onClick={() => {

            setEditingStudent(null);

            setShowFormModal(true);

          }}
          className="
            bg-[#6C63FF]
            text-white
            px-6
            py-3
            rounded-2xl
            hover:opacity-90
            transition
          "
        >

          Nuevo estudiante

        </button>

      </div>

      {/* SEARCH */}
      <div className="
        bg-white
        dark:bg-slate-800
        rounded-3xl
        p-5
        mb-8
        border
        border-gray-100
        dark:border-slate-700
      ">

        <input
          type="text"
          placeholder="Buscar estudiante..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="
            w-full
            bg-transparent
            outline-none
            dark:text-white
          "
        />

      </div>

      {/* GRID */}
      {
        filteredStudents.length > 0 ? (

          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          ">

            {filteredStudents.map((student) => (

              <StudentCard
                key={student.id}
                student={student}
                onClick={setSelectedStudent}
              />

            ))}

          </div>

        ) : (

          <div className="
            bg-white
            dark:bg-slate-800
            rounded-3xl
            p-16
            text-center
            border
            border-gray-100
            dark:border-slate-700
          ">

            <h2 className="
              text-3xl
              font-bold
              mb-4
              dark:text-white
            ">

              No se encontraron estudiantes 😢

            </h2>

            <p className="text-gray-500">

              Intenta cambiar la búsqueda
              o crear uno nuevo.

            </p>

          </div>

        )
      }

      {/* MODAL DETALLES */}
      <StudentModal
        student={selectedStudent}
        onClose={() =>
          setSelectedStudent(null)
        }
        onDelete={handleDeleteStudent}
        onEdit={(student) => {

          setEditingStudent(student);

          setShowFormModal(true);

          setSelectedStudent(null);

        }}
      />

      {/* MODAL FORMULARIO */}
      {
        showFormModal && (

          <StudentFormModal
            onClose={() => {

              setShowFormModal(false);

              setEditingStudent(null);

            }}
            onAddStudent={handleAddStudent}
            onEditStudent={handleEditStudent}
            editingStudent={editingStudent}
          />

        )
      }

    </div>

  );
}

export default Students;