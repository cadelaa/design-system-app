import { StyleSheet } from 'react-native';

import { globalStyles, SPACING, textStyles, } from "@/constants/globalStyles";
import { MaterialIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Core() {
  return (
    <SafeAreaView style={ globalStyles.screenContainer }>

      {/* Title */}

      <View style={{ gap: SPACING.S }}>
        <Text style={ textStyles.title }>Core</Text>
        <Text style={ textStyles.body }>Inform the basis of any great user interface, from accessibility standards to essential patterns for layout and interaction.</Text>
      </View>


      {/* Main Content */}

      <View style={ styles.grid }>

        <View style={ styles.gridItem }>
          <MaterialIcons name="home" size={40} color="black"/>
          <Text style={ textStyles.subTitle }> Color </Text>
        </View>

        <View style={ styles.gridItem }>
          <MaterialIcons name="text-format" size={40} color="black"/>
          <Text style={ textStyles.subTitle }> Typography </Text>
        </View>

        <View style={ styles.gridItem }>
          <MaterialIcons name="category" size={40} color="black"/>
          <Text style={ textStyles.subTitle }> Icons </Text>
        </View>


        {/* Disabled cards below / work in progress pages */}

        <View style={[styles.gridItem, styles.disabled]}>
          <MaterialIcons name="dashboard" size={40} color="black"/>
          <Text style={ textStyles.subTitle }> Layout </Text>
        </View>

        <View style={[styles.gridItem, styles.disabled]}>
          <MaterialIcons name="accessibility-new" size={40} color="black"/>
          <Text style={ textStyles.subTitle }> Accessibility </Text>
        </View>

        <View style={[styles.gridItem, styles.disabled]}>
          <MaterialIcons name="list-alt" size={40} color="black"/>
          <Text style={ textStyles.subTitle }> Tokens </Text>
        </View>

        <View style={[styles.gridItem, styles.disabled]}>
          <MaterialIcons name="animation" size={40} color="black"/>
          <Text style={ textStyles.subTitle }> Interaction </Text>
        </View>

        <View style={[styles.gridItem, styles.disabled]}>
          <MaterialIcons name="chat" size={40} color="black"/>
          <Text style={ textStyles.subTitle }> Content </Text>
        </View>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  grid: {
    backgroundColor: 'aliceblue',
    gap: 8,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridItem: {
    width: 176.5,
    height: 150,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  disabled: {
    opacity: .5,
  }
});
