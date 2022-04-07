import React, { useState } from "react";
import { ButtonDescription, ButtonTitle, FilterButton } from "./ButtonElements";

function CampButton() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <FilterButton className={click && "button-clicked"} onClick={handleClick}>
      <ButtonTitle>Campervan</ButtonTitle>
      <ButtonDescription>
        Obytka s rozměry osobáku, se kterou dojedete všude.
      </ButtonDescription>
    </FilterButton>
  );
}

export default CampButton;
