// Add your code here
/*
submitData()
1) makes a POST request to /users with a name and email
2) handles POST request response, retrieves 
    the new id value and appends it to the DOM
3) handles failed POST request using catch, appends 
    the error message to the DOM
*/
const userUrl = "http://localhost:3000/users"

let bodyData = {
    name: "Steve",
    email: "steve@steve.com"
}

let objStuff = {
    method: "POST",
    headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(bodyData)
}

function submitData() {
    return fetch(userUrl, objStuff)
        .then(response => response.json())
        .then(getID)
        .catch(errorFunc)
}

const bodyTag = document.querySelector('body')

function getID(object) {
    document.body.innerHTML = object.id
}

function errorFunc(error) {
    document.body.innerHTML = error.message
}