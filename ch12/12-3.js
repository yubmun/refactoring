class Party {
  #name;
  constructor(name){
    // 이름에 뭐가들어와야 되는지 조건을 걸어야 한다면 부모클래스에서 조건식을 작성
    this.#name = name;
  }
}

class Employee extends Party {
  #id;
  #monthlyCost;
  constructor(name, id, monthlyCost) {
    super(name);
    this.#id = id;
    this.#monthlyCost = monthlyCost;
  }
}

class Department extends Party {
  #staff;
  constructor(name, staff) {
    super(name);
    this.#staff = staff;
  }
}

const ellie = new Employee('엘리', 123, 13);
const department = new Department('개발부서', ellie);
