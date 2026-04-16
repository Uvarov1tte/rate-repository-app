import { gql } from "@apollo/client";

export const CREATE_REVIEW = gql`
    mutation ($review: CreateReviewInput){
        createReview(review: $review) {
            id
            repositoryId
        }
    }
`;

export const DELETE_REVIEW = gql`
    mutation($deleteReviewId: ID!) {
        deleteReview(id: $deleteReviewId)
    }
`;