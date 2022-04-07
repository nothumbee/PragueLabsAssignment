import React from "react";
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
} from "./CaravanElements";
import Image from "next/image";
// import iconPassenger from '../../../images/iconPassenger.svg';
import iconBed from "../../../public/images/iconBed.svg";
import iconToilet from "../../../public/images/iconToilet.svg";
import iconShower from "../../../public/images/iconShower.svg";
import iconReservation from "../../../public/images/iconReservation.svg";

function CaravanComponent({ caravan }) {
  if (!caravan) {
    return null;
  }

  return (
    <CaravanContainer>
      <Image src={caravan.pictures[0]} width={392} height={261} alt="" />
      <CaravanDescription>
        <CaravanType>{caravan.vehicleType}</CaravanType>
        <CaravanName>{caravan.name}</CaravanName>
        <CaravanLocation>{caravan.location}</CaravanLocation>
        <InfoLine>
          <CaravanPassengers>
            <Image
              src={"/images/iconPassenger.svg"}
              width={15}
              height={15}
              alt="Passenger icon"
            />{" "}
            {caravan.passengersCapacity}
          </CaravanPassengers>
          <CaravanSleepers>
            <Image src={iconBed} alt="" /> {caravan.sleepCapacity}
          </CaravanSleepers>
          {caravan.toilet ? (
            <CaravanToilet>
              <Image src={iconToilet} alt="" />
            </CaravanToilet>
          ) : (
            <div />
          )}
          {caravan.shower ? (
            <CaravanShower>
              <Image src={iconShower} alt="" />
            </CaravanShower>
          ) : (
            <div />
          )}
        </InfoLine>
        <CaravanPrice>
          Cena od
          <Strong>
            {caravan.price} Kč/den{" "}
            {caravan.instantBookable ? (
              <Image src={iconReservation} alt="" />
            ) : null}
          </Strong>
        </CaravanPrice>
      </CaravanDescription>
    </CaravanContainer>
  );
}

export default CaravanComponent;
