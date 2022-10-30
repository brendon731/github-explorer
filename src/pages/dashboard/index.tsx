import React, {useState, useEffect, FormEvent} from "react"
import { FiChevronRight } from "react-icons/fi"
import {Title, Form, Repositories, Error} from "./styles"
import logo from "../../assets/logo.svg"
import api from "../../services/api"
import {Link} from "react-router-dom"

interface Repository{
    full_name:string,
    description:string,
    owner:{
        login:string,
        avatar_url:string
    }
}


const Dashboard: React.FC = () => {
    const [repositories, setRepositories] = useState<Repository[]>(()=>{
           const storageRepositories =  localStorage.getItem("@githubExplorer:repositories")
           if(storageRepositories) return JSON.parse(storageRepositories)
           return []
        }
        )
    const [newRepo, setNewRepo] = useState("")
    const [inputError, setInputError] = useState("")

    useEffect(()=>{
        setInputError("")
    },[newRepo])

    useEffect(()=>{
        localStorage.setItem("@githubExplorer:repositories", JSON.stringify(repositories))
    },[repositories])

    async function handleAddRepository(event:FormEvent<HTMLFormElement>):Promise<void>{
        event.preventDefault()

        if(!newRepo){
            return setInputError("informe autor/nome do repositorio")
        }

        try{
            const response = await api.get(`repos/${newRepo}`)
            setRepositories([...repositories, response.data])
            setNewRepo("")

        }catch(err){
            setInputError("Erro ao buscar por esse repositorio!")
        }
    }

    return (
    <>
    <img src={logo} alt="logotipo"/>
    <Title>Explore repositórios no Github</Title>
    <Form onSubmit={handleAddRepository} hasError={ !!  inputError }>
        <input placeholder="Digite o nome do repositório" value={newRepo} onChange={evt=>setNewRepo(evt.target.value)}/>
        <button type="submit">Pesquisar</button>
    </Form>
    {inputError && <Error>{inputError}</Error>}
    <Repositories>
        {repositories.map(repository=>
        <Link key={repository.full_name} to={"/repository/" + repository.full_name}>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20}/>

        </Link>
            )}
        
    </Repositories>
    </>
    )
}
export default Dashboard