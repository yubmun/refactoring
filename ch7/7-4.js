class Order {
  #quantity;
  #item;
  constructor(quantity, item) {
    this.#quantity = quantity;
    this.#item = item;
  }

  get basePrice(){
    return this.#quantity * this.#item.price;
  }

  get discountFactor(){
    return basePrice > 100 ? 0.95 : 0.98;
  }

  get price() {
    return basePrice * discountFactor;
  }
}
