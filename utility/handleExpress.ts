import { Response } from "express";
import { HttpError } from "http-errors";

export const handleExpress = async  <A>(res: Response, fn:() => Promise<A>) => {
  try {
    const result = await fn();
    res.status(200).send(result);
  } catch (e: any) {
    res.status(500).send(e);
    console.error(e);
  }
};
