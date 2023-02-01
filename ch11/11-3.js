// 예제 1 플래그 인수를 가지지 않게 함수를 쪼개라
function setWidth(value){
  this._width = value;
}
function setHeight(value){
  this._height = value;
}

// 예제 2
class Concert {
  regularBook(customer) {}
  premiumBook(customer) {}
  #book(customer, isPremium){} // 클래스 내부에서는 써도 되지만 외부에서 사용되는 API라면 쪼개자
}

// 예제 3 , 매개변수는 3개 이상 가지지 않는 것이 좋다. 
function switchOn();
function switchOff()
