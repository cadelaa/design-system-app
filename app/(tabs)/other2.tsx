import { StyleSheet } from 'react-native';

import { globalStyles } from "@/constants/globalStyles";
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Other2() {
  return (
    <SafeAreaView style={ globalStyles.screenContainer }>
      <Text>Hello with safe area!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});
