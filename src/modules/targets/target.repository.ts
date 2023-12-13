import { Target } from "./model/target";

export class TargetRepository {
  private targets: Target[] = [];
  //   constructor(target: Target) {
  //     this.targets.push(target);
  //   }
  async addTarget(target: Target) {
    this.targets.push(target);
  }
  async removeTarget() {
    this.targets.pop();
  }

  async getTargets() {
    return this.targets;
  }
}
