import { ViewProps } from 'react-native';
import { DefaultTheme } from 'styled-components/dist/models/ThemeProvider';

import styled, { css } from 'styled-components/native'

type ThemeProp = {
   theme: DefaultTheme
};

const Container = styled.View`
  ${({ theme }: ThemeProp) => css`
    flex: 1;
    padding: 14px;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};
  `}
`;

const WordDayContainer = styled.Pressable`
    flex: 1;
    padding: 10px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    background-color: #FFF;
    margin-top: 10px;
`;

const TouchableSeeMeans = styled.Pressable`
   width: 100%;
   height: 50px;
   justify-content: center;
   align-items: center;
   border-top-width: 1;
   border-color: #CDCDCD;
   background-color: #FFF;
   border-bottom-left-radius: 14px;
   border-bottom-right-radius: 14px;
`;

const TitleContainer = styled.View`
   width: 100%;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`;

const VocabularyContainer = styled.View`
   width: 15%;
   justify-content: center;
   align-items: center;
`;

const IncreaseButtonsContainer = styled.View<ViewProps>`
    width: 85%;
    justify-content: center;
    align-items: center;
`;

const ButtonContainer = styled.View`
   width: 100%;
   padding: 10px;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`;

const WordContainer = styled.View`
   width: 100%;
   padding: 10px;
    align-items: center;
`;

const PressableButton = styled.Pressable`
   flex: 1;
   height: 45px;
   justify-content: center;
   align-items: center;
   border-radius: 8px;
   margin-left: 10px;
   ${({ theme }: DefaultTheme) => css`
     background: ${({ theme }) => theme.colors.buttonColor};
   `}
`;

const IncreaseWordsContainer = styled.View<ViewProps>`
    flex: 1;
    padding: 10px;
    flex-direction: row;
    border-radius: 14px;
    background-color: #FFF;
`;

const StatusWordContainer = styled.View`
   width: 60px;
   height: 55px;
   justify-content: center;
   align-items: center;
   /* border-radius: 50px;
   border-width: 2px;
   border-color: #b4b4b9; */
`;

const MostSearchedContainer = styled.View<ViewProps>`
    flex: 1;
    padding: 15px;
    border-radius: 14px;
    background-color: #FFF;
    margin-top: 10px;
`;


export {
   Container,
   WordDayContainer,
   TouchableSeeMeans,
   TitleContainer,
   VocabularyContainer,
   ButtonContainer,
   PressableButton,
   IncreaseWordsContainer,
   IncreaseButtonsContainer,
   WordContainer,
   StatusWordContainer,
   MostSearchedContainer
}