// styles.ts
import { StyleSheet, TextStyle } from "react-native";



// For ensuring screens meet safe area requirements

export const globalStyles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        // backgroundColor: "#fff",
        padding: 16,
        gap: 32,
    },
});


// Colors (Introducing light/dark theme later)

// work in progress / refining definitions, naming, etc in figma




// Spacing

export const SPACING = {
    XXL: 64,
    XL: 32,
    L: 24,
    M: 16,
    S: 8,
    XS: 4,
};



// NEW Text Styles

// Typography
export const textStyles = {
    title: {
        fontFamily: "Inter_700Bold",
        fontSize: 32,
        fontWeight: 700,
        lineHeight: 32,
        letterSpacing: 0,
    } as TextStyle,
    subTitle: {
        fontSize: 22,
        fontWeight: 600,
        lineHeight: 22,
        letterSpacing: 0,
    } as TextStyle,
    body: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 20,
        letterSpacing: 0,
    } as TextStyle,
    small: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 16,
        letterSpacing: 0,
    } as TextStyle,
    caption: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 16,
        letterSpacing: 0,
    },
};