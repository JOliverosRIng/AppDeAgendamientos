import DashboardCard from "../components/DashboardCard";
import StudentsTable from "../components/StudentsTable";
import PerformanceChart from "../components/PerformanceChart";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
  return (
    <div>

      {/* Header */}
      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-4xl font-bold">
            Dashboard 👩‍🏫
          </h1>

          <p className="text-gray-500 mt-2">
            Bienvenida a tu plataforma académica.
          </p>

        </div>

        <button
          onClick={() => navigate("/agenda")}
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
          Agendar nueva clase
        </button>

      </div>

      {/* Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <DashboardCard
          title="Clases hoy"
          value="5"
          subtitle="+2 pendientes"
        />

        <DashboardCard
          title="Estudiantes"
          value="28"
          subtitle="+3 nuevos"
        />

        <DashboardCard
          title="Ingresos"
          value="$1.2M"
          subtitle="+18%"
        />

        <DashboardCard
          title="Satisfacción"
          value="98%"
          subtitle="Excelente"
        />

      </section>

      {/* Main Grid */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-10">

        <div className="xl:col-span-2">

          <StudentsTable />

        </div>

        <div>

          <PerformanceChart />

        </div>

      </section>

    </div>
  );
}

export default Home;