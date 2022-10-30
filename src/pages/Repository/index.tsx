import React, {useEffect, useState} from "react"
import {useParams, Link} from "react-router-dom"
import {FiChevronLeft, FiChevronRight} from "react-icons/fi"
import {Header, RepositoryInfo, Issues} from "./styles"
import logo from "../../assets/logo.svg"
import api from "../../services/api"


interface Repository{
    full_name:string,
    description:string,
    stargazers_count:number,
    forks_count:number,
    open_issues_count:number,
    owner:{
        login:string,
        avatar_url:string
    }
}
interface Issue{
    id:number,
    title:string,
    html_url:string,
    user:{
        login:string
    }
}
const Repository: React.FC = () => {
    const {"*":repositoryParam} = useParams()
    const [repository, setRepository] = useState<Repository | null>(null)
    const [issues, setIssues] = useState<Issue[]>([])
    useEffect(()=>{
        api.get(`repos/${repositoryParam}`).then(res=>setRepository(res.data))
        api.get(`repos/${repositoryParam}/issues`).then(res=>setIssues(res.data))




        // async function getData():Promise<void>{
        //     const [repository, issues] = await Promise.all([
        //         api.get(`repos/${repositoryParam}`),
        //         api.get(`repos/${repositoryParam}/issues`)
        //     ])
        // }
        // getData()

    },[repositoryParam])

    return (<>
            <Header>
                <img src={logo} alt="logo github explorer"/>
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>
            { repository && (

                <RepositoryInfo>
                    <header>
                        <img src={repository.owner.avatar_url}alt={repository.owner.login} />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                    </header>
                    <ul>
                        <li>
                        <strong>{repository.stargazers_count}</strong>
                            <p>Stars</p>
                        </li>
                        <li>
                        <strong>{repository.forks_count}</strong>
                            <p>Forks</p>
                        </li>
                        <li>
                            <strong>{repository.open_issues_count}</strong>
                            <span>Issues Abertas</span>
                        </li>
                    </ul>
                </RepositoryInfo>
            )}

        <Issues>
            {issues.map(issue=>

                <a key={issue.id} href={issue.html_url} target="blank">
                <div>
                    <strong>{issue.title}</strong>
                    <p>{issue.user.login}</p>
                </div>
                <FiChevronRight size={20}/>

            </a>
            )}
            
        </Issues>
    </>

    )
}
export default Repository