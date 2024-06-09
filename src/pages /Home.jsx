import { ButtonContainer, CardContainer, IconContainer, ResulContainer } from "./Home.styled";

import IconStarImg from "../assets/icon-star.svg"
import thankYouImg from "../assets/illustration-thank-you.svg"
import { useState } from "react";

export function Home() {
  const[MostrarResultado, setMostrarEesultado] = useState(false)
  const[feedbackNote, setFeedbackNote] = useState(0)

  function handleFeedbackButtonClick(event){
    const feedback = Number(event.target.innerText)
  
      setFeedbackNote(feedback)
  }

    function handleSubmit(){
      if (feedbackNote === 0) return

      setMostrarEesultado(true)
    }

  return (
     MostrarResultado === false ? (
      <CardContainer>
        <IconContainer>
          <img src={iconStar.svg} alt="Icone de estrela" />
        </IconContainer>

        <h1>Como foi o atendimento?</h1>
        <p> Conte-nos como foi o nossa ajuda com sua solicitação. Agradecemos muito seu fedback para podemos melhorar nosso atendimento!</p>
      
        <ButtonContainer>
        <button onClick={handleFeedbackButtonClick}>1</button>
        <buttonon Click={handleFeedbackButtonClick}>2</button>
        <button onClick={handleFeedbackButtonClick}>3</button>
        <button onClick={handleFeedbackButtonClick}>4</button>
        <button onClick={handleFeedbackButtonClick}>5</button>
        </ButtonContainer>
      
        <button onClick={handlesubmit}>Enviar</button>
      </CardContainer>
    ): (
      <CardContainer>
        <img src={thankYouImg} alt="img de agradecimento"/>
        
        <ResulContainer>
          <p> Você selecionou {feedbackNote} de 5</p>
          
        </ResulContainer>
        
        <h1>Obrigado!</h1>

        <p>Agradecemos por dedicar seu tempo para analisar. Se precisar de mais suporte, não hesite em contato </p>
        </CardContainer>
    )
  )
}
