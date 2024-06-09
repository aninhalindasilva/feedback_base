import { ButtonContainer, CardContainer, IconContainer, ResulContainer } from "./Home.styled";

import IconStarImg from "../assets/icon-star.svg"
import thankYouImg from "../assets/illustration-thank-you.svg"

export function Home() {
  let aparecerResultado = true

  return (
     aparecerResultado === false ? (
      <CardContainer>
        <IconContainer>
          <img src={iconStar.svg} alt="Icone de estrela" />
        </IconContainer>

        <h1>Como foi o atendimento?</h1>
        <p> Conte-nos como foi o nossa ajuda com sua solicitação. Agradecemos muito seu fedback para podemos melhorar nosso atendimento!</p>
      
        <ButtonContainer>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        </ButtonContainer>
      
        <button>Enviar</button>
      </CardContainer>
    ): (
      <CardContainer>
        <img src={thankYouImg} alt="img de agradecimento"/>
        
        <ResulContainer>
          <p> Você selecionou 4 de 5</p>
          
        </ResulContainer>
        
        <h1>Obrigado!</h1>

        <p>Agradecemos por dedicar seu tempo para analisar. Se precisar de mais suporte, não hesite em contato </p>
        </CardContainer>
    )
  )
}
