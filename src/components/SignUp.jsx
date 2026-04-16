import { View, TextInput, Pressable, StyleSheet } from "react-native";
import { useFormik } from "formik";
import { useNavigate } from "react-router-native";
import Text from "./common/Text";
import theme from "../theme";
import { signUpSchema } from "../validation";
import useSignIn from "../hooks/useSignIn";
import useSignUp from "../hooks/useSignUp";


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

const SignUp = () => {
    const [signUp, signUpresult] = useSignUp();
    const [signIn, signInresult] = useSignIn();
    const navigate = useNavigate();

    const submitForm = async (values) => {

        try {
            const { username, password } = values;
            await signUp({ username, password });
            await signIn({ username, password });
            navigate("/");
        } catch (e) {
            console.log(e);
        }
    };

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            passwordConfirm: ""
        },
        validationSchema: signUpSchema,
        onSubmit: values => {
            submitForm(values);
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
                placeholder="Username" r
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

            {formik.touched.passwordConfirm && formik.errors.passwordConfirm && (
                <Text style={styles.errorMessage} color="error">{formik.errors.passwordConfirm}</Text>
            )}
            <TextInput
                style={{
                    ...styles.input,
                    borderColor: formik.touched.passwordConfirm && formik.errors.passwordConfirm && theme.colors.error,
                }}
                placeholder="Password confirmation"
                value={formik.values.passwordConfirm}
                onChangeText={formik.handleChange("passwordConfirm")}
                secureTextEntry
            />


            <Pressable
                style={styles.button}
                onPress={formik.handleSubmit}
            >
                <Text style={styles.buttonText} color="contrast" fontWeight="bold">Sign up</Text>
            </Pressable>
        </View>
    );
};

export default SignUp;