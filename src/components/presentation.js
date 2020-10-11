import React from "react"
import ProfileImage from "./profileImage"
import "./presentation.css"

const Presentation = () => (
  <div className="presentation-card">
    <div>
      <ProfileImage />
    </div>
    <div class="presentation-content">
      <h1>Olá, meu nome é Amilton :)</h1>
      <p>
        Sou um desenvolvedor que se encontra na eterna busca de melhoria
        pessoal, atualmente tentando ajudar os outros (e eu mesmo) escrevendo
        sobre assuntos de tecnologia que eu gosto e que tento dominar.
      </p>
    </div>
  </div>
)

export default Presentation
