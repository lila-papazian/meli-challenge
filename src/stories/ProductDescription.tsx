import { Maybe } from "../types/Maybe";
import "./productDescription.scss"
export interface ProductDescriptionProps {
  title?: string;
  description: Maybe<string>;
}

export const ProductDescription = ({
  title = "Descripción del producto",
  description = "Descripción no disponible",
}: ProductDescriptionProps) => {
  return (
    <div className="product-description">
      <h1 className="product-description__title">{title}</h1>
      <p className="product-description__description">{description}</p>
    </div>
  );
};
