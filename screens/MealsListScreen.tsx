import { useNavigation, useRoute } from "@react-navigation/native";
import { FC, useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Meal from "../components/Meal";
import { CATEGORIES, MEALS } from "../data/dummy-data";

// eslint-disable-next-line import/no-named-default
import { default as MealType } from "../models/meal";

interface MealsListScreenProps {}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
const MealsListScreen: FC<MealsListScreenProps> = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const params = route.params as { categoryId: string };

    const mealsToDisplay = MEALS.filter((meal) => meal.categoryIds.indexOf(params.categoryId) >= 0);

    const catgoryTitle = CATEGORIES.find((category) => category.id === params.categoryId);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: catgoryTitle?.title,
        });
    }, [navigation, catgoryTitle]);

    const handleOnPress = (mealId: string) => {
        const mealData = MEALS.find((meal) => meal.id === mealId);
        // @ts-expect-error
        navigation.navigate("mealDetail", {
            mealId: mealData?.id,
        });
    };

    const renderMeal = (meal: MealType) => {
        const mealProps = {
            mealId: meal.id,
            title: meal.title,
            imageUrl: meal.imageUrl,
            complexity: meal.complexity,
            affordability: meal.affordability,
            duration: meal.duration,
            onPress: handleOnPress,
        };
        return <Meal {...mealProps} />;
    };
    return (
        <View style={styles.container}>
            <FlatList data={mealsToDisplay} renderItem={({ item }) => renderMeal(item)} keyExtractor={(item) => item.id} />
        </View>
    );
};

export default MealsListScreen;
