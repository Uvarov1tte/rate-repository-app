import { gql } from "@apollo/client";

export const GET_REPOSITORY_DETAILS = gql`
    query ($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $after: String){
        repositories(orderBy:$orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, first: 8, after:$after){
            totalCount
            edges {
                node {
                    id
                    fullName
                    ownerAvatarUrl
                    description
                    language
                    stargazersCount
                    forksCount
                    reviewCount
                    ratingAverage
                }
            }
            pageInfo {
                endCursor
                startCursor
                hasNextPage
            }
        }
    }
`;

export const GET_SINGLE_REPOSITORY = gql`
    query getSingleRepository($id: ID!){
        repository(id: $id) {
            id
            fullName
            ownerAvatarUrl
            description
            language
            stargazersCount
            forksCount
            reviewCount
            ratingAverage
            url
            reviews {
                edges {
                    node {
                        id
                        text
                        rating
                        createdAt
                        user {
                            id
                            username
                        }
                    }
                }
            }
        }
    }
`;
