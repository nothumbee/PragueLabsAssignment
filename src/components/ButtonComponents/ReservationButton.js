import React, { useState } from 'react';
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  DropDownName,
  DropDownOption,
  FilterTitle,
  ListItem,
  SelectButton,
  SelectContainer,
  SelectLabel,
  SelectOption,
} from './ButtonElements';
import iconReservation from '../../../images/iconReservation.svg';
import iconExpand from '../../../images/iconExpand.svg';
import Image from 'next/image';

const options = ['Ano', 'Ne'];

function ReservationButton() {
  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(null);

  // const handleClick = () => setIsOpen(!isOpen);

  // const onOptionClicked = (value) => () => {
  //   setSelectedOption(value);
  //   setIsOpen(false);
  // };

  return (
    <SelectContainer>
      <SelectLabel>
        Okamžitá rezervace
        <Image src={iconReservation} width={13} height={13} />
      </SelectLabel>
      <SelectButton>
        <option>{options[0]}</option>
        <option>{options[1]}</option>
      </SelectButton>
    </SelectContainer>
  );
}

export default ReservationButton;

{
  /* <DropDownContainer>
<DropDownName>
  Okamžitá rezervace
  <Image src={iconReservation} width={16} height={16} />
</DropDownName>
<DropDownHeader onClick={handleClick}>
  <DropDownOption>{selectedOption || ''}</DropDownOption>
  <Image src={iconExpand} />
</DropDownHeader>
{isOpen && (
  <DropDownListContainer>
    <DropDownList>
      {options.map((option) => (
        <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
          {option}
        </ListItem>
      ))}
    </DropDownList>
  </DropDownListContainer>
)}
</DropDownContainer> */
}
