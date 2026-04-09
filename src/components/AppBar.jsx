import { StyleSheet, Pressable } from "react-native";
import Constants from "expo-constants";
import TextHeading from "./TextHeading";
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.primary
    },
    text: {
        padding: 10,
    }
});

const AppBar = () => {
    return (
        <Pressable style={styles.container}>
            <TextHeading style={styles.text} color="contrast" fontWeight="black">Repositories</TextHeading>
        </Pressable>
    );
};

export default AppBar;