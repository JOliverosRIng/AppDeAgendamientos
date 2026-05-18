function ClassCard({ student, subject, time }) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">

      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg">
            {student}
          </h3>

          <p className="text-gray-500">
            {subject}
          </p>
        </div>

        <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
          Confirmada
        </span>
      </div>

      <p className="mt-4 text-sm text-gray-400">
        {time}
      </p>
    </div>
  );
}

export default ClassCard;