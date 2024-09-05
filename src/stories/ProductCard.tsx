import "./productCard.scss";
import IconShipping from "../assets/ic_shipping.png";
import { Item } from "../types/endpointResponses/Item";

export interface ProductCardProps {
  onClick: (id: string) => void;
  item: Item;
}

export const ProductCard = ({ onClick, item }: ProductCardProps) => {
  const { picture, price, freeShipping, title } = item;

  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: price.currency,
    minimumFractionDigits: price.decimals,
  };

  return (
    <div className='product-card' onClick={() => onClick("ejemplo")}>
      <img className='product-card__image' src={picture} alt={title} />
      <div className='product-card__content'>
        <div className='product-card__price'>
          <span>{price.amount.toLocaleString("es-AR", options)}</span>
          {freeShipping && <img src={IconShipping} alt='Envío gratis' />}
        </div>
        <h2 className='product-card__title'>{title}</h2>
      </div>
      <div className='product-card__location-container'>
        {/* The API doesn't give a location */}
        {/* {location && <p className='product-card__location'>{location}</p>} */}
      </div>
    </div>
  );
};
