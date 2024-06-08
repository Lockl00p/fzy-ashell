var fzy = require("fzy.js");
require("process")

var prmpt = '> '
var lineShown = 10
var searchstr = ""
var showScre = false
var showMat = ""

function printHelp(){
    print("Usage: fzy [OPTION]...\n")
    print(" -l, --lines=LINES        Specify how many lines of results to show (default 10)\n")
    print(" -p, --prompt=PROMPT      Input prompt (default '> ')\n")
    print(" -q, --query=QUERY        Use QUERY as the initial search string\n")
    print(" -e, --show-matches=QUERY Output the sorted matches of QUERY\n")
    print(" -s, --show-scores        Show the scores of each match\n")
    print(" -h, --help               Display this help and exit\n")
    return
}


function processArgs(){

    if(process.argv.length < 3){
        
        printHelp()
        return
    }

    for (let index = 0; index < process.argv.length; index++) {
      const arg = process.argv[index];
      const nextarg = process.argv[index+1]
      const splitarg = arg.split("=")
      switch (arg) {
        case "-p":
            prmpt = nextarg
            break;
      
        case "-l":
            lineShown = parseInt(nextarg);
            break;
        
        case "-q":
            searchstr = nextarg
            break;

        case "-s":
            showScre = true
            break;

        case "-e":
            showMat = nextarg
            break;

        case "--show-scores":
            showScre = true
            break;
        case "-h":
            printHelp()
            return
            break;
        case "--help":
            printHelp()
            return
            break;
        
        default:
            if (splitarg.length > 1){
                switch (splitarg[0]) {
                    case "--prompt":
                        prmpt = splitarg[1]
                        break;
                    case "--lines":
                        lineShown = splitarg[1]
                        break;
                    case "--query":
                        searchstr = splitarg[1]
                        break;
                    case "--show-matches":
                        showMat = splitarg[1]
                        break;
                    
                    default:
                        break;
                }    
            }

            break;
      }
       
    }
    
}

function main(){
    processArgs()
    return 
}


main()