import RomanNumeralConvertor from '../src/romanNumeralConverter';

const convertor = new RomanNumeralConvertor();
describe('Roman numeral converter', () => {
    it('will return 1 given i', () => {
        let actual = convertor.convert('I');
        expect(actual).toEqual(1);
        console.log(actual);
    });
    it('will return 5 given v', () => {
        let actual = convertor.convert('V');
        expect(actual).toEqual(5);
        console.log(actual);
    });
    it('will return 10 given x', () => {
        let actual = convertor.convert('X');
        expect(actual).toEqual(10);
        console.log(actual);
    });
    it('will return 50 given L', () => {
        let actual = convertor.convert('L');
        expect(actual).toEqual(50);
        console.log(actual);
    });
    it('will return 100 given C', () => {
        let actual = convertor.convert('C');
        expect(actual).toEqual(100);
        console.log(actual);

    });
    it('will return 500 given D', () => {
        let actual = convertor.convert('D');
        expect(actual).toEqual(500);
        console.log(actual);

    });
    it('will return 1000 given M', () => {
        let actual = convertor.convert('M');
        expect(actual).toEqual(1000);
        console.log(actual);
    });
    it("should convert roman to decimal using a setter and getter", () => {
        const convertor = new RomanNumeralConvertor();
        convertor.romanNumeral = "iii";
        expect(convertor.decimalNumber).toEqual(3);
      
    });
    it("should convert roman to decimal using a setter and getter", () => {
        const convertor = new RomanNumeralConvertor("");
        convertor.romanNumeral = "xiv";
        expect(convertor.decimalNumber).toEqual(14);
    });

});