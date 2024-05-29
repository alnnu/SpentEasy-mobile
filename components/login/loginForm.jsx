import {Button, Text, TextInput, View} from "react-native";
import {LoginFormStyle} from "./loginForm.style";

export default function LoginForm() {
    return (
        <>
            <View>
                <TextInput style={LoginFormStyle.input}  placeholder="Enter Email"/>
                <TextInput style={LoginFormStyle.input} secureTextEntry={true} req  placeholder="Enter Passworld"/>
                <Text style={LoginFormStyle.forget}>Forget password?</Text>
            </View>
            <View style={LoginFormStyle.button}>
                <Button
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        </>
    )
}

