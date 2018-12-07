import listThings from '../src/listThings';
const listOfPeople = listThings("div", ["Tahani", "Chidi", "Jianyu"],'i');


describe('Testing Modules', () => {
    it('stub test', () => {
        console.log("testing Modules")
    })
    it('Function test', () => {
        let x = listThings("div", ["Tahani", "Chidi", "Jianyu"]);
        expect(x).toEqual("<div>1.Tahani</div><div>2.Chidi</div><div>3.Jianyu</div>")
        console.log(x)
    })
/*it('test roman numerals when needed',() => {
        let y = listThings("div", ["Tahani", "Chidi", "Jianyu"], 'i');
    expect(x).toEqual("<div>i.Tahani</div><div>ii.Chidi</div><div>iii.Jianyu</div>") console.log(x)
    })*/

});