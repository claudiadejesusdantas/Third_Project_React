import { Subtitulo } from "../components/Subtitulo"
import { Paragrafo } from "../components/Paragrafo"
import { RedeSocial } from "../components/RedeSocial"

import '../styles/components/card.css'
import '../styles/components/container.css'

export function Contato() {
    return (
        <div className="container">
            <h1> Contato </h1>
            <Subtitulo texto="Minhas redes..." />
            <Paragrafo texto="Compartilho meus estudos e novidades pelas redes sociais, caso queira entrar em contato:" />

            <section className="containerRedeSocial">
                <RedeSocial link="https://www.facebook.com/claudiadejesusdantas" src="https://cdn-icons-png.flaticon.com/512/2175/2175193.png" alt="Logo do facebook" />
                
                <RedeSocial link="https://www.instagram.com/claudiadejesusdantastudy/" src="https://cdn-icons-png.flaticon.com/512/3670/3670274.png" alt="Logo do instagram" />
                
                <RedeSocial link="https://www.linkedin.com/in/claudiadejesusdantas/" src="https://cdn-icons-png.flaticon.com/512/3669/3669739.png" alt="Logo do Linkedin" />
                
                <RedeSocial link="https://www.tiktok.com/@claudiadejesusdantastudy" src="https://cdn-icons-png.flaticon.com/512/3116/3116491.png" alt="Logo do Tiktok" />
                
                <RedeSocial link="mailto:claudiadejesusdantas@gmail.com" src="https://cdn-icons-png.flaticon.com/512/3178/3178158.png" alt="Logo do Email" />

                <RedeSocial link="https://www.twitch.tv/hashtagclaubr" src="https://cdn-icons-png.flaticon.com/512/3676/3676113.png" alt="Logo da Twitch" />

                <RedeSocial link="https://twitter.com/claudiadjdantas" src="https://cdn-icons-png.flaticon.com/512/2168/2168336.png" alt="Logo do Twitter" />


            </section>


        </div>
    )
}