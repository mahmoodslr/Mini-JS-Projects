# Random Password Generator

This project is a responsive, web-based application for generating secure, random passwords. Users can specify the password length and select character options (uppercase letters, lowercase letters, numbers, and symbols) based on their security needs. The application also includes a password strength indicator and a convenient copy-to-clipboard feature with a confirmation message.

## Features

- Password Length Control: Users can adjust password length using a slider (from 6 to 18 characters).
- Character Type Selection: Options to include uppercase letters, lowercase letters, numbers, and symbols in the password.
- Password Strength Indicator: Password strength is displayed as "Weak," "Medium," or "Strong," based on length and character variety.
- Copy to Clipboard: Users can easily copy the generated password to the clipboard, with a confirmation message displayed upon successful copy.

### Usage

1. open the index.html file in a web browser.
2. Adjust the Password Length slider to set the desired length of the password.
3. Choose from available character options by selecting the checkboxes for:
    - Uppercase Letters
    - Lowercase Letters
    - Numbers
    - Symbols
4. Click ✨ Create Password to generate a password based on your chosen settings.
5. The generated password appears in the display box, ready to be copied.
6. Click on the Copy Icon to copy the password to the clipboard. A confirmation message ("Password copied!") will appear in the top right corner of the page.

#### File Structure
🔵 index.html: Defines the HTML structure and UI elements of the application.
🔵 style.css: Contains styling for the application, including custom styles for checkboxes, buttons, and confirmation messages.
🔵 script.js: JavaScript logic for password generation, clipboard copying, and password strength evaluation.

##### Code Explanation 
Key Functions
1. createPassword():
    - Generates a password by combining characters based on user-selected options.
    - Randomly selects characters from the available sets (uppercase, lowercase, numbers, symbols) until reaching the desired length.
    - Displays the generated password in the input field.

2. copyPassword():
    - Copies the generated password to the clipboard using the navigator.clipboard.writeText() function.
    - Calls the showCopyConfirmation() function to display a confirmation message.

3. checkStrength(password):
- Evaluates the strength of the generated password based on length and character variety.
- Updates the strength display element with appropriate color and label (Weak, Medium, Strong).

4. showCopyConfirmation():
    - Shows a floating "Password copied!" message upon successful password copy.
    - Fades out the message after 2 seconds.



Hope you enjoy ❤️