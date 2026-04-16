import { gql } from "@apollo/client";

export const SIGNIN = gql`
    mutation signin($user: AuthenticateInput) {
        authenticate(credentials: $user) {
            accessToken
        }
    }
`;

export const USER_DATA = gql`
    query getCurrentUser($includeReviews: Boolean = false) {
        me {
            id
            username
            reviews @include(if: $includeReviews) {
                edges {
                    node {
                        createdAt
                        id
                        rating
                        text
                        repository {
                            fullName
                            id
                        }
                    }
                }
            }
        }
    }
`;

export const SIGNUP = gql`
    mutation ($user: CreateUserInput){
        createUser (user: $user) {
            username
            id
        }
    }
`;