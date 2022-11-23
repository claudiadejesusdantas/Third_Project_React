import { Paragrafo } from '../components/Paragrafo'

import { Photo } from '../components/Photo'
import '../styles/components/container.css'
import '../styles/components/photo.css'

export function Biografia() {
  return (
    <>

    <section className='containerBio'>
      <div>
        <h1> Olá, eu sou Claudia...</h1>
        <Paragrafo texto="...estou em transição de carreira, sou formada em Recursos Humanos e atualmente estou conhecendo mais da área de tecnologia. Sou mãe de pet, estudante da {Reprograma} e apaixonada por café com leite." />
      </div>
      <div>
      <Photo src="https://ik.imagekit.io/jegy8n1au/claudia_cup.gif" alt="Mulher parda com xícara vermelha indo em direção a tela."/>
      </div>
    </section>
      
    </>
  )
}