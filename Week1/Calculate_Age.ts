function Age(dateofbirth) 
{
    var age = Date.now() - dateofbirth.getTime();
    var given = new Date(age); 
    return Math.abs(given.getUTCFullYear() - 1970);
}
console.log(Age(new Date(1992, 2, 28)));
