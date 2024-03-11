let recipes = [];

function seedSampleData() {
  recipes.length = 0;
  recipes.push({
    id: 1,
    name: "Cool Spaghetti Aglio e Olio",
    ingredients: "200g spaghetti,4 cloves of garlic,1/4 cup extra virgin olive oil,1/2 teaspoon red pepper flakes,Salt,Freshly ground black pepper,Grated Parmesan cheese,Chopped fresh parsley",
    description: "A classic Italian pasta dish featuring spaghetti tossed in garlic-infused olive oil with a hint of red pepper flakes.",
    complexity: "1",
    imageUrl: "https://theplantbasedschool.com/wp-content/uploads/2020/12/Spaghetti-4-1157x1536.jpg"
  });
  recipes.push({
    id: 2,
    name: "Chicken Parmesan",
    ingredients: "2 boneless, skinless chicken breasts,1 cup breadcrumbs,1/2 cup grated Parmesan cheese,1 egg,1 cup marinara sauce,1 cup shredded mozzarella cheese,Salt,Freshly ground black pepper,Chopped fresh basil",
    description: "A classic Italian-American dish featuring breaded chicken breasts topped with marinara sauce and melted mozzarella cheese.",
    complexity: "3",
    imageUrl: "https://tastesbetterfromscratch.com/wp-content/uploads/2023/03/Chicken-Parmesan-1.jpg"
  });
  recipes.push({
    id: 3,
    name: "Caprese Salad",
    ingredients: "2 large tomatoes,1 ball fresh mozzarella cheese,1/4 cup fresh basil leaves,2 tablespoons extra virgin olive oil,1 tablespoon balsamic vinegar,Salt,Freshly ground black pepper",
    description: "A refreshing Italian salad featuring ripe tomatoes, creamy mozzarella, and fresh basil, drizzled with olive oil and balsamic vinegar.",
    complexity: "1",
    imageUrl: "https://whatsgabycooking.com/wp-content/uploads/2023/06/Dinner-Party-__-Traditional-Caprese-1.jpg"
  });
}

function getRecipes() {
  return recipes;
}

function findRecipeById(id) {
  let resultRecipes = recipes.filter(recipe => recipe.id == id);
  if (resultRecipes.length == 1)
    return resultRecipes[0];
  else
    return { errMsg: `Cannot find recipe by id: ${id}` }
}

function findRecipesByKeyword(keyword) {
  if (isParamEmpty(keyword))
    return { errMsg: "Keyword cannot be empty!" };
  keyword = keyword.toLowerCase();
  let resultRecipes = recipes.filter(recipe =>
    JSON.stringify(recipe).toLowerCase().includes(keyword)
  );
  return resultRecipes;
}

function addRecipe(name, complexity, ingredients, description, imageUrl) {
  if (isParamEmpty(name))
    return { errMsg: "Name cannot be empty!" };
  if (isParamEmpty(description))
    return { errMsg: "Description cannot be empty!" };
  if (isParamEmpty(complexity))
    return { errMsg: "Complexity cannot be empty!" };
  if (!isValidImageUrl(imageUrl))
    return { errMsg: "Invalid Image URL!" };
  let newId = 1;
  if (recipes.length > 0)
    newId = 1 + recipes[recipes.length - 1].id;
  let newRecipe = {
    id: newId,
    name: name,
    ingredients: ingredients,
    description: description,
    complexity: complexity,
    imageUrl: imageUrl,
  };
  recipes.push(newRecipe);
  return { msg: "Recipe added.", recipe: newRecipe };
}

function deleteRecipeById(id) {
  let recipeIndex = recipes.findIndex(recipe => recipe.id == id);
  if (recipeIndex != -1) {
    recipes.splice(recipeIndex, 1);
    return { msg: `Recipe deleted: ${id}` };
  }
  else
    return { errMsg: `Cannot find recipe by id: ${id}` }
}

function isParamEmpty(p) {
  if (typeof (p) != 'string')
    return true;
  if (p.trim().length == 0)
    return true;
  return false;
}

function isValidImageUrl(imageUrl) {
  const urlPattern = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(\/\S*)?$/;
  return urlPattern.test(imageUrl);
}


module.exports = {
  seedSampleData,
  getRecipes,
  findRecipeById,
  findRecipesByKeyword,
  addRecipe,
  deleteRecipeById
};
