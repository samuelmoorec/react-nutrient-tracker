import React, { useState } from 'react';

interface iProps {
  nutritionTypes: Array<string>,
  SetNutritionTypes: Function
}

function NutritionalTypeForm({nutritionTypes,SetNutritionTypes} : iProps) {
  
  const [nutritionTypeToAdd, SetnutritionTypeToAdd] = useState<string>();

  const addNutrition = () => {
    SetNutritionTypes([nutritionTypeToAdd, ...nutritionTypes]);
    SetnutritionTypeToAdd("");
  }
  
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault() 
        addNutrition() 
        }} action="">
          <label htmlFor="nutriTypeForm">ADD Nutrition Type</label>
          <input name="nutriTypeForm" value={nutritionTypeToAdd} onChange={event => SetnutritionTypeToAdd(event.target.value)} type="text"/>
          <input type="submit" value="ADD"/>
      </form>
    </div>
  );
}

export default NutritionalTypeForm;
