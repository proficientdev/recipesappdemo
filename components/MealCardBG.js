import React from "react";

import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const MealCardBG = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ width: "100%", flexDirection: "row" }}
        onPress={() =>
          props.navigation.navigate("Detail", {
            idMeal: props.item.idMeal,
          })
        }
      >
        <ImageBackground
          imageStyle={{ borderRadius: 5 }}
          source={{ uri: props.item.strMealThumb }}
          style={styles.background}
        >
          <LinearGradient
            style={{
              height: 100,
              justifyContent: "flex-end",
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
            }}
            colors={["transparent", "rgba(0,0,0,0.8)"]}
          >
            <Text style={styles.title}>{props.item.strMeal}</Text>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    borderRadius: 10,
    //   backgroundColor:'red'
  },
  background: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    margin: 10,

    justifyContent: "flex-end",
  },
});
export default MealCardBG;
