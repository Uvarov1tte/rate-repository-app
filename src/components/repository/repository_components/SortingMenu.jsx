import { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Text from "../../common/Text";
import theme from "../../../theme";

const styles = StyleSheet.create({
    container: {
        minHeight: 50,
    },
    containerHidden: {
        display: "none"
    },
    button: {
        backgroundColor: theme.colors.gray,
        height: 50,
        padding: "auto",
        borderRadius: 3,
    },
    buttonText: {
        margin: "auto",
    },
    input: {
        padding: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: theme.colors.secondary
    },
})

const SortingMenu = ({ onSort, currentSort }) => {
    const [openMenu, setOpenMenu] = useState(false)

    const handleChange = (itemValue, itemIndex) => {
        // setSortingOption(itemValue)
        onSort(itemValue)
    }

    const handlePress = () => {
        setOpenMenu(!openMenu)
    };

    return (
        <View>
            {/* <TextInput
                style={styles.input}
                placeholder="Search"
                value={filter}
                onChangeText={setFilter}
            /> */}
            <Pressable
                onPress={handlePress}
                style={styles.button}
            >
                <Text color="accent" fontWeight="bold" style={styles.buttonText}>Select sorting option</Text>
            </Pressable>
            <Picker
                style={!openMenu ? styles.containerHidden : styles.container}
                selectedValue={currentSort}
                onValueChange={handleChange}>
                <Picker.Item label="Select sorting option" value="" enabled={false} />
                <Picker.Item label="Latest repository" value="createdAtDESC" />
                <Picker.Item label="Highest rated repository" value="ratingAverageDESC" />
                <Picker.Item label="Lowest rated repository" value="ratingAverageASC" />
            </Picker>
        </View>
    );
};

export default SortingMenu;