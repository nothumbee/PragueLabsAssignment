import React, { useState } from 'react';
import { ButtonDescription, ButtonTitle } from './ButtonElements';
import styled from 'styled-components';

function FilterButtonComponent({ type, setOneFilter }) {
  const [click, setClick] = useState(true);
  const [style, setStyle] = useState('button');
  const buttonData = {
    Campervan: {
      name: 'Campervan',
      description: 'Obytka s rozměry osobáku, se kterou dojedete všude.',
    },
    BuiltIn: {
      name: 'Vestavba',
      description: 'Celý byt geniálně poskládaný do dodávky.',
    },
    Intergrated: {
      name: 'Integrál',
      description: 'Král mezi karavany. Luxus na kolech.',
    },
    Alcove: {
      name: 'Přívěs',
      description: 'Tažný karavan za vaše auto. Od kapkovitých až po rodinné.',
    },
  };

  const handleClick = () => {
    setClick(!click);
    setOneFilter(type, click);
    {
      click ? setStyle('button-clicked') : setStyle('button');
    }
  };

  return (
    <FilterButton className={style} onClick={handleClick}>
      <ButtonTitle>{buttonData[type].name}</ButtonTitle>
      <ButtonDescription>{buttonData[type].description}</ButtonDescription>
    </FilterButton>
  );
}

export default FilterButtonComponent;


const FilterButton = styled.button`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

  background: #ffffff;
  border: 1px solid #edeae3;
  border-radius: 8px;

  height: 88px;

  flex: 1;


  ${({ isClicked }) =>
    isClicked &&
    css`
      background: #ffffff;
      border: 2px solid #119383;
      border-radius: 8px;
    `};
`;