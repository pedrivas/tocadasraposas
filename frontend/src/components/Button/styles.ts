import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.button`
  background: #f9dc5c;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 700;
  font-size: 18px;
  margin-top: 16px;
  transition: background-color 0.2s;

  button {
    flex: 1;
    background: transparent;
    border: none;
    color: #666360;
  }

  &:hover {
    background: ${shade(0.2, '#f9dc5c')};
  }
`;
