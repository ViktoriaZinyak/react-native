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
          height: 83,
          //   paddingLeft: 90,
          //   paddingRight: 90,
          paddingTop: 9,
          paddingBottom: 34,
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0px -0.5px 0px rgba(0, 0, 0, 0.3)",
          //flex: 1,
        },
      }}
    >
      <Tab.Screen
        options={({ navigation }) => ({
          tabBarButton: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("PostsScreen")}
              //style={{ paddingTop: 13.5 }}
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Image
                style={{ width: 24, height: 24 }}
                source={require("./assets/images/grid.png")}
              />
            </TouchableOpacity>
          ),
          headerRight: (props) => (
            <TouchableOpacity
              style={{
                marginLeft: 43,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                backgroundColor: "#FF6C00",
                height: 40,
                width: 70,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => navigation.navigate("CreatePostsScreen")}
            >
              <Image
                style={{ width: 13, height: 13 }}
                source={require("./assets/images/Union.png")}
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
              style={{
                marginLeft: 43,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                backgroundColor: "#FF6C00",
                height: 40,
                width: 70,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => navigation.navigate("CreatePostsScreen")}
            >
              <Image
                style={{ width: 13, height: 13 }}
                source={require("./assets/images/Union.png")}
              />
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
              style={{
                marginLeft: 43,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => navigation.navigate("ProfileScreen")}
            >
              <Image
                style={{ width: 20, height: 24 }}
                source={require("./assets/images/user.png")}
              />
            </TouchableOpacity>
          ),
        })}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
