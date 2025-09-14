/*                      33-7 GET, POST, PATCH, DELETE, CRUD, GET Vs POST */

/* 
//CRUD
CRUD is the acronym for CREATE, READ, UPDATE and DELETE

                                        REST API Methods
_________________________________________________________________________________________
        GET                     POST                PUT/PATCH               DELETE
         ^                        ^                     ^                       ^
Receive information             Create an           Update an               Delete an
about an API resource           API resource        API resource            API resource

// ======================================================================================= //

GET:
GET is used to request data from a specified resource.
____________________________________________________

POST:
POST is used to send data to a server to create a resource.
____________________________________________________

PUT:
Create a new resource or replace if the resource exists.
-PATCH:
Patch is used to send data to a server to update a resource.
____________________________________________________

DELETE:
The DELETE method deletes the specified resource.

// ======================================================================================= //

// PUT VS POST VS PATCH
_______________________________________________________
PUT
Create a new resource or replace if the resource exists.
_______________________________________________________
POST
Create a new resource.
_______________________________________________________
PATCH
Partially update an existing resource.
_______________________________________________________


// ======================================================================================= //

// HTTP STATUS CODE

Code           Message
200            OK
301            Moved Permanently
302            Moved Temporarily
404            Not Found
500            Internal Server Error
503            Service Unavailable

 
*/