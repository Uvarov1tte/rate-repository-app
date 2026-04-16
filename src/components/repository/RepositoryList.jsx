import * as React from "react";
import { FlatList, View, StyleSheet, TextInput } from "react-native";
import RepositoryItem from "./repository_components/RepositoryItem";
import useRepositories, { sortingParams } from "../../hooks/useRepositories";
import SortingMenu from "./repository_components/SortingMenu";
import { useState } from "react";
import theme from "../../theme";
import { useDebounce } from "use-debounce";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    input: {
        padding: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: theme.colors.secondary
    },
});


const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {
    renderHeader = () => {
        const { filter, setFilter, currentSort, setCurrentSort, setSortingOption } = this.props;

        const handleFilter = (text) => {
            setFilter(text);
        };

        const handleSort = (sortingValue) => {
            setSortingOption(sortingParams[sortingValue]);
            setCurrentSort(sortingValue);
        };

        return (
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    value={filter}
                    onChangeText={handleFilter}
                />
                <SortingMenu currentSort={currentSort} onSort={handleSort} />
            </View>
        );
    };


    render() {
        return (
            <FlatList
                data={this.props.repositories}
                ItemSeparatorComponent={ItemSeparator}
                ListHeaderComponent={this.renderHeader}
                onEndReached={this.props.onEndReach}
                renderItem={({ item }) => <RepositoryItem single={false} repository={item} />}
                keyExtractor={item => item.id}
            />
        );
    }


};

const RepositoryList = () => {
    const [filter, setFilter] = useState("");
    const [debouncedFilter] = useDebounce(filter, 500);
    const [currentSort, setCurrentSort] = useState("createdAtDESC");
    const [sortingOption, setSortingOption] = useState(sortingParams.createdAtDESC);
    const { repositories, fetchMore } = useRepositories({ ...sortingOption, searchKeyword: debouncedFilter });

    const repositoryNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];
    const onEndReach = () => {
        if (repositories) {
            fetchMore();
        }
    };



    return <RepositoryListContainer
        repositories={repositoryNodes}
        filter={filter}
        setFilter={setFilter}
        currentSort={currentSort}
        setCurrentSort={setCurrentSort}
        setSortingOption={setSortingOption}
        onEndReach={onEndReach}
    />;
};

export default RepositoryList;