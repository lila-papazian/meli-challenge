import React from "react";
import "./searchBox.scss";
import IconSearch from "../assets/IconSearch.png";
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
      <img src={IconSearch} alt="Buscar" />
    </button>
  </div>
);
