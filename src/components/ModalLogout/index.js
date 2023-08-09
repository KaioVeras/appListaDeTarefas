import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export default function ModalLogout({ visible, visibleModalFalse }) {
  return (
    <View>
      <Modal visible={visible} transparent={true} animationType="fade">
        <View style={styles.container}>
          <View style={styles.containerModal}>
            <Text style={styles.title}>Tem certeza que deseja sair?</Text>

            <View style={styles.containerBotao}>
              <TouchableOpacity
                style={styles.botao}
                onPress={visibleModalFalse}
              >
                <Text style={styles.btnText}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.botao, { backgroundColor: "#121212" }]}
              >
                <Text style={styles.btnText}>Sair</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
