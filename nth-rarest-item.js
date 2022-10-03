const list = [5, 4, 5, 4, 5, 4, 4, 5, 3, 3, 3, 2, 2, 1, 5, 6, 6]; //A sample list of values

function getCount(array, value) {
    //Checks how many times a value exists in an array.
    return array.filter((v) => (v === value)).length;
}

//Solution 1 - looking for the first match
function nth_most_rate_signature(list, n) {
    //Remove all duplicates from an array to get a unique list of entries
    const uniqueList = [...new Set(list)];

    for (let i = 0; i < uniqueList.length; i++) {
        const value = uniqueList[i];

        //For each value in the unique list, check how many times it exists in the original list.
        const count = getCount(list, value);

        //Once a value's repetition matches the number of repetition that is being looked for , return it.
        if(count === n){
            return value;
        }
    }

    return null;
}

//Solution 2 - looking for all possible matches
function nth_most_rate_signature_two(list, n) {
    //Remove all duplicates from an array to get a unique list of entries
    const uniqueList = [...new Set(list)];

    //Store house of all values that match the required number of repeated entries
    const matchedValues = [];

    for (let i = 0; i < uniqueList.length; i++) {
        const value = uniqueList[i];

        //For each value in the unique list, check how many times it exists in the original list.
        const count = getCount(list, value);

        //Once a value's repetition matches what we are looking for , push to the matched values array.
        if(count === n){
            matchedValues.push(value);
        }
    }

    return matchedValues;
}

console.log(nth_most_rate_signature(list, 2));
console.log(nth_most_rate_signature_two(list, 2));