import CalendarView from "../components/CalendarView";

function Agenda() {
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

        <button className="bg-[#6C63FF] text-white px-6 py-3 rounded-2xl hover:opacity-90 transition">
          Nueva reserva
        </button>

      </div>

      <CalendarView />

    </div>
  );
}

export default Agenda;