import TargetService from "./TargetService.js";

let _targetService = new TargetService()

function update() {
  let targetElem = document.querySelector("#target")
  let target = _targetService.Target
  let template = `
  <h1 class="text-center">Name: ${target.name}</h1>
    <h2 class="text-center">Health: ${target.health}</h2>
    <h2 class="text-center">Hits: ${target.hits}</h2>
  `
  targetElem.innerHTML = template
  console.log("update health & hits")
}

export default class TargetController {
  constructor() {
    update()
    console.log("Hello from TargetController")
  }

  attack(attackName) {
    _targetService.attack(attackName)
    update()
  }
}
