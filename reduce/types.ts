export type voter = {
    name: string; 
    age: number;
    voted: boolean;
}

export type voterResult = {
    numYoungVotes: number;
    numYoungPeople: number;
    numMidVotesPeople: number;
    numMidsPeople: number;
    numOldVotesPeople: number;
    numOldsPeople: number;
}

export type listItem = {
    title: string;
    price: number;
};