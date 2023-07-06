import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function App() {
	const [num, setNum] = useState(0);

	const handlePress = () => {
		setNum(prev => prev + 1);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.text.h1}>Hello World test</Text>
			<Text style={styles.text.p}>{num}</Text>
			<TextInput style={styles.input} />
			<View style={styles.buttonView}>
				<Button title="Count" onPress={handlePress} />
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	text: {
		h1: {
			fontSize: 30
		},
		p: {
			fontSize: 15
		}
	},
	buttonView: {
		alignSelf: "center",
		justifyContent: "center",
		backgroundColor: "white",
		borderRadius: 4,
		height: 50,
		shadowColor: "black",
		width: 150,
		shadowOffset: {
			width: 10,
			height: -10
		},
		shadowOpacity: 0.5,
		shadowRadius: 10
	},
	button: {
		height: "100%",
		width: "100%"
	},
	input: {
		height: 40,
		width: "100%"
	}
});
