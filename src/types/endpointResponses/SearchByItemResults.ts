import { AuthorField } from "../../client/utils";
import { Item } from "./Item";

export interface SearchByItemResults {
  author: AuthorField;
  categories: string[];
  item: Item;
}
