import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  min-width: 330px;
  height: 60px;
  background: #F9DC5C;
  border-radius: 10px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSLab-Medium';
  color: #312e38;
  font-size: 18px;
`;
