import React, {useState} from 'react';
import { ButtonDescription, ButtonTitle, FilterButton } from './ButtonElements';

function BuiltInButton() {
  const [click, setClick] = useState(false);
  const [style, setStyle] = useState("button");

  const handleClick = () => {
    setClick(!click);
    {click ? setStyle("button-clicked") : setStyle("button") }
  };


  return (
    <FilterButton className={style} onClick={handleClick}>
        <ButtonTitle>Vestavba</ButtonTitle>
          <ButtonDescription>
            Celý byt geniálně poskládaný do dodávky.
            </ButtonDescription>
    </FilterButton>
  )
}

export default BuiltInButton;

