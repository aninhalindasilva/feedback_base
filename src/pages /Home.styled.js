import style from "styled-components"

export const CardContainer = style.div`
    background: ${propons => props.theme.cardGradiend};
    max-width: 42.2rem;
    padding:3.2rem;
    border-radius:3rem;
    

    h1{
        font-size:2.8rem;
        color: ${propons => props.theme.white};
        margin-button:1.5rem;
        text-aligs:center;
    }

    p{
        font-size:1.5rem;
        line-height:2.4rem;
        color: ${propons => props.theme.textColor};
        text-aligs:center;
    }
`
export const IconContainer = style.div``

export const ButtonContainer = style.div``