'use strict'

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor (customer_name, type, acct_number) {
    //
    this.customer_name = customer_name
    this.type = type
    this._accNumber = acct_number
  }

  get account_number () {
    //
    return this._accNumber
  }

  to_string () {
    //
    console.log( this.customer_name + ": " + this.type + "# " + this._accNumber )
  }

  cover_digits () {
    //
    let splitAccNum =  this._accNumber.split('-')
    // console.log(splitAccNum)
    let hideNum = splitAccNum.splice(0, 2, '***','-','***', '-')

    console.log (( this.customer_name + ": " + this.type + "# " + splitAccNum.join('') ))
  }
}

let my_acct = new BankAccount('Hacktivate', 'Checking', '333-555-888')

console.log(my_acct)
// console.log(my_acct.account_number)

// release 0
my_acct.to_string() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
