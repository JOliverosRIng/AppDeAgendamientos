import { useState } from "react";

function ClassFormModal({
  onClose,
  onAddEvent,
}) {

  const [formData, setFormData] = useState({

    title: "",
    date: "",
    time: "",

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const newEvent = {

      title: formData.title,

      start: `${formData.date}T${formData.time}`,

    };

    onAddEvent(newEvent);

    onClose();

  };

  return (

    <div className="
      fixed
      inset-0
      bg-black/50
      flex
      items-center
      justify-center
      z-50
    ">

      <div className="
        bg-white
        dark:bg-slate-800
        rounded-3xl
        p-8
        w-[500px]
      ">

        <h2 className="
          text-3xl
          font-bold
          mb-8
          dark:text-white
        ">

          Nueva Clase 📚

        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="title"
            placeholder="Nombre de la clase"
            value={formData.title}
            onChange={handleChange}
            className="
              w-full
              p-4
              rounded-2xl
              bg-gray-100
              dark:bg-slate-700
              dark:text-white
              outline-none
            "
            required
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="
              w-full
              p-4
              rounded-2xl
              bg-gray-100
              dark:bg-slate-700
              dark:text-white
              outline-none
            "
            required
          />

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="
              w-full
              p-4
              rounded-2xl
              bg-gray-100
              dark:bg-slate-700
              dark:text-white
              outline-none
            "
            required
          />

          <div className="flex gap-4">

            <button
              type="button"
              onClick={onClose}
              className="
                flex-1
                py-4
                rounded-2xl
                bg-gray-200
                dark:bg-slate-700
                dark:text-white
              "
            >

              Cancelar

            </button>

            <button
              type="submit"
              className="
                flex-1
                py-4
                rounded-2xl
                bg-[#6C63FF]
                text-white
              "
            >

              Guardar

            </button>

          </div>

        </form>

      </div>

    </div>

  );
}

export default ClassFormModal;