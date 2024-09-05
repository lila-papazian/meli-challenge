import { LoaderFunctionArgs } from "react-router-dom";
import fetchByQuery from "../client/fetchByQuery";
import { SearchResponseItem } from "../types/SearchResponse";

export const itemsLoader = async ({ request }: LoaderFunctionArgs<SearchResponseItem[]>) => {
  const url = new URL(request.url);
  const searchParam = url.searchParams.get("search");
  return await fetchByQuery(searchParam!);
};
