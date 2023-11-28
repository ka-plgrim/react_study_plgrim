/**
 * 리스트 렌더링
 * */

const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];

function Ingredients({ingredients}) {
    return (
        <ul>
            {ingredients.map(ingredient =>
                <li key={ingredient}>{ingredient}</li>
            )}
        </ul>
    );
}

function Recipes({recipes}) {
    return (
        <>
            {recipes.map(recipe =>
                <div key={recipe.id}>
                    <h2>{recipe.name}</h2>
                    <Ingredients ingredients={recipe.ingredients}/>
                </div>
            )}
        </>
    );
}

export default function RecipeList() {
    return (
        <div>
            <h1>Recipes</h1>
            <Recipes recipes={recipes}/>
        </div>
    );
}
