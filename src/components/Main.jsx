import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

import RepositoryListContainer from "./repository_list/RepositoryListContainer";
import SignIn from "./SignIn";
import AppBar from "./AppBar";
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.gray,
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar></AppBar>
            <Routes>
                <Route path="/" element={<RepositoryListContainer />} />
                <Route path="/signin" element={<SignIn />} />
                {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
            </Routes>
        </View>
    );
};

export default Main;