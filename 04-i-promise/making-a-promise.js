function PromiseMachine(int) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log("x - in Promise")

      if (int == 1) {
        resolve(int * int)
      } else {
        reject(new Error(`Number ${int} != 1. We wanted 1 -_-`))
      }
    }, 0)
  })
}

console.log("1 - Before rejected promise made")

PromiseMachine(2)
  .then((x) => console.log(x))
  .catch((e) => console.log(e.message))

console.log("2 - After we gave rejected promise the callback")


console.log("1 - Before resolved promise made")

PromiseMachine(1)
  .then((x) => console.log(x))
  .catch((e) => console.log(e.message))

console.log("2 - After we gave resolved  promise the callback")
