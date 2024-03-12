import { NavigationProp } from "@react-navigation/native"
import { NativeStackNavigationHelpers } from "@react-navigation/native-stack/src/types";
import { FC } from "react";
import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data"
import { default as Category } from "../models/category"
import CategoryGridTile from "../components/CategoryGridTile"

interface GameCategoryScreenProps {
    navigation: NativeStackNavigationHelpers;
}

const GameCategoryScreen: FC<GameCategoryScreenProps> = ({ navigation }) => {
    const onPressNavigationHandler = (item: Category) => {
		navigation.navigate("MealsList", {
            categoryId: item.id,
		});
    }

    const renderItem = (item: Category) => <CategoryGridTile title={item.title} color={item.color} onPress={() => onPressNavigationHandler(item)} />;

	);

	return (
		<FlatList
			data={CATEGORIES}
			renderItem={({ item }) => renderItem(item)}
			keyExtractor={(item) => item.id}
			numColumns={2}
		/>
	)
}

export default GameCategoryScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
	},
});
