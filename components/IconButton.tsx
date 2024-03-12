import { Ionicons } from "@expo/vector-icons"
import { FC } from "react"
import { Pressable, StyleSheet } from "react-native"

interface IconButtonProps<T extends string> {
    icon: T;
    size: number;
    color: string;
    onPress: VoidFunction;
}

const IconButton: FC<IconButtonProps<any>> = ({ icon, size, color, onPress }) => (
	<Pressable onPress={onPress} style={({ pressed }) => (pressed ? styles.iconPressed : null)}>
	>
		<Ionicons name={icon} size={size} color={color} />
	</Pressable>
);

export default IconButton;

const styles = StyleSheet.create({
    iconPressed: {
		opacity: 0.6,
	},
});
