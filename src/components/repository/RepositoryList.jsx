import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./repository_components/RepositoryItem";
import useRepositories, { sortingParams } from "../../hooks/useRepositories";
import SortingMenu from "./repository_components/SortingMenu";
import { useState } from "react";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});


const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
    const [currentSort, setCurrentSort] = useState("createdAtDESC")
    const [sortingOption, setSortingOption] = useState(sortingParams.createdAtDESC)
    const { repositories } = useRepositories(sortingOption);
    const repositoryNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];

    const handleSort = (sortingValue) => {
        // console.log(sortingParams[sortingValue])
        setSortingOption(sortingParams[sortingValue])
        setCurrentSort(sortingValue)
    }

    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            ListHeaderComponent={() => <SortingMenu currentSort={currentSort} onSort={handleSort} />}
            renderItem={({ item }) => <RepositoryItem single={false} repository={item} />}
            keyExtractor={item => item.id}
        />
    );
};

export default RepositoryList;