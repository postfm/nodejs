// const promise = new Promise(function (resolve, reject) {
//   // setTimeout(() => { resolve('done') }, 2000)
//   setTimeout(() => { reject(new Error('Woops!')) }, 2000)
// })

// const promise = new Promise(resolve =>
//   setTimeout(() => { resolve('done') }, 2000)
// )

// const promise = new Promise(function (resolve, reject) {
//   setTimeout(() => { reject(new Error('Woops!')) }, 2000)
// })

// promise.catch(console.log)

// function delay(ms) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(), ms)
//   })
// }

// delay(3000).then(() => console.log('выполнилось через 3 секунды'));

const doSomthingAsinc = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('I did somthing'), 3000)
  })
}

const doSomthing = async () => {
  console.log(await doSomthingAsinc())
}

console.log('Before')
doSomthing()
console.log('After')