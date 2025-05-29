// Take in the third argument from the command line (testing purposes)
const password = process.argv[2];

// A variable that holds a string of "special characters" (specChars)
const specChars = '!@#$%^&*()-+';
// A varable that defines the minimum length of a password
const minLen = 8;
// A variable that defines the minimum lenght of a password 
const maxLen = 64;

// Function to check passwords
function passwordChecker(){
    if(password === undefined){
        // Output messages for when a password argument is not given
        console.log('\n*** NO PASSWORD GIVEN ***');
        console.log("\n- To test the checker, enter a password as the third argument in the command line.");
        console.log('- Ex: "node checker.js mySecurePassword"');
        console.log('')
    } else {
        // Variables that hold boolean values to be used during a coniditional check of the password
        let hasSpecChars = false;
        let hasNumber = false
        let hasUpperCase = false;
        let hasLowerCase = false;
        let hasMinChars = false;
        let notMaxChars = false;

        // Length of password
        const passwordLen = password.length;

        // Iterate through each character in the password string
        for(let i=0; i<passwordLen; i++){
            const currPassChar = password[i];

            // Check if the current character is a special character
            if(specCharsCheck(currPassChar)){
                hasSpecChars = true;

            // Check if the current character is a number
            } else if (numberCheck(currPassChar)){
                hasNumber = true;

            // Check every other alphabetical character case
            } else {
                // Check if the password has any uppercase characters
                if(upperCaseCheck(currPassChar)){
                    hasUpperCase = true;
                }
                // Check if the password has any lowercase characters
                if(lowerCaseCheck(currPassChar)){
                    hasLowerCase = true;
                }
            }
        }

        // Check if the password is greater than the minimum password length required
        if(passwordLen >= minLen){
            hasMinChars = true
        }

        // Check if the password is less than the maximum password length required
        if(passwordLen <= maxLen){
            notMaxChars = true;
        }

        // Conditional check of the password
        if(hasSpecChars && hasNumber && hasUpperCase && hasLowerCase && hasMinChars && notMaxChars){
            // Round of applause for the user
            console.log('\n*** Password is acceptable ***\n');
        } else {
            // Message to punish the user for bad passwords
            console.log('\n*** BAD PASSWORDS GET EXPOSED ***')
            console.log('- Your bad password:\n\n\t', password,'\n');

            // Only print this out if the password is missing special characters
            if(!hasSpecChars){
                console.log('- Your password needs at least one special character:', specChars,);
            }
            // Only print this out if the password does not have a number
            if(!hasNumber){
                console.log('- Your password needs at least one number');
            }
            // Only print this out if the password does not have a uppercase character
            if(!hasUpperCase){
                console.log('- Your password needs at least one uppercase letter');
            }
            // Only print this out if the password does not have a lowercase character
            if(!hasLowerCase){
                console.log('- Your password needs at least one lowercase letter');
            }
            // Only print this out if the password is less than the minimum required password length
            if(!hasMinChars){
                console.log('- Your password needs at least', minLen, 'characters, and at most', maxLen, 'characters in length');
            }
            // Only print this out if the password is greater than the maxmimum required password length
            if(!notMaxChars){
                console.log('- Your password must be less than', maxLen, 'characters in length');
            }

            console.log('')
        }
    }
}

// Function to check if a character is a special character
function specCharsCheck(character){
    for(let i=0; i<specChars.length; i++){
        if(character === specChars[i]){
            return true;
        }
    }
    return false;
}

// Function to check if a character is a number
function numberCheck(character){
    if(character >= '0' && character <= '9'){
        return true;
    }
    return false;
}

// Function to check if a character is uppercase
function upperCaseCheck(character){
    if(character === character.toUpperCase()){
        return true;
    }
    return false;
}

// Function to check if a character is lowercase
function lowerCaseCheck(character){
    if(character === character.toLowerCase()){
        return true;
    }
    return false;
}

passwordChecker();