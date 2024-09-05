import "./homeScreen.scss";
import Layout from "../components/Layout";
import Body from "../components/Body";
import { Header } from "../stories/Header";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    if (query !== "") navigate(`/items?search=${query}`);
  };

  return (
    <Layout>
      <Header className='home__header' onSearch={handleSearch} />
      <Body>
        <p>No hay contenido</p>
      </Body>
    </Layout>
  );
};

export default Home;
