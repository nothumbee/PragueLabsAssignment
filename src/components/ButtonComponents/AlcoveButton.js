import React, {useState} from 'react';
import { ButtonDescription, ButtonTitle, FilterButton } from './ButtonElements';

function AlcoveButton() {
  const [click, setClick] = useState(false);
  const [style, setStyle] = useState("button");

  const handleClick = () => {
    setClick(!click);
    {click ? setStyle("button-clicked") : setStyle("button") }
  };


  return (
    <FilterButton className={style} onClick={handleClick}>
        <ButtonTitle>Přívěs</ButtonTitle>
          <ButtonDescription>
            Tažný karavan za vaše auto. Od kapkovitých až po rodinné.
            </ButtonDescription>
    </FilterButton>
  )
}

export default AlcoveButton;

