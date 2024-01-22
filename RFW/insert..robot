*** Settings ***
Library  SeleniumLibrary

*** Variables ***
${BASE_URL}   http://localhost:3001
${BROWSER}    Chrome
${NEW_BOOK_TITLE}   New Book
${NEW_BOOK_AUTHOR}  New Author
${NEW_BOOK_GENRE}   fantasy
${EXISTING_BOOK_TITLE}   Existing Book
${EXISTING_BOOK_AUTHOR}  Existing Author
${EXISTING_BOOK_GENRE}   Non-Fiction
${WEAK_PASSWORD}   weakpassword

*** Test Cases ***
StoreNewBookSuccessfully
    Open Browser  ${BASE_URL}/add-book  ${BROWSER}
    Input Text  id=title  ${NEW_BOOK_TITLE}
    Input Text  id=author  ${NEW_BOOK_AUTHOR}
    Input Text  id=description  ${NEW_BOOK_GENRE}
    Click Button  id=storeButton
    Page Should Contain  ${NEW_BOOK_TITLE} by ${NEW_BOOK_AUTHOR}
    Close Browser

DisplayErrorMessageOnDuplicateEntry
    Open Browser  ${BASE_URL}/add-book  ${BROWSER}
    Input Text  id=title  ${EXISTING_BOOK_TITLE}
    Input Text  id=author  ${EXISTING_BOOK_AUTHOR}
    Input Text  id=description  ${EXISTING_BOOK_GENRE}
    Click Button  id=storeButton
    Page Should Contain  Book with the same title and author already exists
    Close Browser





