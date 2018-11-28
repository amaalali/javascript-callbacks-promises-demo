/*
  Description: This example illustrates how functions are invoked in
  and demonstrate the async nature of that invocation, which can be
  counter-intuitive when first encountered. 

  The main 
*/


// This is how we import modules in node: https://nodejs.org/api/modules.html#modules_require
const https = require('https');


const handleReqestData = (resp) => {
  /*
    It isn't important that you understand this function at this point in the course,
    the main feature that this is demonstrating is that this function has console.logs
    that do not get "triggered" till the callback is executed.
  */

  let collectedData = "";

  console.log("(2.1) Response coming in!")
  console.log("(2.2) Collecting ... ")

  resp.on('data', (data) => {
    collectedData += data
  });

  resp.on('end', () => {

    console.log("(2.3) FINISHED!")
    console.log(collectedData)

  })
}


console.log("(1) Before request is fired");

const getPersonName = (person) => person.name.toUpperCase()


/* 
  https.get is function that takes a callback as its second parameter.
  Ref: https://nodejs.org/api/https.html#https_https_get_options_callback
*/
https.get("https://swapi.co/api/planets/1/", handleReqestData)


/* 
  this console.log is tiggered before the http request is returned, so if we
  attempted to assign the result to 
*/
console.log("(3) This is after the request was sent off")
