import { useMutation } from "@apollo/client/react";
import { SIGNIN } from "../graphql/userQueries";

const useSignIn = () => {
    const [mutate, result] = useMutation(SIGNIN); //result = {data, loading, error}

    const signIn = async ({ username, password }) => {
        return mutate({ variables: { username, password } });
    };

    return [signIn, result];
};

export default useSignIn;