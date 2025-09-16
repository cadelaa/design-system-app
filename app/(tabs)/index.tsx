import { globalStyles, SPACING, textStyles } from "@/constants/globalStyles";
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Core() {
  const router = useRouter();

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={{ flex: 1 }}>

      <ScrollView style={globalStyles.screenContainer}>

        {/* Title */}
        <View style={globalStyles.titleContainer}>
          <Text style={ textStyles.title }>Core</Text>
          <Text style={ textStyles.body }>
            Inform the basis of any great user interface, from accessibility standards 
            to essential patterns for layout and interaction.
          </Text>
        </View>

        {/* Main Content */} {/* Add GoTo page functionality for available screens*/}
        <View style={styles.grid}>

          <Pressable style={styles.gridItem} onPress={() => router.push("/(pages)/color")}>
            <MaterialIcons name="palette" size={40} color="black"/>
            <Text style={ textStyles.subTitle }>Color</Text>
          </Pressable>

          <Pressable style={styles.gridItem} onPress={() => router.push("/(pages)/typography")}>
            <MaterialIcons name="text-format" size={40} color="black"/>
            <Text style={ textStyles.subTitle }>Typography</Text>
          </Pressable>

          <Pressable style={styles.gridItem} onPress={() => router.push("/(pages)/iconography")}>
            <MaterialIcons name="category" size={40} color="black"/>
            <Text style={ textStyles.subTitle }>Iconography</Text>
          </Pressable>

          <View style={[styles.gridItem, styles.disabled]}>
            <MaterialIcons name="dashboard" size={40} color="black"/>
            <Text style={ textStyles.subTitle }>Layout</Text>
          </View>

          <View style={[styles.gridItem, styles.disabled]}>
            <MaterialIcons name="accessibility-new" size={40} color="black"/>
            <Text style={ textStyles.subTitle }>Accessibility</Text>
          </View>

          <View style={[styles.gridItem, styles.disabled]}>
            <MaterialIcons name="list-alt" size={40} color="black"/>
            <Text style={ textStyles.subTitle }>Tokens</Text>
          </View>

          <View style={[styles.gridItem, styles.disabled]}>
            <MaterialIcons name="animation" size={40} color="black"/>
            <Text style={ textStyles.subTitle }>Interaction</Text>
          </View>

          <View style={[styles.gridItem, styles.disabled]}>
            <MaterialIcons name="chat" size={40} color="black"/>
            <Text style={ textStyles.subTitle }>Content</Text>
          </View>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: SPACING.S,
    marginTop: SPACING.M,
  },
  gridItem: {
    width: "48.94%",          // 2 per row (100 / 2 = 50, minus gap)
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,         // vertical spacing
    backgroundColor: "lightgrey",
    paddingLeft: SPACING.M,
    paddingRight: SPACING.M,
    paddingTop: SPACING.XL,
    paddingBottom: SPACING.XL,
    gap: SPACING.S,
  },
  disabled: {
    opacity: 0.5,
  }
});
