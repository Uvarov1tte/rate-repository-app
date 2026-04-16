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
    const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORY_DETAILS, {
        variables: sortingOption,
        fetchPolicy: "cache-and-network",
    });

    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

        if (!canFetchMore) {
            return;
        }

        fetchMore({
            variables: {
                after: data.repositories.pageInfo.endCursor,
                ...sortingOption,
            },
        });
    };

    const repositories = data?.repositories;
    return { repositories, error, loading, fetchMore: handleFetchMore, };
};

export default useRepositories;