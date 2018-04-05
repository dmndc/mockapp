import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const MainContent = props => <Container>{props.children}</Container>;

export default MainContent;
