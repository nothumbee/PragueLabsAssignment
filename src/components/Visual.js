import styled from 'styled-components';

export const SearchContainer = styled.div`
  background: #ffff;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #edeae3;
  
  @media (max-width: 500px) {
    height: unset;
    flex-direction: column;
    justify-content: left;
    padding: 0 0 16px 16px;
  }
`;

export const NavbarContainer = styled.div`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #edeae3;
`;
export const NavbarLogo = styled.div`
  width: 1240px;
  align-items: center;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 500px) {
    justify-content: center;
  }
`;
