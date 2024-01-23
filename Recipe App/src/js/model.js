import { API_URL } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: []
  }
};

export const loadRecipe = async function(id){
  try {
    const data = await getJSON(`${API_URL}${id}`);

    let { recipe }  = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients
    }
    console.log(state.recipe);
  } catch (error) {
    console.log(`${error} ❌`);
    throw error;
  }
}

export const loadSearchResults = async function(query){
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);
    console.log(data);

    const { recipes } = data.data;
    state.search.results = recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url
      }
    });
  } catch (error) {
    console.log(`${error} ❌`);
    throw error;
  }
}