// function solution(babbling) {
//     var answer = 0;

//     const filterBabble = (babble) => {
//         return babble.replace('aya', '.')
//             .replace('ye', '.')
//             .replace('ma', '.')
//             .replace('woo', '.')
//             .replaceAll('.', '');
//     }

//     answer = babbling.map((babble) => {
//         return filterBabble(babble);
//     }).filter((babble) => {
//         return babble === '';
//     }).length

//     return answer;
// }


function solution(n, w, num) {
    var answer = 0;
    let rest = n % w || w;
    const floor = Math.trunc((n - 1) / w + 1);
    const targetFloor = Math.trunc((num - 1) / w + 1);
    let targetRest = num % w || w

    if (targetFloor % 2 !== floor % 2) {
        if (rest + targetRest > w) {
            return floor - targetFloor + 1
        } else {
            return floor - targetFloor
        }
    } else {
        return rest >= targetRest ? floor - targetFloor + 1 : floor - targetFloor
    }
}