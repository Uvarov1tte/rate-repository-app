import { Text as NativeText, StyleSheet } from "react-native";

import theme from "../../theme";

const styles = StyleSheet.create({
    text: {
        color: theme.colors.primary,
        fontSize: theme.fontSizes.heading,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.black,
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
});

const TextHeading = ({ color, fontSize, fontWeight, style, ...props }) => {
    const textStyle = [
        styles.text,
        color === "secondary" && styles.colorSecondary,
        color === "accent" && styles.colorAccent,
        color === "contrast" && styles.colorContrast,
        color === "gray" && styles.colorGray,
        style,
    ];

    return <NativeText style={textStyle} {...props} />;
};

export default TextHeading;