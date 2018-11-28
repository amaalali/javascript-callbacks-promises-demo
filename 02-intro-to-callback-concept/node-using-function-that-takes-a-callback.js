// You can see this
ARandomAsyncFunction((event /* remember event is a function */) => {
  console.log("First")
  event()
  console.log("Third")
})


// You can's see this
// \/  \/  \/  \/  \/

// How to use this function
// Takes a callback with param 
//   - the param is an event param that
//     can be fired when you invoke it 
function ARandomAsyncFunction(callback) {
  setTimeout(() => {
    callback(
      () => console.log("Second - In setTimeout")  
    )
  }, 1000)
}
// /\ /\ /\ /\ /\ /\