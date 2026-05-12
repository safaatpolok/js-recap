export default class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  greet() {
    console.log(`hello,${this.name}`)
  }
}