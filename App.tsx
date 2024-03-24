/* eslint-disable react/style-prop-object */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unstable-nested-components */
import "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";

import Favorite from "./screens/Favorite";
import GameCategoryScreen from "./screens/GameCategoryScreen";
import MealDetail from "./screens/MealDetail";
import MealsListScreen from "./screens/MealsListScreen";
import store from "./store/redux/store";

const Drawer = createDrawerNavigator();

const DrawerScreen: FC = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerInactiveTintColor: "white",
                drawerActiveTintColor: "white",
                drawerStyle: {
                    backgroundColor: "#351401",
                },
                headerStyle: {
                    backgroundColor: "#351401",
                },
                headerTintColor: "#fff",
                sceneContainerStyle: {
                    backgroundColor: "#3f2f25",
                },
            }}
        >
            <Drawer.Screen
                name="MealsCategories"
                component={GameCategoryScreen}
                options={{
                    title: "All Categories",
                    drawerIcon: ({ color, size }) => <Ionicons name="list" size={size} color={color} />,
                }}
            />
            <Drawer.Screen
                name="Favoirte"
                component={Favorite}
                options={{
                    title: "My Favoirites",
                    drawerIcon: ({ color, size }) => <Ionicons name="star" size={size} color={color} />,
                }}
            />
        </Drawer.Navigator>
    );
};

const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        marginTop: Platform.select({ ios: 0, android: 24 }), // platform
    },
});
const App: FC = () => {
    return (
        <View style={styles.container}>
            {/* ios */}
            {/* <SafeAreaView style={styles.safeArea}> */}
            {/* <FavouriteContextProvider> */}
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerStyle: {
                                backgroundColor: "#351401",
                            },
                            headerTintColor: "#fff",
                            contentStyle: {
                                backgroundColor: "#3f2f25",
                            },
                        }}
                    >
                        <Stack.Screen
                            name="allCategories"
                            component={DrawerScreen}
                            options={{
                                title: "All Categories",
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen name="MealsList" component={MealsListScreen} />
                        <Stack.Screen name="mealDetail" component={MealDetail} />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
            {/* </FavouriteContextProvider> */}
            {/* </SafeAreaView> */}
            <StatusBar style="light" />
        </View>
    );
};

export default App;
