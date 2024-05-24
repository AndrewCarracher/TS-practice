// return sum total of array of numbers using reduce
function total(arr: number[]) {
    return arr.reduce(
        (acc, curr) => acc + curr
    )
}

// turn an array of numbers into a long string 
function stringConcat(arr: number[]) {
    return arr.reduce((acc: string, curr: number) => acc += curr, "")
}

// how many people voted
function totalVotes(voters: voter[]) {
    return voters.reduce(
        (acc: number, curr: voter) => curr.voted ? acc + 1 : acc + 0, 0
    )
}

// work out total cost of whishlist
function shoppingSpree(wishlist: listItem[]) {
    return wishlist.reduce(
        (acc: number, curr: listItem) => acc + curr.price, 0
    )
}

// flatten multi arrays single
function flatten(multiArr: any[][]) {
    return multiArr.reduce(
        (acc: any[], curr: any) => acc.concat(curr), []
    )
}

// create an objects detailing voter catergories and who voted
function voterResults(voters: voter[]) {
    return voters.reduce(
        (acc: voterResult, curr: voter) => {
            if (curr.age > 17 && curr.age < 26) {
                acc.numYoungPeople ++;
                if (curr.voted) {
                    acc.numYoungVotes ++;
                }
            } else if (curr.age > 25 && curr.age < 36) {
                acc.numMidsPeople ++;
                if (curr.voted) {
                    acc.numMidVotesPeople ++;
                }
            } else if (curr.age > 36 && curr.age < 55) {
                acc.numOldsPeople ++;
                if (curr.voted) {
                    acc.numOldVotesPeople ++;
                }
            } 
            return acc;
        }, { 
            numYoungVotes: 0,
            numYoungPeople: 0,
            numMidVotesPeople: 0,
            numMidsPeople: 0,
            numOldVotesPeople: 0,
            numOldsPeople: 0
        } as voterResult
    );

};

type voter = {
    name: string; 
    age: number;
    voted: boolean;
}

type voterResult = {
    numYoungVotes: number;
    numYoungPeople: number;
    numMidVotesPeople: number;
    numMidsPeople: number;
    numOldVotesPeople: number;
    numOldsPeople: number;
}

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

type listItem = {
    title: string;
    price: number;
};

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

var arrays = [
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

console.log("Total sum of array: Expected: 6 | Actual: " + total([1,2,3])); 
console.log("String concat: Expected: 123 | Actual: " + stringConcat([1,2,3]));
console.log("Total number of voters: Expected: 7 | Actual: " + totalVotes(voters)); 
console.log("Total cost of wish list: Expected: 227005 | Actual: " + shoppingSpree(wishlist)); 
console.log("Flatten array: Expected ['1', '2', '3', true, 4, 5, 6] | Actual: " + flatten(arrays));
console.log("Voters parse: Expected: "); 
console.log(votersExpected);
console.log(" | Actual: ");
console.log(voterResults(voters));

