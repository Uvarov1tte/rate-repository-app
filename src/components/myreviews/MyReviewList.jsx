import { View, StyleSheet, FlatList } from "react-native";
import useSingleRepository from "../../hooks/useSingleRepository";
import Text from "../common/Text";
import useOwnReviews from "../../hooks/useOwnReviews";
import ReviewItem from "../common/ReviewItem";

const MyReviewList = () => {
    const { reviews, loading } = useOwnReviews();

    if (loading === true) {
        console.log("loading");
        return (
            <View>
                <Text>Loading</Text>
            </View>
        );
    }

    // const repository = Object.fromEntries(Object.entries(data.repository).filter(e => e[0] !== "reviews"));
    console.log(reviews);
    // const reviewData = data.repository.reviews;
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