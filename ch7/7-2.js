export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  get courses() {
    return [...this.#courses];
  }

  addCourse(course){
    this.#courses.push(course);
  }
  removeCourse(course, runIfAbsent){
    const index = this.#courses.indexOf(course);
    if(index === -1) {
      runIfAbsent();
      return;
    }
    this.#courses.splice(index, 1);
  }
}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const ellie = new Person('엘리');
// ellie.courses.push(new Course('리팩토링', true)); // 외부에서 추가, 삭제할 수 있는건 잘못된거임. 클래스 내에서 함수를 만들어서 접근하도록 변경해야 한다.
const course = new Course("리팩토링", true);
ellie.addCourse(course);
console.log(ellie.courses.length);

ellie.removeCourse(course, ()=>{
  console.log("해당 과정은 없습니다")
})
