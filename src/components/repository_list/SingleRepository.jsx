import useSingleRepository from "../../hooks/useSingleRepository";
import RepositoryItem from "./RepositoryItem";
import Text from "../common/Text";
import { View } from "react-native-web";

const SingleRepository = () => {
    const { data, loading } = useSingleRepository();

    if (loading === true) {
        console.log("loading");
        return (
            <View>
                <Text>Loading</Text>
            </View>
        );
    }

    return (
        <View>
            <RepositoryItem single={true} item={data.repository} />
        </View>
    );
};

export default SingleRepository;