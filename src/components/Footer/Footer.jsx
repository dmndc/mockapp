import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import NavBar from './../NavBar/NavBar';

import background from './../../assets/pattern.svg';

const Container = styled.div`
  background: url(${background}), black;
  /* height: 20vh; */
  color: white;
  padding: 0 3rem;
`;

const Row = styled.div`
  display: flex;
  margin: 0 6rem;
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

const Footer = props => (
  <Container height={props.height}>
    <NavBar />
    <div>
      <ul>
        <li>HOME</li>
        <li>FAVORITES</li>
        <li>JOIN</li>
      </ul>
    </div>
    <Row>
      <div>OVO JE FOOTER</div>
    </Row>
  </Container>
);

export default Footer;
