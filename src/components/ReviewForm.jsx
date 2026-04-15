import { View, TextInput, Pressable, StyleSheet } from "react-native";
import { useFormik } from "formik";
import Text from "./common/Text";
import theme from "../theme";
import { reviewSchema } from "../validation";
import useCreateReview from "../hooks/useCreateReview";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.contrast,
        padding: 15
    },
    input: {
        padding: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: theme.colors.secondary
    },
    button: {
        backgroundColor: theme.colors.accent,
        padding: 15,
        borderRadius: 3,
    },
    buttonText: {
        margin: "auto",
    },
    errorMessage: {
        margin: 0
    }
});

const ReviewForm = () => {
    const [createReview, result] = useCreateReview();
    const navigate = useNavigate();

    const submitForm = async (values) => {

        try {
            console.log(values);
            const { data } = await createReview(values);
            const repositoryId = data.createReview.repositoryId
            navigate(`/repository/${repositoryId}`);
        } catch (e) {
            console.log(e);
        }
    };

    const formik = useFormik({
        initialValues: {
            ownerName: "",
            repositoryName: "",
            rating: "",
            text: "",
        },
        validationSchema: reviewSchema,
        onSubmit: values => {
            submitForm(values);
        }
    });

    return (
        <View style={styles.container}>
            {formik.touched.ownerName && formik.errors.ownerName && (
                <Text style={styles.errorMessage} color="error">{formik.errors.ownerName}</Text>
            )}
            <TextInput
                style={{
                    ...styles.input,
                    borderColor: formik.touched.ownerName && formik.errors.ownerName && theme.colors.error,
                }}
                placeholder="Repository owner name"
                value={formik.values.ownerName}
                onChangeText={formik.handleChange("ownerName")}
            />

            {formik.touched.repositoryName && formik.errors.repositoryName && (
                <Text style={styles.errorMessage} color="error">{formik.errors.repositoryName}</Text>
            )}
            <TextInput
                style={{
                    ...styles.input,
                    borderColor: formik.touched.repositoryName && formik.errors.repositoryName && theme.colors.error,
                }}
                placeholder="Repository name"
                value={formik.values.repositoryName}
                onChangeText={formik.handleChange("repositoryName")}
            />

            {formik.touched.rating && formik.errors.rating && (
                <Text style={styles.errorMessage} color="error">{formik.errors.rating}</Text>
            )}
            <TextInput
                style={{
                    ...styles.input,
                    borderColor: formik.touched.rating && formik.errors.rating && theme.colors.error,
                }}
                placeholder="Rating between 0 and 100"
                value={formik.values.rating}
                onChangeText={formik.handleChange("rating")}
            />

            {formik.touched.text && formik.errors.text && (
                <Text style={styles.errorMessage} color="error">{formik.errors.text}</Text>
            )}
            <TextInput
                style={{
                    ...styles.input,
                    borderColor: formik.touched.text && formik.errors.text && theme.colors.error,
                }}
                placeholder="Review"
                value={formik.values.text}
                onChangeText={formik.handleChange("text")}
            />


            <Pressable
                style={styles.button}
                onPress={formik.handleSubmit}
            >
                <Text style={styles.buttonText} color="contrast" fontWeight="bold">Create a review</Text>
            </Pressable>
        </View>
    );
};

export default ReviewForm;