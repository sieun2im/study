
// LV 1. 유연 근무
function solution(schedules, timelogs, startday) {
    let worklogs = []
    
    const checkTime = (time, timeIndex) =>{
        
        const getTime = (t) =>{
            const h = Math.floor(t/100);
            const m = t%100;
            const totalTime = h*60+m
            return totalTime;
        }
        
        if(getTime(time)<=getTime(schedules[timeIndex])+10){
            return true;
        }else{
            return false
        }
    }
    
  worklogs = timelogs.map((personal, timeIndex) => {
        return personal.filter((time, index) => {
            const day = (startday + index - 1) % 7 + 1;
            if (day === 6 || day === 7) return false;
            return checkTime(time, timeIndex);
        });
    });
    
    return worklogs.filter(log=>log.length===5).length;
}



//LV1. 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.
function solution(s) {
    var answer = parseInt(s);
    return answer;
}


//LV1. 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
function solution(n) {
    let sum = 0;
    for(let i =1; i<=n; i++){
        if(n%i===0){
            sum = sum+i;
        }
    }
    return sum;
}

//LV1. 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
function solution(n)
{
    var answer = 0;
    answer = [...String(n)].reduce((a,b)=>Number(a)+Number(b),0)
    return answer;
}

//LV1. 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
function solution(n) {
    let answer = String(n).split('').reverse().map(n=>Number(n))
    return answer;
}


//LV1.함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

function solution(n) {
    var answer = parseInt([...String(n)].sort((a,b)=>b-a).join(''))
    return answer;
}

//LV1.임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다. n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
function solution(n) {
    var answer = 0;
    for(let i =1; i*i<=n;i++){
        if(i*i===n){
            answer=(i+1)**2
        }
    }
    return answer?answer:-1;
}


//LV 1. 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
function solution(num) {
    return num%2===0?"Even":"Odd";
}
 
//LV 1. 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
function solution(arr) {
    var answer = arr.reduce((a,b)=>a+b,0);
    return answer/arr.length;
}

//자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.
function solution(n) {
    var answer = 0;
    for(let i=0; i<n;i++){
        if(n%i===1){
            answer = i;
            break;
        }
    }
    return answer;
}

//문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요
function solution(s) {
    var answer = parseInt(s);
    return answer;
}
