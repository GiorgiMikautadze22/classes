//1. ლექციაზე დაწერილ კლასს Calculator_ს დავუმატოთ მეთოდები:
//divide - გაყოფა,
//pow - ახარისხება,
//substruct - გამოკლება,
//abs - მათემატიკური მოდული,
//sqrt - კვადრატული ფესვი,
//floor - დამრგვალება ქვემოთ უახლოეს მთელ რიცხვამდე.

class Calculator {
  constructor(initialNum = 0) {
    this.value = initialNum;
  }

  getResult() {
    return this.value;
  }
  add(n) {
    this.value += n;
    return this;
  }

  multiply(n) {
    this.value *= n;
    return this;
  }

  divide(n) {
    this.value /= n;
    return this;
  }

  pow(n) {
    this.value **= n;
    return this;
  }

  substract(n) {
    this.value -= n;
    return this;
  }

  abs() {
    if (this.value < 0) {
      this.value *= -1;
    }
    return this;
  }

  sqrt() {
    this.value = Math.sqrt(this.value);
    return this;
  }

  floor() {
    this.value = Math.floor(this.value);
    return this;
  }
}

const calculator = new Calculator(10);
const res = calculator
  .add(1)
  .multiply(2)
  .divide(2)
  .substract(1.2)
  .floor()
  .getResult();

console.log(res);

// 2. დავწეროთ კლასი Rectangle, რომელსაც ექნება width და height ფროფერთიები.
//    დავუმატოთ კლასს მეტოდები:
//    area - ფართობის გამოთვლა,
//    perimeter - პერიმეტრის გამოთვლა,
//    isSqure - შეამოწმებს არის თუ არა მოცმული მარტკუთხედი კვადრატი.
// შევქნმათ რამდენიმე ობიექტი სხვადასვა მნიშვნელობებით და გამოვიძახოთ
// მასში განსაზღვრული მეთოდები.

class Rectangle {
  constructor(width = 0, heigth = 0) {
    this.width = width;
    this.heigth = heigth;
  }
  area() {
    return this.heigth * this.width;
  }
  perimeter() {
    return (this.heigth + this.width) * 2;
  }

  isSquare() {
    if (this.width === this.heigth) return true;
    return false;
  }
}

const rectangle = new Rectangle(4, 4);
const result1 = rectangle.isSquare();

console.log("rectangle", result1);

// 3. დავწეროთ კლასი University, რომელსაც ექნება სახელი და დდეპრტამენტები.
//    დავუმატოთ მეთოდები:
//    addDepartment - დეპარტამენტის დამატება,
//    removeDepartment - დეპარტამენტის წაშლა.
//    showDepartments - დეპარტამენტების სია დაფორმატებული სტრინგში სურვილისამებრ.

//    გავუკეთოთ კლასს geeter ფოფერთი:
//    departmentCount - დეპარტამენტების რაოდენობს.

//    შევქმნათ რამდენიმე ობიექტი, ჩავატაროთ ზემოთ აღწერილი ოპერაციები.

class University {
  constructor(uniName, departments) {
    this.uniName = uniName;
    this.departments = departments;
  }

  addDepartment(string) {
    this.departments.push(string);
    return this;
  }

  removeDepartment(string) {
    const index = this.departments.indexOf(string);
    if (index !== -1) {
      this.departments.splice(index, 1);
    }
    return this;
  }

  showDepartments() {
    console.log(this.departments);
    return this;
  }

  get departmentCount() {
    console.log(this.departments.length);
    return this;
  }
}

const universityOfGeorgia = new University("University of Georgia", []);
const result2 = universityOfGeorgia
  .addDepartment("Computer Science")
  .addDepartment("Mathematics")
  .removeDepartment("Computer Science")
  .addDepartment("Physics")
  .showDepartments().departmentCount;

console.log(result2);

/* 
  4. შევქმნათ კლასი Aminal რომელსაც ექნება species და sound ფროფერთიები.
     დავამატოთ მეთოდი:
     makeSound - რომელიც ბეჭდავს ცხოველის იმიტირებულ ხმას.
     გავაკეთოთ შვილობილი კლასი Dog გავუკეთოთ თავისი makeSound მეთოდი რომელიც
     გადაფარავს მშობლის sound მეთოდს და დაბეჭდავს ძაღლის ხმას (woof).
  
     შევქმნათ Dog ლკასით რამდენიმე ობიექტი და გამოვიძახოთ მეთოდები.
  */

class Animal {
  constructor(spicies, sound) {
    this.spicies = spicies;
    this.sound = sound;
  }

  makeSound() {
    console.log(this.sound);
    return this;
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("woof");
    return this;
  }
}

const animal = new Animal("cat", "meow");
const dog = new Dog("dog", "woof");
const result = animal.makeSound();

console.log(result, dog.makeSound());
