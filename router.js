import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, Image } from "react-native";
import {
  CreatePostsScreen,
  PostsScreen,
  ProfileScreen,
  RegistrationScreen,
  LoginScreen,
} from "./Screens";

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <MainStack.Navigator>
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
      </MainStack.Navigator>
    );
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#0000ff",
          height: 83,
          //   paddingLeft: 90,
          //   paddingRight: 90,
          paddingTop: 9,
          paddingBottom: 34,
          justifyContent: "center",
          alignItems: "center",
          //flex: 1,
        },
        tabBarItemStyle: {
          backgroundColor: "#00ff00",
          marginRight: 25,
        },
      }}
    >
      <Tab.Screen
        options={({ navigation }) => ({
          tabBarButton: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("PostsScreen")}
              style={{ paddingTop: 13.5 }}
            >
              <Image
                style={{ width: 24, height: 24 }}
                source={require("./assets/images/grid.png")}
              />
            </TouchableOpacity>
          ),
        })}
        name="PostsScreen"
        component={PostsScreen}
      />
      <Tab.Screen
        options={({ navigation }) => ({
          tabBarButton: () => (
            <TouchableOpacity
              style={{ marginLeft: 31, paddingTop: 13.5 }}
              onPress={() => navigation.navigate("CreatePostsScreen")}
            >
              <Image source={require("./assets/images/Union.png")} />
            </TouchableOpacity>
          ),
        })}
        name="CreatePostsScreen"
        component={CreatePostsScreen}
      />
      <Tab.Screen
        options={({ navigation }) => ({
          tabBarButton: () => (
            <TouchableOpacity
              style={{ marginLeft: 31, paddingTop: 13.5 }}
              onPress={() => navigation.navigate("ProfileScreen")}
            >
              <Image source={require("./assets/images/user.png")} />
            </TouchableOpacity>
          ),
        })}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
