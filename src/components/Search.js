import React, { useState } from 'react';
import BuiltInButton from './ButtonComponents/BuiltInButton';
import CampButton from './ButtonComponents/CampButton';
import FilterButtonComponent from './ButtonComponents/FilterButtonComponent';
import IntegralButton from './ButtonComponents/IntegralButton';
import AlcoveButton from './ButtonComponents/AlcoveButton';
import ReservationButton from './ButtonComponents/ReservationButton';
import MySlider from './MySlider';
import { SearchContainer } from './Visual';
import {
  ButtonContainer,
  FilterTitle,
  TypeContainer,
} from './ButtonComponents/ButtonElements';

function Search({ setOneFilter }) {
  return (
    <SearchContainer>
      <MySlider />
      <TypeContainer>
        <FilterTitle>Typ karavanu</FilterTitle>
        <ButtonContainer>
          <FilterButtonComponent type='Campervan' setOneFilter={setOneFilter} />
          <FilterButtonComponent type='BuiltIn' setOneFilter={setOneFilter} />
          <FilterButtonComponent
            type='Intergrated'
            setOneFilter={setOneFilter}
          />
          <FilterButtonComponent type='Alcove' setOneFilter={setOneFilter} />
        </ButtonContainer>
      </TypeContainer>
      <ReservationButton />
    </SearchContainer>
  );
}

export default Search;
