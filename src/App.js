import { graphql } from "@octokit/graphql";
import { useState, useEffect } from "react";

async function getRepo() {
  const token = process.env.REACT_APP_GITHUB_TOKEN;
  const graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: `token ${token}`,
    },
  });

  const { repository } = await graphqlWithAuth(`{
    repository(owner: "codestates-seb", name: "agora-states-fe") {
      discussions(first: 10) {
        edges {
          node {
            id
            createdAt
            title
            url
            bodyText
            createdAt
            id
            author {
              avatarUrl
              login
            }
            answer {
              author {
                avatarUrl
              }
              bodyText
              createdAt
            }
          }
        }
      }
    },
  }`);

  return repository;
}

function App() {
  let [repository, setRepository] = useState({});
  useEffect(() => {
    getRepo().then((data) => {
      setRepository(data);
    });
  }, []);

  return (
    <>
      <p>Repository data: {JSON.stringify(repository)}</p>
    </>
  );
}

export default App;
