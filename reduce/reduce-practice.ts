import { voter, voterResult, listItem } from './types';


export class ReduceClass {

    // return sum total of array of numbers using reduce
    total(arr: number[]) {
        return arr.reduce(
            (acc, curr) => acc + curr
        )
    }

    // turn an array of numbers into a long string 
    stringConcat(arr: number[]) {
        return arr.reduce((acc: string, curr: number) => acc += curr, "")
    }
    
    // how many people voted
    totalVotes(voters: voter[]) {
        return voters.reduce(
            (acc: number, curr: voter) => curr.voted ? acc + 1 : acc + 0, 0
        )
    }

    // work out total cost of whishlist
    shoppingSpree(wishlist: listItem[]) {
        return wishlist.reduce(
            (acc: number, curr: listItem) => acc + curr.price, 0
        )
    }

    // flatten multi arrays single
    flatten(multiArr: any[][]) {
        return multiArr.reduce(
            (acc: any[], curr: any) => acc.concat(curr), []
        )
    }

    // create an objects detailing voter catergories and who voted
    voterResults(voters: voter[]) {
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
            }
        );  
    };  

}