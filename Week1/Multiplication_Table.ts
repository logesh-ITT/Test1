var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter the rows' + " ", function (row:number) {
    console.log("Rows are " + row + " ");
    readline.question('Enter the columns'+ " ", function (columns:number) {
    console.log("columns are " + columns + " ");
       var result = '\n';
       for (var i = 1; i <= row; i++) 
       {
       for (var j = 1; j <= columns; j++) 
       {
        result += (i * j) + ' ';
       }
        result += '\n';
       }
        console.log(result);
        readline.close();
});
});
