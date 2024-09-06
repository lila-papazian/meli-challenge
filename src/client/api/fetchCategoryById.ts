import { fetchData } from "../utils";

const fetchByCategoryId = async(categoryId: string) => {
    const endpoint = "https://api.mercadolibre.com/categories/" + categoryId;
    return await fetchData(endpoint);
}

export default fetchByCategoryId