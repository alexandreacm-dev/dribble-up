import { DefaultTheme } from 'styled-components/dist/models/ThemeProvider';

import styled, { css } from 'styled-components/native'

type ThemeProp = {
  theme: DefaultTheme
};

const Container = styled.View`
  ${({ theme }: ThemeProp) => css`
    flex: 1;
    padding: 10px;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};
  `}
`;

const ErrorContainer = styled.View`
  ${({ theme }: ThemeProp) => css`
    width: 100%;
    padding: 14px;
    justify-content: center;
    color: ${({ theme }) => theme.colors.error};
  `}
`;

export {
  Container,
  ErrorContainer
}