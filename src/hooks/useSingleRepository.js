import { useQuery } from "@apollo/client/react";
import { GET_SINGLE_REPOSITORY } from "../graphql/repositoryQueries";
import { useParams } from "react-router-native";

const useSingleRepository = () => {
    const { repositoryId } = useParams();

    const { data, error, loading } = useQuery(GET_SINGLE_REPOSITORY, {
        variables: { id: repositoryId },
        fetchPolicy: "cache-and-network",
    });

    return { data, error, loading };
};

export default useSingleRepository;