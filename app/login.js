import {View, Text, TextInput, Button, StyleSheet, SafeAreaView} from "react-native";

import { Stack, useRouter } from "expo-router";


import { COLORS } from "../constants";
import LoginForm from "../components/login/loginForm";


export default function Login ()  {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.h1}>Welcome Back!</Text>
            </View>
            <LoginForm/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    h1: {
        textAlign: "center",
        fontWeight: "bold"
    },
    input: {
        height: 45,
        width:255,
        marginTop: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 15,
        padding: 10
    },
    forget: {
        textAlign: "right"
    },
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: 150,
        width:255,
    }
});