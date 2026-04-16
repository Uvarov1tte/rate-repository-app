import { useMutation } from "@apollo/client/react";
import { CREATE_REVIEW } from "../graphql/reviewQueries";

const useCreateReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW);

    const createReview = async ({ ownerName, repositoryName, rating, text }) => {
        const ratingNumber = JSON.parse(rating);
        const mutation = await mutate({ variables: { review: { ownerName, repositoryName, text, rating: ratingNumber } } });
        return mutation;
    };
    return [createReview, result];
};

export default useCreateReview;