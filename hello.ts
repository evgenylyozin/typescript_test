import { rejects } from 'assert/strict'
import { resolve } from 'node:path'

console.log('Hello world!')

function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`)
}

greet('Brendan', new Date())

let someString = 'Test'

let someArrowFunc = () => {
    return 0
}

;(async () => {
    let response = await new Promise((resolve, reject) => {
        resolve(1)
    })
})()

import { ONE } from './exported'
const TWO = require('./exports').TWO
console.log(ONE)
console.log(TWO)
