export function priceOrder(product, quantity, shippingMethod) {
  // 기본 제품 가격을 계산
  const basePrice = calculateBasePrice(product, quantity);

  // 할인가격 계산
  const discount = calculateDiscount(product, quantity);

  // 총 배송비 계산
  const shippingCost = calculateShippingCost(basePrice, quantity, shippingMethod);

  // 총 가격
  return basePrice - discount + shippingCost;
}

function calculateBasePrice(product, quantity){
  return product.basePrice * quantity;
}

function calculateDiscount(product, quantity) {
  return (
    Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate
    );
}
function calculateShippingCost(basePrice, quantity, shippingMethod){
  const shippingPerCase =
  basePrice > shippingMethod.discountThreshold
    ? shippingMethod.discountedFee
    : shippingMethod.feePerCase;

  return quantity * shippingPerCase;
}

// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const price = priceOrder(product, 5, shippingMethod);
console.log(price);
