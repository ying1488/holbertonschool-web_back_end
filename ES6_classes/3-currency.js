export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if ((typeof code) === 'string') {
      this._code = code;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if ((typeof name) === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}