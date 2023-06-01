export const iterateJSONData = ({ dataJSON, page }) => {
  for (let i = 1; i < dataJSON.length; i++) {
    const row = dataJSON[i]; // Recorrer cada celda de la fila

    for (let j = 0; j < row.length; j++) {
      const merge =
        page["!merges"] &&
        page["!merges"].find((m) => {
          return m.s.c <= j && m.e.c >= j && m.s.r <= i && m.e.r >= i;
        }); // Si la celda es parte de una combinación de celdas, obtener el valor de la celda combinada y asignarlo a la celda actual

      if (merge) {
        const mergeStartColumn = merge.s.c;
        const mergeStartRow = merge.s.r;
        const mergeEndColumn = merge.e.c;
        const mergeEndRow = merge.e.r;

        const mergedCellValue =
          page[
            XLSX.utils.encode_cell({ r: mergeStartRow, c: mergeStartColumn })
          ].v; // Asignar el valor de la celda combinada a cada celda de la combinación

        for (let k = mergeStartRow; k <= mergeEndRow; k++) {
          for (let l = mergeStartColumn; l <= mergeEndColumn; l++) {
            // Verificar si la fila existe en el arreglo dataJSON
            if (!dataJSON[k]) {
              dataJSON[k] = [];
            } // Asignar el valor de la celda combinada a la celda actual
            dataJSON[k][l] = mergedCellValue;
          }
        }
      }
    }
  }
};
