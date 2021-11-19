import {
    Section,
    Title,
    ListOfReposContainer,
    Repo
} from './styles';

const ReposContainer = props => {
    console.log(props.name)

    return (
        <Section>
            <Title>Repositório</Title>
            <ListOfReposContainer>
                {(props?.repos).map(repo => (
                    <Repo onClick={async () => await window.open(repo?.html_url)} key={repo?.id}>
                        <h2>Repo name: {repo?.name}</h2>
                        <h2>Repo stars: {repo?.stargazers_count}</h2>
                        <p>{repo?.description}</p>
                    </Repo>
                ))}
            </ListOfReposContainer>
        </Section>
    );
}

export default ReposContainer;