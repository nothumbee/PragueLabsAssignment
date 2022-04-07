import styled from "styled-components";

export const CaravanContainer = styled.div`
  /* width: 392px; */
  /* width: calc((100% - 32px) / 3); */
  height: 451px;

  background: var(--white) 0% 0% no-repeat padding-box;
  border: 1px solid var(--beige);
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #edeae3;
  border-radius: 8px;
  opacity: 1;
`;
export const Caravans = styled.div`
  /* display: flex;
  flex-wrap: wrap; 
  gap: 16px; */
  margin-top: 50px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 500px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const MaxWidthContainer = styled.div`
  max-width: 1240px;
  margin: auto;
`;

export const CaravansSection = styled(MaxWidthContainer)`
  background: transparent;
`;

export const CaravanDescription = styled.section`
  width: 392px;
  height: 190px;
  padding: 12px 16px 17px 16px;
`;

export const CaravanType = styled.header`
  text-align: left;
  font: normal normal bold 12px/12px Roboto, sans-serif;
  letter-spacing: 1px;
  color: #ff5e55;
  text-transform: uppercase;
  opacity: 1;
`;

export const CaravanName = styled.header`
  width: 360px;
  height: 32px;
  margin-top: 10px;
  color: var(--dark-blue);
  text-align: left;
  font: normal normal bold 24px/24px Roboto, sans-serif;
  letter-spacing: 0px;
  color: #1f2244;
  opacity: 1;
  border-bottom: 1px solid #edeae3;
`;
export const CaravanLocation = styled.header`
  color: var(--dark-blue);
  text-align: left;
  font: normal normal normal 14px/16px Roboto, sans-serif;
  letter-spacing: 0px;
  color: #1f2244;
  opacity: 1;
  padding: 13px 0 9px 0;
`;
export const InfoLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  // align-items: center;
  line-height: 0px;
  border-bottom: 1px solid #edeae3;
  width: 360px;
  padding-bottom: 14px;
`;

export const CaravanPassengers = styled.header`
  text-align: left;
  font: normal normal normal 14px/16px Roboto;
  letter-spacing: 0px;
  color: #1f2244;
  opacity: 1;
  padding-right: 14px;
`;

export const CaravanSleepers = styled.header`
  text-align: left;
  font: normal normal normal 14px/16px Roboto, sans-serif;
  letter-spacing: 0px;
  color: #1f2244;
  opacity: 1;
  padding-right: 14px;
`;

export const CaravanToilet = styled.header`
  padding-right: 14px;
`;

export const CaravanShower = styled.header``;

export const CaravanPrice = styled.header`
  text-align: left;
  font: normal normal normal 16px/16px Roboto, sans-serif;
  letter-spacing: 0px;
  color: #9c8c8c;
  opacity: 1;
  padding: 17px 0 17px 0;
`;

export const Strong = styled.header`
  text-align: right;
  font: normal normal bold 16px/16px Roboto, sans-serif;
  letter-spacing: 0px;
  color: #1f2244;
  opacity: 1;
  margin: -19px 0 34px 0;
`;
