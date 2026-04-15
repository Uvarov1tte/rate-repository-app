import { gql } from "@apollo/client";

export const SIGNIN = gql`
    mutation signin($user: AuthenticateInput) {
        authenticate(credentials: $user) {
            accessToken
        }
    }
`;

export const USER_DATA = gql`
    query {
        me {
            id
            username
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