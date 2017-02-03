'use strict'

class BankAccount {
  constructor (customer_name, type, acct_number) {
    this.customer_name = customer_name;
    this.type = type;
    this._acct_number = acct_number;
  }

  get acct_number() {
    return `${this._acct_number}`
  }

  to_string () {
    console.log(`${this.customer_name}: ${this.type} #${this._acct_number}`)
    return this
  }

  cover_digits () {
    console.log(`${this.customer_name}: ${this.type}# ${this._acct_number.replace(/(\d\d\d)-(\d\d\d)-(\d\d\d)/i, "***-***-$3")}`)
    return this
  }
}

let my_acct = new BankAccount('Hacktivate', 'Checking', '444-555-777')

console.log(my_acct)
console.log(my_acct.acct_number)

// release 0
my_acct.to_string() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
