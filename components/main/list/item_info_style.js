import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#26262b",
    },

    backgroundContainer: {
        width: "100%",
        height: 350,
        marginBottom: 10,
    },

    infoContainer: {
        flex: 10,
        zIndex: 10,
        width: "100%",
        paddingLeft: 10,
        paddingRight: 10,
    },

    trailer: {
       marginTop: 30,
    },

    animeImage: {
        width: "100%",
        height: "100%",
    },

    title: {
        color: "#7a63b6",
        width: "100%",
        textAlign: "center",
        fontSize: 25,
        paddingHorizontal: 20,
    },

    title2: {
        color: "#FFFFFF",
        width: "100%",
        textAlign: "center",
        fontSize: 15,
    },

    subTitle: {
        color: "#7a63b6",
        marginTop: 10,
        width: "100%",
        fontSize: 20,
    },

    description: {
        marginTop: 10,
        color: "#FFFFFF",
        width: "100%",
    },

    infoLink: {
        marginVertical: 10,
        color: "#FFFFFF",
        width: "100%",
        color: "#1e97f3",
    },

    genreContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    genreTitle: {
        marginTop: 10,
        color: "#7a63b6",
        width: "100%",
        textAlign: "center",
        fontSize: 20,
    },

    genre: {
        color: "#FFFFFF",
        marginTop: 10,
    },

    splitContainer: {
        width: "100%",
        flexDirection: "row",
    },

    split: {
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
    },

    splitTitle: {
        color: "#7a63b6",
        marginTop: 10,
        width: "100%",
        fontSize: 15,
        textAlign: "center",
        fontWeight: "bold",
    },

    splitValue: {
        marginTop: 10,
        color: "#FFFFFF",
        width: "100%",
        textAlign: "center",
        fontSize: 15,
    },

    noTrailer: {
        marginTop: 18,
        color: "#FFFFFF",
        width: "100%",
        textAlign: "center",
        fontSize: 15,
        opacity: 0.5,
    },

    backButtonContainer: {
        zIndex: 20,
        backgroundColor: "#7a63b6",
        top: 10,
        left: 15,
        width: 35,
        height: 35,
        borderRadius: 100,
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
    },

    saveButton: {
        zIndex: 20,
        top: 10,
        right: 15,
        width: 25,
        height: 25,
        borderRadius: 100,
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
    },

    savedColor: {
        color: "#EDC967"
    },

    backButton: {
        color: "white"
    },
});

export default styles;