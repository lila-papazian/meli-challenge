import { useLoaderData } from "react-router-dom";
import Layout from "../components/Layout";
import { SearchByItemResults } from "../types/endpointResponses/SearchByItemResults";
import { ProductBuySection } from "../stories/ProductBuySection";
import { ProductDescription } from "../stories/ProductDescription";
import './productDetail.scss'
const ProductDetail = () => {
  const productDetail = useLoaderData() as SearchByItemResults;
  debugger;
  return (
    <Layout>
      <div className="container">
        <ProductBuySection item={productDetail.item} />
        <ProductDescription description={productDetail.item.description} />{" "}
      </div>
    </Layout>
  );
};

export default ProductDetail;
