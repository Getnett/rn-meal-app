import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import { RootState } from "../store/redux/store";

// import { FavouriteContext } from "../store/favaorite-context/FavouriteContext";

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        fontWeight: "600",
        color: "white",
    },
});

const Favorite: FC = () => {
    // const { ids } = useContext(FavouriteContext);
    const ids = useSelector((state: RootState) => state.faviouriteMeal.ids);
    const favouriteMeals = MEALS.filter((meal) => ids.includes(meal.id));

    if (!favouriteMeals.length) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>
        );
    }

    return <MealList data={favouriteMeals} />;
};

export default Favorite;
