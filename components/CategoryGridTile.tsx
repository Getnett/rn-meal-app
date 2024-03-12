import { FC } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

// eslint-disable-next-line import/no-named-default
import { default as Category } from "../models/category";

const styles = StyleSheet.create({
    gridItemContainer: {
        flex: 1,
        height: 150,
        margin: 16,
        borderRadius: 8,
        elevation: 4, // android
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        // ios
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.16,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 9,
    },
    btnPressable: {
        flex: 1,
    },
    cardTile: {
        flex: 1,
        padding: 16,
        alignItems: "center",
        justifyContent: "center",
        // ios
        borderRadius: 8,
    },

    displayName: {
        fontSize: 18,
        fontWeight: "700",
    },
    cardpressed: {
        opacity: 0.6,
    },
});

type CategoryGridTileProps = Omit<Category, "id"> & {
    onPress: VoidFunction;
};

const CategoryGridTile: FC<CategoryGridTileProps> = ({ title, color, onPress }) => (
    <View style={styles.gridItemContainer}>
        <Pressable android_ripple={{ color: "#ccc" }} style={({ pressed }) => [styles.btnPressable, pressed ? styles.cardpressed : null]} onPress={onPress}>
            <View style={[styles.cardTile, { backgroundColor: color }]}>
                <Text style={styles.displayName}>{title}</Text>
            </View>
        </Pressable>
    </View>
);
export default CategoryGridTile;
