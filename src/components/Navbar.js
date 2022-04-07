import React from 'react';
import pragueLabslogo from '/home/vinso/ucenicko/nextjs-testing-assignment-main/images/pragueLabslogo.svg';
import Image from 'next/image';
import { NavbarContainer, NavbarLogo } from './Visual';

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarLogo>
        <Image src={pragueLabslogo} width={201} height={35} />
      </NavbarLogo>
    </NavbarContainer>
  );
}

export default Navbar;
