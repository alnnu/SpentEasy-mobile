import {Button, Text, TextInput, TouchableOpacity, View} from "react-native";
import {LoginFormStyle} from "./loginForm.style";
import {useState} from "react";

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")
    const [display, setDisplay] = useState(false)
    return (
        <>
            <View>
                <TextInput style={LoginFormStyle.input}  placeholder="Enter Email"
                           onChangeText={text => {setEmail(text)}}
                           defaultValue={email}/>
                <TextInput style={LoginFormStyle.input} secureTextEntry={true} placeholder="Enter Passworld"
                           onChangeText={(text) => {setPassword(text)}}/>
                <Text style={LoginFormStyle.forget}>Forget password?</Text>
            </View>
            <View >
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        console.log(email)
                        console.log(password)
                    }}
                    style={LoginFormStyle.button}
                >
                    <Text >title</Text>
                </TouchableOpacity>
            </View>

        </>
    )
}

