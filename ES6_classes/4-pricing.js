import Currency from "./3-currency.js";

export default class Pricing extends Currency {
constructor(amount, currency) {
    if (typeof amount !== 'number'){
        throw new TypeError('Amount must be a number');
    }

    if (!(currency instanceof Currency)){
        throw new TypeError('currency must be a Currency');
    }
    super(currency.code, currency.name);
    this.amount = amount;
    this.currency = currency;
    }

    get amount(){
        return this._amount;
    }
    set amount(amount){
        if((typeof amount) === 'number'){
            this._amount = amount;
        } else {
            throw new TypeError('Amount must be a number');
        }
    }

    get currency(){
        return this._currency;
    }

    set currency(currency) {
        if (currency instanceof Currency){
            this._currency = currency;
        } else {
            throw new TypeError('currency must be a Currency')
        }
    }

    displayFullPrice(){
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }

}