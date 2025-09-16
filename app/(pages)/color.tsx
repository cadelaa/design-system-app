import { StyleSheet } from 'react-native';

import { globalStyles, SPACING, textStyles } from "@/constants/globalStyles";
import { Button, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Color() {
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={{ flex: 1 }}>

      <ScrollView style={globalStyles.screenContainer}>

        {/* Title */}
        <View style={globalStyles.titleContainer}>
          <Text style={ textStyles.title }>Color</Text>
          <Text style={ textStyles.body }>
            Create accessible, personal color schemes communicating your product's hierarchy, state, and brand.
          </Text>
        </View>

        {/* Main Content */}

        <View style={styles.grid}>

          <View style={[styles.gridItem, styles.neutral, ]}>
            <Text style={ textStyles.body }>#CCCCCC</Text>
            <Text style={ textStyles.subTitle }>Neutrals</Text>
          </View>

          <View style={[styles.gridItem, styles.blue, ]}>
            <Text style={[ textStyles.body, styles.whiteText, ]}>#256CF0</Text>
            <Text style={[ textStyles.subTitle, styles.whiteText, ]}>Blue</Text>
          </View>

        </View>



        {/* Floating Back Button */}

        <Button
            title="Back"
            color="black"
            accessibilityLabel="Learn more about this purple button"
        />

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
        justifyContent: "space-between",
        borderRadius: 8,         // vertical spacing
        backgroundColor: "lightgrey",
        padding: SPACING.M,
        gap: SPACING.XXL,
    },

    disabled: {
        opacity: 0.5,
    },

    whiteText: {
        color: 'white',
    },

    neutral: {
        backgroundColor: '#CCC',
    },

    blue: {
        backgroundColor: '#256CF0',
    }
});
