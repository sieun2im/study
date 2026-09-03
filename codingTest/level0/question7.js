/*
정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

제한사항
2 ≤ num_list의 길이 ≤ 10
1 ≤ num_list의 원소 ≤ 9
num_list에는 적어도 한 개씩의 짝수와 홀수가 있습니다.
*/

// 짝수, 홀수를 각각의 배열로 나누어 합친뒤 계산하는 방법
const solution = num_list => {
    let odd = Number(num_list.filter(item => item%2===0).join(""));
    let even = Number(num_list.filter(item => item%2===1).join(""));
    return odd+even;-
}

// 주어진 값을 한번에 순회해서 계산하는 방법
// odd, even 변수 값을 문자열로 설정하여 암묵적 타입 변환 때문에 num_list로 넘어온 배열의 숫자값이 문자열로 변환하는 방식
const solution = num_list => {
    let odd = "";
    let even = "";
    num_list.forEach((item) => {
        if(item%2===0) {
            even += item;
        } else {
            odd += item;
        }
    })
    return Number(odd)+Number(even);
}

//두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.

function solution(a, b) {
    let answer = 0;
    for(let i=Math.min(a,b); i<=Math.max(a,b); i++){
        answer=answer+i
    }
    return answer;
}

/*
네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

1478 → "one4seveneight"
234567 → "23four5six7"
10203 → "1zerotwozero3"
이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(str) {
    var answer = str;
    
       answer= answer.replaceAll('zero','0');
       answer= answer.replaceAll('one','1');
       answer= answer.replaceAll('two','2');
       answer= answer.replaceAll('three','3');
       answer= answer.replaceAll('four','4');
       answer= answer.replaceAll('five','5');
       answer= answer.replaceAll('six','6');
       answer= answer.replaceAll('seven','7');
       answer= answer.replaceAll('eight','8');
       answer= answer.replaceAll('nine','9');
    

    return Number(answer);
}


// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
function solution(x, n) {
    var answer = [];
    for(let i=1; i<=n;i++){
        answer.push(x*i)
    }
    
    return answer;
}

/*


카카오톡 게임별의 하반기 신규 서비스로 다트 게임을 출시하기로 했다. 다트 게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임으로, 모두가 간단히 즐길 수 있다.
갓 입사한 무지는 코딩 실력을 인정받아 게임의 핵심 부분인 점수 계산 로직을 맡게 되었다. 다트 게임의 점수 계산 로직은 아래와 같다.

다트 게임은 총 3번의 기회로 구성된다.
각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다.
스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)
스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고)
스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.
0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.

*/

function solution(dartResult) {
    
    var options = dartResult
    options=options.split(/(?:10|[0-9])[STD]/);
    options.shift()
    
    var answer = dartResult;
    answer = answer.replaceAll('*','').replaceAll('#','').replaceAll('S','**1 ').replaceAll('D','**2 ').replaceAll('T','**3 ');
    answer =answer.split(' ');
    answer.pop()
    
    const sum = answer.reduce((acc, cur, index) => {
        let result = new Function('return ' + cur)();
        if(options[index]==='#'){
            result = result*(-1);
        }
        if(options[index] ==='*'){
            result =  result*2
        }
        if(options[index+1] ==='*'){
            result =  result*2
        }
        return acc + result;
    }, 0);
    
    return sum;
}
