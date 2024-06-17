import { Text, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import  SignInForm  from "../../components/sign-in/signinForm"
import { Link } from "expo-router";

const SignIn = () => {
    return (
        <SafeAreaView className="flex-1 justify-center items-center ">
            <View>
                <Text className="font-bold text-center text-3xl">{"Welcom \nBack"}</Text>
            </View>

            <SignInForm/>

            <View className="mt-4">
                <Link href="/sign-up" className="text-base">New here? <Text className="font-bold">Sing up</Text></Link>
            </View>
        </SafeAreaView>
    )
}

export default SignIn