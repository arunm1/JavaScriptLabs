const testPerson = {
    first: "Klye",
    lastN: "Ben"
};
var people = [testPerson, testPerson, testPerson, testPerson, testPerson];

const testPerson2 = {
    first: "Jo",
    lastN: "Bennett"
};

describe('ArrayTest', () => {
    // Add a person to the end of the array here
    it('Test', () => {
        people.push(testPerson2);
        expect(people.length).toEqual(6);
        expect(people[5].first).toEqual("Jo");
    /*    // Add a person to the front of the array here
        people.unshift(testPerson2);
        expect(people.length).toEqual(7);
        expect(people[0].last).toEqual("Bennett");
       // Remove a person from the end of the array here
        people.pop(testPerson2);
        expect(people.length).toEqual(6);
        expect(people[5].first).not.toEqual("Jo");
        // Remove a person to the front of the array here
        people.shift();
        expect(people.length).toEqual(5);
        expect(people[0].last).not.toEqual("Bennett"); */
    })
});
//console.log (people)