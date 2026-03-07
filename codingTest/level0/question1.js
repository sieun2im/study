//정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을 return하도록 soltuion 함수를 완성해주세요.

function solution1(num1, num2) {
    var answer = 0;
    answer = num1 - num2;
    return answer;
}


//정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.
function solution2(num1, num2) {
    var answer = num1 === num2 ? 1 : -1;
    return answer;
}

const solution3 = (num1, num2) => num1 === num2 ? 1 : -1;


//머쓱이는 선생님이 몇 년도에 태어났는지 궁금해졌습니다. 2022년 기준 선생님의 나이 age가 주어질 때, 선생님의 출생 연도를 return 하는 solution 함수를 완성해주세요
function solution(age) {
    return 2023 - age;
}


//정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 solution 함수를 완성해주세요.
function solution(num1, num2) {
    return Math.floor(num1 / num2 * 1000);
}

//Math.trunc, ~~: 소수점 버리기
//return ~~(num1/num2*1000);
//Math.floor: 내림
//parseInt: 정수값 반환