const exp=function(p1,p2)
{
    return p1+p2;
}
function stmt(p1,p2)
{
    return p1+p2;
}
var arrow=(p1,p2)=>p1+p2;
var makePerson=(fn,ln,em,ph)=>{
   
    return true;
}

describe('Testing exp function', () => {
    it('will return true if sum is 4',()=>{
        let x=exp(2,2);
        expect(x).toEqual(4);
           })
     it('will return true if sum is 6',()=>{
        let x=stmt(4,2);
        expect(x).toEqual(6);
           })
     it('will return true if sum is 8',()=>{
        let x=arrow(4,4);
        expect(x).toEqual(8);
           })
     it('can create a person',()=>{
        let x=makePerson("ln","em","ph");
        expect(x).toBeDefined();
           })
});