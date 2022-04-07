import React, {useState} from 'react';
import { ButtonDescription, ButtonTitle, FilterButton } from './ButtonElements';

function CampButton() {
  const [click, setClick] = useState(false);
  const [style, setStyle] = useState("button");

  const handleClick = () => {
    setClick(!click);
    {click ? setStyle("button-clicked") : setStyle("button") }
  };


  return (
    <FilterButton className={style} onClick={handleClick}>
        <ButtonTitle>Campervan</ButtonTitle>
          <ButtonDescription>
            Obytka s rozměry osobáku, se kterou dojedete všude.
            </ButtonDescription>
    </FilterButton>
  )
}

export default CampButton;

