import { globalStyles, SPACING, textStyles } from "@/constants/globalStyles";
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Core() {
  return (
    <SafeAreaView style={globalStyles.screenContainer}>

      <ScrollView>

        {/* Title */}
        <View style={{ gap: SPACING.S }}>
          <Text style={ textStyles.title }>Core</Text>
          <Text style={ textStyles.body }>
            Inform the basis of any great user interface, from accessibility standards 
            to essential patterns for layout and interaction.
          </Text>
        </View>

        {/* Main Content */}
        <View style={styles.grid}>

          <View style={styles.gridItem}>
            <MaterialIcons name="home" size={40} color="black"/>
            <Text style={ textStyles.subTitle }>Color</Text>
          </View>

          <View style={styles.gridItem}>
            <MaterialIcons name="text-format" size={40} color="black"/>
            <Text style={ textStyles.subTitle }>Typefaces</Text>
          </View>

          <View style={styles.gridItem}>
            <MaterialIcons name="category" size={40} color="black"/>
            <Text style={ textStyles.subTitle }>Icons</Text>
          </View>

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
    gap: 8,
    marginTop: SPACING.M,
  },
  gridItem: {
    width: "48%",              // 2 per row (100 / 2 = 50, minus gap)
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,         // vertical spacing
    backgroundColor: "lightgrey",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 32,
    gap: 8,
  },
  disabled: {
    opacity: 0.5,
  }
});
