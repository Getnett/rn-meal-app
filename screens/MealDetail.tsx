/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import IconButton from "../components/IconButton";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
// import { FavouriteContext } from "../store/favaorite-context/FavouriteContext";
// eslint-disable-next-line import/no-named-default
import { default as Meal } from "../models/meal";
import { addToFav, removeMealFromFav } from "../store/redux/faviourteMealReducer";
import { RootState } from "../store/redux/store";

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
        paddingBottom: 50,
    },
    img: {
        width: "100%",
        height: 300,
    },
    title: {
        fontWeight: "700",
        textAlign: "center",
        fontSize: 24,
        margin: 8,
        color: "white",
    },
    subtitleContainer: {
        padding: 6,
        marginHorizontal: 24,
        marginVertical: 4,
        borderBottomColor: "#e2b497",
        borderBottomWidth: 2,
    },
    subtitle: {
        fontWeight: "500",
        fontSize: 18,
        color: "#e2b497",
        textAlign: "center",
    },
    listWrapper: {
        padding: 8,
        marginHorizontal: 24,
        marginVertical: 4,
    },
    textList: {
        lineHeight: 28,
        color: "white",
        textAlign: "left",
        fontWeight: "600",
        fontSize: 14,
    },
    stepsContainer: {
        flex: 1,
        minHeight: 300,
    },
});

function MealDetail() {
    const route = useRoute();
    const navigation = useNavigation();
    const ids = useSelector((state: RootState) => state.faviouriteMeal.ids);
    // const { ids, addToFav, removeFromFav } = useContext(FavouriteContext);
    const dispatch = useDispatch();

    const params = route.params as { mealId: string };
    const meal = MEALS.find((ml) => ml.id === params.mealId) as Meal;

    const isMealFav = ids.includes(meal.id);

    const handleAddFav = () => {
        if (!isMealFav) {
            dispatch(addToFav(meal.id));
        } else {
            dispatch(removeMealFromFav(meal.id));
        }
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            title: meal?.title,
            // defining component during render error below
            // eslint-disable-next-line react/no-unstable-nested-components
            headerRight: () => <IconButton icon={isMealFav ? "star" : "star-outline"} color="white" size={24} onPress={handleAddFav} />,
        });
    }, [isMealFav]);

    return (
        <ScrollView style={styles.rootScreen}>
            <View style={styles.rootScreen}>
                <Image style={styles.img} source={{ uri: meal?.imageUrl }} />
                <Text style={styles.title}>{meal?.title}</Text>
                <MealDetails duration={meal?.duration!} affordability={meal?.affordability!} complexity={meal?.complexity!} textStyle={{ color: "white" }} />
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>Ingridents</Text>
                </View>
                <View style={styles.listWrapper}>
                    {meal?.ingredients.map((indgrt) => (
                        <Text style={styles.textList} key={indgrt}>
                            {indgrt}
                        </Text>
                    ))}
                </View>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>steps</Text>
                </View>
                <View style={styles.listWrapper}>
                    {meal?.steps.map((step) => (
                        <Text style={styles.textList} key={step}>
                            {step}
                        </Text>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetail;
