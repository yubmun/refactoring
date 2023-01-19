import fs from 'fs';

/**
 * 1. run 함수를 만들어서 노드의 process 디펜던시를 제거함
 * 2. 사용자에게 입력을 받아와서 유효성 검사를 진행
 * 3. 필요한 로직 처리
 */
run(process.argv);

function run(args){
  const command = parseCommand(args);
  countOrders(command);
  // countOrders(parseCommand(args)); 로 써도 됨
}
function parseCommand(args){
  if (!args[2]) {
    throw new Error('파일 이름을 입력하세요');
  }
  
  const fileName = `./${process.argv[2]}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error('파일이 존재하지 않습니다');
  }

  const countReadOnly = args.includes("-r");

  return {
    fileName,
    countReadOnly,
  }
  // 객체를 반환해서 사용하는게 좀 혁신적으로 느껴진다
}

function countOrders(command){
  const rawData = fs.readFileSync(command.fileName);
  const orders = JSON.parse(rawData);
  const filtered = command.countReadOnly ? orders.filter((order) => order.status === "ready").length : orders.length;
  
  console.log(filtered.length);
}

