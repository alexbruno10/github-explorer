interface RepositoryNameProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryName(props: RepositoryNameProps){

    return(
        <section className="repository-list">
            <ul>
                <li>
                    <strong>{props.repository.name ?? "Default"}</strong>
                    <p>{props.repository.description}</p>
                    <a href={props.repository.html_url}>{props.repository.html_url}</a>
                </li>
            </ul>
        </section>
    )
}