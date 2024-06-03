import { useState, ChangeEvent } from "react";
import {
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import style from "./AbilityScoreDropdown.module.css";
import AbilityAttribute from "../types/AbilityAttributes";
import AbilityScoreOption from "../types/AbilityScoreOption";
import Character from "../types/Character";

interface Props {
  abilityScoreAttribute: AbilityAttribute;
  abilityScoreAllocations: AbilityScoreOption[];
  setAbilityScoreAllocations: React.Dispatch<
    React.SetStateAction<AbilityScoreOption[]>
  >;
  register: UseFormRegister<Character>;
  getValues: UseFormGetValues<Character>;
  setValue: UseFormSetValue<Character>;
  errors: FieldErrors<Character>;
}

export const AbilityScoreDropdown = ({
  abilityScoreAttribute,
  abilityScoreAllocations,
  setAbilityScoreAllocations,
  register,
  getValues,
  setValue,
  errors,
}: Props) => {
  const [attributeAbilityScore, setAttributeAbilityScore] = useState(0); //Keeps track of previous value to set it avalible to select.

  return (
    <div
      id={`${abilityScoreAttribute}-ability-score`}
      className={style["ability-score"]}
    >
      <label htmlFor={`${abilityScoreAttribute}`}>
        <h3 className="capitalize">{`${abilityScoreAttribute}`}</h3>
      </label>

      <select
        id={`${abilityScoreAttribute}`}
        onFocus={() => {
          //Sync state in case value got changed externally
          setAttributeAbilityScore(getValues()[`${abilityScoreAttribute}`]);
        }}
        {...register(`${abilityScoreAttribute}`, {
          required: `${abilityScoreAttribute} is required!`,
          min: {
            value: 8,
            message: `You need to choose a value for ${abilityScoreAttribute}!`,
          },
          onChange: (event: ChangeEvent<HTMLSelectElement>) => {
            setAbilityScoreAllocations(() => {
              //Copy array
              const newArray = [...abilityScoreAllocations];

              //Disable option for selected value
              const selectedOption = newArray.find(
                (abilityScore) =>
                  abilityScore.value == parseInt(event.target.value)
              );
              if (selectedOption) selectedOption.avalible = false;

              //Enable option for previous selected value
              const previousSelected = newArray.find(
                (abilityScore) => abilityScore.value == attributeAbilityScore
              );

              if (previousSelected) previousSelected.avalible = true;

              //Return modified array to setState
              return newArray;
            });

            //Update dropdown value to new value
            setAttributeAbilityScore(parseInt(event.target.value) | 0);
          },
        })}
      >
        {[
          <option key={`default${abilityScoreAttribute}`} value={0}>
            Choose
          </option>,
          ...abilityScoreAllocations.map((abiliyScore) => {
            return (
              <option
                key={abiliyScore.value}
                value={abiliyScore.value}
                disabled={!abiliyScore.avalible}
              >
                {abiliyScore.value}
              </option>
            );
          }),
        ]}
      </select>
      {errors[`${abilityScoreAttribute}`] && (
        <p className="capitalize">
          {errors[`${abilityScoreAttribute}`]?.message}
        </p>
      )}

      <button
        type="button"
        onClick={() => {
          //Get previous value to set it availible in dropdowns
          const previousAbilityScore = getValues()[`${abilityScoreAttribute}`];

          setAbilityScoreAllocations(() => {
            //Copy array
            const newArray = [...abilityScoreAllocations];

            //Enable option for selected value
            const selected = newArray.find(
              (abilityScore) => abilityScore.value == previousAbilityScore
            );
            if (selected) selected.avalible = true;

            //Return modified array to setState
            return newArray;
          });

          setValue(`${abilityScoreAttribute}`, 0);
          setAttributeAbilityScore(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};
