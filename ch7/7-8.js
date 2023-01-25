class Person {
  #name;
  #manager;
  #chargeCode;

  constructor(name, manager, chargeCode) {
    this.#name = name;
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get name() {
    return this.#name;
  }

  get manager(){
    return this.#manager;
  }

  get chargeCode(){
    return this.#chargeCode;
  }

}

const person = new Person('Tom', 'aManager', '999');
console.log(person.name);
console.log(person.manager);
console.log(person.chargeCode);
// 클래스가 나눠져야 하는지, 합쳐져야 하는지에 대해 판단하고 리팩토링해야 한다.
