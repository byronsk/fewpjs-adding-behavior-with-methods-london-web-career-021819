class Cat {
  constructor(name) {
    this.name = name
  }

  speak() {
    return `${this.name} says meow!`
  }

}

class Dog {
  constructor(name) {
    this.name = name
  }

  speak() {
    return `${this.name} says woof!`
  }
}

class Bird {
  constructor(name, mf) {
    this.name = name
    this.mf = mf
  }
  speak() {
    if (this.mf == "male") {
      return `It's me! ${this.name}, the parrot!`
    } else
    return `${this.name} says squawk!`
  }

}
