export const getFileName = ({ file }) => {
  let name = file.name;
  if (name.length >= 26) {
    const splittedByPointFileName = name.split(".");
    const extension = splittedByPointFileName[splittedByPointFileName.length - 1];
    splittedByPointFileName.pop();
    const splittedByCharFileName = splittedByPointFileName.join("").split("");
    name = "";
    for (let i = 0; i < 26; i++) {
      name += splittedByCharFileName[i];
    }
    name += "." + extension;
  }
  return {
    name,
  };
};
