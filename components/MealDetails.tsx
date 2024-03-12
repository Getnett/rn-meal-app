import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

interface MealDetailsProps {
    duration: number;
    complexity: string;
    affordability: string;
    containerStyle?: object;
    textStyle?: object;
}

const MealDetails: FC<MealDetailsProps> = ({ duration, complexity, affordability, containerStyle = {}, textStyle = {} }) => (
    <View style={[styles.details, containerStyle]}>
        <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
        <Text style={[styles.detailItem, textStyle]}>{complexity}</Text>
        <Text style={[styles.detailItem, textStyle]}>{affordability}</Text>
    </View>
);

export default MealDetails;

const styles = StyleSheet.create({
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
