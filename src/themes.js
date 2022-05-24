import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    body: '#fff',
    fontColor: '#141414',
};

export const darkTheme = {
    body: '#141414',
    fontColor: '#fff',
};

export const GlobalStyles = createGlobalStyle `
    body{
        background-color: ${(props) => props.theme.body}
    };
`;