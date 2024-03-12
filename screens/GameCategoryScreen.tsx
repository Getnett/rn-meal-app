import { NativeStackNavigationHelpers } from "@react-navigation/native-stack/src/types";
import { FC } from "react";
import { FlatList, StyleSheet } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
// eslint-disable-next-line import/no-named-default
import { default as Category } from "../models/category";

interface GameCategoryScreenProps {
    navigation: NativeStackNavigationHelpers;
}

const GameCategoryScreen: FC<GameCategoryScreenProps> = ({ navigation }) => {
    const onPressNavigationHandler = (item: Category) => {
        navigation.navigate("MealsList", {
            categoryId: item.id,
        });
    };

    const renderItem = (item: Category) => <CategoryGridTile title={item.title} color={item.color} onPress={() => onPressNavigationHandler(item)} />;

    return <FlatList data={CATEGORIES} renderItem={({ item }) => renderItem(item)} keyExtractor={(item) => item.id} numColumns={2} />;
};

export default GameCategoryScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
});
