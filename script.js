"use strict";

//security layer -throw specific errors 

class InvalidKeyError extends Error{}

class VaultLockedError extends Error {}


//basic structure of the vault 
function accessVault(key){
    //check if key is undefined or NaN
    if (key === undefined || isNaN(key)){
        throw new InvalidKeyError("Key is missing or corrupted")
    }
    if (key === "SECRET_123"){
        return "Access Granted";
    } else {
        throw new VaultLockedError("Incorrect key provided")
    }
}



//safety protocol - handles craches so entire program doesn't stop 
function attemptEntry(key){
    try {
        const result = accessVault(key);
        return result;
    }catch(e){
        if (e instanceof InvalidKeyError){
            console.log("Security Alert: System corruption detected.");
        }else if (e instanceof VaultLockedError){
            console.log("User Error: Please try again.");
        }else {
            throw e;
        }
    } finally {
        console.log("Vault attempt completed.")
    }
}




//Test function 
console.log(attemptEntry("SECRET_123"));
console.log(attemptEntry("123"));
console.log(attemptEntry(""));
console.log(attemptEntry("password"));
