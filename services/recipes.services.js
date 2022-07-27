import {APIKEY, APIURL} from '../constants/config.js';



export async function getCategories(){
    
    const response = await fetch(`${APIURL}api/json/v1/${APIKEY}/categories.php`)
    const result = await response.json()
    return result;
}

export async function getRecipesByCategory(category){
    const response = await fetch(`${APIURL}api/json/v1/1/filter.php?c=${category}`)
    const result = await response.json()
    return result;
}


export async function getMealById(idMeal){
    const response = await fetch(`${APIURL}api/json/v1/1/lookup.php?i=${idMeal}`)
    const result = await response.json()
    return result;
}