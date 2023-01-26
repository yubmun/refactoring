// 예제 1
const pricingPlan = retrievePricingPlan();
const chargePerUnit = pricingPlan.unit;
// 관련있는 코드를 묶어주는게 가독성에 좋다
const order = retreiveOrder();
let charge;

// 예제 2
function someFunc() {
  const result = availableResources.length === 0 ? createResource() : allocatedResources.pop();
  return result;
}
