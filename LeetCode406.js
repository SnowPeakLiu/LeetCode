/**
 * Created by 123fl on 24/05/2017.
 */
/**
 * @param {number[][]} people
 * @return {number[][]}
 * // beat 90.91%
 */
let reconstructQueue = function(people) {
    if (people.length === 0) {
        return [];
    }
    let compareHeight = function (a, b) {
        if (a[0] === b[0]) {
            return b[1] - a[1]; // not a[1] - [b]
            // if the heights of people are equal, the people with small k
            // should keep in queue earlier.
        }
        else {
            return a[0] - b[0];
        }
    };
    people.sort(compareHeight);

    let queue = [];
    queue.push(people.pop());
    let length = people.length;
    for(let i = people.length - 1; i >= 0; i--) {
        queue.splice(people[i][1],0,people[i]);
    }
    // for (let i = 0; i < length; i++) { // Don't use the people.length - 1 to
    //     // check the termination, in the for lop, people.pop() will change the length
    //     let peoplePreparedToQueue = people.pop();
    //     queue.splice(peoplePreparedToQueue[1], 0, peoplePreparedToQueue);
    // beat 72%
    // }
    return queue;
};

