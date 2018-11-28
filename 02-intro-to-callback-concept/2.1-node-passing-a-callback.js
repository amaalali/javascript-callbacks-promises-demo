/*
  (1)
  Description: This demo shows a typical way that an 
  asyc function can give the user controll. In this
  case `ARandomAsyncFunction` is a function that takes
  a callback as its first param. That callback must 
  accept one param which will be a function that will
  cause some side effects - in this console.log-ging.
*/

// This is the callback that will be passed to the
// async function
const ourAsyncHandler = (event) => {
  console.log("First")
  event() // (2) remember event is a function
  console.log("Third")
}

ARandomAsyncFunction(ourAsyncHandler)


/*
  Description: This function takes a callback that accepts
  a param.The param is a function that fires an event when
  called.

  Note: The code below represents code that you consume.
  You don't own it and cannot make changes to it.
*/
function ARandomAsyncFunction(callback) {
  setTimeout(() => {
    callback(
      () => console.log("Second - In setTimeout")  
    )
  }, 1000)
}