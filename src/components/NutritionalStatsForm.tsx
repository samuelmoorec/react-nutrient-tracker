import React, { useEffect, useState } from 'react';
import {nutritionalStat, ingredient} from './IngredientForm'

interface iProps {
    ingredientData: ingredient;
    SetIngredientData: Function;
    nutritionTypes: Array<string>;

}




function NutritionalStatsForm({ingredientData,SetIngredientData,nutritionTypes} : iProps) {
  
  const [ingredientToAdd, setIngredientToAdd] = useState<string>();




    const NutritionTypeSelectionHandler = (e: React.ChangeEvent<HTMLSelectElement>,key: number) => {
        let temp = ingredientData;

        if(temp.nutritionalStats){

        temp.nutritionalStats[key] = {...temp.nutritionalStats[key], type: e.target.value}

        console.log(temp)

        SetIngredientData(temp);
    }}

    const NutritionAmountHandler = (e: React.ChangeEvent<HTMLInputElement>,key: number) => {
        

        let temp = ingredientData;

        if(temp.nutritionalStats){

        temp.nutritionalStats[key] = {...temp.nutritionalStats[key], amount: Number(e.target.value)}

        console.log(temp)

        SetIngredientData(temp);

    }}

    const NutritionUnitSelectionHandler = (e: React.ChangeEvent<HTMLSelectElement>,key: number) => {
        let temp = ingredientData;

        if(temp.nutritionalStats){

        temp.nutritionalStats[key] = {...temp.nutritionalStats[key], unit: e.target.value}

        console.log(temp)

        SetIngredientData(temp);
    }}

    const addNutritionItem = () => {
        let temp = ingredientData;

        if(temp.nutritionalStats){

        temp.nutritionalStats = [...temp.nutritionalStats, {type: "",amount: 0,unit: "Gram"}]

        SetIngredientData(temp);
    }}

    useEffect(() => {
        
    })

    const NutritionItem = ingredientData.nutritionalStats?.map((item, index) => <>
    
    <div key={index}>

        <select name="nutritionTypeSelections" value={item.type} id="nutritionTypeSelections" onChange={event => NutritionTypeSelectionHandler(event,index)}>

            {nutritionTypes.map(nutrType => <option value={nutrType}>{nutrType}</option> )}

        </select>

        <input name="IngredientForm"  type="number" value={item.amount} onChange={event => NutritionAmountHandler(event,index)}/>

        <select name="unitMeasurment" value={item.unit} onChange={event => NutritionUnitSelectionHandler(event,index)} id="">

            <option value="Gram">g</option>
            <option value="MilliGram">mg</option>

        </select>

        <br/>
    </div>

    </>)

    
  
  return (
    <>
          {NutritionItem}

          <button onClick={addNutritionItem}>ADD</button>
    </>
  );
}

export default NutritionalStatsForm;

