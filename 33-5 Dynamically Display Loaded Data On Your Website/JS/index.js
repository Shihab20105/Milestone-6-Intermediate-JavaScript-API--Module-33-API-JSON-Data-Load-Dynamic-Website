/*                      33-5 Dynamically display loaded data on your website */

// console.log('Inside index.js');


/* 
function loadUsers2(){
    // console.log('Button Handler');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data));
}

function displayUsers2(data){
    console.log(data);
} 
 
Chrome debug console Output:
(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]                index.js:15 
*/



/* 
function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data));
}

function displayUsers2(data){
    for(const user of data){
        console.log(user)
    }
} 


Chrome debug console Output:
{id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}, …}--->index.js:29 _____________________________________________________________________________________________

{id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv', address: {…}, …} --> index.js:29
_____________________________________________________________________________________________
{id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net', address: {…}, …} --> index.js:29
_____________________________________________________________________________________________
{id: 4, name: 'Patricia Lebsack', username: 'Karianne', email: 'Julianne.OConner@kory.org', address: {…}, …} --> index.js:29
_____________________________________________________________________________________________
{id: 5, name: 'Chelsey Dietrich', username: 'Kamren', email: 'Lucio_Hettinger@annie.ca', address: {…}, …} --> index.js:29
_____________________________________________________________________________________________
{id: 6, name: 'Mrs. Dennis Schulist', username: 'Leopoldo_Corkery', email: 'Karley_Dach@jasper.info', address: {…}, …} --> index.js:29
_____________________________________________________________________________________________
{id: 7, name: 'Kurtis Weissnat', username: 'Elwyn.Skiles', email: 'Telly.Hoeger@billy.biz', address: {…}, …} --> index.js:29
_____________________________________________________________________________________________
{id: 8, name: 'Nicholas Runolfsdottir V', username: 'Maxime_Nienow', email: 'Sherwood@rosamond.me', address: {…}, …} --> index.js:29
_____________________________________________________________________________________________
{id: 9, name: 'Glenna Reichert', username: 'Delphine', email: 'Chaim_McDermott@dana.io', address: {…}, …} --> index.js:29
_____________________________________________________________________________________________
{id: 10, name: 'Clementina DuBuque', username: 'Moriah.Stanton', email: 'Rey.Padberg@karina.biz', address: {…}, …} --> index.js:29
*/


/*
function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data));
}

function displayUsers2(data){
    for(const user of data){
        console.log(user.name)
    }
}

 
Chrome debug console Output:
Leanne Graham                                         index.js:70 
_________________________________________________________________
Ervin Howell                                          index.js:70
_________________________________________________________________ 
Clementine Bauch                                      index.js:70
_________________________________________________________________ 
Patricia Lebsack                                      index.js:70
_________________________________________________________________ 
Chelsey Dietrich                                      index.js:70
_________________________________________________________________ 
Mrs. Dennis Schulist                                  index.js:70
_________________________________________________________________ 
Kurtis Weissnat                                       index.js:70
_________________________________________________________________ 
Nicholas Runolfsdottir V                              index.js:70
_________________________________________________________________ 
Glenna Reichert                                       index.js:70
_________________________________________________________________ 
Clementina DuBuque                                    index.js:70 
*/


/*
function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data));
}

function displayUsers2(data){
    for(const user of data){
        console.log(user.email)
    }
}
*/ 




/* 
Chrome debug console Output:
Sincere@april.biz                               index.js:107 
____________________________________________________________
Shanna@melissa.tv                               index.js:107 
____________________________________________________________
Nathan@yesenia.net                              index.js:107
____________________________________________________________ 
Julianne.OConner@kory.org                       index.js:107
____________________________________________________________ 
Lucio_Hettinger@annie.ca                        index.js:107
____________________________________________________________ 
Karley_Dach@jasper.info                         index.js:107
____________________________________________________________ 
Telly.Hoeger@billy.biz                          index.js:107
____________________________________________________________ 
Sherwood@rosamond.me                            index.js:107
____________________________________________________________ 
Chaim_McDermott@dana.io                         index.js:107
____________________________________________________________ 
Rey.Padberg@karina.biz                          index.js:107
*/


/*
function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data));
}

function displayUsers2(data){
    for(const user of data){
        console.log(user.username)
    }
}


Chrome debug console Output:

Bret                                index.js:144
________________________________________________ 
Antonette                           index.js:144
________________________________________________ 
Samantha                            index.js:144
________________________________________________ 
Karianne                            index.js:144
________________________________________________ 
Kamren                              index.js:144
________________________________________________ 
Leopoldo_Corkery                    index.js:144
________________________________________________ 
Elwyn.Skiles                        index.js:144
________________________________________________ 
Maxime_Nienow                       index.js:144 
________________________________________________
Delphine                            index.js:144
________________________________________________ 
Moriah.Stanton                      index.js:144
*/



/* 
function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data));
}

function displayUsers2(data){
    const ul = document.getElementById('users-list');
    for(const user of data){
        console.log(user.name);
    }
} 


/* 
Chrome debug console Output:
Leanne Graham                           index.js:183
____________________________________________________ 
Ervin Howell                            index.js:183
____________________________________________________ 
Clementine Bauch                        index.js:183
____________________________________________________ 
Patricia Lebsack                        index.js:183
____________________________________________________ 
Chelsey Dietrich                        index.js:183
____________________________________________________ 
Mrs. Dennis Schulist                    index.js:183
____________________________________________________ 
Kurtis Weissnat                         index.js:183
____________________________________________________ 
Nicholas Runolfsdottir V                index.js:183
____________________________________________________ 
Glenna Reichert                         index.js:183
____________________________________________________ 
Clementina DuBuque                      index.js:183
*/



/* 
function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data));
}

function displayUsers2(data){
    const ul = document.getElementById('users-list');
    for(const user of data){
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = 'user';
        ul.appendChild(li);
    }
} 
*/


function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data));
}

function displayUsers2(data){
    const ul = document.getElementById('users-list');
    for(const user of data){
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}
