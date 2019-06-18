import TargetController from "./components/target/TargetController.js";

class App {
  constructor() {
    this.controllers = {
      targetController: new TargetController()
    }
  }
}

window["app"] = new App()