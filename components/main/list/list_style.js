import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#26262b",
    },

    searchIcon: {
        position: "absolute",
        right: 20,
        top: 15,
        color: "#FFFFFF"
    },

    filterContainer: {
        top: 0,
        zIndex: 20,
        width: "100%",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#26262b",
    },

    searchBarContainer: {
        width: "100%",
        marginVertical: 5,
        backgroundColor: "#26262b",
    },

    searchBar: {
        fontSize: 15,
    },

    searchBarOuterStyle: {
        padding: 4,
        borderBottomColor: "#26262b",
        borderTopColor: "#26262b",
        borderLeftColor: "#26262b",
        borderRightColor: "#26262b",
    },

    animeListContainer: {
        textAlign: "center",
        width: "100%",
        height: "95%",
        marginTop: 50,
        marginBottom: 150,
    },

    titleText: {
        marginTop: 15,
        marginBottom: 5,
        color: "#FFFFFF",
        fontSize: 20,
    },

    dropdownWrapper: {
        zIndex: 10,
        width: "100%",
        position: "absolute",
        bottom: 60,
        paddingTop: 5,
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#26262b",
    },

    paramWrapper: {
        zIndex: 10,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
    },

    dropdown: {
        alignSelf: "center",
        textAlign: "center",
        width: "100%",
        backgroundColor: "#7a63b6",
        textDecoration: "none",
    },

    dropdownText: {
        textAlign: "center",
        fontSize: 18,
        color: "#E0F1E4",
    },

    subTitleText: {
        textAlign: "center",
        fontSize: 18,
        color: "#E0F1E4",
        marginBottom: 5
    },

    dropdownContainer: {
        width: "45%",
    },

    listContainer: {
        flex: 1,
        marginVertical: 5,
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#1a1c1e",
        width: "100%"
    },

    list: {
        width: "100%",
        marginTop: 60,
    },

    animeImage: {
        width: "50%",
        height: 250,
    },

    animeDesc: {
        flex: 0,
        width: "30%",
        height: "100%",
        marginVertical: 10,
        color: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
    },

    animeTitle: {
        width: "100%",
        fontSize: 18,
        fontWeight: "bold",
        paddingTop: 30,
    },

    animeText: {
        width: "100%",
    },
});

export default styles;