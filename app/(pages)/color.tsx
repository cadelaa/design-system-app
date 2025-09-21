import { StyleSheet } from 'react-native';

import Button from "@/components/Button";
import { globalStyles, SPACING, textStyles } from "@/constants/globalStyles";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Color() {
  const navigation = useNavigation();

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

          <View style={[styles.gridItem, styles.indigo, ]}>
            <Text style={[ textStyles.body, styles.whiteText, ]}>#5125F0</Text>
            <Text style={[ textStyles.subTitle, styles.whiteText, ]}>Indigo</Text>
          </View>

          <View style={[styles.gridItem, styles.candyRed, ]}>
            <Text style={[ textStyles.body, styles.whiteText, ]}>#C21D46</Text>
            <Text style={[ textStyles.subTitle, styles.whiteText, ]}>Candy Red</Text>
          </View>

          <View style={[styles.gridItem, styles.pink, ]}>
            <Text style={[ textStyles.body, styles.whiteText, ]}>#B42E87</Text>
            <Text style={[ textStyles.subTitle, styles.whiteText, ]}>Pink</Text>
          </View>

          <View style={[styles.gridItem, styles.purple, ]}>
            <Text style={[ textStyles.body, styles.whiteText, ]}>#8323D7</Text>
            <Text style={[ textStyles.subTitle, styles.whiteText, ]}>Purple</Text>
          </View>

          <View style={[styles.gridItem, styles.orange, ]}>
            <Text style={[ textStyles.body, ]}>#F07A25</Text>
            <Text style={[ textStyles.subTitle, ]}>Orange</Text>
          </View>

          <View style={[styles.gridItem, styles.mint, ]}>
            <Text style={[ textStyles.body, ]}>#17BF71</Text>
            <Text style={[ textStyles.subTitle, ]}>Mint</Text>
          </View>

          <View style={[styles.gridItem, styles.red, ]}>
            <Text style={[ textStyles.body, styles.whiteText, ]}>#DB3B3E</Text>
            <Text style={[ textStyles.subTitle, styles.whiteText, ]}>Red</Text>
          </View>

          <View style={[styles.gridItem, styles.green, ]}>
            <Text style={[ textStyles.body, styles.whiteText, ]}>#1B9F1B</Text>
            <Text style={[ textStyles.subTitle, styles.whiteText, ]}>Green</Text>
          </View>

        </View>

        <View style={[styles.extraArea, ]}></View>

      </ScrollView>


      {/* Floating Back Button */}

      <View style={[styles.floatingActionButtonContainer, ]}>
        <Button label="Back"/>
      </View>

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
        height: 150,
        width: "48.94%",          // 2 per row (100 / 2 = 50, minus gap)
        justifyContent: "space-between",
        borderRadius: 8,         // vertical spacing
        backgroundColor: "lightgrey",
        padding: SPACING.M,
    },

    disabled: {
        opacity: 0.5,
    },

    Button: {
      backgroundColor: 'red',
    },

    floatingActionButtonContainer: {
      padding: 16,
      paddingBottom: 32,
      backgroundColor: 'white',
    },

    extraArea: {
      padding: 16,
    },

    whiteText: {
        color: 'white',
    },

    neutral: {
        backgroundColor: '#CCC',
    },

    blue: {
        backgroundColor: '#256CF0',
    },
    indigo: {
        backgroundColor: '#5125F0',
    },
    candyRed: {
        backgroundColor: '#C21D46',
    },
    pink: {
        backgroundColor: '#B42E87',
    },
    purple: {
        backgroundColor: '#8323D7',
    },
    orange: {
        backgroundColor: '#F07A25',
    },
    mint: {
        backgroundColor: '#17BF71',
    },
    red: {
        backgroundColor: '#DB3B3E',
    },
    green: {
        backgroundColor: '#1B9F1B',
    },
});
