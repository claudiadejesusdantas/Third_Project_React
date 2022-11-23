import { useEffect } from "react";
import { useState } from "react";
import Axios from 'axios'
import '../../src/styles/components/repos.css'
import '../../src/styles/components/container.css'


export function ProcureRepositorio() {
    const [repositorios, setReposFromApi] = useState([])
    const [termoBuscado, setTermoBuscado] = useState('')
    const [repositoriosFiltrados, setRepositoriosFiltrados] = useState([])

    const baseURL = 'https://api.github.com/users/claudiadejesusdantas/repos'

    useEffect(() => {
        async function getData() {
            const response = await Axios.get(baseURL)
            setReposFromApi(response.data)
        }
        getData()
    }, [])

    function procurarRepositorio(event) {
        setTermoBuscado(event.target.value)
    }

    useEffect(() => {
        const filtered = repositorios.filter(repositorio => {
            return repositorio.name.includes(termoBuscado)
        })
        setRepositoriosFiltrados(filtered)
    }, [repositorios, termoBuscado])

    return (
        <div className="containerRepositorios">
            <input className="containerPesquisar" placeholder="Digite o repositório" type="text" onChange={procurarRepositorio} />
            {repositoriosFiltrados.map((item) => {
                return (
                    <div className="cardRepo" key={item.id}>
                        <p className="nameRepo">{item.name}</p>
                        <a className="link" href={item.html_url} target={"_blank"}>Link</a>
                    </div>
                )
            })}
        </div>
    )
}