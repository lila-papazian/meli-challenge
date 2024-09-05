import fetchByQuery from "../api/fetchByQuery";
import mapApiToSearchByQuery from "../mappers/mapApiToSearchByQuery";

const searchByQuery = async (query: string) => {
    const apiResponse = await fetchByQuery(query);
    return mapApiToSearchByQuery(apiResponse)
};

export default searchByQuery