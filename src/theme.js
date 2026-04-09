import { Platform } from "react-native";

const theme = {
    colors: {
        primary: "#3f4450",
        secondary: "#618586",
        accent: "#fe5f55",
        contrast: "#edeeea",
        gray: "#c0d3d3",
        error: "#94243e"
    },
    fontSizes: {
        body: 14,
        subheading: 16,
        heading: 18,
    },
    fonts: {
        main: Platform.OS === "android" ? "Roboto": Platform.OS === "ios"? "Arial": "System",
    },
    fontWeights: {
        normal: "400",
        bold: "700",
        black: "900",
    },
};

export default theme;