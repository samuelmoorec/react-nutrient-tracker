import React, { useState } from 'react';
import NutritionalStatsForm from './NutritionalStatsForm'

interface IIngredientFormProps {
  nutritionTypes: string[];
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

const servingUnits = [ 'tbsp', 'milliliters'];


const IndgredientForm = ({ nutritionTypes } : IIngredientFormProps) => {
  const [ingredientData, setIngredientData] = useState({title: "", servingSize: 0, servingUnit: "Milliliter", nutritionalStats: [{type: "",amount: 0,unit: "Gram"}]} as ingredient);
  const [ingredientName, setIngredientName] = useState('');
  const [servingSize, setServingSize] = useState(0);
  const [servingUnit, setServingUnit] = useState(servingUnits[0]);

  return (
    <div>
          <label htmlFor="IngredientName">Ingredient Name</label>
          <input type="text" name="IngredientName" id="" defaultValue={ingredientName} onChange={ e => setIngredientName(e.target.value) }/>

          <br/>

          <label htmlFor="ServingSize">Serving Size</label>
          <input type="number" name="ServingSize" id="" defaultValue={servingSize} onChange={ e => setServingSize(+e.target.value) }/>

          <select name="ServingUnit" id="" defaultValue={servingUnit} onChange={ e => setServingUnit(e.target.value) }>
              {
                servingUnits.map(unit => <option value={unit}>{unit}</option>)
              }
          </select>

          <br/>
          <br/>
          <br/>
          <br/>

            <NutritionalStatsForm ingredientData={ingredientData} setIngredientData={setIngredientData} nutritionTypes={nutritionTypes} />
    </div>
  );
}

export default IndgredientForm;
