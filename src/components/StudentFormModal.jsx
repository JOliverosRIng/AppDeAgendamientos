import { toast } from "react-toastify";

import {useEffect, useState,} from "react";

function StudentFormModal({
  onClose,
  onAddStudent,
  onEditStudent,
  editingStudent,
}) {

  const [formData, setFormData] = useState({

    name: "",
    course: "",
    level: "",
    progress: 0,
    status: "Activo",
    classes: 0,
    email: "",

  });

  useEffect(() => {

    if (editingStudent) {

      setFormData(editingStudent);

    }

  }, [editingStudent]);

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = (e) => {

     e.preventDefault();

     // Validaciones
     if (!formData.name.trim()) {

     toast.warning("El nombre es obligatorio");

     return;
     }

     if (!formData.email.includes("@")) {

     toast.warning("Correo inválido");

     return;
     }

     // Editar
     if (editingStudent) {

     onEditStudent(formData);

     toast.info("Estudiante actualizado.");

     }

     // Crear
     else {

     const newStudent = {

          ...formData,

          id: Date.now(),

     };

     onAddStudent(newStudent);

     toast.success("Estudiante creado.");

     }

     onClose();

     };

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

        <h2 className="text-3xl font-bold mb-8 dark:text-white">

          {
            editingStudent
              ? "Editar estudiante"
              : "Nuevo estudiante"
          }

        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-gray-100 dark:bg-slate-700 dark:text-white outline-none"
            required
          />

          <input
            type="text"
            name="course"
            placeholder="Curso"
            value={formData.course}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-gray-100 dark:bg-slate-700 dark:text-white outline-none"
            required
          />

          <input
            type="text"
            name="level"
            placeholder="Nivel"
            value={formData.level}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-gray-100 dark:bg-slate-700 dark:text-white outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Correo"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-gray-100 dark:bg-slate-700 dark:text-white outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#6C63FF] text-white py-4 rounded-2xl hover:opacity-90 transition"
          >

            {
              editingStudent
                ? "Guardar cambios"
                : "Guardar estudiante"
            }

          </button>

        </form>

      </div>

    </div>
  );
}

export default StudentFormModal;