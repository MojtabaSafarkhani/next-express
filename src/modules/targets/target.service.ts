import { Target } from "./model/target";
import { TargetRepository } from "./target.repository";

export class TargetService {
  constructor(private targetRepo: TargetRepository) {}
  public async addTarget() {
    const data: Target = {
      id: Math.floor(Math.random() * (9999 - 1111 + 1) + 1111),
      lat: (Math.random() * 180 - 90).toFixed(3),
      lon: (Math.random() * 360 - 180).toFixed(3),
      cog: Math.floor(Math.random() * 360),
      range: Math.floor(Math.random() * 1000),
      upCount: Math.floor(Math.random() * 1000),
    };
    this.targetRepo.addTarget(data);
    return this.targetRepo.getTargets();
  }
  public async removeTarget() {
    this.targetRepo.removeTarget();
    return this.targetRepo.getTargets();
  }
  public async gettargets() {
    return this.targetRepo.getTargets();
  }
}
