// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { TouchableOpacity, Image } from "react-native";
// import {
//   CreatePostsScreen,
//   PostsScreen,
//   ProfileScreen,
//   RegistrationScreen,
//   LoginScreen,
// } from "./Screens";
// import { getHeaderTitle } from "./helpers/getHeaderTitle";

// const MainStack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// export const useRoute = (isAuth) => {
//   if (!isAuth) {
//     return (
//       <MainStack.Navigator>
//         <MainStack.Screen
//           options={{ headerShown: false }}
//           name="Registration"
//           component={RegistrationScreen}
//         />
//         <MainStack.Screen
//           options={{ headerShown: false }}
//           name="Login"
//           component={LoginScreen}
//         />
//       </MainStack.Navigator>
//     );
//   }

//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarShowLabel: false,
//         tabBarStyle: {
//           height: 83,
//           paddingTop: 9,
//           paddingBottom: 34,
//           justifyContent: "center",
//           alignItems: "center",
//           boxShadow: "0px -0.5px 0px rgba(0, 0, 0, 0.3)",
//         },
//         // headerStyle: {
//         //   height: 120,
//         //   boxShadow: "0px -0.5px 0px rgba(0, 0, 0, 0.3)",
//         // },
//         headerTitle: `${getHeaderTitle(route.name)}`,
//         headerTitleAlign: "center",
//       })}
//     >
//       <Tab.Screen
//         options={({ navigation, route }) => ({
//           tabBarButton: () => (
//             <TouchableOpacity
//               onPress={() => navigation.navigate("PostsScreen")}
//               style={{ alignItems: "center", justifyContent: "center" }}
//             >
//               <Image
//                 style={{ width: 24, height: 24 }}
//                 source={require("./assets/images/grid.png")}
//               />
//             </TouchableOpacity>
//           ),
//           // headerTitleAlign: "center",
//           headerRight: () => (
//             <TouchableOpacity
//               onPress={() => navigation.navigate("CreatePostsScreen")}
//             >
//               <Image
//                 style={{ width: 24, height: 24 }}
//                 source={require("./assets/images/log-out.png")}
//               />
//             </TouchableOpacity>
//           ),
//           headerRightContainerStyle: { paddingRight: 16 },
//         })}
//         name="PostsScreen"
//         component={PostsScreen}
//       />
//       <Tab.Screen
//         options={({ navigation }) => ({
//           tabBarButton: () => (
//             <TouchableOpacity
//               style={{
//                 marginLeft: 43,
//                 borderRadius: 20,
//                 backgroundColor: "#FF6C00",
//                 height: 40,
//                 width: 70,
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//               onPress={() => navigation.navigate("CreatePostsScreen")}
//             >
//               <Image
//                 style={{ width: 13, height: 13 }}
//                 source={require("./assets/images/Union.png")}
//               />
//             </TouchableOpacity>
//           ),
//           // headerTitleAlign: "center",
//           headerLeft: () => (
//             <TouchableOpacity
//               onPress={() => navigation.navigate("PostsScreen")}
//             >
//               <Image
//                 style={{ width: 24, height: 24 }}
//                 source={require("./assets/images/arrow-left.png")}
//               />
//             </TouchableOpacity>
//           ),
//           headerLeftContainerStyle: { paddingLeft: 20 },
//           tabBarStyle: { display: "none" },
//         })}
//         name="CreatePostsScreen"
//         component={CreatePostsScreen}
//       />
//       <Tab.Screen
//         options={({ navigation }) => ({
//           tabBarButton: () => (
//             <TouchableOpacity
//               style={{
//                 marginLeft: 43,
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//               onPress={() => navigation.navigate("ProfileScreen")}
//             >
//               <Image
//                 style={{ width: 20, height: 24 }}
//                 source={require("./assets/images/user.png")}
//               />
//             </TouchableOpacity>
//           ),
//           headerShown: false,
//         })}
//         name="ProfileScreen"
//         component={ProfileScreen}
//       />
//     </Tab.Navigator>
//   );
// };

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, Image, Text } from "react-native";
import {
  CreatePostsScreen,
  PostsScreen,
  ProfileScreen,
  RegistrationScreen,
  LoginScreen,
} from "./Screens";
import { getHeaderTitle } from "./helpers/getHeaderTitle";
import TabBar from "./Components/TabBar/TabBar";

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
      screenOptions={({ route }) => ({
        headerTitle: `${getHeaderTitle(route.name)}`,
        headerTitleAlign: "center",
      })}
      tabBar={({ state }) => {
        if (state.index === 1) {
          return null;
        }
        return <TabBar />;
      }}
    >
      <Tab.Screen
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("CreatePostsScreen")}
            >
              <Image
                style={{ width: 24, height: 24 }}
                source={require("./assets/images/log-out.png")}
              />
            </TouchableOpacity>
          ),
          headerRightContainerStyle: { paddingRight: 16 },
        })}
        name="PostsScreen"
        component={PostsScreen}
      />
      <Tab.Screen
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={{ width: 24, height: 24 }}
                source={require("./assets/images/arrow-left.png")}
              />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: { paddingLeft: 20 },
        })}
        name="CreatePostsScreen"
        component={CreatePostsScreen}
      />
      <Tab.Screen
        options={() => ({
          headerShown: false,
        })}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
