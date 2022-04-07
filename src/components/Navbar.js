import React from "react";
// import pragueLabslogo from "/home/vinso/ucenicko/nextjs-testing-assignment-main/images/pragueLabslogo.svg";
import Image from "next/image";
import { NavbarContainer, NavbarLogo } from "./Visual";

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarLogo>
        <Image
          src={"/images/pragueLabslogo.svg"}
          width={201}
          height={35}
          alt="logo"
        />
      </NavbarLogo>
    </NavbarContainer>
  );
}

export default Navbar;
