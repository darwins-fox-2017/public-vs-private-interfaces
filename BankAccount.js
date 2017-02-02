'use strict'

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor (customer_name, type, acct_number) {
    this._customer_name = customer_name
    this._type = type
    this._acct_number = acct_number
  }

  get account_number () {
    return this._acct_number;
  }

  to_string () {
    var print = `${this._customer_name}: ${this._type}# ${this._acct_number}`
    console.log(print)
  }

  cover_digits () {
    let regex = this._acct_number.replace(/(\d{3})-(\d{3})-(\d{3})/g,"***-***-$3")
    console.log(this._customer_name+ ": " +this._type+"# " +regex)
  }
}

let my_acct = new BankAccount('Hacktivate', 'Checking', '333-555-888')

// console.log(my_acct)
// console.log(my_acct.account_number)
// console.log(my_acct.cover_digits)


// release 0
my_acct.to_string() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
