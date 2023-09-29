const { isExcutable, isImage, isAudio, isVideo } = require("../filters/fileExtension");

function color_path  (path = [""]) {
    const path_color = []
    path.forEach((val = "") => path_color.push(String(val).green))
    return path_color
}

function color_file(files = [""]) {
    const files_color = []
    files.forEach((val = "") => {
        const arr_files = val.split(".");
        const exetension = arr_files[arr_files.length - 1];
        if (isExcutable(exetension)) files_color.push(String(val).red);
        else if (isImage(exetension)) files_color.push(String(val).cyan);
        else if (isAudio(exetension) || isVideo(exetension)) files_color.push(String(val).blue);
        else files_color.push(String(val).white);
      });
      return files_color
}

function color_file_path(arr = [[""], [""]]) {
  const files_color = color_file(arr[1])
  const path_color = color_path(arr[0])

  return [path_color, files_color];
}

module.exports = { color_file, color_file_path, color_path };
