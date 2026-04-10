import { View, TextInput, Pressable, StyleSheet } from "react-native";
import { useFormik } from "formik";
import Text from "./Text";
import theme from "../theme";
import { signInSchema } from "../validation";

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

const SignIn = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: signInSchema,
        onSubmit: values => {
            console.log(values);
        }
    });
    return (
        <View style={styles.container}>
            {formik.touched.username && formik.errors.username && (
                <Text style={styles.errorMessage} color="error">{formik.errors.username}</Text>
            )}
            <TextInput
                style={{
                    ...styles.input,
                    borderColor: formik.touched.username && formik.errors.username && theme.colors.error,
                }}
                placeholder="Username"r
                value={formik.values.username}
                onChangeText={formik.handleChange("username")}
            />

            {formik.touched.password && formik.errors.password && (
                <Text style={styles.errorMessage} color="error">{formik.errors.password}</Text>
            )}
            <TextInput
                style={{
                    ...styles.input,
                    borderColor: formik.touched.password && formik.errors.password && theme.colors.error,
                }}
                placeholder="Password"
                value={formik.values.password}
                onChangeText={formik.handleChange("password")}
                secureTextEntry
            />

            <Pressable
                style={styles.button}
                onPress={formik.handleSubmit}
            >
                <Text style={styles.buttonText} color="contrast" fontWeight="bold">Sign in</Text>
            </Pressable>
        </View>
    );
};

export default SignIn;