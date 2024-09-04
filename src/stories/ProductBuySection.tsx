import "./productBuySection.scss";

export interface ProductBuySectionProps {
  productImageUrl: string;
  status: string;
  title: string;
  price: number;
}

export const ProductBuySection = ({
  productImageUrl,
  status,
  title,
  price,
}: ProductBuySectionProps) => {
  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  };
  return (
    <div className='product-buy-section'>
      <img
        className='product-buy-section__image'
        src={productImageUrl}
        alt={title}
      />
      <div className='product-buy-section__content'>
        <p className='product-buy-section__status'>{status}</p>
        <h2 className='product-buy-section__title'>{title}</h2>
        <p className='product-buy-section__price'>
          {price.toLocaleString("es-AR", options)}
        </p>
        <button className='product-buy-section__button'>Comprar</button>
      </div>
    </div>
  );
};
