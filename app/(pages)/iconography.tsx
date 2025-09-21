import { StyleSheet } from 'react-native';

import Button from "@/components/Button";
import { globalStyles, SPACING, textStyles } from "@/constants/globalStyles";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Iconography() {
  const navigation = useNavigation();

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
    }
});
