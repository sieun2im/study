//두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.

function solution(a, b, flag) {
    return flag ? a + b : a - b;
}

//문자들이 담겨있는 배열 arr가 주어집니다. arr의 원소들을 순서대로 이어 붙인 문자열을 return 하는 solution함수를 작성해 주세요.
function solution(arr) {
    return arr.join('');
}

//문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.
function solution(my_string, n) {
    return my_string.slice(my_string.length - n)
}

//정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 음수가 없다면 -1을 return합니다.
function solution(num_list) {
    return num_list.findIndex((i) => i < 0)
}

//알파벳으로 이루어진 문자열 myString이 주어집니다. 모든 알파벳을 대문자로 변환하여 return 하는 solution 함수를 완성해 주세요.
function solution(myString) {
    return myString.toUpperCase();
}

//문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.
function solution(my_string, k) {
    var answer = ''
    for (let i = 0; k > i; i++) {
        answer = answer + my_string
    }
    return answer
}

//양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.
function solution(a, b) {
    const A = Number(String(a) + String(b))
    const B = Number(String(b) + String(a))
    return A >= B ? A : B
}

//정수 n과 문자열 control이 주어집니다. control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다.

//"w" : n이 1 커집니다.
//"s" : n이 1 작아집니다.
//"d" : n이 10 커집니다.
//"a" : n이 10 작아집니다.
//위 규칙에 따라 n을 바꿨을 때 가장 마지막에 나오는 n의 값을 return 하는 solution 함수를 완성해 주세요.
function solution(n, control) {
    var answer = n
    for (let i = 0; i < control.length; i++) {
        switch (control[i]) {
            case 'w':
                answer = answer + 1;
                break;
            case 's':
                answer = answer - 1;
                break;

            case 'd':
                answer = answer + 10;
                break;

            case 'a':
                answer = answer - 10;
                break;

        }
    }
    return answer;
}

//정수 num과 n이 매개 변수로 주어질 때, num이 n의 배수이면 1을 return n의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요.
function solution(num, n) {
    return num % n ? 0 : 1;
}