import React from 'react';
import {
  CaravanContainer,
  CaravanDescription,
  CaravanLocation,
  CaravanName,
  CaravanPassengers,
  CaravanPrice,
  CaravanShower,
  CaravanSleepers,
  CaravanToilet,
  CaravanType,
  InfoLine,
  Strong,
} from './CaravanElements';
import Image from 'next/image';
import iconPassenger from '../../../images/iconPassenger.svg';
import iconBed from '../../../images/iconBed.svg';
import iconToilet from '../../../images/iconToilet.svg';
import iconShower from '../../../images/iconShower.svg';
import iconReservation from '../../../images/iconReservation.svg';

function CaravanComponent(caravan, idx) {
  return (
    <CaravanContainer key={idx}>
      <Image src={caravan.pictures[0]} width={392} height={261} />
      <CaravanDescription>
        <CaravanType>{caravan.vehicleType}</CaravanType>
        <CaravanName>{caravan.name}</CaravanName>
        <CaravanLocation>{caravan.location}</CaravanLocation>
        <InfoLine>
          <CaravanPassengers>
            <Image src={iconPassenger} /> {caravan.passengersCapacity}
          </CaravanPassengers>
          <CaravanSleepers>
            <Image src={iconBed} /> {caravan.sleepCapacity}
          </CaravanSleepers>
          {caravan.toilet ? (
            <CaravanToilet>
              <Image src={iconToilet} />
            </CaravanToilet>
          ) : (
            <div />
          )}
          {caravan.shower ? (
            <CaravanShower>
              <Image src={iconShower} />
            </CaravanShower>
          ) : (
            <div />
          )}
        </InfoLine>
        <CaravanPrice>
          Cena od
          <Strong>
            {caravan.price} Kč/den{' '}
            {caravan.instantBookable ? (
              <Image src={iconReservation} />
            ) : (
              <div></div>
            )}
          </Strong>
        </CaravanPrice>
      </CaravanDescription>
    </CaravanContainer>
  );
}

export default CaravanComponent;
