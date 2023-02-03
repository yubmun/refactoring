/**
 * 상속 => 기능을 확장한다.
 * 상속은 코드의 재사용을 위해 사용한다. extends
 * 상속의 단점 : 딱 하나만 상속이 가능함, 불필요한 기능이 상속됨, 족보가 꼬일 수 있음, 수정이 어려움
 * 때문에 상속의 의미가 적합한 곳에 사용하는게 좋다.
 * 
 * 상속보다는 컴포지션(위임/가지다)을 더 선호해서 코드의 재사용성을 높이자
 */

// 예시 1
class Employee {
  get name(){

  }
}

class Salesperson extends Employee {

}

class Engineer extends Employee {

}

// 예시 2
class Party {
  get annualCost(){
    return this.monthlyCost * 12;
  }
}

class Department extends Party {
  // 오버라이딩
}
class Employee extends Party {
  // 오버라이딩
}
