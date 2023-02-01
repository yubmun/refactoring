// 예제 1
// side effect 없는 함수 만들기를 목표로 하고 코드를 짜야한다. 함수는 한가지 일을 수행해야 한다.
function getTotalOutstanding() {
  const result = customer.invoices.reduce(
    (total, each) => each.amount + total,
    0
  );
  return result;
}
function sendBill(){
  // sendBill 해주는 함수 작성
}

// 예제 2
export function alertForMiscreant(people, alarm) {
  const miscreant = findMiscreant(people);
  setOffAlarms(alarm, miscreant);
}

function findMiscreant(people){
  for (const p of people) {
    if (p === 'Don') {
      return 'Don';
    }
    if (p === 'John') {
      return 'John';
    }
  }
}

function setOffAlarms(alarm, p) {
  alarm.setOff('Found Miscreant ' + p);
}
