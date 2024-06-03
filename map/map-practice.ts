import { person } from "./types";

export class MapClass {

    // returns an array of numbers, double the value of the input array 
    doubleNumbers(arr: number[]){
        return arr.map((value) => value * 2);
    }

    // take an array or numbers and convert them to strings
    stringItUp(arr: number[]) {
        return arr.map((value) => value.toString());
    }

    // returns capitalized array of names
    capitalizeNames(arr: string[]){
        return arr.map((value) => {
            let resultValue = value.toLowerCase();
            resultValue = resultValue[0].toLocaleUpperCase() + resultValue.slice(1);
            return resultValue;
        });
    }

    namesOnly(arr: person[]) {
        return arr.map((person: person) => person.name);
    }

    is18OrOver(arr: person[]) {
        return arr.map((person: person) => person.age >= 18 ? `${person.name} is over 18` : `${person.name} is under 18`);
    }
}
  