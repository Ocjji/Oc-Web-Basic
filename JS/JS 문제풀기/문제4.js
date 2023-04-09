'use strict';

function solution(players, callings) {
    var answer = [];

    let call_count = {};

    for (let i = 0; i < callings.length; i++) {
        if (call_count[callings[i]]) {
            call_count[callings[i]]++;
        } else {
            call_count[callings[i]] = 1;
        }
    }
    console.log(call_count);

    for (let call in call_count) {
        // console.log(call);
        let calling_idx = 0;

        for (let k = 0; k < players.length; k++) {
            if (players[k] === call) {
                calling_idx = k;
                // console.log(calling_idx);
                for (let j = 0; j < call_count[call]; j++) {
                    // console.log(call_count[call]);
                    let temp = players[calling_idx - j];
                    // console.log(players);
                    players[calling_idx - j] = players[calling_idx - j - 1];
                    // console.log(players);
                    players[calling_idx - j - 1] = temp;
                    // console.log(players);
                }
            }
        }
    }
    answer = players;
    return answer;
}

/* for (let j = calling_idx; calling_idx < calling_idx + call_count[call]; j++) {
    console.log(call_count[call]);

    let temp = players[calling_idx];
    players[calling_idx] = players[calling_idx - 1];
    players[calling_idx - 1] = temp;
} */






let players = ["mumu", "soe", "poe", "kai", "mine"];

let callings = ["kai", "kai", "mine", "mine"];

console.log(solution(players, callings));