import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { FormatoTabla } from "./";
import { Typography } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        ></IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export const FormatoExcel = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Mostrar guía de uso
      </Button>
      <BootstrapDialog
        maxWidth="lg"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <Typography
            variant="h5"
            sx={{ textAlign: "center", marginBottom: "20px" }}
          >
            Guia de usuario
          </Typography>
          <Typography>
            1. La tabla a exportar debe empezar desde la primera columna (celda
            A) del Excel
          </Typography>
          <Typography>
          <Typography>
            2. La tabla debe tener el mismo formato que el ejemplo presentado a
            continuación.
          </Typography>
            3. El titulo de las columnas no son relevantes, pero deben estar en la misma posición que la tabla de ejemplo.
          </Typography>
          <Typography
            variant="h6"
            sx={{ textAlign: "center", marginTop: "20px" }}
          >
            Ejemplo de tabla
          </Typography>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <FormatoTabla />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cerrar
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};
