import {useEffect,useState,} from "react";
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

  const [showFormModal, setShowFormModal] = useState(false);

  const [editingStudent, setEditingStudent] =
  useState(null);

  useEffect(() => {

    const savedStudents = localStorage.getItem("students");

    if (savedStudents && JSON.parse(savedStudents).length > 0) {

      setStudents(JSON.parse(savedStudents));

    } else {

      setStudents(initialStudents);

    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "students",
      JSON.stringify(students)
    );

  }, [students]);

  const filteredStudents = students.filter(
    (student) =>
      student.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const handleAddStudent = (student) => {

  setStudents([
    student,
    ...students,
  ]);

};

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

const handleEditStudent = (updatedStudent) => {

  const updatedStudents =
    students.map((student) =>

      student.id === updatedStudent.id
        ? updatedStudent
        : student

    );

  setStudents(updatedStudents);

};

  return (
    <div>

      {/* Header */}
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
          onClick={() => setShowFormModal(true)}
          className="bg-[#6C63FF] text-white px-6 py-3 rounded-2xl hover:opacity-90 transition"
        >

          Nuevo estudiante

        </button>

      </div>

      {/* Search */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 mb-8 border border-gray-100 dark:border-slate-700">

        <input
          type="text"
          placeholder="Buscar estudiante..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full bg-transparent outline-none dark:text-white"
        />

      </div>

      {/* Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {filteredStudents.map((student) => (

          <StudentCard
            key={student.id}
            student={student}
            onClick={setSelectedStudent}
          />

        ))}

      </div>

      {/* Modal */}
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