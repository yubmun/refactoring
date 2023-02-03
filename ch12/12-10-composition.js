// 컴포지션 (위임)
class Printer{
  #printHeader;

  constructor(printHeader){
    this.#printHeader = printHeader
  }
  print(){
    this.#printHeader ? this.#printHeader.print() : console.log("기본적인 출력");
  }
}

class RedPrinter{
  print(){
    console.log("빨간색으로 출력");
  }
}

class BlackPrinter{
  print(){
    console.log("검은색으로 출력");
  }
}

// 위임에 따라 다른행동을 할 수 있게 만들 수 있다.
const printers = [new Printer(), new Printer(new RedPrinter()), new Printer(new BlackPrinter())];
printers.forEach((printer) => printer.print());