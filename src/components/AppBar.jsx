import { StyleSheet, Pressable } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";

import TextHeading from "./TextHeading";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.primary,
        flexDirection: "row"
    },
    text: {
        padding: 10,
    }
});

const AppBar = () => {
    return (
        <Pressable style={styles.container}>
            <Link to="/">
                <TextHeading style={styles.text} color="contrast" fontWeight="black">Repositories</TextHeading>
            </Link>
            <Link to="/signin">
                <Text style={styles.text} color="contrast">Sign in</Text>
            </Link>
        </Pressable>
    );
};

export default AppBar;