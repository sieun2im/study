/*
학생식당에서는 매일 여러 종류의 메뉴를 판매한다. 학생식당 관리자는 하루 동안 어떤 메뉴가 가장 많이 주문되었는지 확인하여, 다음 날 식단 구성에 참고하려고 한다. 
메뉴는 1번부터 M번까지의 번호로 구분된다. 하루 동안 총 N개의 주문 기록이 주어지며, 각 주문 기록에는 학생이 주문한 메뉴 번호가 하나씩 적혀 있다.
관리자는 이 주문 기록을 바탕으로 가장 많이 주문된 메뉴를 인기 메뉴로 선정하려고 한다. 
단, 가장 많이 주문된 횟수가 같은 메뉴가 여러 개 있을 수 있다. 이 경우에는 메뉴 번호가 작은 메뉴를 인기 메뉴로 선정한다. 
하루 동안의 주문 기록이 주어졌을 때, 인기 메뉴의 번호를 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 주문 기록의 수 N과 메뉴의 개수 M이 공백으로 구분되어 주어진다. 
둘째 줄에 하루 동안 주문된 N개의 메뉴 번호가 공백으로 구분되어 주어진다. 
출력 가장 많이 주문된 메뉴의 번호를 출력한다. 가장 많이 주문된 메뉴가 여러 개라면, 그중 번호가 가장 작은 메뉴의 번호를 출력한다.
*/

const [n,m] = a.split(" ");
const orderList = b.split(" ");
let orderCounts = new Array(m).fill(0);

for(order of orderList){
  orderCounts [Number(order)-1]=++orderCounts [Number(order)-1];
}

const orderMax = Math.max(...orderCounts)
const result = orderCounts.findIndex(order=> order===orderMax)+1
