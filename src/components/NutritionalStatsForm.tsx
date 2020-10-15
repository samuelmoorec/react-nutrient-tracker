import React, { useState } from 'react';
import { ingredient, nutritionalFact } from './IngredientForm'

interface iProps {
  ingredientData: ingredient;
  setIngredientData: Function;
  nutritionTypes: Array<string>;
}

const unitMeasurements = ['g', 'mg'];

const NutritionalStatsForm = ({ ingredientData, setIngredientData, nutritionTypes } : iProps) => {
    const [selectedNutrientType, setNutrientType] = useState<string>(nutritionTypes[0] || '');
    const [nutrientAmount, setNutrientAmount] = useState<number>(0);
    const [unitMeasurment, setUnitMeasurment] = useState<string>(unitMeasurements[0]);
    const [nutritionalFacts, setNutritionalFacts] = useState<Array<nutritionalFact>>();
    console.log(selectedNutrientType);

    const handleAddNutrient = () => {
        
        console.log(selectedNutrientType);

        const NewNutrient = {
            type: selectedNutrientType,
            amount: nutrientAmount,
            unit: unitMeasurment,
        }
        nutritionalFacts && nutritionalFacts.length ? setNutritionalFacts([NewNutrient, ...nutritionalFacts]) : setNutritionalFacts([NewNutrient]);

        setNutrientType(nutritionTypes[0]);
        setNutrientAmount(0);
        setUnitMeasurment(unitMeasurements[0]);
        
    }


    const NutrientForm = (
        <div>
            <select name="nutritionTypeSelections" value={selectedNutrientType} id="nutritionTypeSelections" onChange={ e => setNutrientType(e.target.value)}>
            {
                nutritionTypes.map((nutrType,index) => <option key={index} value={nutrType}>{nutrType}</option> )
            }
            </select>

            <input name="IngredientForm" type="number" value={nutrientAmount} onChange={ e => setNutrientAmount(+e.target.value) }/>
            <select name="unitMeasurment" value={unitMeasurment} onChange={ e => setUnitMeasurment(e.target.value) }>
            {
                unitMeasurements.map((unit,index) => <option key={index} value={unit}>{unit}</option>)
            }
            </select>
            <button onClick={() => handleAddNutrient()}>ADD</button>
        </div>
    );

    const NutrientTable = (
        <table>
            <tbody>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Measurement</th>
            </tr>
            { nutritionalFacts &&
                nutritionalFacts.map((fact: nutritionalFact) => {
                    return (
                        <tr>
                            <td>{fact.type}</td>
                            <td>{fact.amount}</td>
                            <td>{fact.unit}</td>
                        </tr>
                    )
                })
            }
            </tbody>
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

