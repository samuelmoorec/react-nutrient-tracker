import React, { useState } from 'react';
import NutritionTypeForm from './components/NutritionTypeForm'
import IngredientForm from './components/IngredientForm'

import './App.css';


function App() {

  const [ingredients, setIngredients ] = useState<Array<object>>([]);
  const [nutritionalStats, SetNutritionalStats] = useState<object>();
  const [nutritionTypes, SetNutritionTypes] = useState<Array<string>>([]);

  
  return (
    <div className="App">
    <NutritionTypeForm nutritionTypes={nutritionTypes} SetNutritionTypes={SetNutritionTypes}/>
    <br/>
    <IngredientForm nutritionTypes={nutritionTypes} ingredients={ingredients} SetIngredients={setIngredients} /> 
    </div>
  );
}

export default App;
