import { LoaderFunctionArgs } from "react-router-dom";
import searchByQuery from "../client/endpoints/searchByQuery";
import searchById from "../client/endpoints/searchById";

export const itemsLoader = async ({ request }: LoaderFunctionArgs<any>) => {
  const url = new URL(request.url);
  const searchParam = url.searchParams.get("search");
  return await searchByQuery(searchParam!);
};

export const itemDetailLoader = async (id: string) => {
  return await searchById(id!);
};
