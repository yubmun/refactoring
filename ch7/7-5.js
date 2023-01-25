// 클래스 추출하기, 전화번호에 대한 내용은 따로 클래스를 추출해서 만들어줌.
class Person {
  #name;
  #telephoneNumber
  constructor(name, areaCode, number) {
    this.#name = name;
    this.#telephoneNumber = new TelephoneNumber(areaCode, number);
  }

  get name() {
    return this.#name;
  }

  set name(arg) {
    this.#name = arg;
  }

  get telephoneNumber() {
    return this.#telephoneNumber
  }

  get officeAreaCode() {
    return this.#officeAreaCode;
  }

  set officeAreaCode(arg) {
    this.#officeAreaCode = arg;
  }

  get officeNumber() {
    return this.#officeNumber;
  }

  set officeNumber(arg) {
    this.#officeNumber = arg;
  }
}
class TelephoneNumber{
  #areaCode;
  #number;

  constructor(areaCode, number){
    this.#areaCode = areaCode;
    this.#number = number;
  }
  // 전화번호 관련 함수 추가
}

const person = new Person('엘리', '010', '12345678');
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
