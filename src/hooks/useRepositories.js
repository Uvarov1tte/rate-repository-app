import { useQuery } from "@apollo/client/react";
import { GET_REPOSITORY_DETAILS } from "../graphql/repositoryQueries";

export const sortingParams = {
    createdAtDESC: {
        orderBy: "CREATED_AT",
        orderDirection: "DESC"
    },
    ratingAverageASC: {
        orderBy: "RATING_AVERAGE",
        orderDirection: "ASC"
    },
    ratingAverageDESC: {
        orderBy: "RATING_AVERAGE",
        orderDirection: "DESC"
    }
};

const useRepositories = (sortingOption) => {
    const { data, error, loading } = useQuery(GET_REPOSITORY_DETAILS, {
        variables: sortingOption,
        fetchPolicy: "cache-and-network",
    });

    const repositories = data?.repositories;
    return { repositories, error, loading };
};

export default useRepositories;