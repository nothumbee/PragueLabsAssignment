import React, {useState} from 'react';
import { ButtonDescription, ButtonTitle, FilterButton } from './ButtonElements';

function IntegralButton() {
  const [click, setClick] = useState(false);
  const [style, setStyle] = useState("button");

  const handleClick = () => {
    setClick(!click);
    {click ? setStyle("button-clicked") : setStyle("button") }
  };


  return (
    <FilterButton className={style} onClick={handleClick}>
        <ButtonTitle>Integrál</ButtonTitle>
          <ButtonDescription>
          Král mezi karavany. Luxus na kolech.
          
            </ButtonDescription>
    </FilterButton>
  )
}

export default IntegralButton;

