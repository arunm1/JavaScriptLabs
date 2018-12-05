import convert from "../src/romanNumeralConverter";

describe('Roman numeral converter', () => {
    it('will return 1 given I', () => {
        let actual = convert('I');
        expect(actual).toEqual(1);
    });
    it('will return 5 given V', () => {
        let actual = convert('V');
        expect(actual).toEqual(5);
    });
    it('will return 10 given X', () => {
        let actual = convert('X');
        expect(actual).toEqual(10);
    });
    
    it('will return 50 given L', () => {
        let actual = convert('L');
        expect(actual).toEqual(50);
    });
    
    it('will return 100 given C', () => {
        let actual = convert('C');
        expect(actual).toEqual(100);
    });
    
    it('will return 500 given D', () => {
        let actual = convert('D');
        expect(actual).toEqual(500);
    });
    
    it('will return 1000 given M', () => {
        let actual = convert('M');
        expect(actual).toEqual(1000);
    });
    it('will return 6 given VI', () => {
        let actual = convert('VI');
        expect(actual).toEqual(6);
    });
});