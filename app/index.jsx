import { Link } from "expo-router";
import {SafeAreaView, Text} from "react-native";

const Home = () => {
    return (
        <SafeAreaView className="flex-1 items-center justify-center">
            <Text>Hello word</Text>
            <Link href="/sign-in">Singin</Link>
        </SafeAreaView>
    )
}


export default Home