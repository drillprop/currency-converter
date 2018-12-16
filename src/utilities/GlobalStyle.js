import { createGlobalStyle } from 'styled-components';
import { sansSerif } from './fonts';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,700|Ubuntu:500');
body {
  margin:0;
  font-family: ${sansSerif};
  font-size:16px;
}

`;
