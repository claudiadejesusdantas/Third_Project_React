import { Photo } from "../components/Photo";
import { PhotoIcon } from "../components/PhotoIcon";
import { Subtitulo } from "../components/Subtitulo";
import { Paragrafo } from "../components/Paragrafo";
import '../styles/components/photo.css'
import '../styles/components/text.css'
import '../styles/components/container.css'
import '../styles/components/card.css'

export function Inicio(){
    return(
        <>
        <header>
            <h1> Meu site pessoal </h1>
            <Photo src="../img/image_home.svg" alt="ilustração de mulher estudando olhando para o computador e escrevendo." />
        </header>

        <section className="containerText">
            
            <div  className="cardInfo">
            <Subtitulo className="containerCard" texto="Sobre Mim" />
            <PhotoIcon src="../../public/img/image_home.svg" alt="Ilustração de mulhere segurando um copo."/>
            <Paragrafo texto="Nesta seção conheça um pouquinho sobre mim."/>
            </div>

            <div  className="cardInfo">
            <Subtitulo className="containerCard" texto="Portfólio Estudo" />
            <PhotoIcon src="../../public/img/project_home.svg" alt="ilustração mulher abraçada com um papel com sua foto"/>
            <Paragrafo texto="Conheça os meus projetos hospedados no Github."/>
            </div>

            <div className="cardInfo">
            <Subtitulo className="containerCard" texto="Fale Oi!" />
            <PhotoIcon src="../../public/img/myContact_social_girl.svg" alt="ilustração de mulher rodeada de simbolos de redes sociais como facebook, twitter e instagram."/>
            <Paragrafo texto="Entre em contato através das minhas redes sociais."/>
            </div>
        </section>

        </>
    )
}