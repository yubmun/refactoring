import _ from "lodash";

const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

export function acquireReading() {
  return reading;
}

export function enrichReading(original){
  // const result = {...original}; // Object.assign ... 스프레드나 어싸인은 얕은 복사만 이뤄진다, 또다시 설명해주시지만 객체 안의 객체가 또 있다면 참조값을 복사하여 데이터 변경이 이뤄질 수 있어서 위험함

  const result = _.cloneDeep(original); // 싹다 복사해오는 loadash 라이브러리 이용함
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(result.year));

  return result;

}
function calculateBaseCharge(reading){
  return baseRate(reading.month, reading.year) * reading.quantity;
}

export function baseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}
