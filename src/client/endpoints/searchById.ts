import fetchById from "../api/fetchById"
import fetchDescriptionById from "../api/fetchDescriptionById";
import mapApiToSearchById from "../mappers/mapApiToSearchById";

const searchById = async (id: string) => {
    const idResponse = await fetchById(id);
    const descriptionResponse = await fetchDescriptionById(id);
    return mapApiToSearchById(idResponse, descriptionResponse);
}

export default searchById