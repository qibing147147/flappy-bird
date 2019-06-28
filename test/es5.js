// function Animal() {

// }
var Animal = function(name, age) {
  this.name = name
  this.age = age
}
Animal.prototype.say = function() {
  console.log(this.name + ' ' + this.age)
}
Animal.prototype.name = '123123'
var dog = new Animal('狗', 5)
dog.say()
var Cat = function(name, age) {
  Animal.call(this, name, age)
}
Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.say = function() {
  console.log('这是子类 ' + this.name + ' ' + this.age)
}
var cat2 = new Cat('子猫', 3)
cat2.say()