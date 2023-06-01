import { groupFacturas, iterateJSONData } from "../helpers";
import { useEffect, useState } from "react";

export const useReadFile = ({ file }) => {
  const [facturasAgrupadas, setFacturasAgrupadas] = useState();
  useEffect(() => {
    if (file) {
      const lector = new FileReader();
      lector.onload = ({ target }) => {
        const data = target.result;
        const book = XLSX.read(data, { type: "binary" });
        const page = book.Sheets[book.SheetNames[0]];
        const dataJSON = XLSX.utils.sheet_to_json(page, { header: 1 });
        iterateJSONData({ dataJSON, page });
        console.log(dataJSON[2]);
        setFacturasAgrupadas(groupFacturas({ dataJSON }));
      };
      lector.readAsBinaryString(file);
    }
  }, [file]);

  return {
    facturasAgrupadas,
  };
};
