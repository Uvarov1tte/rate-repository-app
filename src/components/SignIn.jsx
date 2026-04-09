import { View, TextInput, Pressable, StyleSheet } from "react-native";
import { useFormik } from "formik";
import Text from "./Text";
import theme from "../theme";

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
    }
});

const SignIn = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        onSubmit: values => {
            console.log(values);
        }
    });
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={formik.values.username}
                onChangeText={formik.handleChange("username")}
            />
            <TextInput
                style={styles.input}
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