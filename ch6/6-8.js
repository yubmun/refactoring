// 매개변수 객체 만들기
export function readingsOutsideRange(station, range) {
  return station.readings.filter((readings) => !range.contains(readings.temp));
}

// 순수 데이터 객체를 수정
// range 범위 안에 있는지 판단하는 함수를 만들어 관리
export class NumberRange {
  #min;
  #max;
  constructor(min, max) {
    this.#min = min;
    this.#max = max;
  }

  get min() {
    return this.#min;
  }

  get max() {
    return this.#max;
  }

  contains(number) {
    return number >= this.#min && number <= this.#max;
  }
}

const operationPlan = new NumberRange(51, 53);

const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:20" },
    { temp: 58, time: "2016-11-10 09:30" },
    { temp: 53, time: "2016-11-10 09:40" },
    { temp: 51, time: "2016-11-10 09:50" },
  ],
};

readingsOutsideRange(station, operationPlan);