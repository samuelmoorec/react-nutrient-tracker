import React, { useState } from 'react';
import NutritionalStatsForm from './NutritionalStatsForm'

interface iProps {
  nutritionTypes: Array<string>;
  ingredients: Array<object>;
  SetIngredients: Function;

}

export interface nutritionalStat {
    type?: string;
    amount?: number;
    unit?: string;

}

export interface ingredient {
    title?: string;
    servingSize?: number;
    servingUnit?: string;
    nutritionalStats?: Array<nutritionalStat>
    
}

function IndgredientForm({nutritionTypes,ingredients,SetIngredients} : iProps) {
  
  const [ingredientToAdd, setIngredientToAdd] = useState<string>();
  const [ingredientData, setIngredientData] = useState<ingredient>({title: "", servingSize: 0, servingUnit: "Milliliter", nutritionalStats: [{type: "",amount: 0,unit: "Gram"}]});
  const [nutriType, setNutriType] = useState<string>("");



    const IngredientNameHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        setIngredientData({...ingredientData, title: e.target.value});
    }

    const ServingUnitHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setIngredientData({...ingredientData, servingUnit: e.target.value});
    }

    const ServingSizeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIngredientData({...ingredientData, servingSize: Number(e.target.value)});
    }

    const NutritionTypeSelectionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setNutriType(e.target.value);
    }


  
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault() 
        }} action="">

          <label htmlFor="IngredientName">Ingredient Name</label>
          <input type="text" name="IngredientName" id="" onChange={(e) => IngredientNameHandler(e)} />

          <br/>

          <label htmlFor="ServingSize">Serving Size</label>
          <input type="number" name="ServingSize" id="" onChange={(e) => ServingSizeHandler(e)}/>

          <select name="ServingUnit"  id="" onChange={(e) => ServingUnitHandler(e)}>
              <option value="Milliliter">mL</option>
              <option value="TableSpoon">tbsp</option>
          </select>

          <br/>

            <NutritionalStatsForm ingredientData={ingredientData} SetIngredientData={setIngredientData} nutritionTypes={nutritionTypes} />
      </form>
    </div>
  );
}

export default IndgredientForm;
