import { useQuery } from "@apollo/client/react";
import { GET_SINGLE_REPOSITORY } from "../graphql/repositoryQueries";

const useSingleRepository = (repositoryId) => {
    const { data, error, loading, fetchMore } = useQuery(GET_SINGLE_REPOSITORY, {
        variables: { repositoryId: repositoryId },
        skip: !repositoryId,
        fetchPolicy: "cache-and-network",
    });

    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;
        console.log(!loading);
        if (!canFetchMore) {
            return;
        }

        fetchMore({
            variables: {
                after: data.repository.reviews.pageInfo.endCursor,
                id: repositoryId,
            },
        });
    };

    const repository = data?.repository;

    return { repository, error, loading, fetchMore: handleFetchMore };
};

export default useSingleRepository;