const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter your Birthdate format should be Year-Month-Date' + " ", inputdob => {
  
    var today = new Date();
    var birthDate = new Date(inputdob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
        month=12+month;
    }
   console.log('Age: ' + age);
   console.log('Month: ' + month);
 
readline.close();
});


