import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [

  {
    month: "Ene",
    income: 400,
  },

  {
    month: "Feb",
    income: 700,
  },

  {
    month: "Mar",
    income: 500,
  },

  {
    month: "Abr",
    income: 900,
  },

  {
    month: "May",
    income: 1200,
  },

  {
    month: "Jun",
    income: 1000,
  },

];

function IncomeChart() {

  return (

    <div className="
      bg-white
      dark:bg-slate-800
      rounded-3xl
      p-6
      border
      border-gray-100
      dark:border-slate-700
      mt-10
    ">

      <div className="mb-8">

        <h2 className="
          text-2xl
          font-bold
          dark:text-white
        ">

          Ingresos Mensuales 📈

        </h2>

        <p className="text-gray-500 mt-2">

          Visualiza el crecimiento financiero.

        </p>

      </div>

      <div className="w-full h-[350px]">

        <ResponsiveContainer>

          <LineChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="income"
              stroke="#6C63FF"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  );
}

export default IncomeChart;