import { Router } from "express";
import { TargetService } from "../modules/targets/target.service";
import { handleExpress } from "../../utility/handleExpress";

export const makeTargetRoute = (targetService: TargetService) => {
  const app = Router();

  app.get("/addTarget", (req, res) => {
    handleExpress(res, () => targetService.addTarget());
  });
  app.get("/removeTarget", (req, res) => {
    handleExpress(res, () => targetService.removeTarget());
  });

  return app
};
