import "./searchBox.scss";
import IconSearch from "../assets/IconSearch.png";
import { useState } from "react";
export interface SearchBoxProps {
  placeholder: string;
  ariaLabel: string;
  onClick: (inputValue: string) => void;
}

export const SearchBox = ({ placeholder, ariaLabel, onClick }: SearchBoxProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
   }

   const handleClick = () => onClick(inputValue)

  return (<div className='search-input'>
    <input
      className='search-input__input'
      type='search'
      aria-label={ariaLabel}
      minLength={3}
      placeholder={placeholder}
      onChange={e => handleInputChange(e)}
    />
    <button className='search-input__icon' aria-label="Buscar" onClick={handleClick}>
      <img src={IconSearch} alt="Buscar" />
    </button>
  </div>)
};
