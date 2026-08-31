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
