// 컴포지션(위임)
class Printer1 {
  private printerHeader: PrinterHeader;
  constructor(printerHeader?: PrinterHeader) {
    this.printerHeader = printerHeader
      ? printerHeader
      : new DefaultPrinterHeader();
  }
  print() {
    this.printerHeader.print();
  }
}

interface PrinterHeader {
  print(): void;
}

class DefaultPrinterHeader implements PrinterHeader {
  print() {
    console.log('기본적인 출력!');
  }
}
class RedPrinterHeader implements PrinterHeader {
  print() {
    console.log('🔴 출력!');
  }
}

class BlackPrinterHeader implements PrinterHeader {
  print() {
    console.log('⚫️ 출력!');
  }
}

const printers1 = [
  new Printer1(),
  new Printer1(new RedPrinterHeader()),
  new Printer1(new BlackPrinterHeader()),
];
printers.forEach((printer) => printer.print());
