import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Mulish', sans-serif;
    }

    ul{
        list-style: none;
    }

    a{
        text-decoration: none;
        color: #000;
    }
`

export { GlobalStyle }