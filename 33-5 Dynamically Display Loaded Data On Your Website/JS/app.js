/*                      33-5 Dynamically display loaded data on your website */

// console.log('app.js');

function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data));
}

/* 
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data));
} 
*/

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function displayUsers(data){
    console.log(data);
}


// ====================================================================================== //
/*
// WHAT IS AN API?
1) API stands for Application Programming Interface.
2) An API acts like a link that allows two applications to talk to each other.
3) API is the part of the server that receives requests and sends responses.
______________________________________________________________________

🔹 How does it work?

1. Client makes a request
    * Example: A weather app on your phone asks, “What’s the temperature in New York?”
    * This request is usually sent over the internet using HTTP/HTTPS.

2. API receives the request
    * The API endpoint (like https://api.weather.com/current?city=NewYork) gets the request.

3. Server processes the request
    *The server checks its database or performs actions to gather the needed information.

4. API sends back a response
    * The server replies with data (usually in JSON or XML) that the client app can understand.
    * Example JSON response:
    {
    "city": "New York",
    "temperature": 21,
    "unit": "C"
    }

5. Client uses the data
    * The weather app shows you “21°C” on your screen.
______________________________________________________________________

🔹 Types of APIs

* REST API → Uses URLs and HTTP methods (GET, POST, PUT, DELETE).
* SOAP API → Uses XML messages (older, more strict).
* GraphQL API → Lets you request exactly the data you want.
* WebSocket API → Real-time communication (like chat apps).

👉 In short: An API is a bridge that lets different software systems talk to each other.
______________________________________________________________________

// FETCH API
The Fetch API is a modern interface that allows you to make HTTP requests to servers from web browsers.

fetch(URL) ---------------------->Get the data from the url
.then(res => res.json()) ----------------->Converts the data to JSON object
.then(data => console.log(data) -------------->Displays the JSON object
*/