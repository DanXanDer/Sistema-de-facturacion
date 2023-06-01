export const groupFacturas = ({ dataJSON }) => {
  const facturasAgrupadas = {};
  dataJSON.forEach((row, index) => {
    if (index > 0) {
      const fechaEmision = row[2];

      if (!facturasAgrupadas.hasOwnProperty(fechaEmision)) {
        facturasAgrupadas[fechaEmision] = [];
      }
      facturasAgrupadas[fechaEmision].push(row);
    }
  });
  return facturasAgrupadas
};
