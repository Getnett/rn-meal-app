import { useNavigation, useRoute } from "@react-navigation/native";
import { FC, useLayoutEffect } from "react";

import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

interface MealsListScreenProps {}

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

    return <MealList data={mealsToDisplay} />;
};

export default MealsListScreen;
