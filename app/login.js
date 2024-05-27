import {View, Text, TextInput, Button, StyleSheet} from "react-native";

export default function Login ()  {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.h1}>Welcome Back!</Text>
            </View>
            <View>
                <TextInput style={styles.input}  placeholder="Enter Email"/>
                <TextInput style={styles.input}  placeholder="Enter Passworld"/>
                <Text style={styles.forget}>Forget password?</Text>
            </View>
            <View style={styles.button}>
                <Button
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        </View>
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
        padding: 10,
    },
    forget: {
        textAlign: "right"
    },
    button: {
        borderRadius: 150,
        width:255,
    }
});