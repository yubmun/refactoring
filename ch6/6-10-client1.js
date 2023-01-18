import { acquireReading, enrichReading } from './6-10.js';

const rawReading = acquireReading(); // 날 것의 리딩을 받아오고
const reading = enrichReading(rawReading); // 미리계산된 데이터가 포함된 새로운 객체를 받을거다

console.log(reading.baseCharge);
console.log(reading.taxableCharge);