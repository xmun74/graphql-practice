import { graphql } from "@octokit/graphql";

const token = process.env.REACT_APP_GITHUB_TOKEN;

async function getRepository() {
  const graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: `token ${token}`,
    },
  });

  const { repository } = await graphqlWithAuth(`{
          repository(owner: "codestates-seb", name: "agora-states-fe") {
            discussionCategories(first: 100) {
                edges {
                  node {
                    id
                    emoji
                    name
                  }
                }
              }
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
export default getRepository;
