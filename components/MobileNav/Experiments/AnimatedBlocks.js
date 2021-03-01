import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import { stagger, fadeInUp } from "../animations";

const Navigation = styled.nav`
  background: white;
  position: fixed;
  top: 0;
  & button {
    padding: 0.5rem;
    margin: 0.5rem;
  }
`;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Buttons = styled(motion.div).attrs({ variants: stagger })`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-gap: 1em;
  margin-top: 3rem;
`;

const Blocks = styled(motion.div).attrs({ variants: stagger })`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-gap: 1em;
  margin-top: 3rem;
`;

const Block = styled(motion.div)`
  height: 100px;
  background-color: black;
  color: white;
  margin-bottom: 1rem;
  padding: 1rem;
`;

const Button = styled(motion.button).attrs({ variants: fadeInUp })`
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  background: blue;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const useBlocks = () => {
  const [blocks] = React.useState(
    Array.from(Array(4), (x, index) => {
      const elementRef = React.useRef();
      return {
        el: (
          <Block
            key={`block-${index}`}
            ref={elementRef}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Index: {index}
          </Block>
        ),
        ref: elementRef,
      };
    })
  );

  return blocks;
};

export default function Home() {
  const blocks = useBlocks();
  return (
    <Container exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Navigation
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Link href="/:work">
          <a>Work</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </Navigation>

      <Buttons id="work">
        {blocks.map(({ ref }, index) => (
          <Button
            key={`nav-${index}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {index}
          </Button>
        ))}
      </Buttons>
      <Blocks>{blocks.map(({ el }) => el)}</Blocks>
    </Container>
  );
}
