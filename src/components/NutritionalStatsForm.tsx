import React, { useState } from 'react';
import { ingredient } from './IngredientForm'

interface iProps {
  ingredientData: ingredient;
  setIngredientData: Function;
  nutritionTypes: Array<string>;
}

const unitMeasurements = ['g', 'mg'];

const NutritionalStatsForm = ({ ingredientData, setIngredientData, nutritionTypes } : iProps) => {
    const [selectedNutrientType, setNutrientType] = useState(nutritionTypes[0] || '');
    const [nutrientAmount, setNutrientAmount] = useState(0);
    const [unitMeasurment, setUnitMeasurment] = useState(unitMeasurements[0]);
    const [nutritionalFacts, setNutritionalFacts] = useState();
    console.log(selectedNutrientType);
    const handleAddNutrient = () => {
        console.log(selectedNutrientType);
        const NewNutrient = {
            type: selectedNutrientType,
            amount: nutrientAmount,
            unit: unitMeasurment,
        }
        nutritionalFacts && nutritionalFacts.length ? setNutritionalFacts([NewNutrient, ...nutritionalFacts]) : setNutritionalFacts([NewNutrient]);
    }


    const NutrientForm = (
        <div>
            <select name="nutritionTypeSelections" defaultValue={selectedNutrientType} id="nutritionTypeSelections" onChange={ e => setNutrientType(e.target.value)}>
            {
                nutritionTypes.map(nutrType => <option value={nutrType}>{nutrType}</option> )
            }
            </select>

            <input name="IngredientForm" type="number" defaultValue={nutrientAmount} onChange={ e => setNutrientAmount(+e.target.value) }/>
            <select name="unitMeasurment" value={unitMeasurment} onChange={ e => setUnitMeasurment(e.target.value) }>
            {
                unitMeasurements.map(unit => <option value={unit}>{unit}</option>)
            }
            </select>
            <button onClick={() => handleAddNutrient()}>ADD</button>
        </div>
    );

    const NutrientTable = (
        <table>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Measurement</th>
            </tr>
            { nutritionalFacts &&
                nutritionalFacts.map((fact: { type: React.ReactNode; amount: React.ReactNode; unit: React.ReactNode; }) => {
                    return (
                        <tr>
                            <td>{fact.type}</td>
                            <td>{fact.amount}</td>
                            <td>{fact.unit}</td>
                        </tr>
                    )
                })
            }
        </table>
    );

  return (
    <>
     {NutrientForm}
     {ingredientData && NutrientTable}
    </>
  );
}

export default NutritionalStatsForm;

