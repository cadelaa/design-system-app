// app/(pages)/_layout.tsx
import { Stack } from "expo-router";

export default function PagesLayout() {
  return (
    <Stack>
      <Stack.Screen name="color" options={{ title: "Color" }} />
      <Stack.Screen name="typography" options={{ title: "Typefaces" }} />
      <Stack.Screen name="iconography" options={{ title: "Icons" }} />
    </Stack>
  );
}
