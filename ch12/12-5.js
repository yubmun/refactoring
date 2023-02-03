class Employee {
  // 모든 자식클래스가 갖지 않는 필드값을 부모클래스에서 쓰지는 않는다.
}

class Engineer extends Employee {}
class Salesperson extends Employee {
  #quota;
}
