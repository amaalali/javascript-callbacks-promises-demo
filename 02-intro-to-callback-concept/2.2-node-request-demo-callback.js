/*
  (1)
  Description: In this demo we are making an http request and
  printing the results. Here, the https module is being used
  to make the requests. This method takes a callback that takes
  one param - the response data.
*/


// This is how modules are imported in node
const https = require('https');


// This is settup - you can skip to the first console.log
const handleReqestData = (resp) => {
  /*
    It isn't important that you understand this function at this 
    point in the course, the main feature that this is demonstrating 
    is that this function has console.logs that do not get "triggered"
     till the callback is executed.
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


/* 
  We're interested in this bit:
  \/   \/   \/   \/   \/   \/
*/

console.log("(1) Before request is fired");

/* 
  https.get is function that takes a callback as its second parameter.
  Ref: https://nodejs.org/api/https.html#https_https_get_options_callback
*/
https.get("https://swapi.co/api/planets/1/", handleReqestData)


/* 
  this console.log can be tiggered before the http request is returned
*/
console.log("(3) This is after the request was sent off")
