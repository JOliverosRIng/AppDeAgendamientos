import {

  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,

  PieChart,
  Pie,
  Cell,

} from "recharts";

const monthlyData = [

  {
    month: "Ene",
    classes: 40,
  },

  {
    month: "Feb",
    classes: 55,
  },

  {
    month: "Mar",
    classes: 70,
  },

  {
    month: "Abr",
    classes: 65,
  },

  {
    month: "May",
    classes: 90,
  },

  {
    month: "Jun",
    classes: 120,
  },

];

const studentDistribution = [

  {
    name: "Inglés",
    value: 45,
  },

  {
    name: "Matemáticas",
    value: 30,
  },

  {
    name: "Programación",
    value: 25,
  },

];

const COLORS = [
  "#6C63FF",
  "#00C49F",
  "#FFBB28",
];

function AnalyticsCharts() {

  return (

    <div className="
      grid
      grid-cols-1
      xl:grid-cols-2
      gap-6
      mt-10
    ">

      {/* BAR CHART */}
      <div className="
        bg-white
        dark:bg-slate-800
        rounded-3xl
        p-6
        border
        border-gray-100
        dark:border-slate-700
      ">

        <div className="mb-6">

          <h2 className="
            text-2xl
            font-bold
            dark:text-white
          ">

            Clases por Mes 📚

          </h2>

          <p className="text-gray-500 mt-2">

            Evolución mensual de clases.

          </p>

        </div>

        <div className="w-full h-[350px]">

          <ResponsiveContainer>

            <BarChart data={monthlyData}>

              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="classes"
                fill="#6C63FF"
                radius={[10, 10, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* PIE CHART */}
      <div className="
        bg-white
        dark:bg-slate-800
        rounded-3xl
        p-6
        border
        border-gray-100
        dark:border-slate-700
      ">

        <div className="mb-6">

          <h2 className="
            text-2xl
            font-bold
            dark:text-white
          ">

            Distribución de Cursos 🎯

          </h2>

          <p className="text-gray-500 mt-2">

            Estudiantes por área académica.

          </p>

        </div>

        <div className="w-full h-[350px]">

          <ResponsiveContainer>

            <PieChart>

              <Pie
                data={studentDistribution}
                cx="50%"
                cy="50%"
                outerRadius={120}
                dataKey="value"
                label
              >

                {
                  studentDistribution.map(
                    (entry, index) => (

                      <Cell
                        key={index}
                        fill={
                          COLORS[index % COLORS.length]
                        }
                      />

                    )
                  )
                }

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>

  );
}

export default AnalyticsCharts;