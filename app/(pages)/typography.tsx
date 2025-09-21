import { StyleSheet } from 'react-native';

import Button from "@/components/Button";
import { globalStyles, SPACING, textStyles } from "@/constants/globalStyles";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Typography() {
  const navigation = useNavigation();

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={{ flex: 1 }}>

      <ScrollView style={globalStyles.screenContainer}>

        {/* Title */}
        <View style={globalStyles.titleContainer}>
          <Text style={ textStyles.title }>Typefaces</Text>
          <Text style={ textStyles.body }>
            Use typography to make content readable and beautiful.
          </Text>
        </View>

        {/* Main Content */}
        
        <View style={styles.grid}>

          <View style={[styles.gridItem, styles.neutral, ]}>
            <View style={[{ gap: SPACING.XS, }]}>
              <Text style={ textStyles.body }>Inter</Text>
              <Text style={ textStyles.caption }>18 styles + variable</Text>
            </View>
            <Text style={ styles.exampleText }>Aa</Text>
          </View>

          <View style={[styles.gridItem, styles.neutral, ]}>
            <View style={[{ gap: SPACING.XS, }]}>
              <Text style={ textStyles.body }>Space Grotesk</Text>
              <Text style={ textStyles.caption }>5 styles + variable</Text>
            </View>
            <Text style={ styles.exampleText }>Aa</Text>
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
        height: 190,
        width: "48.94%",  // 2 per row (100 / 2 = 50, minus gap)
        justifyContent: "space-between",
        borderRadius: 8,  // vertical spacing
        backgroundColor: "lightgrey",
        padding: SPACING.M,
        gap: SPACING.XXL,
    },

    disabled: {
        opacity: 0.5,
    },

    floatingActionButtonContainer: {
      padding: 16,
      paddingBottom: 32,
      backgroundColor: 'white',
    },

    exampleText: {
      fontFamily: "Inter_700Bold",
      fontSize: 64,
      fontWeight: 700,
      lineHeight: 64,
      letterSpacing: 0,
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
    }
});
