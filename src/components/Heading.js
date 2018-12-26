import React from 'react';
import styled from 'styled-components';
import { serif, sansSerif } from '../utilities/fonts';
import SubTitlePLN from './SubTitlePLN';
import SubTitleForeign from './SubTitleForeign';

const Title = styled.h1`
  color: #444;
  margin-top: 0;
  font-size: 50px;
  font-family: ${serif};
  font-weight: 800;
`;
export const SubTitle = styled.h3`
  margin-top: 20px;
  font-size: 18px;
  font-family: ${sansSerif};
  font-weight: 400;
  color: #555;
`;

const Heading = ({ currency, pln }) => (
  <header>
    <Title>
      Currency <br />
      <span>Converter</span>
    </Title>
    {pln ? (
      <SubTitlePLN currency={currency} />
    ) : (
      <SubTitleForeign currency={currency} />
    )}
  </header>
);

export default Heading;
