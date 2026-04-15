import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

import RepositoryList from "./repository/RepositoryList";
import SignIn from "./SignIn";
import AppBar from "./AppBar";
import theme from "../theme";
import SingleRepository from "./repository/SingleRepository";
import ReviewForm from "./ReviewForm";
import SignUp from "./SignUp";

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
                <Route path="/" element={<RepositoryList />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/repository/:repositoryId" element={<SingleRepository />} />
                <Route path="/review/create" element={<ReviewForm />} />
                <Route path="/signup" element={<SignUp />} />
                {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
            </Routes>
        </View>
    );
};

export default Main;