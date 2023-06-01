import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
9
export const FormatoTabla = () => {
  const createData = (codigo, empresa, fechaFactura, hc, facturas, fecha, importe, igv, importeIgv) => {
    return { codigo, empresa, fechaFactura, hc, facturas, fecha, importe, igv, importeIgv };
  }

  const rows = [
    createData(
      219755,
      "Atenciones médicas",
      "01/03/23",
      "HC 181C 2023 Medic Ser",
      "FA.F127-00019410",
      "20/04/2023",
      2620.52,
      471.69,
      3092.21
    ),
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Codigo</TableCell>
            <TableCell align="center">Empresa</TableCell>
            <TableCell align="center">Fecha de factura</TableCell>
            <TableCell align="center">HC</TableCell>
            <TableCell align="center">Facturas</TableCell>
            <TableCell align="center">Fecha</TableCell>
            <TableCell align="center">Importe</TableCell>
            <TableCell align="center">IGV</TableCell>
            <TableCell align="center">Importe + IGV</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.codigo}</TableCell>
              <TableCell align="center">{row.empresa}</TableCell>
              <TableCell align="center">{row.fechaFactura}</TableCell>
              <TableCell align="center">{row.hc}</TableCell>
              <TableCell align="center">{row.facturas}</TableCell>
              <TableCell align="center">{row.fecha}</TableCell>
              <TableCell align="center">{row.importe}</TableCell>
              <TableCell align="center">{row.igv}</TableCell>
              <TableCell align="center">{row.importeIgv}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
