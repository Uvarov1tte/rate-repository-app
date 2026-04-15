import { useApolloClient, useMutation } from "@apollo/client/react";
import { SIGNIN } from "../graphql/userQueries";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
    const authStorage = useAuthStorage();
    const [mutate, result] = useMutation(SIGNIN);
    const apolloClient = useApolloClient();

    const signIn = async ({ username, password }) => {
        const mutation = await mutate({ variables: { user: { username, password } } });
        const accessToken = mutation.data && mutation.data.authenticate.accessToken;
        await authStorage.setAccessToken(accessToken);
        apolloClient.resetStore();
        return mutation;
    };
    return [signIn, result];
};

export default useSignIn;