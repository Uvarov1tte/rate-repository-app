import { useMutation } from "@apollo/client/react";
import { SIGNUP } from "../graphql/userQueries";

const useSignUp = () => {
    const [mutate, result] = useMutation(SIGNUP);

    const signUp = async ({ username, password }) => {
        const mutation = await mutate({ variables: { user: { username, password } } });
        return mutation;
    };
    return [signUp, result];
};

export default useSignUp;