import { FC } from "react";
import { StyleSheet, View, Text, Pressable, Image, Platform } from "react-native";

import MealDetails from "./MealDetails";

interface MealProps {
    mealId: string;
    title: string;
    imageUrl: string;
    complexity: string;
    affordability: string;
    duration: number;
    onPress: (mealId: string) => void;
}

const styles = StyleSheet.create({
    mealCard: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: "#fff",
        // overflow: "hidden",
        elevation: 4, // android
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        // ios
        // backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.16,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 9,
    },
    cardpressed: {
        opacity: 0.6,
    },
    mealItemWrapper: {
        borderRadius: 8,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        fontSize: 18,
        fontWeight: "700",
        textAlign: "center",
        marginVertical: 12,
        marginHorizontal: 20,
    },
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
});
const Meal: FC<MealProps> = ({ mealId, title, imageUrl, complexity, affordability, duration, onPress }) => (
    <View style={styles.mealCard}>
        <Pressable android_ripple={{ color: "#ccc" }} style={({ pressed }) => (pressed ? styles.cardpressed : null)} onPress={() => onPress(mealId)}>
            <View style={styles.mealItemWrapper}>
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
            </View>
        </Pressable>
    </View>
);

export default Meal;
