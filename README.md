# Password Generator

Password Generator generates a secure password for a User

click the link to view the published site https://mesayb.github.io/passwordGenerator/

## Installation

No need to install anything - This is a simple mobile first web application that can be accessed from any web browser


## Usage

 1. To generate a password - click on **"Generate Password"** button
 2. User will be prompted to **enter required password length**
  - At this stage a validation will 
     be made 
    - validate password length to be in between 8 and 128
    - validate null can not be entered
    - validate that user did not enter a alphabetic value 

     **User will be re-prompted until correct value is entered**

3. User will be prompted with a message **"Is special character required for your password?"**
  - if user selects **"Ok"**
     - another prompt will be made requesting for length **"How many special Characters would you like to include?"**

      validation made -> validate if user entered a length greater than initially requested password length
- if user selects **"Cancel"**
   - special character length will be set to "0"

4. User will be prompted with a message **"Is Numeric character required for your password?"**
- if user selects **"Ok"**
    - another prompt will be made requesting for length **"How many Numeric Characters would you like to include?"**
 
       validation made -> validate if user entered a length greater than initially requested password length
- if user selects **"Cancel"**
   - Numeric character length will be set to "0"

5. User will be prompted with a message **"Is Uppercase character required for your password?"**
- if user selects **"Ok"**
    - another prompt will be made requesting for length **"How many Uppercase Characters would you like to include?"**
 
       validation made -> validate if user entered a length greater than initially requested password length
- if user selects **"Cancel"**
   - Upper Case character length will be set to "0"
6. **If the user selected Character lengths for the above does not add up to required password length - Lowercase characters will be used by default**

7. Password generated will be displayed in the text area and user will be able to click on **"Copy Password"** button and copy the password
  - if user clicks on "copy password" button before password is generated an alert will be made telling user to Generate password first

## Enjoy your secure password
  




