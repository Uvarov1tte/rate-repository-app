import { useQuery } from "@apollo/client/react";
import { USER_DATA } from "../graphql/userQueries";

const useOwnReviews = () => {
    const { data, error, loading } = useQuery(USER_DATA, {
        variables: { includeReviews: true },
        fetchPolicy: "cache-and-network",
    });

    // console.log(data.me.reviews)

    const reviews = data?.me.reviews;
    console.log(reviews);
    return { reviews, error, loading };
};

export default useOwnReviews;