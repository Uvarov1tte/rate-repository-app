import { Text as NativeText, StyleSheet } from "react-native";

import theme from "../../theme";

const styles = StyleSheet.create({
    text: {
        color: theme.colors.primary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
    },
    colorSecondary: {
        color: theme.colors.secondary,
    },
    colorAccent: {
        color: theme.colors.accent,
    },
    colorContrast: {
        color: theme.colors.contrast,
    },
    colorGray: {
        color: theme.colors.gray,
    },
    colorError: {
        color: theme.colors.error,
    },
    fontSizeSubheading: {
        fontSize: theme.fontSizes.subheading,
    },
    fontSizeHeading: {
        fontSize: theme.fontSizes.heading,
    },
    fontWeightBold: {
        fontWeight: theme.fontWeights.bold,
    },
    fontWeightBlack: {
        fontWeight: theme.fontWeights.black,
    },
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
    const textStyle = [
        styles.text,
        color === "secondary" && styles.colorSecondary,
        color === "accent" && styles.colorAccent,
        color === "contrast" && styles.colorContrast,
        color === "gray" && styles.colorGray,
        color === "error" && styles.colorError,
        fontSize === "subheading" && styles.fontSizeSubheading,
        fontSize === "heading" && styles.fontSizeHeading,
        fontWeight === "bold" && styles.fontWeightBold,
        fontWeight === "black" && styles.fontWeightBlack,
        style,
    ];

    return <NativeText style={textStyle} {...props} />;
};

export default Text;