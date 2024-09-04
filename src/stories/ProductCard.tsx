import "./productCard.scss";
import IconShipping from "../assets/ic_shipping.png";

export interface ProductCardProps {
  productImageUrl: string;
  price: number;
  freeShipping: boolean;
  title: string;
  location?: string;
}

export const ProductCard = ({
  productImageUrl,
  price,
  freeShipping,
  title,
  location,
}: ProductCardProps) => {
  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  };
  return (
    <div className='product-card'>
      <img className='product-card__image' src={productImageUrl} alt={title} />
      <div className='product-card__content'>
        <div className='product-card__price'>
          <span>{price.toLocaleString("es-AR", options)}</span>
          {freeShipping && <img src={IconShipping} alt='Envío gratis' />}
        </div>
        <h2 className='product-card__title'>{title}</h2>
      </div>
      <div className='product-card__location-container'>
        {location && <p className='product-card__location'>{location}</p>}
      </div>
    </div>
  );
};
