import { AuthorField } from "../../client/utils";
import { Item } from "./Item";

export interface SearchByQueryResults {
  author: AuthorField;
  categories: string[];
  items: Item[];
}
