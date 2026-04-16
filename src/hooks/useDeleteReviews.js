import { useMutation, useQuery } from "@apollo/client/react";
import { DELETE_REVIEW } from "../graphql/reviewQueries";
import { USER_DATA } from "../graphql/userQueries";

const useDeleteReview = () => {
    const [mutate, result] = useMutation(DELETE_REVIEW);
    const { refetch } = useQuery(USER_DATA, {
        variables: { includeReviews: true },
        fetchPolicy: "cache-and-network",
    });

    const deleteReview = async (id) => {
        const mutation = await mutate({ variables: { deleteReviewId: id } });
        refetch();
        return mutation;
    };
    return [deleteReview, result];
};

export default useDeleteReview;