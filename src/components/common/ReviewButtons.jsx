import { View, StyleSheet, Pressable, Alert } from "react-native";
import theme from "../../theme";
import Text from "./Text";
import useDeleteReview from "../../hooks/useDeleteReviews";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: "row"
    },
    button: {
        flexGrow: 1,
        padding: 15,
        marginTop: 15,
        borderRadius: 3,
    },
    buttonText: {
        margin: "auto",
    },
});

const ReviewButtons = ({ repoId, reviewId }) => {
    const [deleteReview, result] = useDeleteReview();
    const navigate = useNavigate();

    const handleDelete = () =>
        Alert.alert("Delete review", "Are you sure you want to delete this review?", [
            {
                text: "Cancel",
                onPress: () => console.log("cancelled"),
                style: "cancel",
            },
            { text: "OK", onPress: async () => await deleteReview(reviewId) },
        ]);


    const handleNavigate = async () => {
        navigate(`/repository/${repoId}`)
    }


    return (
        <View style={styles.buttonContainer}>
            <Pressable
                style={{ ...styles.button, backgroundColor: theme.colors.gray, marginEnd: 15 }}
                onPress={handleNavigate}
            >
                <Text style={styles.buttonText} color="accent" fontWeight="bold">View repository</Text>
            </Pressable>
            <Pressable
                style={{ ...styles.button, backgroundColor: theme.colors.accent }}
                onPress={handleDelete}
            >
                <Text style={styles.buttonText} color="contrast" fontWeight="bold">DeleteReview</Text>
            </Pressable>
        </View>
    )
}

export default ReviewButtons