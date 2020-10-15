import React, { useState } from 'react';

interface iProps {
  nutritionTypes: string[],
  setNutritionTypes: Function
}

function NutritionalTypeForm({ nutritionTypes, setNutritionTypes} : iProps) {
  const [nutrient, setNutrient] = useState('');

  const handleNutrientSubmission = () => {
    if (nutritionTypes.includes(nutrient)) {
      console.log('duplicate check') // You can add some kind of validation here
    } else {
      setNutritionTypes([nutrient, ...nutritionTypes]);
    }
  }

  return (
    <div>
      <label htmlFor="nutriTypeForm">ADD Nutrition Type</label>
      <input name="nutriTypeForm" defaultValue={nutrient} onChange={e => setNutrient(e.target.value)} type="text"/>
      <button onClick={() => handleNutrientSubmission()}>Add New Nutrient</button>
    </div>
  );
}

export default NutritionalTypeForm;
