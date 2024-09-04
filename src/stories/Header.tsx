import "./header.scss";
import LogoML from "../assets/Logo_ML.png";
import { SearchBox } from "./SearchBox";

export const Header = () => {
  // TODO: avoid losing the logo in smaller resolutions
  // TODO: avoid searchbox overflowing the header
  return (
    <div className='header'>
      <div className='header__logo'>
        <img
          className='header__logo-img'
          src={LogoML}
          alt='Logo de MercadoLibre'
        />
      </div>
      <div className='header__search-box'>
        <SearchBox
          placeholder='Nunca dejes de buscar'
          ariaLabel='Buscador de productos'
        />
      </div>
    </div>
  );
};
