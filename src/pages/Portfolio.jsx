
import { Photo } from '../components/Photo'
import { ProcureRepositorio } from '../components/ProcureRepositorio'
import '../styles/components/container.css'

export function Portfolio(){
    return(
        <>
        <h1> Portfolio de Estudo </h1>
        <Photo src="../../public/img/myProjects_folders.svg" alt="Mulher sentada olhando para um notebook no seu colo."/>
        <ProcureRepositorio/>
        </>
    )
}