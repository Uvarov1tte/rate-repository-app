import { FlatList } from "react-native";
import useSingleRepository from "../../hooks/useSingleRepository";
import RepositoryItem from "./repository_components/RepositoryItem";
import ReviewItem from "../common/ReviewItem";
import { useParams } from "react-router-native";
import Text from "../common/Text";

const SingleRepository = () => {
    const { repositoryId } = useParams();
    const { repository, error, loading, fetchMore } = useSingleRepository(repositoryId);

    if (error) return <Text>{error.message}</Text>;
    if (loading) return <Text>loading...</Text>;

    const reviews = repository.reviews
        ? repository.reviews.edges.map(edge => edge.node)
        : [];

    const onEndReach = () => {
        fetchMore();
    };

    return (
        <FlatList
            data={reviews}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
            renderItem={({ item }) => <ReviewItem ownView={false} review={item} />}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={() => <RepositoryItem repository={repository} />}
        />
    );
};

export default SingleRepository;