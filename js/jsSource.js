function generatePassword() {
    var password;
    var specialCharList = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "`", "{", "|", "}", "~"
    ];

    // function to generate random numbers in between two ASCII Characters
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var lengthSatisfied = true;

    do {
        var passwordLength = prompt("Please enter password length required?");
        passwordLength = parseInt(passwordLength);
        if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
            lengthSatisfied = false;
            alert("Password length must be a numeric value between '8' and '128' character long \n ->Please enter password length again ");
        } else {
            lengthSatisfied = true;
            passwordLengthRemain = passwordLength;
        }

    } while (lengthSatisfied === false)


    var isSpecialCharRequired = confirm("Is special character required for your password?");

    if (isSpecialCharRequired === true) {
        do {
            var specialCharLength = prompt("How many special Characters would you like to include?");
            specialCharLength = parseInt(specialCharLength);
            passwordLengthRemain = passwordLengthRemain - specialCharLength;

            if (passwordLengthRemain < 0) {
                lengthSatisfied = false;
                //reset the password length remaining to original
                passwordLengthRemain = passwordLengthRemain + specialCharLength;

                alert(`you have exceeded the password length you initially requested!!! \n 
                ->Please enter a value <= '${passwordLengthRemain}'`);


            } else
            if (passwordLengthRemain >= 0) {
                lengthSatisfied = true;
            }
        } while (lengthSatisfied === false)
    } else {
        specialCharLength = 0;
        passwordLengthRemain = parseInt(passwordLength);
    }

    var isNumericRequired = confirm("Is Numeric character required for your password?");
    if (isNumericRequired === true) {
        do {
            var numericCharLength = prompt("How many Numeric Characters would you like to include?");
            numericCharLength = parseInt(numericCharLength);
            passwordLengthRemain = passwordLengthRemain - numericCharLength;

            if (passwordLengthRemain < 0) {
                lengthSatisfied = false;
                //reset the password length remaining to original
                passwordLengthRemain = passwordLengthRemain + numericCharLength;

                alert(`you have exceeded the password length you initially requested!!! \n 
                ->Please enter a value <= '${passwordLengthRemain}'`);

            } else
            if (passwordLengthRemain >= 0) {
                lengthSatisfied = true;
            }
        } while (lengthSatisfied === false)
    } else {
        numericCharLength = 0;
    }

    var isUpperCaseCharRequired = confirm("Is Uppercase character required for your password?");
    if (isUpperCaseCharRequired === true) {
        do {
            var upperCaseCharLength = prompt("How many Uppercase Characters would you like to include?");
            upperCaseCharLength = parseInt(upperCaseCharLength);
            passwordLengthRemain = passwordLengthRemain - upperCaseCharLength;

            if (passwordLengthRemain < 0 || isNaN(passwordLength)) {
                lengthSatisfied = false;
                //reset the password length remaining to original
                passwordLengthRemain = passwordLengthRemain + upperCaseCharLength;

                alert(`you have exceeded the password length you initially requested!!! \n 
                ->Please enter a value <= '${passwordLengthRemain}'`);

            } else
            if (passwordLengthRemain >= 0) {
                lengthSatisfied = true;
            }
        } while (lengthSatisfied === false)
    } else {
        upperCaseCharLength = 0;
    }

    // by default the remaining character length will be assigned a lower case letter
    var defaultLowerCase = passwordLengthRemain;

    var asciiCodeList = [];

    while (upperCaseCharLength > 0) {
        asciiCodeList.push(String.fromCharCode(getRndInteger(65, 90)));
        upperCaseCharLength--;
    }
    while (defaultLowerCase > 0) {
        asciiCodeList.push(String.fromCharCode(getRndInteger(97, 122)));
        defaultLowerCase--;
    }

    while (specialCharLength > 0) {
        asciiCodeList.push(specialCharList[getRndInteger(0, specialCharList.length - 1)]);
        specialCharLength--;
    }

    //add the numeric values to the password array- no conversion needed for numeric values
    while (numericCharLength > 0) {
        asciiCodeList.push(getRndInteger(0, 9));
        numericCharLength--;
    }

    var passwordHeaderInfo = "Your Secure Password";

    password = asciiCodeList.join('');
    document.getElementById("password").value = `${passwordHeaderInfo}\n\n${password}`;
}

function copyText() {
    /* Get the text field */
    var textElement = document.getElementById("password");
    /* Select the text field */
    textElement.select();
    textElement.setSelectionRange(22, 150);

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    if (textElement.value.length > 0) {
        alert("Copied the text: " + textElement.value);
    } else {
        alert("Please generate password first")
    }
}