// components/AppButton.tsx
import { SPACING, textStyles } from "@/constants/globalStyles";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { GestureResponderEvent, Pressable, StyleSheet, Text } from "react-native";

type AppButtonProps = {
  label?: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: object;
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
      onPress(event);
    } else {
      navigation.goBack();
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
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
  text: {
    ...textStyles.body,
    color: "white",
  },
  buttonPressed: {
    backgroundColor: "#333",
  },
  textPressed: {
    color: "#ddd",
},
});