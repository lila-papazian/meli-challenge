import "./header.scss";
import LogoML from "../assets/Logo_ML.png";
import { SearchBox } from "./SearchBox";

export interface HeaderProps {
  onSearch: (query: string) => void;
  className?: string;
}

export const Header = ({ className, onSearch }: HeaderProps) => {
  // TODO: avoid searchbox overflowing the header on smaller resolutions
  return (
    <div className={`header ${className}`}>
      <div className='header__icon'>
        <img src={LogoML} alt='Logo de MercadoLibre' />
      </div>
      <div className='header__search-box'>
        <SearchBox
          placeholder='Nunca dejes de buscar'
          ariaLabel='Buscador de productos'
          onClick={onSearch}
        />
      </div>
    </div>
  );
};
