// app/(pages)/_layout.tsx
import { Stack } from "expo-router";

export default function PagesLayout() {
  return (
    <Stack>
      <Stack.Screen name="color" options={{ headerShown: false }} />
      <Stack.Screen name="typography" options={{ headerShown: false }} />
      <Stack.Screen name="iconography" options={{ headerShown: false }} />
    </Stack>
  );
}
