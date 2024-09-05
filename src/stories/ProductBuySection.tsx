import { Item } from "../types/endpointResponses/Item";
import { Button } from "./Button";
import "./productBuySection.scss";

export interface ProductBuySectionProps {
  item: Item;
}

export const ProductBuySection = ({ item }: ProductBuySectionProps) => {
  const { picture, condition, soldQuantity, title, price } = item;
  const { amount, currency, decimals } = price;

  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: currency,
    minimumFractionDigits: decimals,
  };

  return (
    <div className='product-buy-section'>
      {picture && <img className='product-buy-section__image' src={picture} alt={title} />}
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
