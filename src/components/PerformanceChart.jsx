import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "Ene",
    classes: 12,
  },
  {
    month: "Feb",
    classes: 18,
  },
  {
    month: "Mar",
    classes: 24,
  },
  {
    month: "Abr",
    classes: 32,
  },
  {
    month: "May",
    classes: 41,
  },
];

function PerformanceChart() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

      <div className="mb-6">

        <h2 className="text-2xl font-bold">
          Rendimiento
        </h2>

        <p className="text-gray-500 mt-1">
          Crecimiento mensual
        </p>

      </div>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <LineChart data={data}>

          <XAxis dataKey="month" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="classes"
            stroke="#6C63FF"
            strokeWidth={4}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default PerformanceChart;