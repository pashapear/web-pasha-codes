import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { stagger, fadeInUp } from "../../animations";
import remify from "../../styles/utils";

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: ${remify(11, 27, 13, 21)};
`;

export default function MobileNav() {
  return (
    <Navigation
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Link href="/">
        <a><Image alt="logo" src="/black-logo/logo.png"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }} /></a>
      </Link>
      <HamburgerMenu />
      {/* <Link href="/:work">
          <a>Work</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link> */}
    </Navigation>
  );
}

const HamburgerMenu = () => {
  return <>

  </>
}
