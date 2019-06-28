class Animal {
  constructor(name = '无姓名', age = 0) {
    this.name = name
    this.age = age
  }
  say() {
    console.log(this.name + ' ' + this.age)
  }
}

const dog = new Animal('狗狗', 5)
dog.say()

class Cat extends Animal {
  constructor(name, age) {
    super(name, age)
  }
  say() {
    super.say()
    console.log('这是子类');
  }
}

const cat = new Cat('猫猫', 6)
cat.say()