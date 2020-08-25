const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question('Enter your Age format Year-Month-Date' + " ", Aage => {
    console.log(`Hey there ${Aage}!`);
    function Age(Aage) 
{
    var age = Date.now() - Aage.getTime();
    var given = new Date(age); 
    return Math.abs(given.getUTCFullYear() - 1970);
}
console.log(Age(new Date(Aage)));
readline.close();
});
