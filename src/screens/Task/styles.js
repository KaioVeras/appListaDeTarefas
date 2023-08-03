import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f2f6fc",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
  },
  iconLogout: {
    margin: 10,
    marginTop: -5,
  },
  containerTask: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
    marginTop: 15,
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
  totalTarefas: {
    color: '#011C40',
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: -10,
    marginLeft: 4,
    marginTop: 10,
  },
});
