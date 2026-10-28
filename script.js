"use strict";

//basic structure of the vault 
function accessVault(key){
    //check if key is undefined or NaN
    if (key === undefined || NaN(key)){
        throw new InvalidKeyError("Key is missing or corrupted")
    }
    if (key === "SECRET_123"){
        return "Access Granted";
    } else {
        throw new VaultLockedError("Incorrect key provided")
    }
}

//Test function 
console.log(accessVault("SECRET_123"))
console.log(accessVault("123"))
console.log(accessVault(""))
console.log(accessVault("password"))


//security layer -throw specific errors 

class InvalidKeyError extends Error{}

class VaultLockedError extends Error {}
