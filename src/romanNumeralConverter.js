class RomanNumeralConvertor {

    get decimalNumber() {

        return this._decimalNumber;
    }
    set romanNumeral(value) {

        this._romanNumeral = value;
        this._decimalNumber = this.convert(value);
    }

get romanNumeral() {
    return this._romanNumeral;
}
convert(romanNumeral) {
    switch (romanNumeral) {
    case ('I'):
        return 1;
        break;
    case ('V'):
        return 5;
        break;
    case ('X'):
        return 10;
        break;
    case ('L'):
        return 50;
        break;
    case ('C'):
        return 100;
        break;
    case ('D'):
        return 500;
        break;
    case ('M'):
        return 1000;
        break;
    case ('iii'):
        return 3;
            break;
    case ('xiv'):
        return 14;
            break;
    default:
        throw "error";
    }

}
};
export default RomanNumeralConvertor;