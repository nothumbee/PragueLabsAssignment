import styled from "styled-components";
import ReactSlider from "react-slider";

export const TypeContainer = styled.div`
  width: 704px;
  border-right: 1px solid #edeae3;
  padding: 16px;

  @media (max-width: 500px) {
    display: flex;
    justify-content: left;
    margin: -16px;
    padding: 16px;
    border-right: none;
    flex-wrap: wrap;
    border-bottom: 1px solid #edeae3;
  }
`;

export const FilterTitle = styled.div`
  height: 32px;
  text-align: left;
  font: normal normal normal 16px/16px Roboto, sans-serif;
  letter-spacing: 0px;
  color: #9c8c8c;
  opacity: 1;

  &.type {
    padding-left: 16px;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  padding-bottom: 16px;

  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
`;

export const ButtonTitle = styled.div`
  height: 21px;
  font-size: 16px;
  color: #1f2244;
  // margin-top: 11px;
  /* margin-left: 12px; */
`;
export const ButtonDescription = styled.div`
  color: #9c8c8c;
  font-size: 12px;
  line-height: 14px;
  margin-left: 12px;
`;

export const SliderContainer = styled.div`
  width: 344px;
  border-right: 1px solid #edeae3;
  padding: 16px 16px 16px 0;

  @media (max-width: 500px) {
    display: flex;
    flex-wrap: wrap;
    border-right: none;
  }
`;

export const StyledSlider = styled(ReactSlider)`
  width: 328px;
  margin-top: 10px;
  height: 4px;
  margin-bottom: 36px;
`;

export const StyledThumb = styled.div`
  height: 24px;
  line-height: 4px;
  width: 24px;
  background-color: #119383;
  border-radius: 50%;
  cursor: grab;
  margin-top: -10px;
`;

export const Thumb = (props) => <StyledThumb {...props}></StyledThumb>;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 156px;
  height: 48px;
  border: 1px solid #edeae3;
  padding-right: 12px;
  border-radius: 8px;
`;

export const Input = styled.input`
  width: 80px;
  border: none;
  text-align: left;
  font: normal normal normal 16px/16px Roboto, sans-serif;
  letter-spacing: 0px;
  color: #1f2244;
  opacity: 1;
`;

export const InputCurrency = styled.div`
  text-align: right;
  font: normal normal normal 16px/16px Roboto, sans-serif;
  letter-spacing: 0px;
  color: #9c8c8c;
  opacity: 1;
`;
export const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${(props) =>
    props.index === 2 ? "#EDEAE3" : props.index === 1 ? "#119383" : "#EDEAE3"};
  border-radius: 999px;
`;

export const Track = (props, state) => (
  <StyledTrack {...props} index={state.index} />
);

export const SelectContainer = styled.div`
  width: 192px;
  display: flex;
  flex-direction: column;
`;

export const SelectLabel = styled.label`
  display: flex;
  justify-content: space-between;
  width: 192px;
  text-align: left;
  font: normal normal normal 16px/16px Roboto, sans-serif;
  letter-spacing: 0px;
  color: #9c8c8c;
  opacity: 1;
  padding: 23px 0 16px 16px;
`;

export const SelectButton = styled.select`
  width: 176px;
  display: flex;
  justify-content: center;
  background: transparent;

  height: 48px;
  border: 1px solid #edeae3;
  border-radius: 8px;
  align-items: center;

  font: normal normal normal 16px/16px Roboto, sans-serif;
  letter-spacing: 0px;
  color: #1f2244;
  opacity: 1;
  padding-left: 12px;
  margin-left: 16px;
  margin-top: 10px;

  option {
    display: flex;
    text-align: left;
    padding-left: 12px;
    font: normal normal normal 16px/16px Roboto, sans-serif;
    letter-spacing: 0px;
    color: #1f2244;
  }
`;
