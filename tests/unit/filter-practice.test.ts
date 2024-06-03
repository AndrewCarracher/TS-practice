import { FilterClass } from "../../filter/filter-practice" 

const filterer = new FilterClass();
const numberArr = [1,3,5,6,7,8];
const stringArray =  ["dog", "wolf", "by", "family", "eaten", "camping"];
const people = [
    { name: "Angelina Jolie", member: true, age: 80},
    { name: "Eric Jones", member: false, age: 2 },
    { name: "Paris Hilton", member: true, age: 5 },
    { name: "Kayne West", member: false, age: 16 },
    { name: "Bob Ziroll", member: true, age: 100 }
];

test('only returns numbers that are 5 or greater', () => {
    expect(filterer.fiveAndGreaterOnly(numberArr)).toEqual([5,6,7,8]);
});

test('only returns even numbers', () => {
    expect(filterer.evenNumbersOnly(numberArr)).toEqual([6,8]);
});

test('only returns words 5 or fewer chars', () => {
    expect(filterer.fiveOrFewer(stringArray)).toEqual(["dog", "wolf", "by", "eaten"]);
});

test('returns people who belong in club', () => {
    expect(filterer.belongsToClub(people)).toEqual([
        { name: "Angelina Jolie", member: true, age: 80},
        { name: "Paris Hilton", member: true, age: 5 },
        { name: "Bob Ziroll", member: true, age: 100 }
    ])
})

test('returns people aged 18+', () => {
    expect(filterer.eighteenOrOlder(people)).toEqual([
        { name: "Angelina Jolie", member: true, age: 80},
        { name: "Bob Ziroll", member: true, age: 100 }
    ])
})


