'use strict'

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor (customer_name, type, acct_number) {
    this._customerName = customer_name;
    this._typeAccount = type;
    this._noRek = acct_number;
  }
 
  get account_number () {
    return this._noRek;
  }

  to_string () {
    let hasilString = this._customerName + " : " + this._typeAccount + "# " + this._noRek;
    console.log(hasilString);
  }

  cover_digits () {
    // let angkaHide = string.replace(/\d{3}-\d{2}/gi, 'XXX-XX');
    let polaRegex = this._noRek.replace(/\d{3}-\d{3}/gi, 'XXX-XXX');
    let hasilString = this._customerName + " : " + this._typeAccount + "# " + polaRegex;
    console.log(hasilString);
  }
}

let my_acct = new BankAccount('Hacktivate', 'Checking', '333-555-888')

//console.log(my_acct)
// console.log(my_acct.account_number)

// release 0
my_acct.to_string() // "Hacktivate: Checking# 333-555-888"
// console.log(my_acct.toString());

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"

console.log("Ini no rek : " + my_acct._noRek);