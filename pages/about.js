import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 50px;
`;

const Block = styled.div`
  height: 300px;
  width: 300px;
  background-color: blue;
  color: white;
  margin-bottom: 1rem;
  padding: 1rem;
`;

export default function About() {
  return (
    <Container
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Link href="/">
        <a>Home</a>
      </Link>
      <Title>About</Title>
      <Block>This is the about page!</Block>
    </Container>
  );
}
