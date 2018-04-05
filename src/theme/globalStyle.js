import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  li {
    list-style-type: none;
  }
`;
