import { View, Text } from "react-native";

import { signupTextStyle } from "./styles/SignupText.style";

export default function SignupText() {
    return (
        <View>
            <Text style={signupTextStyle.text}>New here? <Text style={signupTextStyle.textBold}>Sing up</Text></Text>
        </View>
    )
}