const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.question('Enter your Birthdate format should be Year-Month-Date' + " ", age => {
  console.log(`Birthdate you entered is ${age}!`);
  function Age(age) 
{
  var age = Date.now() - age.getTime();
  var given = new Date(age); 
  return Math.abs(given.getUTCFullYear() - 1970);
}
console.log(Age(new Date(age)));
readline.close();
});
