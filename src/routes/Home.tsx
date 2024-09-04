import "./homeScreen.scss";
import { Header } from "../stories/Header";
import Layout from "../components/Layout";
import Body from "../components/Body";

const Home = () => {
  return (
    <Layout>
      <Header className='home__header' />
      <Body>
        <p>No hay contenido</p>
      </Body>
    </Layout>
  );
};

export default Home;
