import { StyleSheet, SafeAreaView} from "react-native";

import { Stack, useRouter } from "expo-router";


import LoginForm from "../components/login/loginForm";
import WelcomeText from "../components/login/WelcomeText";
import SignupText from "../components/login/SignupText";


export default function Login ()  {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <WelcomeText/>
            <LoginForm/>
            <SignupText/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});