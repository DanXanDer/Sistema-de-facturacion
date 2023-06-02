import { isExcelDate, parseExcelDate } from ".";
export const createTxtContent = ({ facturasAgrupadas }) => {
  const docFiles = [];
  let ok = true;
  Object.keys(facturasAgrupadas).forEach((date) => {
    let content = "";
    const creationDate = facturasAgrupadas[date][0][2];
    const periodo = parseExcelDate(creationDate).split("/")[1];
    if (!isNaN(Number(date))) {
      facturasAgrupadas[date].forEach((factura) => {
        if (factura.length > 9) {
          ok = false;
        }
        const parsedFacturaDate = factura.map((cell, index) => {
          if (index === 2 || index === 5) {
            const parsedDate = parseExcelDate(cell).split("/").join("");
            return parsedDate;
          } else {
            if (typeof cell === "number") {
              const intNumber = parseInt(cell);
              if (cell !== intNumber) {
                return cell.toFixed(2);
              }
            }
            return cell;
          }
        });

        parsedFacturaDate.splice(3, 0, periodo);
        content += parsedFacturaDate.join("\t") + "\n";
      });
    }
    const numberDate = parseInt(date);
    if (!isNaN(numberDate)) {
      docFiles.push({
        content,
        date: parseExcelDate(date),
      });
    }
  });

  return {
    docFiles,
    ok,
  };
};
