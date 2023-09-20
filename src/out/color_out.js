const colors = require('colors')

function color_file(arr = [""]){
    const color_arr = []
    arr.forEach((val = "") => color_arr.push(val.blue))
    return color_arr
}

module.exports = {color_file}