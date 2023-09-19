const colors = require("colors");

function row(arr_files = [""], arr_folders = [""], ocult = false) {
  
  const arr_concat = arr_files.concat( arr_folders);
  
  let str_file = (ocult) ? "./\t../\t".red : ""

  arr_concat.forEach((file) => {
    str_file += file + "\t";
  });
  return str_file + "\n";
}

function list(arr_files = [""], arr_folders = [""], ocult = false) {
    
  const arr_concat = arr_files.concat( arr_folders);

  let str_file = (ocult) ? "./\n../\n".red : ""

    arr_concat.forEach((file) => {
        str_file += file + "\n";
      });
      return str_file;
}

module.exports = {
  list, 
  row
}

