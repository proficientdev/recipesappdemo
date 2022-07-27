import React from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native'
const CategoryCard = (props) => {
    return ( 
        <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("List", {
              category: props.item.strCategory,
            })
          }
        >
          <Text style={styles.title}>{props.item.strCategory}</Text>
          <Image
            resizeMode="cover"
            style={styles.thumb}
            source={{ uri: props.item.strCategoryThumb }}
          />
        </TouchableOpacity>
      </View>
     );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF",
      margin: 10,
      borderRadius: 10,
      padding: 10,
      elevation: 2,
    },
    thumb: {
      width: "100%",
      height: 100,
      marginVertical: 5,
      marginHorizontal: 5,
      borderRadius: 10,
    },
    title: {
      fontSize: 16,
      fontWeight: "400",
      color: "gray",
    },
  });

export default CategoryCard;