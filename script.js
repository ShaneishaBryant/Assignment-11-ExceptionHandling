"use strict";

function accessVault(key){
    if (key === "SECRET_123"){
        return "Access Granted";
    } else {
        return "Access Denied"; 
    }
}

//Test function 
console.log(accessVault("SECRET_123"))
console.log(accessVault("123"))
console.log(accessVault(""))
console.log(accessVault("password"))