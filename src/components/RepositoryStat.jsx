import { StyleSheet, View } from "react-native";
import TextHeading from "./TextHeading";
import TextSubheading from "./TextSubheading";

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 0,
    },
    text: {
        margin: "auto",
    }
});

const RepositoryStat = ({ statName, stat }) => {
    const displayStat = stat >= 1000 ? `${Math.round(stat / 100) / 10}k` : stat;

    return (
        <View style={styles.container}>
            <TextHeading style={styles.text}>{displayStat}</TextHeading>
            <TextSubheading style={styles.text}>{statName}</TextSubheading>
        </View>
    );
};

export default RepositoryStat;