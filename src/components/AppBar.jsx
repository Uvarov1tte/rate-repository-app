import { StyleSheet, Pressable, ScrollView } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";

import TextHeading from "./TextHeading";
import Text from "./Text";
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

    console.log(data);

    const handleSignOut = async () => {
        await signOut();
        console.log("signing out");
    };

    return (
        <Pressable style={styles.container}>
            <ScrollView horizontal>
                <Link to="/">
                    <TextHeading style={styles.text} color="contrast" fontWeight="black">Repositories</TextHeading>
                </Link>
                {data && data.me ?
                    <Pressable onPress={handleSignOut}>
                        <Text style={styles.text} color="contrast" fontSize="heading">Sign out</Text>
                    </Pressable>
                    :
                    <Link to="/signin">
                        <Text style={styles.text} color="contrast" fontSize="heading">Sign in</Text>
                    </Link>
                }
            </ScrollView>
        </Pressable>
    );
};

export default AppBar;