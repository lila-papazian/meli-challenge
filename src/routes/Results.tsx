import Layout from "../components/Layout";
import { ProductCard } from "../stories/ProductCard";
import { SearchByQueryResults } from "../types/endpointResponses/SearchByQueryResults";
import "./resultsScreen.scss";
import { useLoaderData, useNavigate } from "react-router-dom";

const Results = () => {
  const response = useLoaderData() as SearchByQueryResults;
  const navigate = useNavigate();
  const handleClick = (productId: string) => {
    navigate(`/items/${productId}`);
  };

  return (
    <Layout>
      {response.items.length > 0 ? (
        <ul role='tablist' className='results-screen'>
          {response.items.map((item) => {
            return (
              <li role='tab' tabIndex={0} key={item.id}>
                <ProductCard onClick={() => handleClick(item.id)} item={item} />
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="results-screen__no-results">No results found</div>
      )}
    </Layout>
  );
};

export default Results;
