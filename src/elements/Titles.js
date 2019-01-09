import styled from 'styled-components';
import { serif, sansSerif } from '../utilities/fonts';

const Title = styled.h1`
  color: #444;
  margin-top: 0;
  font-size: 50px;
  font-family: ${serif};
  font-weight: 800;
`;
const SubTitle = styled.h3`
  margin-top: 15px;
  font-size: 20px;
  font-family: ${sansSerif};
  font-weight: 400;
  color: #555;
`;

export { Title, SubTitle };
