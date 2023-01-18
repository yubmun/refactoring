// let defaultOwner = { firstName: '마틴', lastName: '파울러' };
let defaultOwner = new Person({ firstName : "마틴", lastName: "파울러"});
// 불변성 
// 이 코드에서의 문제는, 객체 자체가 문제다.defaultOwner,, mutable하기 때문에 객체는 변경이 가능해져버림 6-6use.js에 그 이유가 있다. defaultOwner가 변경이 가능해져버리기 때문에 위험한 코드다.
export function getDefaultOwner() {
  // return Object.assign(defaultOwner);
  // return {...defaultOwner};
  // 위 두가지 방법으로 객체에 직접 접근하지 않도록 할 수 있다. 단, 얕은복사가 되기 때문에 안에 중첩된 객체가 하나 더있다면 참조값을 복사하기 때문에 또 문제가 될 수 있다. 그럴떈 클래스를 만들어버리면 안전하다.
}

class Person {
  #lastName;
  #firstName;

  constructor(data){
    this.#lastName = data.lastName;
    this.#firstName = data.firstName;
  }
  get lastName(){
    return this.#lastName;
  }
  get firstName(){
    return this.#firstName;
  }
}
