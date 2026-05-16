
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
