*** Settings ***
Library  SeleniumLibrary

*** Variables ***
${BASE_URL}   http://localhost:3001
${BROWSER}    Chrome
${NEW_USER_NAME}   New User
${NEW_USER_EMAIL}   newuser@example.com
${VALID_PASSWORD}   NewPass1234


*** Test Cases ***
Register New User Successfully
    Open Browser  ${BASE_URL}/register  ${BROWSER}
    Input Text  id=name  ${NEW_USER_NAME}
    Input Text  id=email  ${NEW_USER_EMAIL}
    Input Text  id=password  ${VALID_PASSWORD}
    Input Text  id=confirmPassword  ${VALID_PASSWORD}
    Click Button  id=registerButton
    Page Should Contain  Successfully registered!.
    Close Browser


Navigate to Login Page after Successful Registration
    Open Browser  ${BASE_URL}/register  ${BROWSER}
    Click Link  link=Already have an account? Log in
    Page Should Contain  Login to Book App
    Close Browser




