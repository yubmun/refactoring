export class Order {
  constructor(data) {
    this.priority = data.priority;
  }
  isHighPriority(){
    return 'high' === this.priority || 'rush' === this.priority;
  }
}

class Priority{
  #value;
  constructor(value){
    if(Priority.legalValues().includes(value)){
      this.#value = value;
    } else {
      throw new Error(`${value} 는 포함되지 않는 범주입니다.`); // 생성자 안에서 에러를 던지는건 보안에 취약한 코드라 추천하지는 않는다
    }
  }

  get index(){
    return Priority.legalValues().indexOf(this.#value);
  }

  equals(other){
    return this.index === other.#index;
  }

  higherThan(other){
    return this.index > other.index;
  }

  static legalValues(){
    return ["low", "normal", "high", "rush"]
  }
}

const orders = [
  new Order({ priority: 'normal' }),
  new Order({ priority: 'high' }),
  new Order({ priority: 'rush' }),
];

const highPriorityCount = orders.filter(
  (o) => o.isHighPriority()).length;
