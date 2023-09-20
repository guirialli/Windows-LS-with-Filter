const processamento = require('./ls/processamento');
const args = []
for (let i = 2; i < process.argv.length; i++) {
    args.push(process.argv[i])
}

if (args.length == 0) {
    processamento.ls_withou_params()
}
else if (args.length <= 2) {
    processamento.ls_without_filter(args)
}
else if (args.length >= 3) {
    if (args[args.length - 1] == "-f" || args[args.length - 2] == "-f")
        processamento.ls_with_filters(args)
}


