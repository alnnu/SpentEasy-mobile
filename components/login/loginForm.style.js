import {StyleSheet} from "react-native";
import {COLORS} from "../../constants";

export const LoginFormStyle = StyleSheet.create({
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