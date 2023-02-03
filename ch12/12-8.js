class Party{
  get name(){}
  get annualCost(){}
}

class Department extends Party{
  get headCount() {}
}

class Employee extends Party{
  get id() {}
}

// 공통된 메서드는 상위 클래스를 만들어서 중복을 줄이자