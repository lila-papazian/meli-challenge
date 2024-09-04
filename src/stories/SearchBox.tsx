import "./searchBox.scss";
import searchIcon from "../assets/ic_Search.png";
export interface SearchBoxProps {
  placeholder: string;
  ariaLabel: string;
  onClick?: () => void;
}

export const SearchBox = ({ placeholder, ariaLabel }: SearchBoxProps) => (
  <div className='search-input'>
    <input
      className='search-input__input'
      type='search'
      aria-label={ariaLabel}
      minLength={3}
      placeholder={placeholder}
    />
    <button className='search-input__icon' aria-label="Buscar">
      <img src={searchIcon} alt="Buscar" />
    </button>
  </div>
);
