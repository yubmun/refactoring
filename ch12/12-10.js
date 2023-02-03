// 상속
class Printer{
  print(){
    console.log("기본적인 출력");
  }
}

class Network{
  send();
}
// 다중 상속은 불가능하다
class RedPrinter extends Printer{
  print(){
    console.log("빨간색으로 출력");
  }
}

const printers = [new Printer(), new RedPrinter()];
printers.forEach((printer) => printer.print()); // 오버라이딩을 통해 동일한 함수를 갖고 있으면서 다른 행동을 하도록 만듦