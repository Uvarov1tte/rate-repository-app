import { StyleSheet, Pressable, ScrollView } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";

import TextHeading from "./common/TextHeading";
import Text from "./common/Text";
import theme from "../theme";
import useSignOut from "../hooks/useSignOut";
import { useQuery } from "@apollo/client/react";
import { USER_DATA } from "../graphql/userQueries";

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
    const { data, error, loading } = useQuery(USER_DATA);
    const signOut = useSignOut();

    const handleSignOut = async () => {
        await signOut();
    };

    return (
        <Pressable style={styles.container}>
            <ScrollView horizontal>
                <Link to="/">
                    <TextHeading style={styles.text} color="contrast" fontWeight="black">Repositories</TextHeading>
                </Link>
                {data && data.me ?
                    <>
                        <Link to="/review/create">
                            <Text style={styles.text} color="contrast" fontSize="heading">Create a review</Text>
                        </Link>
                        <Link to="/review/me">
                            <Text style={styles.text} color="contrast" fontSize="heading">My reviews</Text>
                        </Link>
                        <Pressable onPress={handleSignOut}>
                            <Text style={styles.text} color="contrast" fontSize="heading">Sign out</Text>
                        </Pressable>
                    </>
                    :
                    <>
                        <Link to="/signin">
                            <Text style={styles.text} color="contrast" fontSize="heading">Sign in</Text>
                        </Link>
                        <Link to="/signup">
                            <Text style={styles.text} color="contrast" fontSize="heading">Sign up</Text>
                        </Link>
                    </>
                }
            </ScrollView>
        </Pressable>
    );
};

export default AppBar;