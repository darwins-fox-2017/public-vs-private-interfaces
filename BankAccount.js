'use strict'

// const costumerName = new WeakMap();
// const type = new WeakMap()

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor (customer_name, type, acct_number) {
    this.costumerName = customer_name;
    this.type = type;
    ACCT_NUMBER.set(this, acct_number)
  }


  set setAcctNumber(acct_number) {
    ACCT_NUMBER.set(this, acct_number)
  }

  get account_number () {
    return ACCT_NUMBER.get(this)
  }

  to_string () {
    console.log( `${this.costumerName}: ${this.type}# ${ACCT_NUMBER.get(this)}` );
  }

  cover_digits () {
    console.log( `${this.costumerName}: ${this.type}# ${ACCT_NUMBER.get(this) .replace(/\d{3}.\d{3}/,"***-***")}` );
  }
}

let my_acct = new BankAccount('Hacktivate', 'Checking', '333-555-888')

console.log(my_acct)
console.log(my_acct.account_number)

// release 0
my_acct.to_string() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
