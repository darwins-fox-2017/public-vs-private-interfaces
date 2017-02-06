'use strict'

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor (customer_name, type, acct_number) {
    //
    this._customer_name = customer_name
    this._type = type
    this._account_number = acct_number
  }

  set customer_name (name) {
    this._customer_name = name
  }

  get customer_name () {
    return this._customer_name
  }

  set type (type) {
    this._type = type
  }

  get type () {
    return this._type
  }

  set account_number (acc) {
    this._account_number = acc
  }

  get account_number () {
    //
    return this._account_number
  }

  to_string () {
    //
    console.log(`Hacktivate: Checking# ${this.account_number}`)
  }

  cover_digits () {
    let pattern = /(\d{3}.??){2}/g
    this._acc_number = this._account_number.replace(pattern,`XXX-XXX`)
    console.log(`${this._customer_name}: ${this._type}# ${this._acc_number}`)
  }
}

let my_acct = new BankAccount('Hacktivate', 'Checking', '333-555-888')

console.log(my_acct)
console.log(my_acct.account_number)

// my_acct.customer_name = 'tes'
// console.log(my_acct.customer_name)


// release 0
my_acct.to_string() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
