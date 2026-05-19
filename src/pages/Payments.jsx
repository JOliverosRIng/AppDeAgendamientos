import { payments } from "../data/payments";
import PaymentTable from "../components/PaymentTable";
import IncomeChart from "../components/IncomeChart";

function Payments() {

  const totalIncome = payments
    .filter(
      (payment) =>
        payment.status === "Pagado"
    )
    .reduce(
      (acc, payment) =>
        acc + payment.amount,
      0
    );

  const pendingPayments =
    payments.filter(
      (payment) =>
        payment.status === "Pendiente"
    ).length;

  const completedPayments =
    payments.filter(
      (payment) =>
        payment.status === "Pagado"
    ).length;

  return (

    <div>

      {/* Header */}
      <div className="mb-10">

        <h1 className="text-4xl font-bold dark:text-white">

          Pagos 💳

        </h1>

        <p className="text-gray-500 mt-2">

          Gestiona ingresos y pagos de estudiantes.

        </p>

      </div>

      {/* Stats */}
      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-6
        mb-10
      ">

        {/* Income */}
        <div className="
          bg-white
          dark:bg-slate-800
          rounded-3xl
          p-6
          border
          border-gray-100
          dark:border-slate-700
        ">

          <p className="text-gray-500 mb-2">

            Ingresos Totales

          </p>

          <h2 className="
            text-4xl
            font-bold
            dark:text-white
          ">

            ${totalIncome}

          </h2>

        </div>

        {/* Pending */}
        <div className="
          bg-white
          dark:bg-slate-800
          rounded-3xl
          p-6
          border
          border-gray-100
          dark:border-slate-700
        ">

          <p className="text-gray-500 mb-2">

            Pagos Pendientes

          </p>

          <h2 className="
            text-4xl
            font-bold
            text-yellow-500
          ">

            {pendingPayments}

          </h2>

        </div>

        {/* Completed */}
        <div className="
          bg-white
          dark:bg-slate-800
          rounded-3xl
          p-6
          border
          border-gray-100
          dark:border-slate-700
        ">

          <p className="text-gray-500 mb-2">

            Pagos Completados

          </p>

          <h2 className="
            text-4xl
            font-bold
            text-green-500
          ">

            {completedPayments}

          </h2>

        </div>

      </div>

      {/* Table */}
      <PaymentTable payments={payments} />

      <IncomeChart />

    </div>

  );
}

export default Payments;