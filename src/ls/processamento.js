const ls = require('./ls')
const show = require('../out/exibir')
const  {color_file} = require('../out/color_out')
const colors_ext = require('colors')


const mensagemFinalFilter = (path, extension, str) => `${`In ${path} exist this ${extension} files:`.yellow.bgBlack} \n${str}`

function ls_without_filter(args = []) {
    if (args[0].toLowerCase() != "-l" && args[0].toLowerCase() != "-la" && args[0].toLowerCase() != "-a") {
        ls.list_dirs(args[0]).then(datas = [])
            .then((datas = []) => show.row(datas[0], datas[1]))
            .then(str => console.log(str))
            .catch((err = Error) => console.log(err.message))
    }
    else if (args[0][1] === 'l') {
        const path = (args[1] != undefined) ? args[1] : '.'
        const ocult = (args[0][2] == 'a') ? true : false
        ls.list_dirs(path, ocult)
            .then(datas => show.list(datas[0], datas[1], ocult))
            .then(string => console.log(string))
            .catch((err = Error) => console.log(err.message))
    }
    else if (args[0][1] == 'a') {
        const path = (args[1] != undefined) ? args[1] : '.'
        ls.list_dirs(path, true)
            .then(datas => show.row(datas[0], datas[1], true))
            .then(string => console.log(string))
            .catch((err = Error) => console.log(err.message))
    }
}


function ls_withou_params() {
    ls.list_dirs(".").then((datas = []) => show.row(datas[0], datas[1]))
        .then(str => console.log(str))
}

function ls_with_filters(args = [""]) {
    let extension = args[args.length - 1]
    if (args.length == 3) {
        const path = args[0]
        ls.list_dirs(path, false, false)
            .then((dados = []) => ls.filter(dados[1], extension))
            .then((filter_dados) => color_file(filter_dados))
            .then((color_files) => show.row(color_files))
            .then((str = "") => console.log(mensagemFinalFilter(path, extension, str)));
    }
    else if (args.length == 4) {
        const path = args[1]
        if (args[0][1] == "l") {
            const ocult = (args[0][2] == "a")
            ls.list_dirs(path, ocult, false)
            .then((dados) => ls.filter(dados[1], extension))
            .then((dado_filter) => color_file(dado_filter))
            .then((dados_colors) => show.list(dados_colors,[""] ,ocult))
            .then((str) => console.log(mensagemFinalFilter(path, extension, str)))
        }
        else if (args[0][1] == "a"){
            ls.list_dirs(path, true, false)
            .then((dados = []) => ls.filter(dados[1], extension))
            .then((filter_dados) => color_file(filter_dados))
            .then((color_files) => show.row(color_files, [""], true))
            .then((str = "") => console.log(mensagemFinalFilter(path, extension, str)));
        }
        else{
            throw new Error("Invalid argments: \n")
        }
    }
    else {
        throw new Error("Invalid arguments: \n")
    }
}


module.exports = { ls_without_filter, ls_withou_params, ls_with_filters }

