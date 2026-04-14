import { gql } from "@apollo/client";

export const GET_REPOSITORY_DETAILS = gql`
    query {
        repositories{
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
        }
    }
`;