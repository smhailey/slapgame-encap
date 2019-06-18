export default class Target {
  constructor(name) {
    this.name = name
    this.health = 100
    this.hits = 0
    this.attacks = {
      slap: 1,
      punch: 5,
      kick: 10
    }
  }
}