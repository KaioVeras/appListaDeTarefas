import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

import Feather from "react-native-vector-icons/Feather";
import { styles } from "./styles";

export default function TaskList({ data }) {
  const [btnCheck, setBtnCheck] = useState(false);

  function handleCheck() {
    setBtnCheck(!btnCheck);
  }

  return (
    <View style={btnCheck == true ? styles.containerCheck : styles.container}>
      <View style={styles.containerCheckAndText}>
        <TouchableOpacity onPress={handleCheck}>
          <Feather
            name={btnCheck == true ? "check-circle" : "circle"}
            size={20}
            color="#fff"
          />
        </TouchableOpacity>

        <View>
          <TouchableNativeFeedback>
            <Text
              style={btnCheck == true ? styles.taskDeleteText : styles.taskText}
            >
              {data.nome}
            </Text>
          </TouchableNativeFeedback>
        </View>
      </View>

      <View style={{ alignSelf: "flex-end" }}>
        <TouchableOpacity>
          <Feather name="trash-2" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
