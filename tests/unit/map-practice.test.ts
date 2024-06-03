import { MapClass } from '../../map/map-practice';

const mapper = new MapClass();

const personArray = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];

test('doubles values in array', () => {
    expect(mapper.doubleNumbers([2, 5, 100])).toEqual([4, 10, 200]);
});

test('converts number array to string array', () => {
    expect(mapper.stringItUp([2, 5, 100])).toEqual(["2", "5", "100"]);
});

test('capitalizes each entry in a string array', () => {
    expect(mapper.capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])).toEqual(["John", "Jacob", "Jingleheimer", "Schmidt"]);
});

test('returns names only', () => {
    expect(mapper.namesOnly(personArray)).toEqual(["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]);
});

test('is 18 or older', () => {
    const expectedResult = [
        "Angelina Jolie is over 18",
        "Eric Jones is under 18",
        "Paris Hilton is under 18",
        "Kayne West is under 18",
        "Bob Ziroll is over 18"
    ];

    expect(mapper.is18OrOver(personArray)).toEqual(expectedResult);
});
