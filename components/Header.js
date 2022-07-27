import React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { reportLogBoxError } from "react-native/Libraries/LogBox/Data/LogBoxData";

const Header = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
       blurRadius={2}
        source={{
          uri: "https://encolombia.com/wp-content/uploads/2019/08/7-Recetas-con-Arroz-para-la-Semana-696x398.jpg",
        }}
        style={{ flex:1, width: "100%", justifyContent: "center",
        alignItems: "center", }}
      >
        <Text style={styles.title}>Recipes</Text>
        <TextInput style={styles.input} placeholder="Search" />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "20%",
    //backgroundColor:"#9100E6",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    elevation: 3,
    marginBottom:10,
   
  },
  input: {
    width: "80%",
    height: 40,
    borderRadius: 20,
    padding: 5,
    backgroundColor: "rgba(255,255,255,0.5)",
    elevation: 3,
    textAlign:'center',
    fontSize:19,
  },
});

export default Header;
