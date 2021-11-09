import { RepositoryName } from "./RepositoryName";
import { useState } from "react"; 
import { useEffect } from "react";

import '../styles/repositories.scss'

export function RepositoryList(){

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/alexbruno10/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);

    console.log(repositories)

    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryName key={repositories.name} repository={repository}/>
                })}
            </ul>

        </section>
    )
}