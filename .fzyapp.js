const ashell = {
    // jsc.readFile(filePath: string): string	Open the file at filePath as a UTF-8 file, return the string contents to the JS.
    readFile: function readFile(path) {
        return prompt("jsc\nreadFile\n" + path);
    },
    // jsc.readFileBase64(filePath: string): string	Open the file at filePath as a binary file, return the content encoded using Base64
    readFileBase64: function readFileBase64(path) {
        return prompt("jsc\nreadFileBase64\n" + path);
    },
    // jsc.writeFile(filePath: string, content: string): Result	Writes content to a UTF-8 file at filePath.
    writeFile: function writeFile(path, content) {
        var returnValue = prompt("jsc\nwriteFile\n" + path + "\n" + content);
        const entries = returnValue.split("\n");
        if (Number(entries[0]) == -1) {
            throw new Error(entries[1]);
        }
        return (Number(returnValue));
    },
    // jsc.writeFileBase64(filePath: string, content: string): Result	Writes binary content encoded using Base64 at filePath.
    writeFileBase64: function writeFileBase64(path, content) {
        var returnValue = prompt("jsc\nwriteFileBase64\n" + path + "\n" + content);
        const entries = returnValue.split("\n");
        if (Number(entries[0]) == -1) {
            throw new Error(entries[1]);
        }
        return (Number(returnValue));
    },
    // jsc.listFiles(folderPath: string): string[]	Returns a list of the file names in the folder at folderPath.
    listFiles: function listFiles(directory) {
        var returnValue = prompt("jsc\nlistFiles\n" + directory);
        const entries = returnValue.split("\n");
        if (entries[0].count == 0) {
            throw new Error(entries[1]);
        }
        return entries;
    },
    // jsc.isFile(filePath: string): boolean	Returns true if there is a file at filePath, false if there is a folder or nothing there.
    isFile: function isFile(path) {
        var returnValue = Number(prompt("jsc\nisFile\n" + path));
        return (returnValue == 1);
    },
    // jsc.isDirectory(folderPath: string): boolean	Returns true if there is a folder at folderPath, false if there is a file or nothing there.
    isDirectory: function isDirectory(path) {
        var returnValue = Number(prompt("jsc\nisDirectory\n" + path));
        return (returnValue == 1);
    },
    // jsc.makeFolder(folderPath: string): Result	Creates a folder at folderPath.
    makeFolder: function makeFolder(path) {
        var returnValue = prompt("jsc\nmakeFolder\n" + path);
        const entries = returnValue.split("\n");
        if (Number(entries[0]) == -1) {
            throw new Error(entries[1]);
        }
        return (Number(returnValue));
    },
    // jsc.deleteFile(filePath: string): Result	Deletes the file at filePath.
    deleteFile: function deleteFile(path) {
        var returnValue = prompt("jsc\ndelete\n" + path);
        const entries = returnValue.split("\n");
        if (Number(entries[0]) == -1) {
            throw new Error(entries[1]);
        }
        return (Number(returnValue));
    },
    // jsc.move(pathA: string, pathB: string): Result	Moves a file from pathA to pathB.
    move: function move(pathA, pathB) {
        var returnValue = prompt("jsc\nmove\n" + pathA + "\n" + pathB);
        const entries = returnValue.split("\n");
        if (Number(entries[0]) == -1) {
            throw new Error(entries[1]);
        }
        return (Number(returnValue));
    },
    // jsc.copy(pathA: string, pathB: string): Result	Creates a copy of the file at pathA and puts it at pathB.
    copy: function copy(pathA, pathB) {
        var returnValue = prompt("jsc\ncopy\n" + pathA + "\n" + pathB);
        const entries = returnValue.split("\n");
        if (Number(entries[0]) == -1) {
            throw new Error(entries[1]);
        }
        return (Number(returnValue));
    },
    // jsc.getFileSize(filePath: string): number	Gets the file size of the file at filePath.
    getFileSize: function getFileSize(path) {
        var returnValue = prompt("jsc\nfileSize\n" + path);
        const entries = returnValue.split("\n");
        if (Number(entries[0]) < 0) {
            throw new Error(entries[1]);
        }
        return (Number(returnValue));
    },
    // jsc.system(command: string): executes the command, and returns the return value (usually 0)
    system: function system(command) {
        return prompt("jsc\nsystem\n" + command);
    }
};

// We need the 'require' function:
ashell.system('echo "$APPDIR" > ~/Documents/axpder')
var requireCode = ashell.readFile(ashell.readFile("~/Documents/axpder") + "/require.js");
ashell.deleteFile("~/Documents/axpder");
eval(requireCode);
Tarp.require({expose: true}); 


var fzy = require("fzy.js");
require("process")

var prmpt = '> '
var lineShown = 10
var searchstr = ""
var showScre = false
var showMatches = ""

function printHelp(){
    print("Usage: fzy [OPTION]...\n")
    print(" -l, --lines=LINES        Specify how many lines of results to show (default 10)\n")
    print(" -p, --prompt=PROMPT      Input prompt (default '> ')\n")
    print(" -q, --query=QUERY        Use QUERY as the initial search string\n")
    print(" -e, --show-matches=QUERY Output the sorted matches of QUERY\n")
    print(" -s, --show-scores        Show the scores of each match\n")
    print(" -h, --help     Display this help and exit\n")
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
            showMatches = nextarg
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
                        showMatches = splitarg[1]
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

}
