import Layout from "../components/Layout";
import { ProductCard } from "../stories/ProductCard";
import { SearchResponseItem } from "../types/SearchResponse";
import "./resultsScreen.scss";
import { useLoaderData } from "react-router-dom";

const Results = () => {
  const response = useLoaderData() as SearchResponseItem[];

  return (
    <Layout>
      {response.map((item) => (
        <ProductCard
          key={item.id}
          title={item.title}
          price={item.price}
          freeShipping={item.shipping.free_shipping}
          productImageUrl={item.thumbnail}
        />
      ))}
    </Layout>
  );
};

export default Results;
