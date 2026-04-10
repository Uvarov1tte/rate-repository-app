import { useState, useEffect } from "react";

const useRepositories = () => {
    const [repositories, setRepositories] = useState();
    const [loading, setLoading] = useState(false);

    const fetchRepositories = async () => {
        setLoading(true);

        // Replace the IP address part with your own IP address!
        const response = await fetch(process.env.EXPO_PUBLIC_API_URL);
        const json = await response.json();
        // console.log(json);

        setLoading(false);
        setRepositories(json);
    };

    useEffect(() => {
        fetchRepositories();
    }, []);

    return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;