import style from "styled-components"

export const CardContainer = style.div`
    background: ${propons => props.theme.cardGradiend};
    max-width: 42.2rem;
    padding:3.2rem;
    border-radius:3rem;
    

    h1{
        font-size:2.8rem;
        color: ${props => props.theme.white};
        margin-button:1.5rem;
        text-aligs:center;
    }

    p{
        font-size:1.5rem;
        line-height:2.4rem;
        color: ${props => props.theme.textColor};
        text-aligs:center;
    }

    $ > button{
        width: 100%
        padding-block: 1.1rem;
        border-radius:2.25rem;
        border:none;
        font-size:1.5rem;
        font-weight:700;
        letter-spacing:2px;
        text-transform:uppercasse;
        background ${props => props.theme.submitButtonColor};
        color: ${props => props.theme.white};
        cursor:pointer;
    }

    &:hover{
    background ${props => props.theme.white};
    color: ${props => props.theme.submitButtonColor};
    transition: all .3s;
    }

    & > img{
        display: block;
        margin: 1.3 auto 3.2rem;
    }

`
export const IconContainer = style.div`
    background ${propons => props.theme.feedBackButtonColor};
    width: 4.8rem;
    height: 4.8rem;
    border-radius:50%;

    display:flex;
    justify-content:center;
    aling-items:center;

    magin-botton:3rem;
`

export const ButtonContainer = style.div`
    margin-top:2.4rem;
    display:flex;
    justify-content:space-between;

    button{
        width: 5.1rem;
        height: 5.1rem;
        border-radius:50%;
        border:none;
        background ${props => props.theme.feedBackButtonColor};
        color: ${props => props.theme.textColor};
        font-wight: 700;
        line-height: 2.4rem;
        cursor: pointer;
        transition: all.4s;

        &:focus{
            color: ${props => props.theme.white};
            background ${props => props.theme.feedBackButtonText};
            }

        &:hover{
            color: ${props => props.theme.white};
            background ${props => props.theme.submitButtonColor};
        
        }
    }


`

export const ResulContainer= style.p`
    padding: 0.4rem 1.5rem;
    background ${props => props.theme.feedBackButtonText};
    width: fit-content;
    margin-inline: auto;
    margin-bottom: 3.2rem;
    border-radius:2.25rem;

    p{
    color: ${props => props.theme.white};

    
    }
`