import React, { useState } from 'react';
import NutritionTypeForm from './components/NutritionTypeForm'
import IngredientForm from './components/IngredientForm'

import './App.css';


function App() {

  const [ingredients, setIngredients ] = useState<Array<object>>([]);
  const [nutritionalStats, setNutritionalStats] = useState<object>();
  const [nutritionTypes, setNutritionTypes] = useState([]);

  
  return (
    <div className="App">
    <NutritionTypeForm nutritionTypes={nutritionTypes} setNutritionTypes={setNutritionTypes}/>
    <br/>
    <IngredientForm nutritionTypes={nutritionTypes} ingredients={ingredients} SetIngredients={setIngredients} /> 
    </div>
  );
}

export default App;
