import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid black;
  display: flex;
  margin: 0 6rem;
`;

const NavBar = () => (
  <Container>
    <div>
      <h1>Beerup</h1>
    </div>
    <div>
      <ul>
        <li>Home</li>
        <li>Favorites</li>
        <li>
          <button>Join</button>
        </li>
      </ul>
    </div>
  </Container>
);

export default NavBar;
