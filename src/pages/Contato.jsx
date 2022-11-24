import { RedesSociais } from "../components/RedesSociais";
import { useState } from "react"
import '../styles/components/form.css'

export function Contato() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    function handleInputValueNome(event) {
        setNome(event.target.value)
    }

    function handleInputValueEmail(event) {
        setEmail(event.target.value)
    }

    function handleInputValueMensagem(event) {
        setMensagem(event.target.value)
    }

    function handleCreateMessage(event) {
        event.preventDefault()
        console.log(nome, email, mensagem)
    }

    return (
        <div>
            <form onSubmit={(event) => {handleCreateMessage(event)}}>
                <header>
                    <h1>Entre em contato: </h1>
                    <img className="formImg" src="img/myContact_social_girl.svg" alt="Mulher rodeada de circulos com os logos das redes sociais instagram, facebook e twitter." />
                </header>
                <input
                    className="formInput"
                    placeholder="Digite o seu nome"
                    onChange={handleInputValueNome}
                />

                <input
                    className="formInput"
                    placeholder="Digite o seu email"
                    onChange={handleInputValueEmail}
                />

                <input
                    className="formTextArea"
                    placeholder="Digite a sua mensagem"
                    onChange={handleInputValueMensagem}
                />
                <button type="submit" className="formButton">Enviar mensagem</button>

            </form>

            <RedesSociais />
        </div>
    )
}