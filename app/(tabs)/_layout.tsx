import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { MaterialIcons } from '@expo/vector-icons';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Core Styles',
          tabBarIcon: ({ color }) => <MaterialIcons name="style" size={28} color={color}/>,
        }} 
      />
      <Tabs.Screen
        name="components"
        options={{
          title: 'Components',
          tabBarIcon: ({ color }) => <MaterialIcons name="widgets" size={28} color={color}/>,
        }}
      />
      <Tabs.Screen
        name="other1"
        options={{
          title: 'Other1',
          tabBarIcon: ({ color }) => <MaterialIcons name="help" size={28} color={color}/>,
        }}
      />
      <Tabs.Screen
        name="other2"
        options={{
          title: 'Other2',
          tabBarIcon: ({ color }) => <MaterialIcons name="help" size={28} color={color}/>,
        }}
      />
    </Tabs>
  );
}
