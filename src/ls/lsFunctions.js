function list_dirs(directory_to, ocult = false) {
  const colors = require("colors");
  const fs = require("fs");
  return new Promise((resolve, reject) => {
    if (fs.existsSync(directory_to)) {
      const new_dirs = [];
      const new_files = [];
      const dirs = fs.readdirSync(directory_to);
      for (let i = 0; i < dirs.length; i++) {
        const stats = fs.statSync(`${directory_to}/${dirs[i]}`);
        if (stats.isDirectory()) {
          if (ocult) new_dirs.push(dirs[i] + "/");
          else if (dirs[i][0] != ".") new_dirs.push(dirs[i] + "/");
        } else {
          if (ocult) new_files.push(dirs[i]);
          else if (dirs[i][0] != ".") new_files.push(dirs[i]);
        }
      }
      resolve([new_dirs, new_files]);
    } else {
      reject(new Error(`Directory:  "${directory_to}"  does not exist`));
    }
  })
}

function filter(arr = [""], extension = "") {
  const arr_filter = [];
  if (extension[0] === ".") extension = extension.replace(".", "");
  arr.forEach((item) => {
    item_arr = item.split(".");
    if (item_arr.length > 1 && item_arr[item_arr.length - 1] === extension)
      arr_filter.push(item);
  });
  return arr_filter;
}

module.exports = { filter, list_dirs };
