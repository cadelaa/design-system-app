// components/AppButton.tsx
import { SPACING, textStyles } from "@/constants/globalStyles";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { GestureResponderEvent, Pressable, StyleSheet, Text } from "react-native";

type AppButtonProps = {
  label?: string; // default text
  onPress?: (event: GestureResponderEvent) => void; // custom action
  style?: object; // allow style overrides if needed
  textStyle?: object;
};

export default function Button({
  label = "← Back",
  onPress,
  style,
  textStyle,
}: AppButtonProps) {
  const navigation = useNavigation();

  const handlePress = (event: GestureResponderEvent) => {
    if (onPress) {
      onPress(event); // custom behavior
    } else {
      navigation.goBack(); // default back behavior
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed, // ✅ extra style when pressed
      ]}
    >
      {({ pressed }) => (
        <Text style={[styles.text, pressed && styles.textPressed]}>
          {label}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 44,
    backgroundColor: "black",
    padding: SPACING.S,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressed: {
    backgroundColor: "#333", // darker shade when pressed
  },
  text: {
    ...textStyles.body,
    color: "white",
  },
  textPressed: {
    color: "#ddd", // lighter text when pressed
  },
});