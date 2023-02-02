export class Employee {
  // 생성자는 캡슐화했다고 가정
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: 'Engineer', M: 'Manager', S: 'Salesman' };
  }
  // 팩토리 함수는 외부에서 손쉽고 간결하게 사용할 수 있도록 하기 위해서 사용한다.
  static createEnginner(name){
    return new Employee(name, "E")
  }
}

const employee = Employee.createEnginner("준엽");
