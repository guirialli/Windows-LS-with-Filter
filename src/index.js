function main() {
    const ls = require('./ls/ls');
    const args = process.argv.slice(2);
  
    if (args.length == 0) {
        ls.withou_params()
    }
    else if (args.length <= 2) {
        if (args[0][1] === 'r');
        else
            ls.without_filter(args);
    }
    else if (args.length >= 3) {
        if (args[args.length - 1] == "-f" || args[args.length - 2] == "-f")
            ls.with_filters(args)
    }



}
module.exports = { main }