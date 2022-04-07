import React, { useState } from "react";
import ReactSlider from "react-slider";
import styled from "styled-components";
import {
  FilterTitle,
  Input,
  InputContainer,
  InputCurrency,
  SliderContainer,
  StyledSlider,
  Thumb,
  Track,
} from "./ButtonComponents/ButtonElements";

function MySlider() {
  const [sliderValue, setValue] = useState([100, 10000]);

  return (
    <SliderContainer>
      <FilterTitle>Cena za den</FilterTitle>
      <StyledSlider
        min={100}
        max={10000}
        value={sliderValue}
        renderTrack={Track}
        renderThumb={Thumb}
        onChange={(value, index) => setValue(value)}
      />
      <Inputs>
        <InputContainer>
          <Input
            value={sliderValue[0]}
            onChange={(e) => {
              setValue([e.target.value, sliderValue[1]]);
            }}
          ></Input>
          <InputCurrency>Kč</InputCurrency>
        </InputContainer>
        <InputContainer>
          <Input
            value={sliderValue[1]}
            onChange={(e) => {
              setValue([sliderValue[0], e.target.value]);
            }}
          ></Input>
          <InputCurrency>Kč</InputCurrency>
        </InputContainer>
      </Inputs>
    </SliderContainer>
  );
}

export default MySlider;

const Inputs = styled.div`
  display: flex;
  gap: 12px;
`;
