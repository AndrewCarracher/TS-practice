import { person } from "./types"

export class FilterClass {

    // returns an array of numbers that are 5 or greater
    fiveAndGreaterOnly(arr: number[]) {
        return arr.filter((value) => value >= 5);
    }

    // returns even numbers only
    evenNumbersOnly(arr: number[]) {
        return arr.filter((value) => value % 2 === 0);
    }

    fiveOrFewer(arr: string[]) {
        return arr.filter((value) => value.length <= 5);
    }

    belongsToClub(arr: person[]) {
        return arr.filter((person) => person.member);
    }

    eighteenOrOlder(arr: person[]) {
        return arr.filter((person) => person.age >= 18);
    }

}