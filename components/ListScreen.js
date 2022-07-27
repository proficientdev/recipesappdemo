import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native'
import { getRecipesByCategory } from '../services/recipes.services';

import MealCardBG from './MealCardBG';
const ListScreen = (props) => {
    const [recipes, setRecipes] = useState([]);
    const {category} = props.route.params;

    useEffect(
        ()=>{
            getRecipesByCategory(category).then(data => setRecipes([...data.meals]))
        }
    
    ,[])

    return ( 
        <View style={{ marginTop:45}}>
             <FlatList
        style={{ margin: 0 }}
        data={recipes}
        numColumns={1}
        renderItem={({ item }, i) => (
         <MealCardBG item={item} i={i} {...props} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
            {/* {recipes.map(r => <Text>{r.strMeal}</Text>)} */}
        </View>
     );
}
 
export default ListScreen;