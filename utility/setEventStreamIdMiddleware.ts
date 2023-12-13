import express, { NextFunction, Request, Response } from "express";
import { v4 as uuidv4, v4 } from "uuid";
export const setEventStreamId = (req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders();

  const eventId = v4();

  res.write(`id: ${eventId}\n\n`);

  next();
};
