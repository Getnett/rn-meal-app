import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Meal from "./Meal";
import { MEALS } from "../data/dummy-data";
// eslint-disable-next-line import/no-named-default
import { default as MealType } from "../models/meal";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

interface MealListProps {
    data: MealType[];
}
const MealList: FC<MealListProps> = ({ data }) => {
    const navigation = useNavigation();

    const handleOnPress = (mealId: string) => {
        const mealData = MEALS.find((meal) => meal.id === mealId);
        // @ts-expect-error I have the navigate prop its complaning for no-reason
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
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <Meal {...mealProps} />;
    };
    return (
        <View style={styles.container}>
            <FlatList data={data} renderItem={({ item }) => renderMeal(item)} keyExtractor={(item) => item.id} />
        </View>
    );
};

export default MealList;
