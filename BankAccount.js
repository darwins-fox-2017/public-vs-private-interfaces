'use strict'

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor (customer_name, type, acct_number) {
    // ACCT_NUMBER.set(this. acct_number);
    this.customerName  = customer_name
    this.type          = type
    this._accNumber    = acct_number
  }

  setCustomeName(valName){
    this.customerName = valName
  }

  getCustomerName(){
    return this.customerName
  }

  setType(valType){
    this.type = valType
  }

  getType(){
    return this.type
  }

  setAccNumber(valNumber){
    this._accNumber = valNumber
  }

  get account_number () {
    return this._accNumber
  }

  to_string () {
    return `${this.customerName}: ${this.type}# ${this._accNumber}`
  }

  cover_digits () {
    return this._accNumber.replace(/(\d{3})-(\d{3})-(\d{3})/, "***-***-$3")
  }
}

let my_acct = new BankAccount('Hacktivate', 'Checking', '333-555-888')

console.log(my_acct)
console.log(my_acct.account_number)

// release 0
my_acct.to_string() // "Hacktivate: Checking# 333-555-888"

// release 1
 // "Hacktivate: Checking# ***-***-888"
console.log(my_acct.cover_digits());
