export const isExcelFile = (fileName ) => {
  const splittedFileNameByWords = fileName.split(".");
  const fileExtension = splittedFileNameByWords[splittedFileNameByWords.length - 1];
  if (fileExtension === "xlsx") {
    return {
        ok: true
    }
  }
  else{
    return{
        ok: false,
    }
  }
};
