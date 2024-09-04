import "./header.scss";
import LogoML from "../assets/Logo_ML.png";
import { SearchBox } from "./SearchBox";

export const Header = () => {
  // TODO: avoid searchbox overflowing the header on smaller resolutions
  return (
    <div className='header'>
      <img src={LogoML} alt='Logo de MercadoLibre' />
      <div className='header__search-box'>
        <SearchBox
          placeholder='Nunca dejes de buscar'
          ariaLabel='Buscador de productos'
        />
      </div>
    </div>
  );
};
