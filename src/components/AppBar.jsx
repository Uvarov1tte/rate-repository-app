import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        // ...
    },
    // ...
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <Text>Repositories</Text>
        </View>
    );
};

export default AppBar;