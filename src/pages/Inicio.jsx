import { Photo } from "../components/Photo";
import { PhotoIcon } from "../components/PhotoIcon";
import { Subtitulo } from "../components/Subtitulo";
import '../styles/components/photo.css'
import '../styles/components/text.css'

export function Inicio(){
    return(
        <>
        <header>
            <h1> Meu site pessoal </h1>
            <Photo src="../img/image_home.svg" alt="ilustração de mulher estudando olhando para o computador e escrevendo." />
        </header>

        <section className="containerText">
            <div >
            <Subtitulo className="containerCard" texto="Sobre Mim" />
            <PhotoIcon src="../../public/img/life_home.svg" alt="Ilustração de mulhere segurando um copo."/>
            </div>

            <div >
            <Subtitulo className="containerCard" texto="Portfólio Estudo" />
            <PhotoIcon src="../../public/img/project_home.svg" alt="ilustração mulher abraçada com um papel com sua foto"/>
            </div>

            <div >
            <Subtitulo className="containerCard" texto="Fale Oi!" />
            <PhotoIcon src="../../public/img/myContact_social_girl.svg" alt="ilustração de mulher rodeada de simbolos de redes sociais como facebook, twitter e instagram."/>
            </div>
        </section>

        </>
    )
}