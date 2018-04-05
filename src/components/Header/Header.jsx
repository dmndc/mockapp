import React from 'react';
import styled from 'styled-components';

import NavBar from './../NavBar/NavBar';

const Container = styled.div`
  height: 70vh;
  background-color: black;
  color: white;
`;

const Row = styled.div`
  display: flex;
  margin: 0 6rem;
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const Button = styled.button`
  background-color: #FEC731;
  padding: 1rem 2rem;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  border: 0
  border-radius: 25px;
  cursor: pointer;
`;

const Header = () => (
  <Container>
    <NavBar />
    <Row>
      <div>
        <h3>The Beerster Pro 2.0</h3>
        <Title>Join Our Famous Beerup!</Title>
        <Button>Join Beerup</Button>
      </div>
      <div>Photo</div>
    </Row>
  </Container>
);

export default Header;
