import { View, StyleSheet, FlatList } from "react-native";
import useSingleRepository from "../../hooks/useSingleRepository";
import RepositoryItem from "./repository/RepositoryItem";
import Text from "../common/Text";
import ReviewItem from "./repository/ReviewItem";

const SingleRepository = () => {
    const { data, loading } = useSingleRepository();

    if (loading === true) {
        console.log("loading");
        return (
            <View>
                <Text>Loading</Text>
            </View>
        );
    }

    const repository = Object.fromEntries(Object.entries(data.repository).filter(e => e[0] !== "reviews"));
    console.log(repository);
    const reviewData = data.repository.reviews;
    const reviewNodes = reviewData
        ? reviewData.edges.map(edge => edge.node)
        : [];

    return (
        <FlatList
            data={reviewNodes}
            ListHeaderComponent={() => <RepositoryItem single={true} repository={repository} />}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={item => item.id}
        />
    );
};



export default SingleRepository;