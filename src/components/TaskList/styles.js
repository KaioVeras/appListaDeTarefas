import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#011C40",
    marginTop: 10,
    padding: 14,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerCheck: {
    flex: 1,
    backgroundColor: "rgba(0, 28, 64, 0.800)",
    marginTop: 10,
    padding: 14,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  taskText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 10,
  },
  taskDeleteText: {
    color: "#fff",
    fontSize: 17,
    marginLeft: 10,
    fontWeight: "bold",
    textDecorationLine: "line-through",
    textDecorationColor: "#fff",
  },
  containerCheckAndText: {
    flexDirection: "row",
    alignItems: "center",
  },
});
