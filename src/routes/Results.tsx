import Layout from "../components/Layout";
import { ProductCard } from "../stories/ProductCard";
import { SearchResponseItem } from "../types/SearchResponse";
import "./resultsScreen.scss";
import { useLoaderData } from "react-router-dom";

const Results = () => {
  const response = useLoaderData() as SearchResponseItem[];

  const handleClick = (productId: string) => {
    // TODO: implementation
    console.log(productId);
  };

  return (
    <Layout>
      <ul role='tablist' className='results-screen'>
        {response.map((item) => {
          return (
            <li role='tab' tabIndex={0} key={item.id}>
              <ProductCard onClick={() => handleClick(item.id)} item={item} />
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default Results;
