import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import Constants from "expo-constants";
import { SetContextLink } from "@apollo/client/link/context";
import { relayStylePagination } from "@apollo/client/utilities";

const httpLink = new HttpLink({ uri: Constants.expoConfig.extra.APOLLO_URI });

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                repositories: relayStylePagination(),
            },
        },
    },
});

const createApolloClient = (authStorage) => {
    const authLink = new SetContextLink(async ({ headers }, _) => {
        try {
            const accessToken = await authStorage.getAccessToken();
            return {
                headers: {
                    ...headers,
                    authorization: accessToken ? `Bearer ${accessToken}` : "",
                },
            };
        } catch (e) {
            console.log(e);
            return {
                headers,
            };
        }
    });
    console.log(authLink);
    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache,
    });
};
export default createApolloClient;