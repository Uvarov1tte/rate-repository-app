import { useQuery } from "@apollo/client/react";
import { GET_REPOSITORY_DETAILS } from "../graphql/repositoryQueries";

const useRepositories = () => {
    const { data, error, loading } = useQuery(GET_REPOSITORY_DETAILS, {
        fetchPolicy: "cache-and-network",
    });
    const repositories = data?.repositories;
    return { repositories, error, loading };
};

export default useRepositories;