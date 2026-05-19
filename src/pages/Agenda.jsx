import CalendarView from "../components/CalendarView";
import { useState } from "react";
import ClassFormModal from "../components/ClassFormModal";

function Agenda() {
  const [showModal, setShowModal] =
  useState(false);

const [events, setEvents] = useState([
  {
    title: "Clase Inglés",
    start: "2026-05-20T10:00:00",
  },
]);

  return (
    <div>

      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-4xl font-bold">
            Agenda 📅
          </h1>

          <p className="text-gray-500 mt-2">
            Gestiona tus clases y horarios.
          </p>

        </div>

        <button
          onClick={() => setShowModal(true)}
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

         Nueva clase

      </button>

      </div>

      <CalendarView
        events={events}
      />

      {
        showModal && (

          <ClassFormModal

            onClose={() =>
              setShowModal(false)
            }

            onAddEvent={(newEvent) => {

              setEvents([
                ...events,
                newEvent,
              ]);

            }}

          />

        )
      }

    </div>
  );
}

export default Agenda;