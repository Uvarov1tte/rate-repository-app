import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";
import TextHeading from "./TextHeading";
import theme from "../theme";
import TextSubheading from "./TextSubheading";
import RepositoryStat from "./RepositoryStat";

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
});

const RepositoryItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Image
                    style={styles.titleImage}
                    source={{ uri: item.ownerAvatarUrl }}
                />
                <View style={styles.titleTextContainer}>
                    <TextHeading style={styles.heading}>{item.fullName}</TextHeading>
                    <TextSubheading style={styles.subheading}>{item.description}</TextSubheading>
                    <Text style={styles.keyword} fontWeight="bold" color="contrast">{item.language}</Text>
                </View>
            </View>

            <View style={styles.statsContainer}>
                <RepositoryStat statName="Stars" stat={item.stargazersCount}></RepositoryStat>
                <RepositoryStat statName="Forks" stat={item.forksCount}></RepositoryStat>
                <RepositoryStat statName="Reviews" stat={item.reviewCount}></RepositoryStat>
                <RepositoryStat statName="Rating" stat={item.ratingAverage}></RepositoryStat>
            </View>
        </View>
    );
};

export default RepositoryItem;