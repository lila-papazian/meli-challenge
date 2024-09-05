import { LoaderFunctionArgs } from "react-router-dom";
import fetchByQuery from "../client/fetchByQuery";

export const itemsLoader = async ({ request }: LoaderFunctionArgs<any>) => {
  const url = new URL(request.url);
  const searchParam = url.searchParams.get("search");
  return await fetchByQuery(searchParam!);
};
