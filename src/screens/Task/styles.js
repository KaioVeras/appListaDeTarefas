import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f2f6fc",
  },
  containerTask: {
    flexDirection: "row",
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#404040",
    width: "85%",
    fontSize: 17,
    paddingLeft: 10,
    borderRadius: 10,
  },
  buttonAdd: {
    width: "15%",
    backgroundColor: "#011C40",
    borderRadius: 10,
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 20,
  },
});
