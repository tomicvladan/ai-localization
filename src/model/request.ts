import { Entry } from "./entry";

export interface Request {
  langCodes: string[];
  entries: Entry[];
}
