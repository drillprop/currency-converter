import styled from 'styled-components';
import { serif, sansSerif } from '../utilities/fonts';

const Title = styled.h1`
  color: #444;
  margin: 0;
  margin-bottom: 15px;
  font-size: 45px;
  font-family: ${serif};
  font-weight: 800;
`;
const SubTitle = styled.h3`
  margin: 0;
  margin-bottom: 20px;
  font-size: 18px;
  font-family: ${sansSerif};
  font-weight: 400;
  color: #555;
`;

export { Title, SubTitle };
