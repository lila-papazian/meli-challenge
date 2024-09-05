import { useLoaderData } from "react-router-dom";
import Layout from "../components/Layout";
import { SearchByItemResults } from "../types/endpointResponses/SearchByItemResults";
import { ProductBuySection } from "../stories/ProductBuySection";
import { ProductDescription } from "../stories/ProductDescription";
import "./productDetail.scss";
import { Maybe } from "../types/Maybe";
import { Fragment } from "react/jsx-runtime";
const ProductDetail = () => {
  const productDetail = useLoaderData() as SearchByItemResults;
  const { item } = productDetail;

  const formatPlainText = (text: Maybe<string>) => {
    return text
      ? text.split("\n").map((line, index) => (
          <Fragment key={index}>
            {line} <br />
          </Fragment>
        ))
      : "No hay descripción disponible";
  };

  return (
    <Layout>
      <div className='product-details__container' tabIndex={0}>
        <ProductBuySection
          className='product-details__product-info'
          item={item}
        />
        <ProductDescription
          className='product-details__product-description'
          description={formatPlainText(item.description)}
        />
      </div>
    </Layout>
  );
};

export default ProductDetail;
