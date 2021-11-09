export function RepositoryName(props){

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