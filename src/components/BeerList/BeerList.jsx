import React from 'react';
import styled from 'styled-components';

import Card from '../Card/Card';

const Row = styled.div`
  margin: 0 6rem;
  display: flex;
  flex-wrap: wrap;
`;

const BeerList = ({ beers }) => (
  <div>
    <h1>Beers</h1>
    <Row>
      {beers.map((beer, i) => (
        <Card key={i} {...beer}>
          {beer}
        </Card>
      ))}
    </Row>
  </div>
);

export default BeerList;
