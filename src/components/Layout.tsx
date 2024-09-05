import { useNavigate } from "react-router-dom";
import Body from "./Body";
import "./layout.scss";
import { Header } from "../stories/Header";
import useQuery from "../hooks/useQuery";
type Props = {
  children?: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  const navigate = useNavigate();
  const query = useQuery();
  const searchParam = query.get("search");

  const handleSearch = (query: string) => {
    if (query !== "") navigate(`/items?search=${query}`);
  };
  return (
    <div className='layout'>
      <Header
        className='layout__header'
        onSearch={handleSearch}
        searchInput={searchParam}
      />
      <Body>{children}</Body>
    </div>
  );
};

export default Layout;
