import React, { useEffect, useState } from "react";
import { getCategories } from "../services/recipes.services";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import CategoryCard from "./CategoryCard";

function Home(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => setCategories([...data.categories]));
  }, []);

  return (
    <View style={{}}>
      <FlatList
        style={{ margin: 10 }}
        data={categories}
        numColumns={2}
        renderItem={({ item }, i) => (
         <CategoryCard item={item} i={i} {...props} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}



export default Home;
