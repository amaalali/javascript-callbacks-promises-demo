/*
  (1)
  Description: This example illustrates the async nature of 
  funciton excutions in JavsSctipt, which can be
  counter-intuitive when first encountered.

  Note: Line 9-14 ARE executed sequentially.
*/

let result = { value: 1 }

console.log(`BEFORE: result at this point is: ${result.value}`)

const x = ARandomAsyncFunction(result) 

console.log(`AFTER: result at this point is: ${result.value}`)



/*
  (2)
  This is an asyc function that modified the `value` property
  of the object its passed.
*/
function ARandomAsyncFunction(toIncrease) {
  setTimeout(() => {
    toIncrease.value++
    /*
      (3)
      When we see this value it should be the value of result,
      which is defined on line 10, but moduified. This is to prove
      that line 27 did actually do something.
    */
    console.log(`INSIDE: ARandomAsyncFunction and result at this point is: ${result.value}`)
  }, 500)

}
