import "./header.scss";
import LogoML from "../assets/Logo_ML.png";
import { SearchBox } from "./SearchBox";
import { Maybe } from "../types/Maybe";

export interface HeaderProps {
  onSearch: (query: string) => void;
  className?: string;
  searchInput?: Maybe<string>;

}

export const Header = ({ searchInput, className, onSearch }: HeaderProps) => {
  // TODO: avoid searchbox overflowing the header on smaller resolutions
  return (
    <div className={`header ${className}`}>
      <a className='header__icon' href="/">
        <img src={LogoML} alt='Logo de MercadoLibre' />
      </a>
      <div className='header__search-box'>
        <SearchBox
          placeholder='Nunca dejes de buscar'
          ariaLabel='Buscador de productos'
          searchInput={searchInput}
          onClick={onSearch}
        />
      </div>
    </div>
  );
};
