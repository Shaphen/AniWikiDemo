import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#26262b",
    },

    text: {
        color: "#FFFFFF",
    },

    profileLine: {
        top: 130,
        position: "absolute",
        backgroundColor: "#7a63b6",
        width: 2,
        height: 55,
    },

    profilePicture: {
        flex: 1,
        zIndex: 10,
        width: 120,
        // height: 100,
        marginTop: 25,
        borderRadius: 65,
        backgroundColor: "#FFFFFF",
        borderColor: "#7a63b6",
        borderWidth: 2,
    },

    profileContent: {
        flex: 4,
        width: "90%",
        backgroundColor: "#1a1c1e",
        marginVertical: 40,
        borderColor: "#7a63b6",
        borderWidth: 2,
        paddingHorizontal: 20,
        paddingBottom: 20,
        justifyContent: "center",
    },

    nameContainer: {
        flexDirection: "row",
        marginVertical: 10,
    },

    bioContainer: {

    },

    bioTitle: {
        fontWeight: 500,
        marginVertical: 7,
        color: "#FFFFFF",
        opacity: 0.8,
        fontSize: 15,
    },

    bioContent: {
        color: "#FFFFFF",
        opacity: 0.8,
    },

    profileText: {
        width: "50%",
        color: "#FFFFFF",
        opacity: 0.8,
    },
    profileItem: {
        fontWeight: 500,
        width: "50%",
        color: "#FFFFFF",
        opacity: 0.8,
    },

    logoutButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 60,
        borderRadius: 4,
        backgroundColor: "#7a63b6",
        borderColor: "black",
        borderWidth: 2,
        marginTop: -13,
        marginBottom: 70,
    },

    logoutButtonText: {
        color: "#FFFFFF",
        fontSize: 15,
    },
});

export default styles;