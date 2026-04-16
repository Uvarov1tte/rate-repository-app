import { useQuery } from "@apollo/client/react";
import { USER_DATA } from "../graphql/userQueries";

const useOwnReviews = () => {
    const { data, error, loading } = useQuery(USER_DATA, {
        variables: { includeReviews: true },
        fetchPolicy: "cache-and-network",
    });

    const reviews = data?.me.reviews;
    return { reviews, error, loading };
};

export default useOwnReviews;