import { LoaderFunctionArgs } from "react-router-dom";
import searchByQuery from "../client/endpoints/searchByQuery";
import { SearchByQueryResults } from "../types/endpointResponses/SearchByQueryResults";

export const itemsLoader = async ({
  request,
}: LoaderFunctionArgs<SearchByQueryResults>) => {
  const url = new URL(request.url);
  const searchParam = url.searchParams.get("search");
  return await searchByQuery(searchParam!);
};
