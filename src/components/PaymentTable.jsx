function PaymentTable({ payments }) {

  return (

    <div className="
      bg-white
      dark:bg-slate-800
      rounded-3xl
      p-6
      border
      border-gray-100
      dark:border-slate-700
      overflow-x-auto
    ">

      <h2 className="
        text-2xl
        font-bold
        mb-6
        dark:text-white
      ">

        Historial de Pagos

      </h2>

      <table className="w-full">

        <thead>

          <tr className="
            text-left
            border-b
            border-gray-200
            dark:border-slate-700
          ">

            <th className="pb-4 dark:text-white">
              Estudiante
            </th>

            <th className="pb-4 dark:text-white">
              Método
            </th>

            <th className="pb-4 dark:text-white">
              Fecha
            </th>

            <th className="pb-4 dark:text-white">
              Monto
            </th>

            <th className="pb-4 dark:text-white">
              Estado
            </th>

          </tr>

        </thead>

        <tbody>

          {payments.map((payment) => (

            <tr
              key={payment.id}
              className="
                border-b
                border-gray-100
                dark:border-slate-700
              "
            >

              {/* Student */}
              <td className="
                py-5
                dark:text-white
              ">

                {payment.student}

              </td>

              {/* Method */}
              <td className="
                py-5
                text-gray-500
              ">

                {payment.method}

              </td>

              {/* Date */}
              <td className="
                py-5
                text-gray-500
              ">

                {payment.date}

              </td>

              {/* Amount */}
              <td className="
                py-5
                font-semibold
                dark:text-white
              ">

                ${payment.amount}

              </td>

              {/* Status */}
              <td className="py-5">

                <span
                  className={`
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-medium

                    ${
                      payment.status === "Pagado"
                        ? `
                          bg-green-100
                          text-green-700
                          dark:bg-green-900/30
                          dark:text-green-400
                        `
                        : `
                          bg-yellow-100
                          text-yellow-700
                          dark:bg-yellow-900/30
                          dark:text-yellow-400
                        `
                    }
                  `}
                >

                  {payment.status}

                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}

export default PaymentTable;