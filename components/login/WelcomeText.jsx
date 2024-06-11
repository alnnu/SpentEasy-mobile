import { View, Text } from "react-native";
import { welcomeTextStyle } from "./styles/WelcomeText.style";


export default function WelcomeText() {
    return (
        <View>
            <Text style={welcomeTextStyle.h1}>{'Welcome\nBack!'}</Text>
        </View>
    )
}