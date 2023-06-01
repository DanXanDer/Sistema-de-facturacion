export const parseExcelDate = (date) => {
  const downloadDate = XLSX.SSF.format("dd/mm/yy", new Date(1900, 0, date));
  const year = new Date(1900, 0, date).getFullYear().toString().substring(2);
  return downloadDate.replace("yy", year);
};
