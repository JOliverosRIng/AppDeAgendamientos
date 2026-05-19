import AnalyticsCharts from "../components/AnalyticsCharts";
import { useState } from "react";
import SearchBar from "../components/SearchBar";

function Reports() {
  const [search, setSearch] = useState("");

  <div>
      <h1 className="text-4xl font-bold">
        Reportes 📊
      </h1>

      <p className="text-gray-500 mt-2">
        Estadísticas y métricas académicas.
      </p>
    </div>

  const analytics = [

    {
      title: "Estudiantes Activos",
      value: "48",
      icon: "👨‍🎓",
      growth: "+12%",
    },

    {
      title: "Clases Totales",
      value: "320",
      icon: "📚",
      growth: "+18%",
    },

    {
      title: "Ingresos Mensuales",
      value: "$4,500",
      icon: "💰",
      growth: "+24%",
    },

    {
      title: "Tasa de Pago",
      value: "92%",
      icon: "📈",
      growth: "+8%",
    },

  ];

  const filteredAnalytics =
  analytics.filter((item) =>

    item.title
      .toLowerCase()
      .includes(search.toLowerCase())

  );

  return (

    <div>

      {/* Header */}
      <div className="mb-10">

        <h1 className="
          text-4xl
          font-bold
          dark:text-white
        ">

          Reportes 📊

        </h1>

        <p className="text-gray-500 mt-2">

          Analiza el rendimiento académico
          y financiero.

        </p>

      </div>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {/* KPI Grid */}
      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
      ">

        {filteredAnalytics.map((item, index) => (

          <div
            key={index}
            className="
              bg-white
              dark:bg-slate-800
              rounded-3xl
              p-6
              border
              border-gray-100
              dark:border-slate-700
            "
          >

            <div className="
              flex
              items-center
              justify-between
              mb-6
            ">

              <span className="text-4xl">

                {item.icon}

              </span>

              <span className="
                text-green-500
                font-semibold
              ">

                {item.growth}

              </span>

            </div>

            <h3 className="
              text-gray-500
              mb-2
            ">

              {item.title}

            </h3>

            <h2 className="
              text-4xl
              font-bold
              dark:text-white
            ">

              {item.value}

            </h2>

          </div>

        ))}

      </div>

      <AnalyticsCharts />

    </div>

  );
}

export default Reports;