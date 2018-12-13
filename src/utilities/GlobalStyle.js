import { createGlobalStyle } from 'styled-components';
import { sansSerif } from './fonts';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400|Noto+Serif+TC:300,400,600');
body {
  margin:0;
  font-family: ${sansSerif};
  font-size:16px;
}

`;
