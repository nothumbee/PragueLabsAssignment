import React, { useState } from 'react';
import { ButtonDescription, ButtonTitle, FilterButton } from './ButtonElements';

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
