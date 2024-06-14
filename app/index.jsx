import {SafeAreaView, Text} from "react-native";
import { StyleSheet} from "react-native";
import { Link } from "expo-router";

const Home = () => {
    return (
        <SafeAreaView style={style.container}>
            <Text>Hello word</Text>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default Home