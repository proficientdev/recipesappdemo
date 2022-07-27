import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { getMealById } from "../services/recipes.services";
import { LinearGradient } from "expo-linear-gradient";
import Tag from "./Tag";

const MealDetailScreen = (props) => {
  const [meal, setMeal] = useState({});
  const [ingredients, setIngredients] = useState([]);

  const { idMeal } = props.route.params;

  const listIngredientMeasure = (pmeal) => {
    let ingredients = [];
    //let measures = [];
    for (let i = 1; i <= 20; i++) {
      const item = {
        ingredient: pmeal[`strIngredient${i}`],
        measure: pmeal[`strMeasure${i}`],
      };

      if (
        item.ingredient !== "" &&
        item.ingredient !== null &&
        item.ingredient !== undefined
      ) {
        ingredients.push(item);
      }
    }
    return ingredients;
  };

  useEffect(() => {
    getMealById(idMeal).then((data) => {
      setMeal({ ...data.meals[0] });
      setIngredients([...listIngredientMeasure(data.meals[0])]);
    });
    // .then((data) => setIngredientMeasure({...listIngredientMeasure()}));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={{ uri: meal.strMealThumb }}
          style={styles.background}
        >
          <LinearGradient
            style={{ height: 100, justifyContent: "flex-end" }}
            colors={["transparent", "rgba(0,0,0,0.8)"]}
          >
            <Text style={styles.title}>{meal.strMeal}</Text>
          </LinearGradient>
        </ImageBackground>
        <View>
          <Text>{meal.iMeal}</Text>
        </View>
        <View style={styles.ingredientList}>
          <Text style={{fontWeight:'600', fontSize:18, paddingBottom:10}}>Ingredients</Text>
          {ingredients.map((item, i) => (
            <View key={i} style={styles.ingredientItem}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={{
                    uri: `https://www.themealdb.com/images/ingredients/${item.ingredient}.png`,
                  }}
                  style={{ width: 45, height: 45 }}
                />
                <Text>{item.ingredient}</Text>
              </View>
              <Text>{item.measure}</Text>
            </View>
          ))}
        </View>
        <View style={styles.instructions}>
          <Text>{meal.strInstructions}</Text>
        </View>

        {/* {meal.strTags.map((tag) => (
          <Tag text={tag} />
        ))} */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  background: {
    width: "100%",
    height: 400,
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    margin: 10,

    justifyContent: "flex-end",
  },
  ingredientList: {
    marginHorizontal: 30,
    backgroundColor: "#e2e2e2",
    padding: 15,
    borderRadius: 5,
  },
  ingredientItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    padding: 7,
  },
  instructions: {
    padding: 10,
  },
});
export default MealDetailScreen;
