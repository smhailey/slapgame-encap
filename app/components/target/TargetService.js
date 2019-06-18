import Target from "app/models/Target.js";

let _target = new Target("Herbert")

export default class TargetService {
  slap() {
    _target.health--
    console.log("slap target from service")
  }

  punch() {
    _target.health -= 5
    console.log("punch target from service")
  }

  kick() {
    _target.health -= 10
    console.log("kick target from service")
  }
}

