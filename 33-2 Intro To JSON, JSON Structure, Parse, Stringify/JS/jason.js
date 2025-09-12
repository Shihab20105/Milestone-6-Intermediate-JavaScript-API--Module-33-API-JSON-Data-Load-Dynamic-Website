/*                      33-2 Intro to JSON, JSON Structure, parse, stringify */

/*
const user = {id: 1, name: 'Al pacino', job: 'actor'};
// JavaScript Object Notation(JASON)
console.log(user);
// Output: { id: 1, name: 'Al pacino', job: 'actor' }



const user = {id: 1, name: 'Al pacino', job: 'actor'};
// JavaScript Object Notation(JASON)
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);
 
Output: 
{ id: 1, name: 'Al pacino', job: 'actor' }
{"id":1,"name":"Al pacino","job":"actor"}
*/



/*
const user = {id: 1, name: 'Al pacino', job: 'actor'};
// JavaScript Object Notation(JASON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);
const shop = {
    owner: 'kate',
    address: {
        street: 'Russell Street',
        city: 'London',
        country: 'UK'
    },
    product: ['Laptop', 'Monitor', 'Mic', 'Keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
};
console.log(shop);

Output: 
{
  owner: 'kate',
  address: { street: 'Russell Street', city: 'London', country: 'UK' },
  product: [ 'Laptop', 'Monitor', 'Mic', 'Keyboard' ],
  revenue: 45000,
  isOpen: true,
  isNew: false
}
*/




/*
const user = {id: 1, name: 'Al pacino', job: 'actor'};
// JavaScript Object Notation(JASON)
const stringified = JSON.stringify(user);
const shop = {
    owner: 'kate',
    address: {
        street: 'Russell Street',
        city: 'London',
        country: 'UK'
    },
    product: ['Laptop', 'Monitor', 'Mic', 'Keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
};
console.log(shop);

const shopJASON = JSON.stringify(shop);
console.log(shopJASON);
 
Output: 
{
  owner: 'kate',
  address: { street: 'Russell Street', city: 'London', country: 'UK' },
  product: [ 'Laptop', 'Monitor', 'Mic', 'Keyboard' ],
  revenue: 45000,
  isOpen: true,
  isNew: false
}
{"owner":"kate","address":{"street":"Russell Street","city":"London","country":"UK"},"product":["Laptop","Monitor","Mic","Keyboard"],"revenue":45000,"isOpen":true,"isNew":false}
*/




const user = {id: 1, name: 'Al pacino', job: 'actor'};
const stringified = JSON.stringify(user);
const shop = {
    owner: 'kate',
    address: {
        street: 'Russell Street',
        city: 'London',
        country: 'UK'
    },
    product: ['Laptop', 'Monitor', 'Mic', 'Keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
};
console.log(shop);

const shopJASON = JSON.stringify(shop);
console.log(shopJASON);
const shopObj = JSON.parse(shopJASON);
console.log(shopObj);

/* 
Output:
{
  owner: 'kate',
  address: { street: 'Russell Street', city: 'London', country: 'UK' },
  product: [ 'Laptop', 'Monitor', 'Mic', 'Keyboard' ],
  revenue: 45000,
  isOpen: true,
  isNew: false
}
{"owner":"kate","address":{"street":"Russell Street","city":"London","country":"UK"},"product":["Laptop","Monitor","Mic","Keyboard"],"revenue":45000,"isOpen":true,"isNew":false}
{
  owner: 'kate',
  address: { street: 'Russell Street', city: 'London', country: 'UK' },
  product: [ 'Laptop', 'Monitor', 'Mic', 'Keyboard' ],
  revenue: 45000,
  isOpen: true,
  isNew: false
}
*/