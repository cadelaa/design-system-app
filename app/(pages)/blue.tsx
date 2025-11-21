import { StyleSheet } from 'react-native';

import Button from "@/components/Button";
import { SPACING, textStyles } from "@/constants/globalStyles";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Blue() {
  const navigation = useNavigation();

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={{ flex: 1 }}>

      <ScrollView>

        {/* Main Content */}

        <View style={styles.grid}>

          <View style={[styles.gridItem, styles.blue5, ]}>
            <Text style={[ textStyles.body, ]}>#256CF0</Text>
            <Text style={[ textStyles.body, ]}>blue/5</Text>
          </View>

          <View style={[styles.gridItem, styles.blue10, ]}>
            <Text style={[ textStyles.body, ]}>#256CF0</Text>
            <Text style={[ textStyles.body, ]}>blue/10</Text>
          </View>

          <View style={[styles.gridItem, styles.blue20, ]}>
            <Text style={[ textStyles.body, ]}>#256CF0</Text>
            <Text style={[ textStyles.body, ]}>blue/20</Text>
          </View>

          <View style={[styles.gridItem, styles.blue30, ]}>
            <Text style={[ textStyles.body, ]}>#256CF0</Text>
            <Text style={[ textStyles.body, ]}>blue/25</Text>
          </View>

          <View style={[styles.gridItem, styles.blue40, ]}>
            <Text style={[ textStyles.body, ]}>#256CF0</Text>
            <Text style={[ textStyles.body, ]}>blue/30</Text>
          </View>

          <View style={[styles.gridItem, styles.blue50, ]}>
            <Text style={[ textStyles.body, ]}>#256CF0</Text>
            <Text style={[ textStyles.body, ]}>blue/35</Text>
          </View>

          <View style={[styles.gridItem, styles.blue60, ]}>
            <Text style={[ textStyles.body, styles.whiteText, ]}>#256CF0</Text>
            <Text style={[ textStyles.body, styles.whiteText, ]}>blue/40</Text>
          </View>

          <View style={[styles.gridItem, styles.blue70, ]}>
            <Text style={[ textStyles.body, styles.whiteText, ]}>#256CF0</Text>
            <Text style={[ textStyles.body, styles.whiteText, ]}>blue/45</Text>
          </View>

          <View style={[styles.gridItem, styles.blue80, ]}>
            <Text style={[ textStyles.body, styles.whiteText, ]}>#256CF0</Text>
            <Text style={[ textStyles.body, styles.whiteText, ]}>blue/50</Text>
          </View>

          <View style={[styles.gridItem, styles.blue90, ]}>
            <Text style={[ textStyles.body, styles.whiteText, ]}>#256CF0</Text>
            <Text style={[ textStyles.body, styles.whiteText, ]}>blue/50</Text>
          </View>

          <View style={[styles.gridItem, styles.blue100, ]}>
            <Text style={[ textStyles.body, styles.whiteText, ]}>#256CF0</Text>
            <Text style={[ textStyles.body, styles.whiteText, ]}>blue/50</Text>
          </View>

          <View style={[styles.gridItem, styles.blue110, ]}>
            <Text style={[ textStyles.body, styles.whiteText, ]}>#256CF0</Text>
            <Text style={[ textStyles.body, styles.whiteText, ]}>blue/50</Text>
          </View>

          <View style={[styles.gridItem, styles.blue115, ]}>
            <Text style={[ textStyles.body, styles.whiteText, ]}>#256CF0</Text>
            <Text style={[ textStyles.body, styles.whiteText, ]}>blue/50</Text>
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
        flexDirection: "column",
    },

    gridItem: {
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: "lightgrey",
        padding: SPACING.XL,
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



    blue5: {
        backgroundColor: '#DFE9FD',
    },
    blue10: {
        backgroundColor: '#BDD3FA',
    },
    blue20: {
        backgroundColor: '#9DBDF8',
    },
    blue30: {
        backgroundColor: '#7CA7F6',
    },
    blue40: {
        backgroundColor: '#5C91F4',
    },
    blue50: {
        backgroundColor: '#3D7CF2',
    },
    blue60: {
        backgroundColor: '#256CF0',
    },
    blue70: {
        backgroundColor: '#2160D6',
    },
    blue80: {
        backgroundColor: '#1C51B4',
    },
    blue90: {
        backgroundColor: '#164190',
    },
    blue100: {
        backgroundColor: '#11316C',
    },
    blue110: {
        backgroundColor: '#0B2148',
    },
    blue115: {
        backgroundColor: '#081835',
    },
});