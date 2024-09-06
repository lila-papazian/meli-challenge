import { LoaderFunctionArgs, redirect } from "react-router-dom";
import searchByQuery from "../client/endpoints/searchByQuery";
import searchById from "../client/endpoints/searchById";

export const itemsLoader = async ({ request }: LoaderFunctionArgs<any>) => {
  const url = new URL(request.url);
  const searchParam = url.searchParams.get("search");
  debugger;
  if (!searchParam) {
    return redirect("/");
  }
  return await searchByQuery(searchParam!);
};

export const itemDetailLoader = async (id: string) => {
  try {
    const data = await searchById(id!);
    if (!data) {
      throw new Error(`Failed to fetch item: ${id}`);
    }
    return data;
  } catch (error) {
    throw new Response(`Failed to fetch item: ${id} not found.`);
  }
};
