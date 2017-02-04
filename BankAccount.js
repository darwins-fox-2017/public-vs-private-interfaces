'use strict'

// const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor (costumer_name, type, acct_number) {
    this._costumerName = costumer_name
    this._type = type
    this._acc_number = acct_number
  }

  get accountNumber () {
    return this._acc_number
  }

  get type () {
    return this._type
  }

  get accountNumber () {
    return this._acc_number
  }

  set newCustumerName(costumerName){
    this._costumerName = costumerName
  }

  set newType(type){
    this._type = type
  }

  set newAccountNum(acct_number){
    this._acc_number = acct_number
  }

  to_string () {
    console.log(`${this._costumerName}: ${this._type}# ${this._acc_number}`)
  }

  cover_digits () {
    let pattern = /(\d{3}.??){2}/g
    this._acc_number = this._acc_number.replace(pattern,`XXX-XXX`)
    console.log(`${this._costumerName}: ${this._type}# ${this._acc_number}`)
  }
}

let my_acct = new BankAccount('Hacktivate', 'Checking', '333-555-888')

console.log(my_acct)
console.log(my_acct.account_number)

// release 0
my_acct.to_string() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
