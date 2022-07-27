import React from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native'

const  MealCard  = (props) => {
    return ( 
        <View style={styles.container}>
        <TouchableOpacity style={{width:'100%', flexDirection:"row"}}
          onPress={() =>
            props.navigation.navigate("Detail", {
              idMeal: props.item.idMeal,
            })
          }
        >
          <Image
            resizeMode="cover"
            style={styles.thumb}
            source={{ uri: props.item.strMealThumb +'/preview' }}
          />
          <View style={{padding:10}}>
            <Text>{props.item.strCategory}</Text>
            <Text style={styles.title}>{props.item.strMeal}</Text>
          </View>
        </TouchableOpacity>
      </View>
     );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:"row",
      backgroundColor: "#FFF",
      margin: 10,
      borderRadius: 5,
      //padding: 10,
      elevation: 2,
    },
    thumb: {
      width: 120,
      height: 120,
      // marginVertical: 5,
      // marginHorizontal: 5,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    },
    title: {
      fontSize: 16,
      fontWeight: "400",
      color: "gray",
    },
  });

export default MealCard;