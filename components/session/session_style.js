import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    sessionContainer: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#26262b",
        marginBottom: 50,
    },

    title: {
        marginTop: 30,
        textAlign: "center",
        color: "#FFFFFF",
    },

    sessionForm: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },

    passwordFilter: {
        width: "100%",
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: "relative"
    },

    eye: {
        position: "absolute",
        right: 80
    },

    input: {
        height: 40,
        width: "70%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: "#FFFFFF",
        backgroundColor: "#7a63b6",
    },

    submit: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 60,
        borderRadius: 4,
        marginBottom: 15,
        backgroundColor: "#7a63b6",
        borderColor: "black",
        borderWidth: 2,
        marginTop: 13,
    },

    submitButtonText: {
        color: "#FFFFFF",
        fontSize: 15,
    },

    switchSessionButton: {
        color: "#FFFFFF"
    },
});

export default styles;