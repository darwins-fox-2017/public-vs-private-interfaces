'use strict'

//const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor (customer_name, type, acct_number) {
    this.customer_name = customer_name
    this.type = type
    this._acct_number = acct_number
  }

  get acct_number () {
    return this._acct_number
  }

  set acct_number (newNumber) {
    this._acct_number = newNumber
  }

  to_string () {
    console.log(`${this.customer_name} : Checking# ${this.acct_number}`)
  }

  cover_digits () {
    let hiddenAcct = this.acct_number.replace(/\d{3}-\d{3}-/g,'XXX-XXX-')
    console.log(`${this.customer_name} : Checking# ${hiddenAcct}`)
  }
}

let my_acct = new BankAccount('Hacktivate', 'Checking', '333-555-888')

console.log(my_acct)
console.log(my_acct.acct_number)
my_acct.acct_number = "222-444-999"
console.log(my_acct.acct_number)

// release 0
my_acct.to_string() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
