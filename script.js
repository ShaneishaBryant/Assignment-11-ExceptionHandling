"use strict";

//security layer -throw specific errors 

class InvalidKeyError extends Error{}

class VaultLockedError extends Error {}


//basic structure of the vault 
function accessVault(key){
    //check if key is undefined or NaN
    if (key === undefined || Number.isNaN(key)){
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

function testForError(testKey, expectedError){
    try{
        accessVault(testKey);
        return false;
    } catch(e){
        return e instanceof expectedError;
    }
}


//Test Functions to verify vault's behavior 
function vaultTest() {
    //TEST 1: correct key returns 'Access Granted'
    try {
        const result = accessVault("SECRET_123");
        if (result === "Access Granted"){
            console.log("Test 1 SUCCESSFUL. Correct key succesfully returned.")
        }else {
            console.log(`Test 1 FAILED. Unexpetect results, ${result}`);
        }
    } catch (e) {
        console.error(`Test 1 FAILED. Wrong key did not throw expected error message.`);
    }

    // TEST 2: undefined or NaN key causes InvalidKeyError
        const resultUndefined = testForError(undefined, InvalidKeyError);
        const resultNaN = testForError(NaN, InvalidKeyError);

        if (resultUndefined && resultNaN) {
            console.log("Test 2 PASSED: Invalid key threw InvalidKeyError.")
        }else {
            console.error("Test 2 FAILED. Wrong key did not throw expected error message.")
        }
    //TEST 3: wrong key causes VaultLockedError 
        const wrongKey = testForError("wrong_password",VaultLockedError);

        if (wrongKey){
            console.log("Test 3 PASSED: Wrong key error message thrown- VaultLockedError.")
        } else {
            console.log("Test 3 FAILED. Wrong key did not throw expected error message.")
        }
}

//vaultTest();


//test program with several different inputs 
function automaticTesting(){
    console.log("==AUTOMATIC TESTING OF VAULT==")

    const testInputs = [
        "SECRET_123",
        "wrong_password",
        "",
        123,
        NaN,
        undefined,
    ];

    for (const input of testInputs){
        console.log("Testing input: " + JSON.stringify(input));
        attemptEntry(input);
        console.log("");
    }
}

automaticTesting();