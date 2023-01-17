// 가독성이 떨어지는 함수 (너무 길다 기능별로 함수를 만들어서 쪼갠다)
export function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};

function printBanner(){
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}

function calculateOutstanding(invoice){
  return invoice.orders.reduce((sum, order) => (sum += order.amount), 0);

  // let result = 0;
  // // 총 가격을 계산
  // // calculate outstanding
  // for (const o of invoice.orders) {
  //     result += o.amount;
  // }
  // return result
}

function recordDueDate(invoice){
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

function printDetails(invoice, outstanding){
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

printOwing(invoice);
