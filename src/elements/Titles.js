import styled from 'styled-components';
import { secondary, primary } from '../utilities/fonts';

const Title = styled.h1`
  color: #444;
  margin: 0;
  margin-bottom: 15px;
  font-size: 40px;
  font-family: ${secondary};
  font-weight: 800;
  @media (max-width: 800px) {
    font-size: 26px;
  }
`;
const SubTitle = styled.h3`
  margin: 0;
  margin-bottom: 20px;
  font-size: 18px;
  font-family: ${primary};
  font-weight: 400;
  color: #555;
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

export { Title, SubTitle };
