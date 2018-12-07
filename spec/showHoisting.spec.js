import showHoisting from '../src/showHoisting' ;

describe('Testing Variables', () => {
    it('will return true given showHoisting',()=>{
        let x=showHoisting();
        expect(x).toBeTruthy();
           })
});