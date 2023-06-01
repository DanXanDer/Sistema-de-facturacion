export const isExcelDate = (date) => {
  if (typeof date === "number") {
    if (Number.isInteger(date) && date > 0) {
      const excelStartDate = new Date("1900-01-01");
      const excelEndDate = new Date("9999-12-31");
      const inputDate = new Date(
        excelStartDate.getTime() + (date - 1) * 24 * 60 * 60 * 1000
      );

      if (inputDate >= excelStartDate && inputDate <= excelEndDate) {
        return true;
      }
    }
  }

  return false;
};
