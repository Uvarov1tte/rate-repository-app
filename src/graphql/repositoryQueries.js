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