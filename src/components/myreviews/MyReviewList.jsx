import { FlatList } from "react-native";
import useOwnReviews from "../../hooks/useOwnReviews";
import ReviewItem from "../common/ReviewItem";

const MyReviewList = () => {
    const { reviews, loading } = useOwnReviews();

    const reviewNodes = reviews
        ? reviews.edges.map(edge => edge.node)
        : [];

    return (
        <FlatList
            data={reviewNodes}
            renderItem={({ item }) => <ReviewItem ownView={true} review={item} />}
            keyExtractor={item => item.id}
        />
    );
};



export default MyReviewList;