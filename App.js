import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.openDrawer()}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.openDrawer()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      initialRouteName="Home" 
      hideStatusBar 
      drawerStyle={{
        backgroundColor: 'pink',
      }}
      drawerContentOptions={{
        activeBackgroundColor: '#fff',
        activeTintColor: 'pink',
        inactiveTintColor: '#fff',
        itemStyle: {
          marginHorizontal: 20,
          paddingLeft: 50,
          height: 50,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          justifyContent: "center",
        },
        labelStyle: {
          fontSize: 20,
          fontWeight: "bold",
        }
      }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} options={{
          drawerIcon: ({ color, focused, size }) => {} 
        }}/>
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}