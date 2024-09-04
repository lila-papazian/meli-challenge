import "./productDescription.scss"
export interface ProductDescriptionProps {
  title?: string;
  description: string;
}

export const ProductDescription = ({
  title = "Descripción del producto",
  description,
}: ProductDescriptionProps) => {
  return (
    <div className="product-description">
      <h1 className="product-description__title">{title}</h1>
      <p className="product-description__description">{description}</p>
    </div>
  );
};
