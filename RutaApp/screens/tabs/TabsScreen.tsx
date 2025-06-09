import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import Settings from './Settings';

const Tab = createBottomTabNavigator();

export default function TabsScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Rutas" component={Profile} />
      <Tab.Screen name="Ajustes" component={Settings} />
    </Tab.Navigator>
  );
}