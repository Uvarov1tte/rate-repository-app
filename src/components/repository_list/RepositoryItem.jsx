import { View, StyleSheet, Image, Pressable } from "react-native";
import * as Linking from "expo-linking";

import Text from "../common/Text";
import TextHeading from "../common/TextHeading";
import theme from "../../theme";
import TextSubheading from "../common/TextSubheading";
import RepositoryStat from "./RepositoryStat";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.contrast,
        flexGrow: 1,
        flexShrink: 1,
    },
    titleContainer: {
        flexDirection: "row",
    },
    titleTextContainer: {
        flexGrow: 1,
        flexShrink: 1,
        margin: 15,
    },
    titleImage: {
        width: 50,
        height: 50,
        borderRadius: 5,
        flexGrow: 0,
        flexShrink: 0,
        margin: 15,
    },
    keyword: {
        backgroundColor: theme.colors.accent,
        padding: 5,
        borderRadius: 5,
        marginEnd: "auto",
        marginStart: 0,
        marginTop: 10,
    },
    statsContainer: {
        flexDirection: "row",
    },
    button: {
        backgroundColor: theme.colors.accent,
        padding: 15,
        borderRadius: 3,
    },
    buttonText: {
        margin: "auto",
    },
});

const RepositoryItem = ({ single, item }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        if (single === false) {
            navigate(`/repository/${item.id}`);
        }
    };

    const handleOpenLink = () => {
        Linking.openURL(item.url);
    };

    return (
        <Pressable
            testID="repositoryItem"
            style={styles.container}
            onPress={handleNavigate}
        >
            <View style={styles.titleContainer}>
                <Image
                    style={styles.titleImage}
                    source={{ uri: item.ownerAvatarUrl }}
                    testID="repositoryImage"
                />
                <View style={styles.titleTextContainer}>
                    <TextHeading testID="repositoryName" style={styles.heading}>{item.fullName}</TextHeading>
                    <TextSubheading testID="repositoryDescription" style={styles.subheading}>{item.description}</TextSubheading>
                    <Text testID="repositoryLanguage" style={styles.keyword} fontWeight="bold" color="contrast">{item.language}</Text>
                </View>
            </View>

            <View style={styles.statsContainer}>
                <RepositoryStat statName="Stars" stat={item.stargazersCount}></RepositoryStat>
                <RepositoryStat statName="Forks" stat={item.forksCount}></RepositoryStat>
                <RepositoryStat statName="Reviews" stat={item.reviewCount}></RepositoryStat>
                <RepositoryStat statName="Rating" stat={item.ratingAverage}></RepositoryStat>
            </View>
            {single &&
                <Pressable
                    style={styles.button}
                    onPress={handleOpenLink}
                >
                    <Text style={styles.buttonText} color="contrast" fontWeight="bold">Open in GitHub</Text>
                </Pressable>
            }
        </Pressable>
    );
};

export default RepositoryItem;