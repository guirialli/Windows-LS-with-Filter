const ls = require('./ls/ls')
const show = require('./out/exibir')

const args = []
for (let i = 2; i < process.argv.length; i++) {
    args.push(process.argv[i])
}

if (args.length == 0) {
    ls.list_dirs(".").then((datas = []) => show.row(datas[0], datas[1]))
        .then(str => console.log(str))
}
else if (args.length <= 2) {
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

