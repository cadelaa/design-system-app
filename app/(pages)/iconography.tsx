import { StyleSheet } from 'react-native';

import { globalStyles, SPACING, textStyles } from "@/constants/globalStyles";
import { Button, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Iconography() {
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={{ flex: 1 }}>

      <ScrollView style={globalStyles.screenContainer}>

        {/* Title */}
        <View style={globalStyles.titleContainer}>
          <Text style={ textStyles.title }>Icons</Text>
          <Text style={ textStyles.body }>
            Icons are small symbols used to easily identify actions and categories.
          </Text>
        </View>

        {/* Main Content */}

        



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
