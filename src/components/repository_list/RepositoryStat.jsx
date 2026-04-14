import { StyleSheet, View } from "react-native";
import TextHeading from "../common/TextHeading";
import TextSubheading from "../common/TextSubheading";

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
        <View testID={`repository${statName}`} style={styles.container}>
            <TextHeading style={styles.text}>{displayStat}</TextHeading>
            <TextSubheading style={styles.text}>{statName}</TextSubheading>
        </View>
    );
};

export default RepositoryStat;