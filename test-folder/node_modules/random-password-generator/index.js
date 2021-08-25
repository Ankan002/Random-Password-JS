function randomPassword(length){
    const rawString= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()-_=+|/,.<>";
    let password="";
    for(let i=0;i<length;i++){
        let currIndex= Math.floor(Math.random() * rawString.length);
        password += rawString.charAt(currIndex);
    }
    return password;
}

module.exports = randomPassword;