import { Item } from "../types/endpointResponses/Item";
import { Maybe } from "../types/Maybe";
import { Button } from "./Button";
import "./productBuySection.scss";

export interface ProductBuySectionProps {
  item: Item;
  className?: Maybe<String>;
}

export const ProductBuySection = ({
  item,
  className,
}: ProductBuySectionProps) => {
  const { picture, condition, soldQuantity, title, price, id } = item;
  const { amount, currency, decimals } = price;

  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: currency,
    minimumFractionDigits: decimals,
  };

  return (
    <div key={id} className={`product-buy-section ${className ? className : ""}`}>
      {picture && (
        <div className='product-buy-section__image-container'>
          <img src={picture} alt={title} width={680} />
        </div>
      )}
      <div className='product-buy-section__content'>
        <p className='product-buy-section__status'>
          {condition} - {soldQuantity} vendidos{" "}
        </p>
        <h2 className='product-buy-section__title'>{title}</h2>
        <p className='product-buy-section__price'>
          {amount.toLocaleString("es-AR", options)}
        </p>
        <Button label='Comprar' onClick={() => {}} />
      </div>
    </div>
  );
};
