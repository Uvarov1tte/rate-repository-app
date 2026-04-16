import { View, StyleSheet } from "react-native";
import theme from "../../theme";
import Text from "./Text";
import TextHeading from "./TextHeading";
import TextSubheading from "./TextSubheading";
import ReviewButtons from "./ReviewButtons";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.contrast,
        flexDirection: "row",
        padding: 15,
        marginTop: 10,
        flexGrow: 1,
        flexShrink: 1,
    },
    ratingBox: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: theme.colors.accent,
        borderWidth: 4,
        marginEnd: 15,
    },
    ratingNumber: {
        margin: "auto"
    },
    detailsContainer: {
        flexGrow: 1,
        flexShrink: 1,
    }
});


const ReviewItem = ({ review, ownView }) => {
    const dateCreated = new Date(review.createdAt).toLocaleDateString();

    return (
        <View style={styles.container}>
            <View style={styles.ratingBox}>
                <TextHeading style={styles.ratingNumber} color="accent">{review.rating}</TextHeading>
            </View>
            <View style={styles.detailsContainer}>
                <TextHeading>{ownView ? review.repository.fullName : review.user.username}</TextHeading>
                <TextSubheading>{dateCreated}</TextSubheading>
                <Text>{review.text}</Text>
                {ownView && <ReviewButtons repoId={review.repository.id} reviewId={review.id} />}
            </View>
        </View>
    );
};

export default ReviewItem;