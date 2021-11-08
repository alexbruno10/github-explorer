export function RepositoryName(props){

    return(
        <section className="repository-list">
            <ul>
                <li>
                    <strong>{props.repository.name ?? "Default"}</strong>
                    <p>{props.repository.description}</p>
                    <a href={props.repository.link}>Access</a>
                </li>
            </ul>
        </section>
    )
}