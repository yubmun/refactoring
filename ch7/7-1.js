// 한번 만든 데이터를 불변성 immutable로 만들고 싶다면, 캡슐화 하자.
class Organization{
  #name;
  #country;
  #data;

  constructor(data){
    this.#data = data;
    this.#name = data.name;
    this.#country = data.country;
  }
  get name() {
    return this.#name;
  }
  get country(){
    return this.#country;
  }
  set name(value) {
    this.#name = value;
  }
  set country(value){
    this.#country = value;
  }
  get rawData(){
    return { name: this.name, country: this.country }; // 얕은복사가 이뤄진다. cloneDeep 으로 깊은 복사
  }
}

const organization = new Organization("apple", "U.S");


organization.name = 'Dream Coding';
console.log(organization.name);
console.log(organization.country);
