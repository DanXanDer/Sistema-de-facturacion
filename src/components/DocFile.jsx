import { useRef } from "react";
import styles from "./styles/docFile.module.css";

export const DocFile = ({ docFile }) => {
  const file = new Blob([docFile.content], { type: "text/plain" });
  const link = useRef();

  const handleTxtDownload = () => {
    console.log(link.current.click());
  };

  return (
    <div className={styles["doc-file"]}>
      <h6>{docFile.date}</h6>
      <a
        ref={link}
        href={window.URL.createObjectURL(file)}
        download={docFile.date + ".txt"}
      ></a>
      <i className="fas fa-file fa-5x"></i>
      <button onClick={handleTxtDownload} className="btn btn-primary">
        Descargar
      </button>
    </div>
  );
};
