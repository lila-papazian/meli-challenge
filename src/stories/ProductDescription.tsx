import React from "react";
import { Maybe } from "../types/Maybe";
import "./productDescription.scss";

export interface ProductDescriptionProps {
  title?: string;
  description: React.JSX.Element[] | string;
  className?: Maybe<string>;
}

export const ProductDescription = ({
  title = "Descripción del producto",
  description = "No hay descripción disponible.",
  className,
}: ProductDescriptionProps) => {
  return (
    <div className={`product-description ${className ? className : ""}`}>
      <h1 className='product-description__title'>{title}</h1>
      <p className='product-description__description'>{description}</p>
    </div>
  );
};
