import { RepositoryName } from "./RepositoryName";

const repository = {
    name: 'unform',
    description: 'test',
    link: 'http://172.20.148.240/sisc'
}

export function RepositoryList(){

    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <RepositoryName repository={repository}/>
            <RepositoryName repository={repository} />
            <RepositoryName repository={repository} />


        </section>
    )
}