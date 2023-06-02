import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/uploadArea.module.css";
import { getFileName, isExcelFile, createTxtContent } from "../helpers";
import { useReadFile } from "../hooks";
import { DocFile } from "./DocFile";
import { FormatoExcel } from "./";
import Swal from "sweetalert2";

export const UploadArea = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [docFiles, setDocFiles] = useState(null);
  const { facturasAgrupadas } = useReadFile({ file });
  const [isExcelValid, setIsExcelValid] = useState(null);
  const fileInput = useRef(null);

  const onChangeFile = ({ target }) => {
    setFile(target.files[0]);
  };

  const onFormClick = () => {
    fileInput.current.click();
  };

  useEffect(() => {
    if (file) {
      const { ok } = isExcelFile(file.name);
      setIsExcelValid(ok);
      if (ok === true) {
        const { name } = getFileName({ file });
        setFileName(name);
      } else {
        Swal.fire(
          "Formato no admitido",
          "Solo se aceptan archivos excel",
          "error"
        );
      }
    }
  }, [file]);

  useEffect(() => {
    if (facturasAgrupadas && isExcelValid) {
      
      const { docFiles } = createTxtContent({ facturasAgrupadas });
      setDocFiles(docFiles);
    }
  }, [facturasAgrupadas]);

  return (
    <>
      <FormatoExcel />
      <div className={styles.wrapper}>
        <form onClick={onFormClick} action="#">
          <input
            ref={fileInput}
            onChange={onChangeFile}
            type="file"
            name="file"
            hidden
          />
          <i className="fas fa-cloud-upload-alt"></i>
          <p>Haz click para subir el archivo</p>
        </form>
        {file && isExcelValid ? (
          <>
            <section className={styles["progress-area"]}></section>
            <section className={styles["uploaded-area"]}>
              <i
                className="fa-sharp fa-solid fa-file-excel fa-lg"
                id="file-icon"
              ></i>
              <div>{fileName}</div>
              <div>✔</div>
            </section>
          </>
        ) : null}
      </div>
      {docFiles ? (
        <div className={styles["download-area"]}>
          {docFiles.map((docFile) => {
            return <DocFile key={docFile.date} docFile={docFile} />;
          })}
        </div>
      ) : null}
    </>
  );
};
