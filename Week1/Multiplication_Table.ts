var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter the rows' + " ", function (Row: number) {
    readline.question('Enter the columns' + " ", function (Columns: number) {
        var multiplicationTable = '\n';
        for (var row = 1; row <= Row; row++) {
            for (var column = 1; column <= Columns; column++) {
                multiplicationTable += (row * column) + ' ';
            }
            multiplicationTable += '\n';
        }
        console.log(multiplicationTable);
        readline.close();
    });
});
