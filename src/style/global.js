import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle `
   *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Overpass", sans-sarif;
    }


    :root{
        font-size: 62.5%;
    }

    body{
        font-size: 1.6rem;
        background:${props => props.theme.homeBackgraund};
        
        height: 100wh;
        display: flex;
        justify-content:center;
        alling-items:center;
    }
`

    