import { Request } from "express";
import { Query } from "mongoose";

declare module 'express' {
  interface Request {
    result?: Query
  }
}
