import { screen, render, fireEvent } from "@testing-library/react-native";
import { RepositoryListContainer } from "../components/repository_list/RepositoryListContainer";

describe("RepositoryList", () => {
    describe("RepositoryListContainer", () => {
        it("renders repository information correctly", () => {
            const repositories = {
                totalCount: 8,
                pageInfo: {
                    hasNextPage: true,
                    endCursor:
                        "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
                    startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
                },
                edges: [
                    {
                        node: {
                            id: "jaredpalmer.formik",
                            fullName: "jaredpalmer/formik",
                            description: "Build forms in React, without the tears",
                            language: "TypeScript",
                            forksCount: 1619,
                            stargazersCount: 21856,
                            ratingAverage: 88,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                "https://avatars2.githubusercontent.com/u/4060187?v=4",
                        },
                        cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
                    },
                    {
                        node: {
                            id: "async-library.react-async",
                            fullName: "async-library/react-async",
                            description: "Flexible promise-based React data loader",
                            language: "JavaScript",
                            forksCount: 69,
                            stargazersCount: 1760,
                            ratingAverage: 72,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                "https://avatars1.githubusercontent.com/u/54310907?v=4",
                        },
                        cursor:
                            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
                    },
                ],
            };
            const repo1 = repositories.edges[0];

            render(<RepositoryListContainer repositories={repositories} />);
            const repositoryItems = screen.getAllByTestId("repositoryItem");
            const repositoryImages = screen.getAllByTestId("repositoryImage");
            const repositoryNames = screen.getAllByTestId("repositoryName");
            const repositoryDescriptions = screen.getAllByTestId("repositoryDescription");
            const repositoryLanguages = screen.getAllByTestId("repositoryLanguage");
            const repositoryStarStats = screen.getAllByTestId("repositoryStars");
            const repositoryForkStats = screen.getAllByTestId("repositoryForks");
            const repositoryReviewStats = screen.getAllByTestId("repositoryReviews");
            const repositoryRatingStats = screen.getAllByTestId("repositoryRating");


            //toHaveTextContent is not working properly for some reasons (error bellow) =>using alterate options
            //TypeError: expect(...).toHaveTextContext is not a function

            for (let i = 0; i <= 1; i++) {
                expect(repositoryItems[i]).toContainElement(repositoryImages[i]);
                expect(repositoryItems[i]).toContainElement(repositoryNames[i]);
                expect(repositoryNames[i]).toContainElement(screen.getByText(repositories.edges[i].node.fullName));
                expect(repositoryItems[i]).toContainElement(repositoryDescriptions[i]);
                expect(repositoryNames[i]).toContainElement(screen.getByText(repositories.edges[i].node.description));
                expect(repositoryItems[i]).toContainElement(repositoryLanguages[i]);
                expect(repositoryNames[i]).toContainElement(screen.getByText(repositories.edges[i].node.language));
                expect(repositoryItems[i]).toContainElement(repositoryStarStats[i]);
                expect(repositoryNames[i]).toContainElement(screen.getByText(repositories.edges[i].node.stargazersCount));
                expect(repositoryItems[i]).toContainElement(repositoryForkStats[i]);
                expect(repositoryNames[i]).toContainElement(screen.getByText(repositories.edges[i].node.forksCount));
                expect(repositoryItems[i]).toContainElement(repositoryReviewStats[i]);
                expect(repositoryNames[i]).toContainElement(screen.getByText(repositories.edges[i].node.reviewCount));
                expect(repositoryItems[i]).toContainElement(repositoryRatingStats[i]);
                expect(repositoryNames[i]).toContainElement(screen.getByText(repositories.edges[i].node.ratingAverage));
            }
        });
    });
});