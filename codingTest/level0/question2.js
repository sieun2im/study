//정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.
function solution(num1, num2) {
    return num1 % num2;
}

//정수 num1, num2가 매개변수 주어집니다. num1과 num2를 곱한 값을 return 하도록 solution 함수를 완성해주세요.
function solution(num1, num2) {
    return num1 * num2;
}

// 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.
function solution(num1, num2) {
    return Math.trunc(num1 / num2);
}

//정수 num1과 num2가 주어질 때, num1과 num2의 합을 return하도록 soltuion 함수를 완성해주세요.
function solution(num1, num2) {
    return num1 + num2;
}

//각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.
const solution = (angle) => {
    return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : angle === 180 ? 4 : null;
}

//덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다. 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.
function solution(quiz) {
    const answer = quiz.map((q) => {
        return eval(q.replace('=', '===')) ? 'O' : 'X';
    })

    return answer;
}

console.log(solution(["3 - 4 = -3", "5 + 6 = 11"]));

