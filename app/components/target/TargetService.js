import Target from "../../models/Target.js";

let _target = new Target("Herbert")

export default class TargetService {
  get Target() {
    return _target
  }
  attack(attackName) {
    _target.health -= _target.attacks[attackName]
  }
}

