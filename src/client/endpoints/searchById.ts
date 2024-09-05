import fetchById from "../api/fetchById";
import fetchByCategoryId from "../api/fetchCategoryById";
import fetchDescriptionById from "../api/fetchDescriptionById";
import mapApiToSearchById from "../mappers/mapApiToSearchById";

const searchById = async (id: string) => {
  const idResponse = await fetchById(id);
  const descriptionResponse = await fetchDescriptionById(id);
  const categoriesResponse = await fetchByCategoryId(idResponse.category_id);
  return mapApiToSearchById(
    idResponse,
    descriptionResponse,
    categoriesResponse
  );
};

export default searchById;
