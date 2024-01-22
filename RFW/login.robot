*** Settings ***
Library  SeleniumLibrary

*** Variables ***
${BASE_URL}   http://localhost:3001
${BROWSER}    Chrome
${USERNAME}   testuser@example.com
${PASSWORD}   testpassword
${INVALID_USERNAME}   invaliduser@example.com
${INVALID_PASSWORD}   invalidpassword



*** Test Cases ***
Login With Valid Credentials
    Open Browser  ${BASE_URL}/login  ${BROWSER}
    Input Text  id=email  ${USERNAME}
    Input Text  id=password  ${PASSWORD}
    Click Button  id=loginButton
    Page Should Contain  Welcome to Book App
    Close Browser

Login With Invalid Credentials
    Open Browser  ${BASE_URL}/login  ${BROWSER}
    Input Text  id=email  ${INVALID_USERNAME}
    Input Text  id=password  ${INVALID_PASSWORD}
    Click Button  id=loginButton
    Page Should Contain  Invalid email or password
    Close Browser




