export interface CategoriesResponse {
  id: string;
  name: string;
  path_from_root: Category[];
}

interface Category {
  id: string;
  name: string;
}
