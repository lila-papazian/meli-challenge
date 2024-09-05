import "./productCard.scss";
import IconShipping from "../assets/ic_shipping.png";
import { SearchResponseItem } from "../types/SearchResponse";

export interface ProductCardProps {
  onClick: (id: string) => void;
  item: SearchResponseItem;
}

export const ProductCard = ({ onClick, item }: ProductCardProps) => {
  const { thumbnail, price, shipping, title } = item;
  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  };
  return (
    <div className='product-card' onClick={() => onClick("ejemplo")}>
      <img className='product-card__image' src={thumbnail} alt={title} />
      <div className='product-card__content'>
        <div className='product-card__price'>
          <span>{price.toLocaleString("es-AR", options)}</span>
          {shipping.free_shipping && <img src={IconShipping} alt='Envío gratis' />}
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
