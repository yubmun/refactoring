export function isDeliveryFree(anOrder) {
  let basePrice = anOrder.basePrice;
  return basePrice > 1000;
}

/**
 * 변수 (명사)는 무엇을 담고 있는지 잘 나타내야 한다. camelCase를 사용하며
 * 단수, 복수도 s 로 구분해서 입력한다.
 * student , students / apple , redApple
 * 
 * 함수 (동사) 도 어떤 역할을 하는지 잘 나타내야 한다.
 */