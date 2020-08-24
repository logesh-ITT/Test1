var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter the rows' + " ", function (number) {
    console.log("Rows are " + number + " ");
    readline.question('Enter the columns'+ " ", function (number1) {
    console.log("columns are " + number1 + " ");
       var result = '\n';
       for (var i = 1; i <= number; i++) 
       {
       for (var j = 1; j <= number1; j++) 
       {
        result += (i * j) + ' ';
       }
        result += '\n';
       }
        console.log(result);
        readline.close();
});
});
