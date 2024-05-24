import { ReduceClass } from '../../reduce/reduce-practice'

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6]
];

const votersExpected = { 
    numYoungVotes: 1, // 18 - 25
    numYoungPeople: 4, // 18 - 25
    numMidVotesPeople: 3, // 26 - 35
    numMidsPeople: 4, // 26 - 35
    numOldVotesPeople: 2, // 36 - 55
    numOldsPeople: 3 // 36 - 55
}

const reducer = new ReduceClass();
test('Total sum of array', () => {
    expect(6).toEqual(reducer.total([1,2,3]));
});

test('String concatination with reduce', () => {
    expect('123').toEqual(reducer.stringConcat([1,2,3]));
});

test('Total number of voters', () => {
    expect(7).toEqual(reducer.totalVotes(voters));
})

test('Total cost of wish list', () => {
    expect(227005).toEqual(reducer.shoppingSpree(wishlist));
})

test('Flatten array', () => {
    expect(['1', '2', '3', true, 4, 5, 6]).toEqual(reducer.flatten(arrays));
})

test('Voter breakdown', () => {
    expect(votersExpected).toEqual(reducer.voterResults(voters));
})