import React, {useState} from 'react';
import { ButtonDescription, ButtonTitle, FilterButton } from './ButtonElements';

function BuiltInButton() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };


  return (
    <FilterButton onClick={handleClick} isClicked={click} >
        <ButtonTitle>Vestavba</ButtonTitle>
          <ButtonDescription>
            Celý byt geniálně poskládaný do dodávky.
            </ButtonDescription>
    </FilterButton>
  )
}

export default BuiltInButton;

