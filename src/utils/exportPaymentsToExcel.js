import * as XLSX from "xlsx";

import { saveAs } from "file-saver";

export const exportPaymentsToExcel = (
  payments
) => {

  // Convertir JSON → hoja
  const worksheet =
    XLSX.utils.json_to_sheet(payments);

  // Crear libro
  const workbook =
    XLSX.utils.book_new();

  // Agregar hoja
  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Pagos"
  );

  // Generar archivo
  const excelBuffer =
    XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

  // Blob
  const data = new Blob(
    [excelBuffer],
    {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    }
  );

  // Descargar
  saveAs(
    data,
    "reporte_pagos.xlsx"
  );

};